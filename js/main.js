/* ==========================================================================
   BELLOS - THE SCHISM CAMPAIGN
   SPA state, hash routing & animated view flows
   --------------------------------------------------------------------------
   All content is read from window.BELLOS_LORE (see /data/lore.js).
   Routes:
     #/nations                    index of nations
     #/nations/:id                a nation, overview chapter
     #/nations/:id/:tab           a nation, specific chapter
     #/timeline                   the chronicle, first entry
     #/timeline/:eventId          the chronicle, specific entry
   ========================================================================== */
(() => {
  'use strict';

  const DATA = window.BELLOS_LORE;
  if (!DATA) {
    document.getElementById('app').innerHTML =
      '<p style="padding:120px 24px;text-align:center">The chronicle could not be loaded. ' +
      'Ensure <code>data/lore.js</code> is present.</p>';
    return;
  }

  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const VIEW_EXIT_MS = REDUCED_MOTION ? 0 : 300;
  const SWAP_MS = REDUCED_MOTION ? 0 : 300;

  /* ------------------------------------------------------------------------
     Nation sigils. Pure presentation, keyed by nation id; the path data is
     preserved verbatim from the original hand-drawn marks.
     ------------------------------------------------------------------------ */
  const SIGILS = {
    lefrantha: {
      viewBox: '0 0 100 100',
      markup: '<path d="M 50,5 C 47,20 38,28 36,38 C 34,48 39,52 42,42 C 45,32 51,25 54,18 C 55,28 62,35 60,48 C 58,58 51,62 48,54 C 45,46 47,40 43,45 C 38,51 31,52 30,62 C 28,75 39,85 50,85 C 63,85 73,73 71,58 C 70,46 61,38 58,25 C 65,32 72,45 69,56 C 76,46 76,32 68,20 C 62,11 54,8 50,5 Z M 22,78 C 28,88 38,94 50,94 C 62,94 72,88 78,78 C 68,84 58,86 50,86 C 42,86 32,84 22,78 Z"/>'
    },
    greymark_horde: {
      viewBox: '0 0 100 100',
      markup: '<path fill-rule="evenodd" d="M50,8 A42,42 0 1,0 50,92 A42,42 0 1,0 50,8 Z M50,20 A30,30 0 1,1 50,80 A30,30 0 1,1 50,20 Z"/>'
    },
    greymark_dominion: {
      viewBox: '0 0 100 100',
      markup:
        '<path d="M50,8 C58,8 65,15 65,23 C65,31 58,37 50,37 C42,37 35,31 35,23 C35,15 42,8 50,8 Z M50,15 C45,15 42,18 42,23 C42,28 45,30 50,30 C55,30 58,28 58,23 C58,18 55,15 50,15 Z"/>' +
        '<path d="M47,33 L53,33 L53,74 L47,74 Z"/>' +
        '<path d="M27,47 L73,47 L73,52 L27,52 Z"/>' +
        '<path d="M31,52 L35,52 L34,61 L32,61 Z"/>' +
        '<path d="M65,52 L69,52 L68,61 L66,61 Z"/>' +
        '<path d="M50,72 C51,80 41,84 29,92 C42,87 47,88 50,82 C53,88 58,87 71,92 C59,84 49,80 50,72 Z"/>'
    },
    snowfals: {
      viewBox: '0 0 100 100',
      markup: '<path d="M50,5 L57,33 L82,18 L67,43 L95,50 L67,57 L82,82 L57,67 L50,95 L43,67 L18,82 L33,57 L5,50 L33,43 L18,18 L43,33 Z"/>'
    },
    midwel: {
      viewBox: '0 0 100 100',
      markup:
        '<path d="M20,82 L18,60 L22,42 L31,58 L38,30 L44,54 L50,20 L56,54 L62,30 L69,58 L78,42 L82,60 L80,82 Z"/>' +
        '<circle cx="22" cy="42" r="3.5"/><circle cx="38" cy="30" r="3.5"/><circle cx="50" cy="20" r="4.5"/>' +
        '<circle cx="62" cy="30" r="3.5"/><circle cx="78" cy="42" r="3.5"/>' +
        '<rect x="16" y="66" width="68" height="14" rx="4"/>'
    },
    nog: {
      viewBox: '0 0 100 100',
      markup:
        '<path d="M14,42 C22,66 38,76 50,74 C62,76 78,66 86,34 C80,44 64,56 50,56 C36,56 22,52 14,42 Z"/>' +
        '<rect x="48" y="18" width="4" height="40"/>' +
        '<path d="M30,22 L70,22 C74,34 74,44 68,50 C60,53 40,53 32,50 C26,44 26,34 30,22 Z"/>'
    },
    grug: {
      viewBox: '0 0 100 100',
      markup:
        '<path d="M44,42 L47,30 L49,37 L50,18 L51,37 L53,30 L56,42 Z"/>' +
        '<path d="M50,92 L43,68 L43,42 L57,42 L57,68 Z"/>' +
        '<path d="M43,67 L29,55 L41,63 Z"/>' +
        '<path d="M57,67 L71,55 L59,63 Z"/>'
    },
    kul: {
      viewBox: '0 -20 100 100',
      markup:
        '<path d="M14,52 C14,28 32,18 50,18 C68,18 86,28 86,52 L74,52 C74,36 63,30 50,30 C37,30 26,36 26,52 Z"/>' +
        '<path d="M12,57 Q26,53 40,57 Q50,60 60,57 Q74,53 88,57 L88,61 Q74,57 60,61 Q50,64 40,61 Q26,57 12,61 Z"/>' +
        '<path d="M24,67 Q37,64 50,67 Q63,70 76,67 L76,70 Q63,67 50,70 Q37,73 24,70 Z"/>'
    }
  };

  /* ------------------------------------------------------------------------
     DOM handles
     ------------------------------------------------------------------------ */
  const el = {
    views: {
      nations: document.getElementById('view-nations'),
      nation: document.getElementById('view-nation'),
      timeline: document.getElementById('view-timeline'),
      chronicle: document.getElementById('view-chronicle'),
      tales: document.getElementById('view-tales')
    },
    navLinks: document.querySelectorAll('.nav-links a[data-nav]'),
    cardsGrid: document.getElementById('cards-grid'),
    heroImg: document.getElementById('nation-hero-img'),
    nationTitle: document.getElementById('nation-title'),
    nationTabs: document.getElementById('nation-tabs'),
    nationContent: document.getElementById('nation-content'),
    timelineRail: document.getElementById('timeline-rail'),
    timelineDetail: document.getElementById('timeline-detail'),
    chronicleFeed: document.getElementById('chronicle-feed'),
  };

  const state = { view: null, nationId: null, tabId: null, eventId: null };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const escapeHtml = (text) =>
    String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  /* Renders an array of plain-text paragraphs, giving the first one a drop cap. */
  function renderProse(paragraphs, withDropCap) {
    return paragraphs
      .map((text, i) => {
        const safe = escapeHtml(text);
        if (withDropCap && i === 0 && safe.length > 0) {
          return `<p><span class="drop-cap">${safe[0]}</span>${safe.slice(1)}</p>`;
        }
        return `<p>${safe}</p>`;
      })
      .join('');
  }

  function labelFor(tabId) {
    return tabId.charAt(0).toUpperCase() + tabId.slice(1);
  }

  /* ------------------------------------------------------------------------
     Static renderers (run once at boot)
     ------------------------------------------------------------------------ */
  function renderCards() {
    el.cardsGrid.innerHTML = Object.entries(DATA.nations)
      .map(([id, nation], i) => {
        const sigil = SIGILS[id];
        const icon = sigil
          ? `<span class="card-icon" aria-hidden="true"><svg viewBox="${sigil.viewBox}">${sigil.markup}</svg></span>`
          : '';
        return `
          <a class="nation-card" href="#/nations/${id}" style="--i:${i}">
            <img class="card-image" src="${escapeHtml(nation.headerImage)}" alt="" loading="lazy">
            <span class="card-scrim" aria-hidden="true"></span>
            ${icon}
            <span class="card-title">${escapeHtml(nation.name)}</span>
            <span class="card-accent" aria-hidden="true"></span>
          </a>`;
      })
      .join('');
  }

  function renderTimelineRail() {
    el.timelineRail.innerHTML = DATA.timeline
      .map(
        (event) => `
        <button class="timeline-node" type="button" data-event="${escapeHtml(event.id)}">
          <span class="node-era">${escapeHtml(event.era)}</span>
          <span class="node-marker" aria-hidden="true"></span>
          <span class="node-title">${escapeHtml(event.title)}</span>
        </button>`
      )
      .join('');

    el.timelineRail.addEventListener('click', (e) => {
      const node = e.target.closest('.timeline-node');
      if (node) location.hash = `#/timeline/${node.dataset.event}`;
    });

    /* arrow keys scrub the chronicle */
    el.timelineRail.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const ids = DATA.timeline.map((ev) => ev.id);
      const index = Math.max(0, ids.indexOf(state.eventId));
      const next = e.key === 'ArrowRight' ? index + 1 : index - 1;
      if (next >= 0 && next < ids.length) {
        e.preventDefault();
        location.hash = `#/timeline/${ids[next]}`;
      }
    });
  }

  /* The session-by-session feed. Entries live in DATA.campaignTimeline
     (oldest first); the feed presents them newest first. */
  function renderChronicle() {
    const entries = Array.isArray(DATA.campaignTimeline) ? DATA.campaignTimeline : [];

    if (!entries.length) {
      el.chronicleFeed.innerHTML =
        '<li class="chron-entry"><p class="chron-empty">No discoveries have been recorded yet.</p></li>';
      return;
    }

    el.chronicleFeed.innerHTML = entries
      .slice()
      .reverse()
      .map((entry, i) => {
        const nation = entry.nation && DATA.nations[entry.nation];
        const date = entry.date
          ? `<span class="chron-date">${escapeHtml(entry.date)}</span>`
          : '';
        const tag = nation
          ? `<a class="chron-nation-tag" href="#/nations/${escapeHtml(entry.nation)}">${escapeHtml(nation.name)}</a>`
          : '';
        const thumb = nation
          ? `<span class="chron-thumb" aria-hidden="true"><img src="${escapeHtml(nation.headerImage)}" alt="" loading="lazy"></span>`
          : '';
        return `
        <li class="chron-entry${i === 0 ? ' is-latest' : ''}" style="--i:${i}">
          <article class="chron-card${nation ? '' : ' no-thumb'}">
            <div class="chron-body">
              <header class="chron-meta">
                <span class="chron-session">Session ${escapeHtml(entry.session)}</span>
                ${date}
              </header>
              <h3 class="chron-title">${escapeHtml(entry.title)}</h3>
              <p class="chron-summary">${escapeHtml(entry.summary)}</p>
              <footer class="chron-foot">
                <span class="chron-attr">Discovered by <strong>${escapeHtml(entry.discoveredBy)}</strong></span>
                ${tag}
              </footer>
            </div>
            ${thumb}
          </article>
        </li>`;
      })
      .join('');
  }

  /* ------------------------------------------------------------------------
     Dynamic renderers
     ------------------------------------------------------------------------ */
  function renderNation(nationId, tabId) {
    const nation = DATA.nations[nationId];
    el.heroImg.src = nation.headerImage;
    el.nationTitle.textContent = nation.title;
    el.heroImg.style.transform = '';

    el.nationTabs.innerHTML = DATA.tabOrder
      .filter((id) => nation.tabs[id])
      .map((id) => `<a href="#/nations/${nationId}/${id}" data-tab="${id}">${labelFor(id)}</a>`)
      .join('');

    renderTabContent(nationId, tabId);
  }

  function renderTabContent(nationId, tabId) {
    const nation = DATA.nations[nationId];
    el.nationContent.innerHTML = renderProse(nation.tabs[tabId], true);

    el.nationTabs.querySelectorAll('a').forEach((a) => {
      const active = a.dataset.tab === tabId;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function renderTimelineEvent(eventId) {
    const event = DATA.timeline.find((ev) => ev.id === eventId);
    const nation = event.nation && DATA.nations[event.nation];
    const link = nation
      ? `<a class="entry-link" href="#/nations/${event.nation}">Explore ${escapeHtml(nation.name)} &rarr;</a>`
      : '';

    el.timelineDetail.innerHTML = `
      <article class="timeline-entry">
        <p class="entry-era">${escapeHtml(event.era)}</p>
        <h2>${escapeHtml(event.title)}</h2>
        ${renderProse(event.body, false)}
        ${link}
      </article>
      <aside class="timeline-media">
        <figure>
          <img src="${escapeHtml(event.image)}" alt="" loading="lazy">
          <figcaption>Illustrative record &mdash; ${escapeHtml(event.era)}</figcaption>
        </figure>
      </aside>`;

    el.timelineRail.querySelectorAll('.timeline-node').forEach((node) => {
      const active = node.dataset.event === eventId;
      node.classList.toggle('active', active);
      if (active) {
        node.setAttribute('aria-current', 'true');
        node.scrollIntoView({
          behavior: REDUCED_MOTION ? 'auto' : 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      } else {
        node.removeAttribute('aria-current');
      }
    });
  }

  /* ------------------------------------------------------------------------
     Animated swaps
     ------------------------------------------------------------------------ */
  async function transitionViews(nextName, update) {
    const next = el.views[nextName];
    const visible = Object.values(el.views).filter((v) => !v.hidden);

    if (visible.length) {
      visible.forEach((v) => v.classList.remove('is-shown'));
      await wait(VIEW_EXIT_MS);
      /* if next is already on screen (nation -> nation) it just replays its entrance */
      visible.forEach((v) => { if (v !== next) v.hidden = true; });
    }

    if (update) update();

    next.hidden = false;
    void next.offsetWidth; /* commit layout so the entrance transition runs */
    next.classList.add('is-shown');
    window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
  }

  async function fadeSwap(element, update) {
    element.classList.add('is-fading');
    await wait(SWAP_MS);
    update();
    element.classList.remove('is-fading');
  }

  function syncNav(viewName) {
    const section = viewName === 'nation' ? 'nations' : viewName;
    el.navLinks.forEach((a) => a.classList.toggle('active', a.dataset.nav === section));
  }

  /* ------------------------------------------------------------------------
     Router
     ------------------------------------------------------------------------ */
  function parseRoute() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);

    if (parts[0] === 'timeline') {
      const event = DATA.timeline.find((ev) => ev.id === parts[1]) || DATA.timeline[0];
      return { view: 'timeline', eventId: event.id };
    }

    if (parts[0] === 'chronicle') return { view: 'chronicle' };

    if (parts[0] === 'tales') return { view: 'tales' };

    if (parts[0] === 'nations' && parts[1] && DATA.nations[parts[1]]) {
      const nation = DATA.nations[parts[1]];
      const tabId = nation.tabs[parts[2]] ? parts[2] : DATA.tabOrder[0];
      return { view: 'nation', nationId: parts[1], tabId };
    }

    return { view: 'nations' };
  }

  async function applyRoute() {
    const route = parseRoute();
    syncNav(route.view);
    if (route.view === 'nations') {
      document.title = `${DATA.site.name} - ${DATA.site.subtitle}`;
      if (state.view !== 'nations') await transitionViews('nations');
    } else if (route.view === 'nation') {
      const nation = DATA.nations[route.nationId];
      document.title = `${nation.name} | ${DATA.site.name}`;
      if (state.view !== 'nation' || state.nationId !== route.nationId) {
        await transitionViews('nation', () => renderNation(route.nationId, route.tabId));
      } else if (state.tabId !== route.tabId) {
        await fadeSwap(el.nationContent, () => renderTabContent(route.nationId, route.tabId));
      }
    } else if (route.view === 'timeline') {
      document.title = `Timeline | ${DATA.site.name}`;
      if (state.view !== 'timeline') {
        await transitionViews('timeline', () => renderTimelineEvent(route.eventId));
      } else if (state.eventId !== route.eventId) {
        await fadeSwap(el.timelineDetail, () => renderTimelineEvent(route.eventId));
      }
    } else if (route.view === 'chronicle') {
      document.title = `Chronicle | ${DATA.site.name}`;
      if (state.view !== 'chronicle') await transitionViews('chronicle');
    } else if (route.view === 'tales') {
      document.title = `Theodore's Tales | ${DATA.site.name}`;
      if (state.view !== 'tales') await transitionViews('tales');
    }

    Object.assign(state, { nationId: null, tabId: null, eventId: null }, route);
  }

  /* ------------------------------------------------------------------------
     Hero parallax - a slow downward drift as the page scrolls away.
     ------------------------------------------------------------------------ */
  function bindParallax() {
    if (REDUCED_MOTION) return;
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking || state.view !== 'nation') return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, window.innerHeight);
          el.heroImg.style.transform = `translateY(${(y * 0.22).toFixed(1)}px)`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  renderCards();
  renderTimelineRail();
  renderChronicle();
  bindParallax();
  window.addEventListener('hashchange', applyRoute);
  applyRoute();
})();
