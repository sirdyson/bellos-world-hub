/* ==========================================================================
   BELLOS - THE WORLD MAP
   A 3D, orbitable atlas built on Three.js (r137, vendored).
   --------------------------------------------------------------------------
   Exposes window.BellosMap with init(opts) / show() / hide() / resize().
   The SPA router (js/main.js) lazily calls init() the first time the map
   route is entered, then show()/hide() as the view enters/leaves.

   Data comes from window.BELLOS_LORE.worldMap:
     base     { texture, height, aspect }
     overlays [ { id, label, texture, blurb, legend:[{color,label}] } ]
     markers  [ { id, name, u, v, type, nation } ]   (u,v normalised 0..1)
   ========================================================================== */
(function () {
  'use strict';

  if (typeof THREE === 'undefined') {
    console.warn('[BellosMap] Three.js not loaded.');
    window.BellosMap = { init() {}, show() {}, hide() {}, resize() {} };
    return;
  }

  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Plane dimensions in world units (width fixed, height by aspect). */
  const MAP_W = 10;
  let MAP_H = 7.5;
  const RELIEF = 0.42;                // displacement height of the tallest peak
  const OVERLAY_LIFT = 0.02;          // keeps overlays clear of the terrain skin
  const SEG_X = 260, SEG_Y = 195;     // terrain tessellation

  const TYPE_STYLE = {
    capital:  { r: 0.125, stem: 0.62, ring: true, crown: true },
    city:     { r: 0.09, stem: 0.45, ring: true },
    town:     { r: 0.06, stem: 0.3, ring: false },
    village:  { r: 0.045, stem: 0.22, ring: false },
    ruin:     { r: 0.055, stem: 0.26, ring: false },
    landmark: { r: 0.07, stem: 0.48, ring: false }
  };
  /* which pin types render; towns & villages start hidden to keep the map calm */
  const TYPE_LABEL = { capital: 'Capitals', city: 'Cities', town: 'Towns',
                       village: 'Villages', ruin: 'Ruins', landmark: 'Landmarks' };
  const TYPE_DEFAULT_ON = { capital: true, city: true, town: false,
                            village: false, ruin: true, landmark: true };
  const NATION_COLOR = {
    lefrantha: '#e0719f', greymark_horde: '#5aa87f', greymark_dominion: '#5a86d6',
    snowfals: '#9b6fc4', midwel: '#d1443a', nog: '#e0a13c', grug: '#e8d24a', kul: '#c79be0'
  };

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const S = {
    ready: false, running: false, raf: 0,
    renderer: null, scene: null, camera: null, controls: null,
    terrain: null, ovA: null, ovB: null, activeOv: null, geom: null,
    loader: null, texCache: new Map(),
    markers: [], pickables: [], nodeGroup: null,
    heightData: null,                // {data, w, h} sampled from height.png
    hovered: null, selected: null,
    labelsOn: true, reliefOn: true, typeOn: {},
    displacement: RELIEF,
    dom: {}, data: null, onSelectNation: null,
    intro: null, xfade: null, reliefTween: null,
    pointer: new THREE.Vector2(-2, -2), ray: new THREE.Raycaster(),
    homeCam: new THREE.Vector3(0, 8.4, 8.6)
  };

  /* ---------------------------------------------------------------- helpers */
  function loadTexture(url) {
    if (S.texCache.has(url)) return S.texCache.get(url);
    const tex = S.loader.load(url);
    tex.encoding = THREE.sRGBEncoding;
    tex.anisotropy = S.renderer.capabilities.getMaxAnisotropy();
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    S.texCache.set(url, tex);
    return tex;
  }

  /* Sample the greyscale height map so pins sit on the terrain surface. */
  function sampleHeightMap(url, done) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      const w = img.naturalWidth, h = img.naturalHeight;
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      try {
        S.heightData = { data: ctx.getImageData(0, 0, w, h).data, w, h };
      } catch (e) { S.heightData = null; }   // tainted canvas (file://) -> flat
      done && done();
    };
    img.onerror = function () { done && done(); };
    img.src = url;
  }

  function elevAt(u, v) {
    if (!S.heightData) return 0;
    const { data, w, h } = S.heightData;
    const x = Math.min(w - 1, Math.max(0, Math.round(u * (w - 1))));
    const y = Math.min(h - 1, Math.max(0, Math.round(v * (h - 1))));
    return data[(y * w + x) * 4] / 255;   // red channel 0..1
  }

  /* ------------------------------------------------------------ scene build */
  function makeTerrain() {
    const mat = new THREE.MeshStandardMaterial({
      map: loadTexture(S.data.base.texture),
      displacementMap: loadTexture(S.data.base.height),
      displacementScale: S.displacement,
      roughness: 0.96, metalness: 0.0
    });
    const mesh = new THREE.Mesh(S.geom, mat);
    mesh.rotation.x = -Math.PI / 2;      // lay flat on XZ, +Y up
    return mesh;
  }

  /* Transparent tinted layer that hugs the terrain (same displacement,
     lifted a hair so it never z-fights with the base skin). */
  function makeOverlay(order) {
    const mat = new THREE.MeshStandardMaterial({
      transparent: true, opacity: 0,
      displacementMap: loadTexture(S.data.base.height),
      displacementScale: S.displacement,
      displacementBias: OVERLAY_LIFT,
      roughness: 1.0, metalness: 0.0, depthWrite: false
    });
    const mesh = new THREE.Mesh(S.geom, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.renderOrder = order;
    mesh.visible = false;
    return mesh;
  }

  function buildScene() {
    const canvas = S.dom.canvas;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    S.renderer = renderer;
    S.loader = new THREE.TextureLoader();

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05070a, 18, 34);
    S.scene = scene;

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.copy(S.homeCam);
    S.camera = camera;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.55;
    controls.zoomSpeed = 0.8;
    controls.panSpeed = 0.6;
    controls.minDistance = 3.2;
    controls.maxDistance = 20;
    controls.maxPolarAngle = 1.45;       // stay above the horizon
    controls.target.set(0, 0, 0);
    controls.addEventListener('change', () => { if (!S.running) renderOnce(); });
    S.controls = controls;

    /* lighting - warm key from the NW, cool sky/ground fill */
    scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x2a2418, 0.95));
    const key = new THREE.DirectionalLight(0xfff0d4, 0.65);
    key.position.set(-6, 10, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fb4ff, 0.25);
    rim.position.set(6, 4, -6);
    scene.add(rim);

    /* soft glow disc under the world to seat it in space */
    const glow = new THREE.Mesh(
      new THREE.CircleGeometry(MAP_W * 0.92, 64),
      new THREE.MeshBasicMaterial({ color: 0x0a1420, transparent: true, opacity: 0.55 })
    );
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = -0.02;
    scene.add(glow);

    /* the political base terrain + two overlay skins for crossfading */
    MAP_H = MAP_W / (S.data.base.aspect || 1.3333);
    S.geom = new THREE.PlaneGeometry(MAP_W, MAP_H, SEG_X, SEG_Y);

    S.terrain = makeTerrain();
    S.ovA = makeOverlay(1);
    S.ovB = makeOverlay(2);
    scene.add(S.terrain, S.ovA, S.ovB);
    S.activeOv = null;

    S.nodeGroup = new THREE.Group();
    scene.add(S.nodeGroup);
    buildMarkers();
  }

  function worldPos(u, v, extraY) {
    const y = S.displacement * elevAt(u, v) + (extraY || 0);
    return new THREE.Vector3((u - 0.5) * MAP_W, y, (v - 0.5) * MAP_H);
  }

  function buildMarkers() {
    const stage = S.dom.stage;
    (S.data.markers || []).forEach((m) => {
      const style = TYPE_STYLE[m.type] || TYPE_STYLE.town;
      const color = new THREE.Color(NATION_COLOR[m.nation] || '#e8cd8a');
      const surf = worldPos(m.u, m.v, 0);
      const group = new THREE.Group();
      group.position.set(surf.x, surf.y, surf.z);

      const stemH = style.stem;
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, stemH, 6),
        new THREE.MeshBasicMaterial({ color: 0x120d08, transparent: true, opacity: 0.85 })
      );
      stem.position.y = stemH / 2;
      group.add(stem);

      const head = new THREE.Mesh(
        new THREE.SphereGeometry(style.r, 18, 14),
        new THREE.MeshBasicMaterial({ color })
      );
      head.position.y = stemH;
      group.add(head);

      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(style.r * 1.7, 16, 12),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.16, depthWrite: false })
      );
      halo.position.y = stemH;
      group.add(halo);

      if (style.ring) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(style.r * 1.9, style.r * 2.25, 28),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.005;
        group.add(ring);
      }

      /* capitals wear a golden coronet around the head */
      if (style.crown) {
        const crown = new THREE.Mesh(
          new THREE.TorusGeometry(style.r * 1.45, style.r * 0.16, 8, 24),
          new THREE.MeshBasicMaterial({ color: 0xe8cd8a, transparent: true, opacity: 0.95, depthWrite: false })
        );
        crown.rotation.x = Math.PI / 2;
        crown.position.y = stemH + style.r * 0.9;
        group.add(crown);
      }

      /* larger invisible pick target */
      const pick = new THREE.Mesh(
        new THREE.SphereGeometry(style.r * 2.6, 8, 6),
        new THREE.MeshBasicMaterial({ visible: false })
      );
      pick.position.y = stemH;
      pick.userData.marker = m;
      group.add(pick);

      /* crisp HTML label */
      const label = document.createElement('button');
      label.type = 'button';
      label.className = 'map-label map-label--' + (m.type || 'town');
      label.textContent = m.name;
      label.style.setProperty('--pin', NATION_COLOR[m.nation] || '#e8cd8a');
      label.addEventListener('click', (e) => { e.stopPropagation(); selectMarker(rec); });
      stage.appendChild(label);

      S.nodeGroup.add(group);
      const rec = { data: m, group, head, halo, stem, label, color, pick,
                    anchor: new THREE.Vector3(surf.x, surf.y + stemH, surf.z),
                    baseR: style.r, stemH };
      S.markers.push(rec);
    });
    applyTypeVisibility();
  }

  /* show/hide whole pin classes; the raycaster only sees visible ones */
  function applyTypeVisibility() {
    S.pickables.length = 0;
    S.markers.forEach((rec) => {
      const on = S.typeOn[rec.data.type] !== false;
      rec.group.visible = on;
      if (!on) {
        rec.label.hidden = true;
        if (S.selected === rec) clearSelection();
        if (S.hovered === rec) { setHover(rec, false); S.hovered = null; }
      }
      if (on) S.pickables.push(rec.pick);
    });
    renderOnce();
  }

  function refreshMarkerHeights() {
    S.markers.forEach((rec) => {
      const m = rec.data;
      const surf = worldPos(m.u, m.v, 0);
      rec.group.position.set(surf.x, surf.y, surf.z);
      rec.anchor.set(surf.x, surf.y + rec.stemH, surf.z);
    });
  }

  /* ---------------------------------------------------------------- overlays */
  function setOverlay(overlay, immediate) {
    S.dom.stage.dataset.overlay = overlay.id;
    renderLegend(overlay);
    highlightFilter(overlay.id);

    const fadeOut = S.activeOv;
    let fadeIn = null;
    if (overlay.texture) {
      fadeIn = S.activeOv === S.ovA ? S.ovB : S.ovA;
      fadeIn.material.map = loadTexture(overlay.texture);
      fadeIn.material.needsUpdate = true;
      fadeIn.visible = true;
    }
    S.activeOv = fadeIn;

    if (immediate || REDUCED_MOTION) {
      if (fadeOut && fadeOut !== fadeIn) { fadeOut.material.opacity = 0; fadeOut.visible = false; }
      if (fadeIn) fadeIn.material.opacity = 1;
      S.terrain.material.color.setScalar(fadeIn ? 0.62 : 1);
      S.xfade = null;
      renderOnce();
      return;
    }
    S.xfade = {
      out: fadeOut === fadeIn ? null : fadeOut,
      in: fadeIn,
      dimFrom: S.terrain.material.color.r,
      dimTo: fadeIn ? 0.62 : 1,          // recede the base art under a tint
      t: 0, dur: 620
    };
    ensureRunning();
  }

  /* ---------------------------------------------------------------- picking */
  function updatePick() {
    S.ray.setFromCamera(S.pointer, S.camera);
    const hits = S.ray.intersectObjects(S.pickables, false);
    const marker = hits.length ? recFor(hits[0].object.userData.marker) : null;
    if (marker !== S.hovered) {
      if (S.hovered) setHover(S.hovered, false);
      S.hovered = marker;
      if (marker) setHover(marker, true);
      S.dom.canvas.style.cursor = marker ? 'pointer' : 'grab';
    }
  }

  function recFor(m) { return S.markers.find((r) => r.data === m) || null; }

  function setHover(rec, on) {
    const k = on ? 1.55 : 1;
    rec.head.scale.setScalar(k);
    rec.halo.material.opacity = on ? 0.34 : 0.16;
    rec.label.classList.toggle('is-hover', on);
  }

  function selectMarker(rec) {
    S.selected = rec;
    S.markers.forEach((r) => r.label.classList.toggle('is-selected', r === rec));
    const m = rec.data;
    const nation = S.data.__nations && S.data.__nations[m.nation];
    const d = S.dom.detail;
    d.hidden = false;
    d.innerHTML =
      '<button class="map-detail-close" type="button" aria-label="Close">&times;</button>' +
      '<p class="map-detail-type">' + (m.type || 'settlement') + '</p>' +
      '<h3 class="map-detail-name">' + escapeHtml(m.name) + '</h3>' +
      (m.desc ? '<p class="map-detail-desc">' + escapeHtml(m.desc) + '</p>' : '') +
      (nation
        ? '<a class="map-detail-nation" href="#/nations/' + m.nation + '">' +
          '<span class="map-detail-swatch" style="background:' +
          (NATION_COLOR[m.nation] || '#e8cd8a') + '"></span>' + escapeHtml(nation.name) + ' &rarr;</a>'
        : '');
    d.classList.remove('is-in'); void d.offsetWidth; d.classList.add('is-in');
    d.querySelector('.map-detail-close').addEventListener('click', clearSelection);
    flyTo(rec.anchor);
  }

  function clearSelection() {
    S.selected = null;
    S.markers.forEach((r) => r.label.classList.remove('is-selected'));
    S.dom.detail.hidden = true;
  }

  function flyTo(target) {
    if (REDUCED_MOTION) { S.controls.target.copy(target); return; }
    S.intro = null;
    const startT = S.controls.target.clone();
    const startC = S.camera.position.clone();
    const dir = startC.clone().sub(startT).normalize();
    const dist = Math.max(4.2, Math.min(7, startC.distanceTo(startT)));
    const endC = target.clone().add(dir.multiplyScalar(dist));
    S.intro = { t: 0, dur: 900, fromT: startT, toT: target.clone(), fromC: startC, toC: endC };
    ensureRunning();
  }

  /* ----------------------------------------------------------------- labels */
  const _v = new THREE.Vector3();
  function updateLabels() {
    if (!S.labelsOn) return;
    const rect = S.dom.canvas.getBoundingClientRect();
    const camDist = S.camera.position.distanceTo(S.controls.target);
    for (let i = 0; i < S.markers.length; i++) {
      const rec = S.markers[i];
      if (!rec.group.visible) { if (!rec.label.hidden) rec.label.hidden = true; continue; }
      _v.copy(rec.anchor).project(S.camera);
      const behind = _v.z > 1;
      const x = (_v.x * 0.5 + 0.5) * rect.width;
      const y = (-_v.y * 0.5 + 0.5) * rect.height;
      const vis = !behind && x > -60 && x < rect.width + 60 && y > -20 && y < rect.height + 20;
      const el = rec.label;
      /* thin out minor labels when zoomed far out */
      const minor = rec.data.type === 'town' || rec.data.type === 'village' || rec.data.type === 'ruin';
      const show = vis && (!minor || camDist < 12);
      if (show) {
        el.style.transform = 'translate(-50%,-140%) translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
        el.style.opacity = behind ? '0' : '1';
        el.classList.toggle('is-far', camDist > 9.5);
        if (el.hidden) el.hidden = false;
      } else if (!el.hidden) {
        el.hidden = true;
      }
    }
  }
  function hideAllLabels() { S.markers.forEach((r) => { r.label.hidden = true; }); }

  /* -------------------------------------------------------------- animation */
  function tickIntro(dt) {
    if (!S.intro) return;
    S.intro.t = Math.min(1, S.intro.t + dt / S.intro.dur);
    const e = easeInOut(S.intro.t);
    if (S.intro.fromC) {
      S.camera.position.lerpVectors(S.intro.fromC, S.intro.toC, e);
      S.controls.target.lerpVectors(S.intro.fromT, S.intro.toT, e);
    }
    if (S.intro.t >= 1) S.intro = null;
  }

  function tickXfade(dt) {
    if (!S.xfade) return;
    const x = S.xfade;
    x.t = Math.min(1, x.t + dt / x.dur);
    const e = easeInOut(x.t);
    if (x.in) x.in.material.opacity = e;
    if (x.out) x.out.material.opacity = 1 - e;
    S.terrain.material.color.setScalar(x.dimFrom + (x.dimTo - x.dimFrom) * e);
    if (x.t >= 1) {
      if (x.out) x.out.visible = false;
      S.xfade = null;
    }
  }

  function tickRelief(dt) {
    if (!S.reliefTween) return;
    S.reliefTween.t = Math.min(1, S.reliefTween.t + dt / S.reliefTween.dur);
    const e = easeOutCubic(S.reliefTween.t);
    S.displacement = S.reliefTween.from + (S.reliefTween.to - S.reliefTween.from) * e;
    S.terrain.material.displacementScale = S.displacement;
    S.ovA.material.displacementScale = S.displacement;
    S.ovB.material.displacementScale = S.displacement;
    refreshMarkerHeights();
    if (S.reliefTween.t >= 1) { S.reliefOn = S.reliefTween.to > 0.001; S.reliefTween = null; }
  }

  let _last = 0;
  function loop(now) {
    if (!S.running) return;
    const dt = Math.min(48, now - _last || 16); _last = now;
    tickIntro(dt); tickXfade(dt); tickRelief(dt);
    S.controls.update();
    updatePick();
    S.renderer.render(S.scene, S.camera);
    updateLabels();
    const busy = S.intro || S.xfade || S.reliefTween;
    /* keep animating for damping/labels; OrbitControls damping needs frames */
    S.raf = requestAnimationFrame(loop);
    void busy;
  }
  function ensureRunning() { if (S.running && !S.raf) { _last = performance.now(); S.raf = requestAnimationFrame(loop); } }
  function renderOnce() { if (S.ready) { S.renderer.render(S.scene, S.camera); updateLabels(); } }

  /* --------------------------------------------------------------------- UI */
  function buildUI() {
    const filters = S.dom.filters;
    filters.innerHTML = S.data.overlays.map((o, i) =>
      '<button class="map-filter" role="tab" data-overlay="' + o.id + '"' +
      (i === 0 ? ' aria-selected="true"' : '') + '>' + escapeHtml(o.label) + '</button>'
    ).join('');
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.map-filter'); if (!btn) return;
      const ov = S.data.overlays.find((o) => o.id === btn.dataset.overlay);
      if (ov && ov !== S.currentOverlay) { S.currentOverlay = ov; setOverlay(ov, false); }
    });

    /* one checkbox per pin type present on the map */
    const typesPresent = [];
    (S.data.markers || []).forEach((m) => {
      if (m.type && typesPresent.indexOf(m.type) < 0) typesPresent.push(m.type);
    });
    const order = ['capital', 'city', 'town', 'village', 'ruin', 'landmark'];
    typesPresent.sort((a, b) => order.indexOf(a) - order.indexOf(b));
    S.dom.nodeToggles.innerHTML =
      '<p class="map-panel-caption">Places</p>' +
      typesPresent.map((t) =>
        '<label class="map-toggle-row map-type-row"><input type="checkbox" data-type="' + t + '"' +
        (S.typeOn[t] !== false ? ' checked' : '') + '>' +
        '<span class="map-type-dot map-type-dot--' + t + '" aria-hidden="true"></span>' +
        '<span>' + (TYPE_LABEL[t] || t) + '</span></label>'
      ).join('');
    S.dom.nodeToggles.addEventListener('change', (e) => {
      const t = e.target.dataset && e.target.dataset.type;
      if (!t) return;
      S.typeOn[t] = e.target.checked;
      applyTypeVisibility();
    });

    S.dom.panelToggle.addEventListener('click', () => {
      const open = S.dom.panel.classList.toggle('is-collapsed');
      S.dom.panelToggle.setAttribute('aria-expanded', String(!open));
    });
    S.dom.labelsToggle.addEventListener('change', (e) => {
      S.labelsOn = e.target.checked;
      if (!S.labelsOn) hideAllLabels(); else renderOnce();
    });
    S.dom.reliefToggle.addEventListener('change', (e) => {
      const on = e.target.checked;
      S.reliefTween = { t: 0, dur: 700, from: S.displacement, to: on ? RELIEF : 0 };
      if (on) S.reliefOn = true;
      ensureRunning();
    });
    S.dom.reset.addEventListener('click', resetView);
    S.dom.canvas.addEventListener('pointermove', onPointerMove);
    S.dom.canvas.addEventListener('pointerdown', () => { S.dom.canvas.style.cursor = 'grabbing'; });
    S.dom.canvas.addEventListener('pointerup', () => { S.dom.canvas.style.cursor = S.hovered ? 'pointer' : 'grab'; });
    S.dom.canvas.addEventListener('click', onCanvasClick);
  }

  function highlightFilter(id) {
    S.dom.filters.querySelectorAll('.map-filter').forEach((b) =>
      b.setAttribute('aria-selected', String(b.dataset.overlay === id)));
  }

  function renderLegend(overlay) {
    const wrap = S.dom.legend;
    if (!overlay.legend || !overlay.legend.length) {
      wrap.innerHTML = '<p class="map-legend-blurb">' + escapeHtml(overlay.blurb || '') + '</p>';
      return;
    }
    wrap.innerHTML =
      '<p class="map-legend-blurb">' + escapeHtml(overlay.blurb || '') + '</p>' +
      '<ul class="map-legend-list">' + overlay.legend.map((item) =>
        '<li><span class="map-legend-swatch" style="background:' + item.color + '"></span>' +
        escapeHtml(item.label) + '</li>').join('') + '</ul>';
  }

  function onPointerMove(e) {
    const rect = S.dom.canvas.getBoundingClientRect();
    S.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    S.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }
  let _downXY = null;
  function onCanvasClick(e) {
    if (S.hovered) selectMarker(S.hovered);
    else clearSelection();
  }

  function resetView() {
    clearSelection();
    if (REDUCED_MOTION) { S.camera.position.copy(S.homeCam); S.controls.target.set(0, 0, 0); return; }
    S.intro = { t: 0, dur: 900, fromT: S.controls.target.clone(), toT: new THREE.Vector3(0, 0, 0),
                fromC: S.camera.position.clone(), toC: S.homeCam.clone() };
    ensureRunning();
  }

  const escapeHtml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ------------------------------------------------------------------- API */
  function init(opts) {
    if (S.ready) return;
    S.data = opts.data;
    S.data.__nations = opts.nations || {};
    S.typeOn = Object.assign({}, TYPE_DEFAULT_ON);
    S.dom = {
      stage: opts.stage, canvas: opts.canvas, panel: opts.panel,
      panelToggle: opts.panelToggle, panelBody: opts.panelBody,
      filters: opts.filters, legend: opts.legend, detail: opts.detail,
      nodeToggles: opts.nodeToggles,
      labelsToggle: opts.labelsToggle, reliefToggle: opts.reliefToggle,
      reset: opts.reset, loading: opts.loading
    };
    buildScene();
    buildUI();
    S.currentOverlay = S.data.overlays[0];
    setOverlay(S.currentOverlay, true);
    S.ready = true;

    /* size once we know the container has layout */
    resize();
    sampleHeightMap(S.data.base.height, () => {
      refreshMarkerHeights();
      if (S.dom.loading) S.dom.loading.classList.add('is-done');
      renderOnce();
    });
  }

  function show() {
    if (!S.ready) return;
    S.running = true;
    resize();
    S.dom.stage.classList.add('is-live');
    /* sleek intro: sweep from a high, near-top-down vantage into the home angle */
    if (!REDUCED_MOTION) {
      S.camera.position.set(0.4, 15.5, 4.2);
      S.controls.target.set(0, 0, 0);
      S.intro = { t: 0, dur: 1500, fromT: new THREE.Vector3(0, 0, 0), toT: new THREE.Vector3(0, 0, 0),
                  fromC: S.camera.position.clone(), toC: S.homeCam.clone() };
    }
    _last = performance.now();
    cancelAnimationFrame(S.raf); S.raf = requestAnimationFrame(loop);
  }

  function hide() {
    S.running = false;
    cancelAnimationFrame(S.raf); S.raf = 0;
    hideAllLabels();
    if (S.dom.stage) S.dom.stage.classList.remove('is-live');
  }

  function resize() {
    if (!S.ready || !S.dom.stage) return;
    const w = S.dom.stage.clientWidth, h = S.dom.stage.clientHeight;
    if (!w || !h) return;
    S.renderer.setSize(w, h, false);
    S.camera.aspect = w / h;
    S.camera.updateProjectionMatrix();
    renderOnce();
  }
  window.addEventListener('resize', () => { if (S.running) resize(); });

  window.BellosMap = { init, show, hide, resize };
})();
