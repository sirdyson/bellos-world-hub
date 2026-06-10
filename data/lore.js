/* ==========================================================================
   BELLOS — CAMPAIGN LORE DATA
   --------------------------------------------------------------------------
   This file is the single source of truth for every word of lore on the
   site. Edit text here; the layout code in /js/main.js never needs to be
   touched.

   The value assigned below is pure JSON (it is loaded as a configuration
   module so the site also works when opened directly from disk, where
   browsers block fetch() of .json files).

   Structure:
     site      — global titles used in the chrome of the site.
     tabOrder  — the chapter tabs shown on every nation page, in order.
     nations   — one entry per nation. "tabs" maps each chapter to an
                 array of paragraphs (plain text; the first letter of the
                 first paragraph is automatically rendered as a drop cap).
     timeline  — chronological entries for the Timeline view, oldest
                 first. "body" is an array of paragraphs, "image" is the
                 media shown beside the entry, and the optional "nation"
                 links the entry to a nation page.
     campaignTimeline — the session-by-session Chronicle feed. Append a
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
          "The Lefranthan Empire is the oldest and greatest power the world has known, and thereby, the one most haunted by its own legend. To those beyond its borders, it is the eternal hegemon: vast, magnificent, and untouchable, its marble cities and arcane mastery the very measure of civilisation, its faith the one true light of order in a chaotic world. Yet those who look past the gilded spires and imperial pageantry see something else - a colossus grown old, its glory upheld as much by fear and fire as by true strength, its frontiers quietly contracting with each passing year.",
          "The Empire was forged millennia ago by the Thelelthan mage-kings, an elvish aristocracy who bound the warring cultures of the north and east beneath their banner through the overwhelming superiority of their magic. From that conquest rose a golden age of wonders: river-spanning cities, towering constructs, and works of sorcery never since equalled. This inheritance has made the Lefranthans a deeply proud people, certain beyond question that theirs is the natural order of the world - that to rule is their birthright, and that in time all lands and all faiths must be brought beneath the wing of the empire and its god, Esirianfe.",
          "At its heart stands the Esirianfan Church, whose creed - order through knowledge of the arcane - binds throne and altar into a single will. Power flows not from blood alone but from the favour of the faith, and there is no gift the Church prizes more highly than magic. Those born with the arcane spark are sought out wherever they appear, among every conquered people and beyond, and given over to the Church to be honed, disciplined, and turned to the service of Esirianfe and empire. To wield magic within the Empire is to be both blessed and claimed; the gift is never wholly one's own.",
          "But the divine order is no longer what it was. Succession crises gnaw at the imperial court as Autokrator Malakor grows old. Subject peoples grow restless along the shrinking frontier, and whispers of heresy spread through province and parish faster than the Inquisition can burn them out. For all the enemies massed beyond its walls, many within the Empire have come to fear a darker truth - that its ruin, when it comes, will rise not from the lands it failed to conquer, but from the rot spreading quietly at its heart."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": ["Lefrantha is a powerful empire..."],
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
        "environments": ["Lefrantha is a powerful empire..."],
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
        "environments": ["Lefrantha is a powerful empire..."],
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
          "Thhere is no more devout nation in the world than the Principality of Grug. It is an orc theocracy carved into the cold forested lowlands of the deep south, governed in every detail by the Gho-Ludh Church, and the rare traveller's first lesson there is that its god is no god of comfort. They worship Ar-Nard, who taught them that meaning is bought only with pain, and they have built a whole nation around the lesson. Outsiders call them fanatics. They wouldn't deem that a sufficient term.",
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
        "The Empire was forged millennia ago by the Thelelthan mage-kings, an elvish aristocracy who bound the warring cultures of the north and east beneath their banner through the overwhelming superiority of their magic.",
        "From that conquest rose a golden age of wonders: river-spanning cities, towering constructs, and works of sorcery never since equalled."
      ]
    },
    {
      "id": "revelation-of-ar-nard",
      "era": "Six Centuries Ago",
      "title": "The Revelation of Ar-Nard",
      "nation": "grug",
      "image": "assets/img/grug.jpg",
      "body": [
        "Six centuries ago, by their telling, Ar-Nard revealed himself to the orcs of the southern coasts and showed them fire, in the brand and the forge, proof that what is to be shaped must first be made to suffer.",
        "The Church that rose from that revelation conquered, converted, and raised a principality where the priesthood is the state and the altar is never far from the lash."
      ]
    },
    {
      "id": "conquests-of-ulzugnud",
      "era": "Five Centuries Ago",
      "title": "The Conquests of Ulzugnud the Unyielding",
      "nation": "nog",
      "image": "assets/img/nog.jpg",
      "body": [
        "The kingdom of Nog was hammered together by Ulzugnud the Unyielding, a conqueror who won an empire by sea and then turned on his own people's past, declaring the old ways a shame to be burned out rather than honoured.",
        "From that purge came Vrarudism, the creed that still drives them: a hard faith teaching that comfort is rot, that hardship is the only honest teacher, and that destruction is not the end of a thing but the price of its rebirth."
      ]
    },
    {
      "id": "turning-of-kul",
      "era": "Ages Past",
      "title": "The Turning of Kul",
      "nation": "kul",
      "image": "assets/img/kul.jpg",
      "body": [
        "Kul began as a conquered port, thrown up by the southern orcs of Grug and Nog, before their division, to ship home what they had stolen from the Greymark steppe.",
        "When a greater power came for it, its rulers did not fight to the last man; they knelt, changed gods, changed masters, and kept their warehouses. The peoples it abandoned have never forgiven the turn, and Kul has never lost a night's sleep over it."
      ]
    },
    {
      "id": "crossing-of-the-mountains",
      "era": "Centuries Ago",
      "title": "The Crossing of the Mountains",
      "nation": "midwel",
      "image": "assets/img/midwel.jpg",
      "body": [
        "The realm of Midwel was raised centuries ago by refugees who crossed the mountains to escape the Lefranthan Empire, and its mountainous prison has shaped it ever since.",
        "The passes are few and easily held, and behind them Midwel built stability. Its great families have kept their lands for generations, its crown more often than not passes without bloodshed, and its capital stands on the coast as a fortress first and a city second."
      ]
    },
    {
      "id": "rising-of-clayard",
      "era": "Three Centuries Ago",
      "title": "The Rising of Clayard the Blonde",
      "nation": "snowfals",
      "image": "assets/img/snowfals.jpg",
      "body": [
        "Three centuries ago these were subject lands of the Lefranthan Empire. Then came Clayard the Blonde, whose single command, to rise, turned scattered grievance into revolution and revolution into a free people.",
        "Clayard won the war and then, her work finished, simply vanished, leaving behind both a nation and a faith. Its people remember the price of that freedom in every shrine and on every weathered wall."
      ]
    },
    {
      "id": "schism-of-the-greymark",
      "era": "A Generation Ago",
      "title": "The Schism of the Greymark",
      "nation": "greymark_dominion",
      "image": "assets/img/horde.jpg",
      "body": [
        "A single generation ago the Horde tore itself in two, and it has bled against its own breakaway kin ever since. The Dominion was born when a faction of the Horde chose to stop riding - they would keep the ancestors, they declared, but honour them in halls of stone rather than on the move.",
        "It was heresy to those they left behind, and the two peoples have battled over the choice ever since."
      ]
    },
    {
      "id": "the-present-age",
      "era": "The Present Day",
      "title": "An Age of Omens",
      "nation": "greymark_horde",
      "image": "assets/img/dominion.jpg",
      "body": [
        "Succession crises gnaw at the imperial court as Autokrator Malakor grows old. Subject peoples grow restless along the shrinking frontier, and whispers of heresy spread through province and parish faster than the Inquisition can burn them out.",
        "On the steppe, the sacred sites lie disturbed, the omens turn dark, and a nameless terror preys upon clan and caravan alike - and among the riders, a fear grows that the ancestors themselves have begun to look away."
      ]
    }
  ],

  "campaignTimeline": [
    {
      "session": 1,
      "date": "Day 1",
      "title": "Whispers of the Schism",
      "summary": "The chronicle opens. Word on the steppe holds that the sacred sites lie disturbed, the omens turn dark, and a nameless terror preys upon clan and caravan alike.",
      "discoveredBy": "The Party",
      "nation": "greymark_horde"
    },
    {
      "session": 2,
      "date": "Day 9",
      "title": "The Price of the Gift",
      "summary": "Those born with the arcane spark are given over to the Esirianfan Church to be honed, disciplined, and turned to the service of Esirianfe and empire. To wield magic within Lefrantha is to be both blessed and claimed; the gift is never wholly one's own.",
      "discoveredBy": "Theodore",
      "nation": "lefrantha"
    },
    {
      "session": 3,
      "date": "Day 23",
      "title": "A Relic Out of a Dead Culture",
      "summary": "En is the one place where a buyer with enough coin can still turn up an artifact nobody can quite explain. A city that buys and sells artifacts it does not understand is, sooner or later, going to sell the wrong one.",
      "discoveredBy": "The Party",
      "nation": "kul"
    },
    {
      "session": 4,
      "date": "Day 31",
      "title": "The Word Spreads",
      "summary": "The Word of Clayard, which teaches that no one is born to rule, has put down deep roots in Midwel. It has been spreading among the common folk for generations, in spite of top-down anti-religious enforcement.",
      "discoveredBy": "Theodore",
      "nation": "midwel"
    }
  ],
};
