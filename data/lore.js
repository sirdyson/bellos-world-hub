/* ==========================================================================
   BELLOS - CAMPAIGN LORE DATA
   --------------------------------------------------------------------------
   This file is the single source of truth for every word of lore on the
   site. Edit text here; the layout code in /js/main.js never needs to be
   touched.

   The value assigned below is pure JSON (it is loaded as a configuration
   module so the site also works when opened directly from disk, where
   browsers block fetch() of .json files).

   Structure:
     site      - global titles used in the chrome of the site.
     tabOrder  - the chapter tabs shown on every nation page, in order.
     nations   - one entry per nation. "tabs" maps each chapter to an
                 array of paragraphs (plain text; the first letter of the
                 first paragraph is automatically rendered as a drop cap).
     timeline  - chronological entries for the Timeline view, oldest
                 first. "body" is an array of paragraphs, "image" is the
                 media shown beside the entry, and the optional "nation"
                 links the entry to a nation page.
     campaignTimeline - the session-by-session Chronicle feed. Append a
                 new object after each game session (oldest first; the
                 site shows the newest at the top of the feed). Fields:
                 "session" (number), "date" (in-game date, free text),
                 "title", "summary" (2-3 sentences), "discoveredBy", and
                 an optional "nation" id which adds a tag + artwork.
   ========================================================================== */

window.BELLOS_LORE = {
  "site": {
    "name": "Bellos",
    "subtitle": "The Schism Campaign"
  },

  "tabOrder": ["overview", "history", "environments", "religions", "life", "people", "champions"],

  "nations": {
    "lefrantha": {
      "title": "LEFRANTHA",
      "name": "Lefrantha",
      "headerImage": "assets/img/lefrantha.jpg",
      "tabs": {
        "overview": [
          "The Lefranthan Empire is the oldest and greatest power the world has known, and thereby, the one most haunted by its own legend. To those beyond its borders, it is the eternal magnificent hegemon, its marble cities and arcane mastery the very measure of civilisation, its faith the one true light of order in a chaotic world. Yet those who look past the gilded spires and imperial pageantry see something else - a colossus grown old, its glory upheld as much by fear and fire as by true strength, its frontiers quietly contracting with each passing year.",
          "The Empire was forged millennia ago by the Thelelthan mage-kings, an elvish aristocracy who bound the warring cultures of the north and east beneath their banner through the overwhelming superiority of their magic. From that conquest rose a golden age of wonders: river-spanning cities, towering constructs, and works of sorcery never since equalled. This inheritance has made the Lefranthans a deeply proud people, certain beyond question that theirs is the natural order of the world - that to rule is their birthright, and that in time all lands and all faiths must be brought beneath the wing of the empire and its god, Esirianfe.",
          "At its heart stands the Esirianfan Church, whose creed - order through knowledge of the arcane - binds throne and altar into a single will. Power flows not from blood alone but from the favour of the faith, and there is no gift the Church prizes more highly than magic. Those born with the arcane spark are sought out wherever they appear, among every conquered people and beyond, and given over to the Church to be honed, disciplined, and turned to the service of Esirianfe and empire. To wield magic within the Empire is to be both blessed and claimed; the gift is never wholly one's own.",
          "But the divine order is no longer what it was. Succession crises gnaw at the imperial court as Autokrator Malakor grows old. Subject peoples grow restless along the shrinking frontier, and whispers of heresy spread through province and parish faster than the Inquisition can burn them out. For all the enemies massed beyond its walls, many within the Empire have come to fear a darker truth - that its ruin, when it comes, will rise not from the lands it failed to conquer, but from the rot spreading quietly at its heart."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": [
          "The heartland of Lefrantha is comprised of broad, fertile river-plains and ancient forest, sprawling across the north and east of Bellos - the richest soil any people have ever claimed. This is the seat of empire, and every mile of it bears the empire's hand: well-maintained roads and bridges, fields worked for millennia, and ancient time-worn cities of pale marble. The basin and its rivers are the Empire's arteries, threading its plains to the cold northern sea, carrying grain, faith, and wealth from conquered territories toward the capital Yelona - its coast crowded with imperial galleys.",
          "To the east, its plains surrender to deep forest and swamp, a vast and shadowed expanse where the imperial mandate thins with every kilometre beneath the canopy. Here dwell the Lotherkald, a riverine culture, now integrated within the Empire. Their rivers and wood were here long before the mage-kings came. The forests around here climb into snow-capped peaks, and somewhere among the ranges lie ruins and rumours of a whole civilisation buried beneath.",
          "The Empire is walled at its south by a central spine of great mountains and hills, standing as a barrier against the steppe of Greymark and the orcish nations beyond, its few passes heavily fortified as gates to the heartland.",
          "The distant southeast is heavily patrolled by imperial galleys fending off any opportunist Nogruk pirates and attack forces. In the flat, narrow chokepoints of the west, stand more fortified towns, paranoid of invasion.",
          "Scattered in its heartland are the broken bones of the Empire's history: ashen ruins, mysterious ancient constructs, and arcane rifts that distort reality itself. The modern Lefranthans raised their glory atop these and learned to harness, not replicate, the power left behind by their ancestors. The arcane is what they prize more than gold, so that they can attain again the glory of the golden age."
        ],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "greymark_horde": {
      "title": "GREYMARK HORDE",
      "name": "Greymark Horde",
      "headerImage": "assets/img/horde.jpg",
      "tabs": {
        "overview": [
          "To the settled peoples of the world, the Greymark Horde is a terror born of the open steppe - a tide of riders that boils up out of the dust without warning, takes what it will, and is gone before the alarm can be raised. Yet those who look past the raiders' fury see something far older and stranger: a profoundly spiritual people, bound by a code of honour so exacting that every blow struck and every oath sworn is weighed by the watching dead.",
          "The Horde is an agglomeration of clans in perpetual motion, who have never built a city and never wished to. They follow the herds and the seasons across the endless red soil, and they believe the dead ride beside them still - the honoured ancestors gathered in the Host, watching from the Endless Steppe, judging the living against the deeds of every generation that came before. To live well is to earn a place among them; to live badly is to be cast out into Urzul-Mokh, the howling hell of the dishonoured. Caught always between the favour of their ancestors and the hunger of restless spirits, the Horde have become a people of fierce pride and ceaseless vigilance, for whom the community - living and dead alike - matters more than any single life.",
          "Among the Horde, worth is measured in honour, and honour is earned, never inherited. A warrior rises by deeds - successful raids, valour, the completion of the Great Rotation that gathers every clan once a decade - and a war-leader holds power only so long as their deeds command respect; bloodline may open a door, but it cannot keep it open. Highest of all stand the shamans, who alone can speak with the Host, read its omens, and mend the spiritual wounds of those who have strayed. Even the deeply disgraced may claw their way back through extraordinary sacrifice.",
          "However, the Horde of Greymark is divided. A single generation ago it tore itself in two, and the Horde has bled against its own breakaway kin ever since. Now the sacred sites lie disturbed, the omens turn dark, and a nameless terror preys upon clan and caravan alike - and among the riders, a fear grows that the ancestors themselves have begun to look away. For all the enemies that ring the steppe, the oldest dread of the Horde is constant, can it stay united as the world changes around it?"
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": [
          "The Horde-controlled Greymark steppe is an ocean of grass, red soil and open sky, a vast rolling country in the south and centre-west of the world where the horizon runs unbroken and the wind never stops. It is a land that builds nothing it cannot carry. The Horde raises no cities and keeps no capital - a circuit of pastures, water, and sacred ground traversed by the clans in their seasons, the whole people forever in motion across it. To the settled nations, it looks like a barren waste, ripe for development. To the Horde it is the only honest country left.",
          "Dust storms rise without warning to swallow the steppe, allowing the horde to vanish into the clouds to strike and scatter any invader before they can establish any control. The wind is said to carry the spirits of the dishonoured, and so the clans ride masked and veiled, warding against the spirits carried in the dust.",
          "The steppe is a monument to the dead - dense with burial mounds containing extinct clans with their raid tokens and honours. The living ride over their ancestors under their eternal judgement. The Great Shrine, a huge working of stone and bone, is tended by the surrounding clans as the centre of gravity in their rotating world - to which the scattered peoples return once per decade to remember that they are one.",
          "Mountains wall its edges against the nations of the north, their passes guarding lands that the Horde has never cared to take. To the Horde's east, the steppe meets the stone walls of the Dominion - the breakaway kin who chose to settle - along an invisible border of blood. The borderlands have, in some ways, became a country of their own, home to lawless raider camps who have abandoned tradition, neutral trading posts, and daring new settlements. These are threaded by the Red Moon Road, where Horde and Dominion pass and co-exist under an uneasy truce.",
          "The south is densely forested and swampy, forming a natural border with the voracious nation of Grug. In a pocket of lagoons, resides the city-state of Kul, allowed to exist by the generosity of the Horde."
        ],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "greymark_dominion": {
      "title": "GREYMARK DOMINION",
      "name": "Greymark Dominion",
      "headerImage": "assets/img/dominion.jpg",
      "tabs": {
        "overview": [
          "To the riders of the open steppe, the Greymark Dominion is a wound and an insult - kinsmen who broke their oaths, abandoned the clan life, and shut themselves away behind walls of dead stone. But to the refugee, the outcast, and the foreigner with nowhere left to go, the Dominion is something far rarer: the one land in all the contested borderlands that asks not where you came from, what god you keep, or whose blood runs in your veins - only whether you will help build what comes next.",
          "The Dominion is young, born barely a generation ago when a faction of the Horde chose to stop riding. They would keep the ancestors, they declared, but honour them in halls of stone rather than on the move; they would set down written law, raise permanent towns, and trade the freedom of the endless plains for the promise of something that might endure. It was heresy to those they left behind, and the two peoples have battled over the choice ever since. Yet the settlers have never looked back - their towns sprawl outward year by year, raw and unfinished, swelling with all the world's castoffs.",
          "Where the old ways prized honour earned beneath the eyes of the dead, the Dominion prizes the living and the new. Anyone may belong here, and anyone may rise - by wit, by wealth, by usefulness - and its great questions are settled not by a war-leader's deeds but by argument, in councils and assemblies where merchants, settlers, and migrants all press their claims at once. Even the dark-dwelling Lotherkald elves of the Lefranthan Empire, and other once-foreign peoples have found a place within its borders, and brought with them strange arts and faiths the steppe never knew. The Dominion is a nation still arguing over what it wishes to be, and it counts that freedom its greatest strength.",
          "But a nation built so quickly, from so many mismatched pieces, does not hold easily. Its councils squabble while its merchant houses chase private fortunes; its lofty ideals run thick with opportunism, and more than one fortune in its boom-built capital was raised on a lie. Hemmed in by the Horde that names it traitor and the Lefranthan Empire that watches it with hungry patience, the Dominion's settler experiment may yet prove its undoing."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": [
          "The Dominion has been raised in a single generation on ground that has never before carried walls. Stone towns rise from its grass, fields fenced from old pasture, and roads cut where there were once trails. To the horde, it is a betrayal of hammer and timber. To their people, it is a hopeful future, hauled up out of the earth by the hands of those oppressed world-over.",
          "At its heart, on the coast of a small inland sea, sprawls Phax. It is a disorganised jumpstart of a capital city that has grown fast with the opportunities it presents. The Dominon welcomes all peoples, so its towns and Phax's neighbourhoods, are a clamour of tongues and faiths under a new shelter: steppe-born settlers, refugess from orcish raids, Lotherkald who traded their hegemon for a new promise, and merchants, zealots, and chancers from every border hoping to capitalise on the early nation. It is governed, in theory, by councils and assemblies, but influence tends to drift towards the loudest merchant families.",
          "Underneath the stone remains the old country, the same burial mounds dot its fields, and the same ancestors lie beneath the foundations of its halls - honoured instead in permanent shrines of wood and cloth. In the centre of Phax, is the Ironbark Standard, a symbol of their settlement.",
          "The Dominion's curse is its position, sitting as a new buffer between two great powers that would prefer if it didn't exist. The Horde to the west see it as a traitor, and the Lefranthan Empire to the north who see it as tumultuous ground ripe for the taking. Its eastern frontier grows more dangerous with every year, thick with Nogruk raids and imperial eyes. Its western edge weeps with blood. The young nation made both rich and vulnerable by the openness that built it, survives on the narrow margin of being worth more to its neighbours alive than dead."
        ],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "snowfals": {
      "title": "SNOWFALS",
      "name": "Snowfals",
      "headerImage": "assets/img/snowfals.jpg",
      "tabs": {
        "overview": [
          "Most who speak of the Most Serene Republic of Snowfals speak of its money. The great city that anchors the republic straddles an icy strait at the top of the world, and through that strait passes a fair share of everything the world buys and sells; its harbours are forests of masts and its counting-houses heavy with coin. Despite this, the republic was founded on a war of liberation, and beneath the mercantile prosperity runs a stubborn older conviction: that no one, anywhere, is born to be ruled.",
          "Three centuries ago these were subject lands of the Lefranthan Empire. Then came Clayard the Blonde, whose single command, to rise, turned scattered grievance into revolution and revolution into a free people. Clayard won the war and then, her work finished, simply vanished, leaving behind both a nation and a faith. Its people remember the price of that freedom in every shrine and on every weathered wall, and they have made themselves accordingly: hard-handed, proud of their endurance, slow to kneel, and certain they could outlast another winter, another siege, another empire, if it came to that.",
          "Two faiths sit at the republic's heart, and between them they explain it. From the Word of Clayard comes its love of liberty and its distrust of kings. From the old spirits of the coast, and chiefly Mostal, Lord of Balance, comes its temperance: the belief that excess in any direction invites ruin, and that a thing kept in measure lasts longest. So the republic governs itself by argument rather than decree. Its captains, traders, and elders meet, haggle, and vote, and power changes hands without changing the shape of the state. It calls itself Serene because it learned, at great cost, to prize a steady hand over a strong one.",
          "A republic grown rich, though, is not the same animal as a republic born poor and desperate. The wealth that pours through the strait has bred merchant houses with interests of their own, and not all of them are content to share. Where their ancestors bled for the freedom of strangers, some of the comfortable now ask what freedom is worth to people with everything to lose. The walls have held against every enemy for three hundred years. Whether a faith born of revolution can survive three hundred years of prosperity without toil is its core mystery."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "midwel": {
      "title": "MIDWEL",
      "name": "Midwel",
      "headerImage": "assets/img/midwel.jpg",
      "tabs": {
        "overview": [
          "Midwel has the good fortune to look, from a distance, like a kingdom out of an old song. It lies along the green western coast behind a wall of mountains, ruled by a king and a long roll of ancient noble houses, defended by dedicated oath-sworn knights. Travellers from harder lands find it embarrassingly pleasant: orderly, prosperous, devout, and confident.",
          "The realm was raised centuries ago by refugees who crossed the mountains to escape the Lefranthan Empire, and its mountainous prison has shaped it ever since. The passes are few and easily held, and behind them Midwel built stability. Its great families have kept their lands for generations, its crown more often than not passes without bloodshed, and its capital stands on the coast as a fortress first and a city second. Chivalry here is more than manners. It is the working code of a warrior aristocracy that truly believes rank is a debt, and that a lord who will not bleed for his people has no business ruling them.",
          "Midwel encompassed two faiths in its culture, but has forgotten how to practice either. From the Word of Clayard it takes a fondness for freedom; from the old coastal spirits, and Mostal above all, it takes the conviction that the world holds a balance worth defending against the things that would break it. Nowhere is that plainer than in its hunters. The kingdom breeds noble houses sworn to ride out against the monsters other lands whisper about, and the greatest of them are spoken of like heroes in the villages and given a wide, wary berth at court. To common folk they are legends. To their fellow nobles they are a reminder that some duties are too ugly to leave to anyone but the very proud.",
          "For all its mountains, Midwel let its real danger in long ago, and it came wearing a friendly face. The Word of Clayard, which teaches that no one is born to rule, has put down deep roots in a kingdom founded entirely on the idea that some are. The creed the crown tolerates in its chapels is the same creed that has toppled empires, and it has been spreading among the common folk for generations, in spite of top-down anti-religious enforcement. Add the steppe raiders who have already torn pieces from the southern marches, and the old song begins to sound less like a triumph than a warning. Midwel's knights can hold the mountain passes against any army. They do not know how to hold them against the new."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "nog": {
      "title": "NOG",
      "name": "Nog",
      "headerImage": "assets/img/nog.jpg",
      "tabs": {
        "overview": [
          "Sailors have a saying about the black ships out of the frozen south: you see the sail before you see the storm. Nog is a kingdom of orcs built on a coast that should not support a kingdom at all, a place of iron cold and short, brutal summers, and its people long ago decided that if the land would give them nothing, they would take everything they needed from the sea and from everyone on the far side of it. For five centuries its fleets have carried that decision to other people's shores.",
          "The kingdom was hammered together by Ulzugnud the Unyielding, a conqueror who won an empire by sea and then turned on his own people's past, declaring the old ways a shame to be burned out rather than honoured. From that purge came Vrarudism, the creed that still drives them: a hard faith teaching that comfort is rot, that hardship is the only honest teacher, and that destruction is not the end of a thing but the price of its rebirth. A Nogruk raised on this does not fear ruin. He half expects it, and means to be the one walking out of the wreckage.",
          "In Nog, weakness is the single unforgivable sin, and results are the only argument anyone respects. Birth counts for little; the captain who comes home with plunder and the captain who comes home with reasons are not spared by their fathers' names. Worth is proven over and over by what a man can survive and what he can take. This makes the Nogruk relentless and very hard to discourage. It also makes them exhausting to rule, because a people taught that destruction breeds rebirth are never wholly certain their own masters aren't the next thing due to be torn down.",
          "That is the bomb at the centre of Nog. Its fleets have swallowed islands and coastlines, but they broke at last against the riders of the steppe, who could not be caught and would not be cowed, and a kingdom that measures itself by conquest does not take such limits well. Denied easy enemies abroad, its ambition has turned inward. In the high Court, rivals smile and scheme and arrange one another's failures through hands that can never be traced, because open feuding is forbidden and the purges that follow a misstep are not. Nog's enemies have learned to dread its navy. Its courts have learned only to dread their rivals within."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "grug": {
      "title": "GRUG",
      "name": "Grug",
      "headerImage": "assets/img/grug.jpg",
      "tabs": {
        "overview": [
          "There is no more devout nation in the world than the Principality of Grug. It is an orc theocracy carved into the cold forested lowlands of the deep south, governed in every detail by the Gho-Ludh Church, and the rare traveller's first lesson there is that its god is no god of comfort. They worship Ar-Nard, who taught them that meaning is bought only with pain, and they have built a whole nation around the lesson. Outsiders call them fanatics. They wouldn't deem that a sufficient term.",
          "The faith came first, and the country grew up around it. Six centuries ago, by their telling, Ar-Nard revealed himself to the orcs of the southern coasts and showed them fire, in the brand and the forge, proof that what is to be shaped must first be made to suffer. The Church that rose from that revelation conquered, converted, and raised a principality where the priesthood is the state and the altar is never far from the lash. To be born in Grug is to be born owing a debt of pain, and to live well is to pay it without flinching.",
          "Grug measures a soul by what it has endured, and by what it is still willing to endure. Scars are credentials. The ordeal is liturgy. Rank in the Church, which is to say rank in everything, goes to those who have suffered most visibly in its service and dealt out suffering most faithfully to its enemies, and there is no corner of a life the faith does not reach into and govern. The result is a people of frightening discipline and frightening certainty, who can be marched into almost anything, because they were taught from the cradle that pain is the reason for existence.",
          "A faith like that carries one flaw it can never mend: it needs pain the way a fire needs fuel. While there were heathens to convert and coasts to take, the hunger had somewhere to go. But the conquests have slowed, old subjects like the rich port of Kul slipped the leash and went unpunished, and a creed that cannot rest will turn its appetite on whatever stands nearest."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    },

    "kul": {
      "title": "KUL",
      "name": "Kul",
      "headerImage": "assets/img/kul.jpg",
      "tabs": {
        "overview": [
          "Kul is the most beautiful place that nobody entirely trusts. Its capital, En, is a wonder built out over warm, shining water, a maze of gilded towers and carved stone where the heavy hand of its orc founders and the fine craft of its human settlers have grown together into something the rest of the world can only envy. It is, by a long way, the richest nation alive. It is also a nation that has never once won a battle it could instead buy its way out of, and sees no reason to learn how.",
          "That instinct runs deeper than the wealth. Kul began as a conquered port, thrown up by the southern orcs of Grug and Nog, before their division, to ship home what they had stolen from the Greymark steppe. When a greater power came for it, its rulers did not fight to the last man; they knelt, changed gods, changed masters, and kept their warehouses. The peoples it abandoned have never forgiven the turn, and Kul has never lost a night's sleep over it. Survival and the massing of wealth, the ways Kul reckons things, are its founding principles.",
          "Where other nations are held together by blood or faith or a crown, Kul is held together by ledgers, and it has made that into a kind of freedom. Anyone may come, anyone may trade, anyone may worship as they like, provided its harbour fees are paid. Its merchant-princes rule by wealth and treat the whole world as a market, and the corner of that market they have made their own is the strangest one of all: the exotic, the ancient, and the arcane. Magic is rare in this world, and mostly feared. En is the one place where a buyer with enough coin can still turn up a relic out of a dead culture, an artifact nobody can quite explain, or some object that more cautious courts would have burned on sight.",
          "The trouble with owning everything is that everyone else wants it, and the trouble with loyalty for sale is that no one believes you will keep theirs. Kul has no real army and never wanted one. Its walls are its wealth and its allies are its account books, and both can come apart faster than stone. Every power it ever abandoned still remembers, and the Lefranthan Empire to the north watches its trade in forbidden things with a cold, patient eye. And then there is the merchandise itself. A city that buys and sells artifacts it does not understand is, sooner or later, going to sell the wrong one, or fail to sell it, and find out too late what it had been keeping quietly on a shelf."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
        "religions": ["Lefrantha is a powerful empire..."],
        "life": ["Lefrantha is a powerful empire..."],
        "people": ["Lefrantha is a powerful empire..."],
        "champions": ["Lefrantha is a powerful empire..."]
      }
    }
  },

  "timeline": [
    {
      "id": "forging-of-lefrantha",
      "era": "Millennia Ago",
      "title": "The Forging of Lefrantha",
      "nation": "lefrantha",
      "image": "assets/img/lefrantha.jpg",
      "body": [
        "Following a great cataclysm, the Lefranthan Empire was forged by the Thelelthan mage-kings, an elvish aristocracy who bound the warring cultures of the north and east beneath their banner through the overwhelming superiority of their magic.",
        "From thousands of years of conquest, the Empire reached its greatest territorial extent and in it rose a golden age of wonders and faith: river-spanning cities, towering constructs, cathedrals, and arcane machinations never since recreated."
      ]
    },
    {
      "id": "revelation-of-ar-nard",
      "era": "Six Centuries Ago",
      "title": "The Revelation of Ar-Nard",
      "nation": "grug",
      "image": "assets/img/grug.jpg",
      "body": [
        "Ar-Nard the Divine Ancient revealed himself to the Khuld orcs of the southern coasts and showed them fire, in the brand and the forge. It claimed the Khuld must know suffering.",
        "The Gho-Ludh Church that rose from that revelation conquered, converted, and raised a Khuld theocracy led by a devout priesthood."
      ]
    },
    {
      "id": "conquests-of-ulzugnud",
      "era": "Five Centuries Ago",
      "title": "The Conquests of Ulzugnud the Unyielding",
      "nation": "nog",
      "image": "assets/img/nog.jpg",
      "body": [
        "The Kingdom of Nog was birthed by Ulzugnud the Unyielding, a conqueror who won an empire by sea, and then turned against the Khuld's past, declaring the Gho-Ludh Church a weakness to be forgotten.",
        "From that purge came Vrarudism, the creed that still drives them, and the nation was cut from the Khuld theocracy - leaving it as the Principality of Grug. Vrarudism preaches against complacency, and that hardship is the only honest teacher. Ulzugnud used this philosophy to conquer distant coastal lands in the Lefranthan Empire, and the continent of Greymark."
      ]
    },
    {
      "id": "greymark-unification",
      "era": "Four Centuries Ago",
      "title": "The Unification of Greymark",
      "nation": "greymark_horde",
      "image": "assets/img/horde.jpg",
      "body": [
        "Amidst their Nogruk conquest and the voracious beasts within, the clans of Greymark united into a horde under Thorgrim Windcaller. Thorgrim reached a stalemate with the Nogruk after magnificent victories, assisted by relics he maladapted from raiding the burial mounds of the ancient Greymark ancestors.",
        "The Nine, the most powerful council of Greymark shamans, condemned his sacrilegious means and banished him to Urzul-Mokh - taking this secret to their graves, reciting that Thorgrim Windcaller fell in battle. However, one of The Nine, hid the truth deep in Thorgrim's burial mound."
      ]
    },
    {
      "id": "clayards-rise",
      "era": "Three Centuries Ago",
      "title": "The Blonde Revolution",
      "nation": "snowfals",
      "image": "assets/img/snowfals.jpg",
      "body": [
        "For millennia, Snowfals was a subject land of the Lefranthan Empire. Then came Clayard the Blonde, whose single command, to rise, converted grievance into action, and action into liberation.",
        "Her call to rise, literally became the Word of Clayard, the new Snowfals religion that swiftly replaced folk belief in Mostal, Lord of Balance. Clayard won the war and founded the Most Serene Republic of Snowfals, and with her work finished, she simply vanished, leaving behind both a nation and a faith.",
        "Its people remember the price of that freedom in every shrine and on every weathered wall."
      ]
    },
    {
      "id": "crossing-of-the-mountains",
      "era": "Three Centuries Ago",
      "title": "The Crossing of the Mountains",
      "nation": "midwel",
      "image": "assets/img/midwel.jpg",
      "body": [
        "The realm of Midwel was raised centuries ago by refugees who crossed the mountains to escape the Lefranthan Empire, weakened after the independence of Snowfals. Its refugees, undisturbed in their geography, used their new peace and shelter to consolidate wealth. The greatest contributors formed their noble houses and behind them Midwel built internal stability, in a kingdom protected by fort and mountain.",
        "Revolutionary ideas from the new regional power of Snowfals threatened the noble houses, but they swiftly put down such ideas, condemning religions that became too powerful, and turned their efforts to science."
      ]
    },
    {
      "id": "turning-of-kul",
      "era": "Ages Past",
      "title": "The Turning of Kul",
      "nation": "kul",
      "image": "assets/img/kul.jpg",
      "body": [
        "Kul began as a Greymark port, thrown up by the Nogruk, to ship home what they had stolen from the steppe.",
        "When the Horde came for it, the city's rulers bent the knee, and kept their warehouses, without blood drawn. The Nogruk it abandoned and impoverished have never forgiven the betrayal."
      ]
    },
    {
      "id": "schism-of-the-greymark",
      "era": "A Generation Ago",
      "title": "The Schism of Greymark",
      "nation": "greymark_dominion",
      "image": "assets/img/dominion.jpg",
      "body": [
        "A single generation ago the Horde tore itself in two, and they have only now established a fragile peace. The Dominion was born when a faction of the Horde chose to stop riding - they would keep the ancestors, they declared, but honour them in halls of stone rather than on mountback.",
        "It was heresy to those they left behind, and the two peoples have battled over the choice ever since."
      ]
    },
    {
      "id": "the-present-age",
      "era": "The Present Day",
      "title": "A Brittle Age",
      "nation": "greymark_dominion",
      "image": "assets/img/dominion.jpg",
      "body": [
        "Succession crises gnaw at the Lefranthan imperial court as Autokrator Malakor grows old. Subject peoples grow restless along its shrinking frontier, and whispers of heresy spread through province and parish faster than the Inquisition can burn them out.",
        "On the Greymark steppe, tension builds between the new and old nation, and a new terror, Bloodwind, preys upon clan and caravan alike. New faiths rise, empires crumble, arcane events occur more frequently - the world is unsure who will survive the change."
      ]
    }
  ],

  "campaignTimeline": [
    {
      "session": 1,
      "date": "Day 1",
      "title": "Bloodshed in Felsirtstead",
      "summary": "The chronicle opens. The Greymark Horde and the Dominion balance on a knife's edge, and a terror called Bloodwind preys upon clan and caravan alike looking for relics.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 1,
      "date": "Day 1",
      "title": "The Augustus Stain",
      "summary": "Theodore proclaims his father, Erath Augustus, to be an innocent man! He wishes to restore the reputation of his family, in spite of his Erath's great fraud in the Dominion.",
      "discoveredBy": "Theodore Augustus",
      "nation": "greymark_dominion"
    },
    {
      "session": 1,
      "date": "Day 1",
      "title": "The Rip in the Sky",
      "summary": "Tibbin Titterspat, a god-like magical gnome, mentions he has resurfaced due to a crack in the sky. He plays horrific tricks on you and senses great power within Ulrich.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 2,
      "date": "Day 2",
      "title": "Whispers in the Barrow",
      "summary": "Accepting Councillor Velddra Ghrond of the Dominion's quest, you go to Thorgrim Windcaller's burial mound and destroy the relics there.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 2,
      "date": "Day 2",
      "title": "Banishment of the Unifier",
      "summary": "In the burial mound, you uncover that Thorgrim was a legendary ancient champion who united the disparate Greymark clans under the Horde. His means were sacrilegious and he was sent to Urzul-Mokh by The Nine - the most powerful shamans of the time, who died shortly after.",
      "discoveredBy": "Ulrich Boulder-Axe",
      "nation": "greymark_dominion"
    },
    {
      "session": 3,
      "date": "Day 3",
      "title": "The Kazgur Stirs",
      "summary": "Bloodwind's excavations awaken a great beast of the sand. With Orai Kashtamar's help, you slay the Kazgur Worm, and Mors sends it's head back to the House Black estate in the Kingdom of Midwel.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 3,
      "date": "Day 3",
      "title": "Sigils in the Sand",
      "summary": "Kashtamar scouts find a huge broken circle in the sand on their way to you - the symbol that Bloodwind's skin is tattooed with. It contrasts with the full circle symbol of the Horde.",
      "discoveredBy": "Clan Kashtamar",
      "nation": "greymark_dominion"
    },
    {
      "session": 3,
      "date": "Day 3",
      "title": "A Thread of Peace",
      "summary": "You arrive in Fort Odvish where Horde and Dominion folk alike share walls in new comfort, on the borderlands of the Dominion - championed by Orai.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 4,
      "date": "Day 4",
      "title": "The Friar's Final Blessing",
      "summary": "Friar Marv Ichtenbjorg of the Esirianfan Church is curious about magic wielders. He is revealed to be... a deviant, and he films a biased view of his lynching for the Church with his scyring eye. Theodore and Baldrick remain committed to the Church.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 4,
      "date": "Day 4",
      "title": "The Circus & The Sword",
      "summary": "A travelling circus and an unusual merchant arrive, bringing exotic items and unveiling Shamecrusher - the cursed sword.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 4,
      "date": "Day 4",
      "title": "Mockery of Fort Odvish",
      "summary": "Altered Dominion guard patrols, shady clansmen, chaos, infighting. Only crudely painted banners bearing Bloodwind's symbol remain, with Orai Kashtamar nowhere to be seen, but he doesn't leave symbols.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 5,
      "date": "Day 4",
      "title": "The Crown of Vermin Vanquished",
      "summary": "Tibbin Titterspat thinks Lucien looks cool, teleports him to Fort Odvish and sends him and Grinzak on a quest to slay the Rat King of the Feywild.",
      "discoveredBy": "Grinzak the Lesser & Lucien Vex",
      "nation": ""
    },
    {
      "session": 6,
      "date": "Day 4",
      "title": "The Mystery of Vassian Korr",
      "summary": "Grinzak receives a letter concerning a man called Vassian Korr.",
      "discoveredBy": "Grinzak the Lesser",
      "nation": "greymark_dominion"
    },
    {
      "session": 6,
      "date": "Day 4",
      "title": "Too Tidy Tents",
      "summary": "Hobgoblin mercenaries hired to kill any trackers of Orai attack you. With T'Challa as the storm closed in, you find that Orai had her memory wiped, as well as armour from the Dominion, Kul coin, and Horde furs in a camp with Bloodwind banners.",
      "discoveredBy": "The Party",
      "nation": "greymark_dominion"
    },
    {
      "session": 7,
      "date": "Day 4",
      "title": "The Return of the Windcaller",
      "summary": "You ride with a Kashtamar party to a burial site. Tagra, the Kashtamar shaman, senses a great power in Ulrich. The site contains the ancient Dagger of Severance - originally used to cut the spiritual ties of tieflings. Lucien's patron shies away but he refuses to let them go. Bloodwind returns alone. He acquires the dagger, killing all but Druvash Kashtamar in doing so, and sending Mors and Lucien briefly to Urzul-Mokh.",
      "discoveredBy": "The Party",
      "nation": "greymark_horde"
    },
    {
      "session": 7,
      "date": "Day 4",
      "title": "Cursed by Magic, Cursed by Man",
      "summary": "In Urzul-Mokh, Thorgrim tells Mors that he had a partner who brought his physical form - Bloodwind - back, but this partner betrayed him. The Dagger of Severance is the only thing that could send his physical form back to hell. He aims to destroy it to escape death and his old partner.",
      "discoveredBy": "Mors Harald-Otto of House Black",
      "nation": ""
    },
    {
      "session": 8,
      "date": "Day 5",
      "title": "Gathering of the Clans",
      "summary": "With Druvash and T'Challa, you track Orai to the Great Shrine, the site of the Great Rotation - where the clans gather to race around hordelands once per decade, with the winning clan gaining great honour. You meet ten of eleven horde clans and engage with their traditions. Theodore and Lucien agree to race under the new clan Augustus, with the sigil of a dragon.",
      "discoveredBy": "The Party",
      "nation": "greymark_horde"
    },
    {
      "session": 8,
      "date": "Day 5",
      "title": "One Man & the Future of Greymark",
      "summary": "Ulrich warns a hollow Orai, ahead of her evening clan speech at the Story Circle, that Bloodwind kidnapped her and slayed her clan members. Ulrich is told to go to the arena at night.",
      "discoveredBy": "Ulrich Boulder-Axe",
      "nation": "greymark_horde"
    },
    {
      "session": 8,
      "date": "Day 5",
      "title": "The Rebirth of Theodore & The Death of Augustus",
      "summary": "In the Hall of the Windcaller, Torvahn Jarakhi presented Theodore Augustus with a rogue religious leaflet found in a prophetic duststorm. Its teachings directly contradict the Esirianfan Church doctrines that Erath had raised him on. Reading the text, Theodore fiercely branded the Church - 'HERESY!'. This word triggered his Lefranthan cane, transforming it into a majestic rapier. In a shattering moment of defiance, Theodore renounced his faith, cast aside his noble Augustus family name, and was crowned Archpriest Theodore Jarakhi. With his defection, Lucien is left as the sole racing representative of Clan Augustus.",
      "discoveredBy": "Archpriest Theodore Jarakhi",
      "nation": "greymark_horde"
    },
  ],
};
