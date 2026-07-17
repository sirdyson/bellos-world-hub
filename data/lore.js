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

  "tabOrder": ["overview", "environments", "religions", "life", "people", "champions"],

  "nations": {
    "lefrantha": {
      "title": "LEFRANTHA",
      "name": "Lefrantha",
      "headerImage": "assets/img/lefrantha.jpg",
      "tabs": {
        "overview": [
          "The Lefranthan Empire is the oldest and greatest power the world has known, and thereby, the one most haunted by its own legend. To those beyond its borders, it is the eternal, magnificent hegemon, its marble cities and arcane mastery the very measure of civilisation, its faith the one true light of order in a chaotic world. Yet those who look past the gilded spires and imperial pageantry see something else - a colossus grown old, its glory upheld as much by fear and fire as by true strength, its frontiers quietly contracting with each passing year.",
          "The Empire was forged millennia ago by the Thelelthan mage-kings, an elvish aristocracy who bound the warring cultures of the north and east beneath their banner through the overwhelming superiority of their magic. From that conquest rose a golden age of wonders: river-spanning cities, towering constructs, and works of sorcery never since equalled. This inheritance has made the Lefranthans a deeply proud people, certain beyond question that theirs is the natural order of the world - that to rule is their birthright, and that in time all lands and all faiths must be brought beneath the wing of the Empire and its god, Esirianfe.",
          "At its heart stands the Esirianfan Church, whose creed - order through knowledge of the arcane - binds throne and altar into a single will. Power flows not from blood alone but from the favour of the faith, and there is no gift the Church prizes more highly than magic. Those born with the arcane spark are sought out wherever they appear, among every conquered people and beyond, and given over to the Church to be honed, disciplined, and turned to the service of Esirianfe and empire. To wield magic within the Empire is to be both blessed and claimed; the gift is never wholly one's own.",
          "But the divine order is no longer what it was. Succession crises gnaw at the imperial court as Autokrator Malakor grows old. Subject peoples grow restless along the shrinking frontier, and whispers of heresy spread through province and parish faster than the Inquisition can burn them out. For all the enemies massed beyond its walls, many within the Empire have come to fear a darker truth - that its ruin, when it comes, will rise not from the lands it failed to conquer, but from the rot spreading quietly at its heart."
        ],
        "environments": [
          "The heartland of Lefrantha comprises broad, fertile river-plains and ancient forest, sprawling across the north and east of Bellos - the richest soil any people have ever claimed. This is the seat of empire, and every mile of it bears the Empire's hand: well-maintained roads and bridges, fields worked for millennia, and ancient time-worn cities of pale marble. The basin and its rivers are the Empire's arteries, threading its plains to the cold northern sea, carrying grain, faith, and wealth from conquered territories towards the capital Yelona - its coast crowded with imperial galleys.",
          "To the east, its plains surrender to deep forest and swamp, a vast and shadowed expanse where the imperial mandate thins with every kilometre beneath the canopy. Here dwell the Lotherkald, a riverine culture, now integrated within the Empire. Their rivers and wood were here long before the mage-kings came. The forests beyond climb into snow-capped peaks, and somewhere among the ranges lie ruins and rumours of a whole civilisation buried beneath.",
          "The Empire is walled at its south by a central spine of great mountains and hills, standing as a barrier against the steppe of Greymark and the orcish nations beyond, its few passes heavily fortified as gates to the heartland.",
          "The distant southeast is heavily patrolled by imperial galleys fending off any opportunist Nogruk pirates and attack forces. In the flat, narrow chokepoints of the west stand more fortified towns, paranoid of invasion.",
          "Scattered in its heartland are the broken bones of the Empire's history: ashen ruins, mysterious ancient constructs, and arcane rifts that distort reality itself. The modern Lefranthans raised their glory atop these and learned to harness, not replicate, the power left behind by their ancestors. The arcane is what they prize more than gold, so that they can attain again the glory of the golden age."
        ],
        "religions": [
          "To the outside world - and to most who live under it - religion in the Lefranthan Empire is synonymous with the Esirianfan Church. The Empire is a theocracy as much as a state, empire and cathedral equal in power, ruled by two voices - the Autokrator and the Pontifex. Whatever older gods its many subjects once kept have been buried so thoroughly beneath the imperial faith that, from the outside, they are barely a rumour. To understand what the Empire worships, you begin and very nearly end with the flame.",
          "The Esirianfan Church holds that the world has a sacred order, and that order is dominance. Its god is Esirianfe, the Lord; its symbol is the flame. It is intrigued by the arcane and holds the conviction that to know magic, discipline it, and wield it in service of the divine is the highest calling a soul can answer. Thus, to preserve order, all magic must be overseen, governed and controlled by the Church. Those arcane-touched are sought out and taken into the Church's keeping, to be shaped into instruments of Esirianfe and empire. To carry the gift within the Empire's grasp is to be at once blessed and claimed. The Church crowns and counsels autokrators, its word carries the weight of law, and its cathedrals were constructed to humble their visitors. The Church has expressed various doctrines and reformations, its teachings intrinsically linked with the fate of the Empire.",
          "The Church is a highly-structured institution chaired by Ignivar, the Red Pontifex, sitter of the Second Throne. Ignivar governs the Cindersynod - a council of legislators. Beneath them stand the inquisitorial factions. Answering directly to Ignivar are the orders of the convent. Its priesthood is similarly bureaucratic, comprising clerks, priests, deacons, seers, friars, and archivists. The Church is rumoured to contain more sinister and secretive orders to preserve its mandate.",
          "What the wider world knows of the Church, it knows mostly through fear. Its Inquisition hunts heresy and unsanctioned magic with a thoroughness that has made it the most dreaded institution in Bellos - a name spoken carefully even far past the imperial frontier, where its agents are rumoured to reach where its armies no longer can. Doctrine venerates the Cindersynod, who in ages past is said to have given the faith its present shape. And yet, for all its terror, the Church is visibly past its height: congregations thin, cathedrals stand half-used, and its missionaries press harder and harder into foreign lands - the Greymark frontier chief among them - precisely because the centre no longer holds what it once did.",
          "Beneath all this, every traveller half-knows, there were other gods here once. The many peoples the Empire swallowed over millennia kept their own spirits and old traditions long before the flame was raised over them, and somewhere in the Empire's vast and shadowed interior fragments of those older faiths are said to linger still. But the Church has spent a very long time making sure the outside world hears as little of them as possible."
        ],
        "life": [
          "Life in the Empire is ordered by the bell and the tithe. From the smallest parish to the great cathedrals of Yelona, the hours of the day are called out over the rooftops, and a Lefranthan rises, labours, eats, and sleeps to a rhythm ordained by the Church. No great passage of a life is reckoned to have happened until a clergy member has written it into the rolls. For the Empire is a bureaucratic mesh above all, and to its eyes a soul exists to be taxed and observed.",
          "Beneath this churchly order run the two older sects of the land. The Lefranthan plains are green with millennia-worked fields ripening and emptying, the grain and wine going down to the rivers in barges bound north for the capital and the cold sea beyond. In the marble cities, you experience the markets and counting-houses, the clatter of clerks, the river-trade and the imperial galleys - and the calendar is broken at intervals by the feast-days of the Esirianfan faith, when the streets fill with processions of flame and incense and the whole bureaucratic machine pauses to remember its glory. Country and city alike, the year presents a wheel of work and worship, and few think to ask whether it might turn any other way.",
          "Yet for all its grandeur, the Empire is a place lived among the bones of a greater age. The marble was cut for a glorious time, and many of the halls stand empty and derelict, with cathedrals, roads and aqueducts barely maintained. The people make do amid the splendour, and the bureaucracy grinds on regardless to maintain the facade of triumph.",
          "And under everything runs a low and constant watchfulness. To live well in the Empire is to live observantly, to guard one's tongue before the wandering friars and the quiet seers who note what is said, to dread the knock that follows a denunciation, and above all to dread the discovery of an unsanctioned gift in one's own child. Neighbours are careful with neighbours, and the older gods, are kept in silence behind closed doors."
        ],
        "people": [
          "Above all the Empire's many peoples stand the Esirianfans, the elvish stock of the old mage-kings, who hold without question that theirs is the finest blood the world has produced and that all others are lesser. From this conviction the whole order of the Empire descends: to be Esirianfan is to be a citizen of the true Empire, and to be anything else is to be a subject of it. The Lotherkald, the riverine dark elves of the eastern forests, are tolerated and taxed and never wholly trusted; the Bil dwarves of the high mountains, their faith all but broken, have withdrawn so deep into the stone that most in Bellos are unaware of them; and beneath these move the human and lesser remnants of a hundred swallowed peoples, their cultures and families lost to time.",
          "Among the Esirianfans themselves the lines are scarcely softer. At the summit sit the old mage-blood houses, the thinning aristocracy descended from the Thelelthan conquerors - proud past reason, increasingly turned in upon themselves, holding land and title and the Autokrator's ear. Below them spreads the vast common multitude, elf-born but low, bound to fields their families have worked for a thousand years, owing labour and grain and obedience and asking in return only to be left to their faith. Between these extremes throng the clerks, artisans, and merchant houses of the cities, the literate machinery of empire. And cutting clean across all of it runs the Church, the one true ladder a low-born soul may climb: a peasant's son in a friar's robe outranks a lord who never took the cloth.",
          "Standing apart from every rank is the arcane-touched, whose place is the strangest the Empire keeps. The spark appears where it will - in a great house or a serf's hovel, in an Esirianfan cradle or a Lotherkald one - and wherever it appears, the Church comes for the child. To carry it is to be lifted clean out of one's birth, for good and ill at once: a few families weep with pride to see a child raised into the power of the faith, while many more weep simply to see them taken, honed, and claimed, never wholly their own again. A sewer rat with the gift may one day command armies a born lord could only envy; he will never again command himself. And beneath even the lowest free subject sit the owned and the broken, of whom the Empire does not speak.",
          "What binds the Esirianfans into a people is order. They are patient, proud, and devout by long habit, a folk who reckon a soul's worth by its lineage, its learning, and its orthodoxy, and who find in their marble cities and unbroken rites all the evidence they require that the world was made to be ruled by such as them. This certainty now frays at the edges of personalities, and the frontiers of the Empire."
        ],
        "champions": [
          "Autokrator Malakor, the master of the First Throne, is the anchor keeping the Lefranthan Empire from fracturing. Born centuries ago as a disregarded third son, he forsook the luxuries of Yelona for the harsh mountains of Bil. When his father, Autokrator Janus, withered, Malakor did not wait for the Thelelthan aristocracy to crown his meek brothers; he marched his frontier battalions on the capital, purging his kin and opposing nobles. The zealots from the earlier incarnations of the Esirianfan Church pleaded with him at the steps of the Grand Cathedral, forcing a diarchy, with Malakor being granted the rule of man. Since then, he has sat the First Throne, architecting the bureaucracy of the state. Now an aged ruler encased in his castle, he leads the Empire pragmatically, his rule necessary to maintain internal peace.",
          "Ignivar, the Red Pontifex, the sitter of the Second Throne, is the fanatical soul of the Lefranthan Empire. He rose through the inquisitorial gauntlet building his supremacy on the pyres of heretics and the establishment of a monopoly on the arcane. The Red Pontifex orchestrates the Empire's theocratic machinery, cloaked in crimson. He governs the Cindersynod and deploys his inquisitorial factions to drag unsanctioned mages from their beds, convinced that only the holy fire of Esiranfe can purge the rot gnawing at the Church's eternal mandate."
        ]
      }
    },

    "greymark_horde": {
      "title": "GREYMARK HORDE",
      "name": "Greymark Horde",
      "headerImage": "assets/img/horde.jpg",
      "tabs": {
        "overview": [
          "To the settled peoples of the world, the Greymark Horde is a terror born of the open steppe - a tide of riders that boils up out of the dust without warning, takes what it will, and is gone before the alarm can be raised. Yet those who look past the raiders' fury see something far older and stranger: a profoundly spiritual people, bound by a code of honour so exacting that every blow struck and every oath sworn is weighed by the watching dead.",
          "The Horde is an agglomeration of clans in perpetual motion, who have never built a city and never wished to. They follow the herds and the seasons across the endless red soil, and they believe the dead ride beside them still - the honoured ancestors gathered in the Host, watching from the Endless Steppe, judging the living against the deeds of every generation that came before. To live well is to earn a place among them; to live badly is to be cast out into Urzul-Mokh, the howling hell of the dishonoured. Caught always between the favour of their ancestors and the hunger of restless spirits, the Horde has become a people of fierce pride and ceaseless vigilance, for whom the community - living and dead alike - matters more than any single life.",
          "Among the Horde, worth is measured in honour, and honour is earned, never inherited. A warrior rises by deeds - successful raids, valour, the completion of the Great Rotation that gathers every clan once a decade - and a war-leader holds power only so long as their deeds command respect; bloodline may open a door, but it cannot keep it open. Highest of all stand the shamans, who alone can speak with the Host, read its omens, and mend the spiritual wounds of those who have strayed. Even the deeply disgraced may claw their way back through extraordinary sacrifice.",
          "However, the Horde of Greymark is divided. A single generation ago it tore itself in two, and the Horde has bled against its own breakaway kin ever since. Now the sacred sites lie disturbed, the omens turn dark, and a nameless terror preys upon clan and caravan alike - and among the riders, a fear grows that the ancestors themselves have begun to look away. For all the enemies that ring the steppe, the oldest dread of the Horde is constant: can it stay united as the world changes around it?"
        ],
        "environments": [
          "The Horde-controlled Greymark steppe is an ocean of grass, red soil and open sky, a vast rolling country in the south and centre-west of the world where the horizon runs unbroken and the wind never stops. It is a land that builds nothing it cannot carry. The Horde raises no cities and keeps no capital - a circuit of pastures, water, and sacred ground traversed by the clans in their seasons, the whole people forever in motion across it. To the settled nations, it looks like a barren waste, ripe for development. To the Horde it is the only honest country left.",
          "Dust storms rise without warning to swallow the steppe, allowing the Horde to vanish into the clouds to strike and scatter any invader before they can establish any control. The wind is said to carry the spirits of the dishonoured, and so the clans ride masked and veiled, warding against the spirits carried in the dust.",
          "The steppe is a monument to the dead - dense with burial mounds containing extinct clans with their raid tokens and honours. The living ride over their ancestors under their eternal judgement. The Great Shrine, a huge working of stone and bone, is tended by the surrounding clans as the centre of gravity in their rotating world - to which the scattered peoples return once per decade to remember that they are one.",
          "Mountains wall its edges against the nations of the north, their passes guarding lands that the Horde has never cared to take. To the Horde's east, the steppe meets the stone walls of the Dominion - the breakaway kin who chose to settle - along an invisible border of blood. The borderlands have, in some ways, become a country of their own, home to lawless raider camps who have abandoned tradition, neutral trading posts, and daring new settlements. These are threaded by the Red Moon Road, where Horde and Dominion pass and co-exist under an uneasy truce.",
          "The south is densely forested and swampy, forming a natural border with the voracious nation of Grug. In a pocket of lagoons resides the city-state of Kul, allowed to exist by the generosity of the Horde."
        ],
        "religions": [
          "The Greymark Horde keeps no temples and bows to no god. Their faith is in their ancestors who watch the living, and weigh every act against the standard of generations. To the Horde the line between living and dead is thin. The dead are gathered into a vast and judging company that the living will one day join or be cast out from forever. Everything the Horde does, from the smallest raid to the way they bury their own, is conducted under that unblinking ancestral gaze.",
          "The honoured dead form the Host: the gathered company of all who lived and died well, dwelling in the Endless Steppe, a paradise of infinite game, hunting and ale. The living keep the dead's company through dream, omen, and the work of their shamans - consulting fallen kin on hard decisions and riding always in the knowledge that the ancestors ride alongside. A clan's dead are laid in great mounds with the tokens of their deeds, their rank among the Host reflecting the honour they earned in life.",
          "Everything turns on honour. It is earned by successful raids, by proper conduct toward kin and dead alike, and by valour in battle - though here the Horde's logic cuts against the grain of every other warrior people. To fight bravely earns honour; to die doing it does not. A warrior who throws their life away has abandoned the people they were meant to keep serving, and dies diminished rather than glorified. The single exception to this is in the Great Rotation, where death is transfigured into the highest honour of all, because it is given in the course of the most sacred ritual the Horde have. Everywhere else the goal is to survive, to keep riding, and to add to their honour pile one raid and one season at a time. However, honour can be lost: cowardice, oath-breaking, betrayal, the theft or loss of one's amulets, and above all the defiling of sacred ground all draw it down. Those who die in the red are barred from the Endless Steppe and cast instead into Urzul-Mokh, a hell of endless screaming wind, where they wander as bitter, hungry spirits. The dishonoured are rumoured to ride the storms back into the living world, jealous revenants that prey on those who still possess what they have lost. This is why the Horde go masked and veiled and hung with charms against the wind.",
          "Dishonour is tallied by small failures that bring shame, which sincere effort can absolve; graver ones leave a spiritual taint that takes shamanic cleansing and hard, visible courage to lift; and the very worst - the unforgivable violations - mark a soul for Urzul-Mokh with no road back at all. Those who carry the stain while still alive are stripped of their ritual dress and put into plain grey hides, branded so that their shame can be read at a glance, and shut out of the communal meals that bind their clan together; they become pariahs. The unrepentant are eventually hunted down, removed as a danger to the spiritual health of the whole. Redemption is always on offer through the Horde, through winning the Great Rotation, a gruelling shamanic ritual, or through self-sacrifice in the people's defence.",
          "Every member of the Horde wears ancestor amulets, chains of carved teeth that bind them to their lineage and are sung to before battle; to lose them is a spiritual disaster. Raid tokens, cut from bone or metal and earned in war, are buried with the dead to fix their place among the Host. Twice-sacred are the two great communal rites: the Great Rotation, a decennial race of all the clans clockwise across the steppe, and the pilgrimage to the Great Shrine, the one fixed holy place of a wandering people. Standing between the living and the Host are the shamans and spirit-seekers who may let the dead briefly inhabit their own bodies to speak with the living. The tattoos of the Horde are their spiritual records. Certain things are forbidden absolutely. To defile a grave, to bind or command a spirit, to wake the dead from their rest, to practise necromancy in any form - these are the ultimate crimes, for they overturn the order that holds the living apart from the dead and usurp the ancestors' own authority. Bloodwind does so and is the Horde's ultimate cautionary tale.",
        ],
        "life": [
          "Seasonal camps are raised quickly, struck and raised within a single morning: the felt tents folded, the herds gathered, the whole community poured onto the backs of its beasts and gone before noon, leaving only cold ash and the untouched mounds of the dead behind them. There are no idle hands on the move, and a child learns the folding of a tent and the tending of a herd very early on. A non-materialistic people carrying only what they have judged as worth carrying to help their lives on the steppe.",
          "The hearth is the one fixed point of a moving life, and the shared meal its warm centre. The clans live on what travels - storm jerky and blood crackers, fermented milk cakes and hearth-grain balls, gallop broth hot over a hasty fire - and drink airag, the fermented mare's milk that is the daily water of the steppe, with frost mead broached only in celebration. Hospitality runs close to sacred: to share a fire is to offer a stranger the clan's protection for a night, and to turn a guest away hungry is a small shame that clings to a family. Round the evening flames come the battle-hymns and the long ancestral songs, for a people with no books keep their whole history sung and re-sung, until every child holds the length of their line in memory.",
          "The Horde's crafts are the crafts of the saddle: tooth carved into amulet and bone into war-gear, hide worked into storm-coat and sash, horsehair braided into charm and tack. Above all a rider is made by their beasts, bonded to a mount from childhood and reckoning its loss a true bereavement. They ride an ark the settled world finds monstrous - swift panther-mounts and giant horses, war-lizards and wolves, giant hyenas bred for endurance, and, for the very greatest, the rare surviving megafauna of an elder age. A child's coming of age is its first ride and its first hunt, and until those are behind it, it is not yet, in the clan's eyes, wholly a person.",
          "It is an intimate life, lived shoulder to shoulder and out of doors, with little privacy and less mercy for the weak, but little loneliness either, for a rider is never far from kin, herd, or the singing dead. When the omens sour and a mound is found broken open, a people this tightly woven have no way to keep a spreading dread to themselves."
        ],
        "people": [
          "The Horde is not one people but many - a confederation of clans, each carrying its own character, craft, and quarrel, bound less by any throne than by shared blood and shared enemies. The Kashtamar are peerless riders in heavy bone-plate who vanish into duststorms and are feared above all others; the Jarakhi sing battle-hymns that call their ancestors down into their arms; the Othran breed shamans, paint themselves in skeletal white, and bury their dead upright to face the coming storms; the Kelathi are bone carvers and smiths of the highest skill; the Ashkari maintain the sacred fires of the Great Shrine; the Bonefist communicate exclusively through gestures lest they disturb dishonoured spirits; the Marrowmouth produce tattoos to etch previously oral histories on flesh; the Drenshi are the hagglers and control the flow of resources on the steppe; the Morgrul guide riders through storms; the Meadjaw are ferocious fighters after a few drinks; and the Ingdeth, strangest of all, will draw no blade until death is certain, holding an early sword a disgrace.",
          "Within a clan the war-leader is only the sharpest of many roles. Raid-captains plan the taking of a season; campkeepers - the elders and menders who hold the practical life together - know the water, the grazing, and the ways of the fire, and command a authority the young forget at their peril. Women ride, raid, and lead as men do, weighed by the same deeds, and age is honoured for the memory it carries, since a people without written records lean on their elders as living libraries. It is a society with little formal hierarchy and enormous informal weight, where a reputation is built across a lifetime and can be unmade in a single afternoon.",
          "At the ragged edge of Horde society ride those who have slipped its bonds: the raider camps of the borderlands, made of the exiled, the disgraced, and the merely faithless, who keep the Horde's tactics but have shed its code. To the clans they are a grief and an embarrassment, kin gone feral, preying on caravan and cousin alike with no restraint. The Horde has always adopted captives into its bloodlines and always cast out those who could not keep faith; but the schism and the long war have swollen the outcast camps past anything living memory holds, until the border runs thick with riders who answer to no ancestor at all.",
          "Beneath every rivalry, the clans have always known themselves as a single people, and once a decade they make the knowledge flesh, converging on the Great Shrine to feast, to marry, to settle old blood, and to remember that they share ancestors and an afterlife. That is the certainty the schism has wounded most cruelly, for the break did not fall between strangers. It ran through households, so that a rider on the open plain may face a brother behind a settled wall, an aunt across a levelled spear, a cousin turned enemy over a choice their parents made. A people who have always been one are learning, family by family, what it is to be two."
        ],
        "champions": [
          "Nobody knows how old Dravid Stormborn is nor how many raids he has completed. They only know of his natural strength harnessed through years of dedication and craft - the Horde's strongest warrior,  who races alone. He has never won a great rotation, nor does he intend to, always partaking in it on foot, always coming last. To use a mount, to him, is to forsake the mortal experience of life on the steppe."
        ]
      }
    },

    "greymark_dominion": {
      "title": "GREYMARK DOMINION",
      "name": "Greymark Dominion",
      "headerImage": "assets/img/dominion.jpg",
      "tabs": {
        "overview": [
          "To the riders of the open steppe, the Greymark Dominion is a wound and an insult - kinsmen who broke their oaths, abandoned the clan life, and shut themselves away behind walls of dead stone. But to the refugee, the outcast, and the foreigner with nowhere left to go, the Dominion is something far rarer: the one land in all the contested borderlands that asks not where you came from, what god you keep, or whose blood runs in your veins - only whether you will help build what comes next.",
          "The Dominion is young, born barely a generation ago when a faction of the Horde chose to stop riding. They would keep the ancestors, they declared, but honour them in halls of stone rather than on the move; they would set down written law, raise permanent towns, and trade the freedom of the endless plains for the promise of something that might endure. It was heresy to those they left behind, and the two peoples have battled over the choice ever since. Yet the settlers have never looked back - their towns sprawl outwards year by year, raw and unfinished, swelling with all the world's castoffs.",
          "Where the old ways prized honour earned beneath the eyes of the dead, the Dominion prizes the living and the new. Anyone may belong here, and anyone may rise - by wit, by wealth, by usefulness - and its great questions are settled not by a war-leader's deeds but by argument, in councils and assemblies where merchants, settlers, and migrants all press their claims at once. Even the dark-dwelling Lotherkald elves of the Lefranthan Empire and other once-foreign peoples have found a place within its borders and brought with them strange arts and faiths the steppe never knew. The Dominion is a nation still arguing over what it wishes to be, and it counts that freedom its greatest strength.",
          "But a nation built so quickly, from so many mismatched pieces, does not hold easily. Its councils squabble while its merchant houses chase private fortunes; its lofty ideals run thick with opportunism, and more than one fortune in its boom-built capital was raised on a lie. Hemmed in by the Horde that names it traitor and the Lefranthan Empire that watches it with hungry patience, the Dominion's settler experiment may yet prove its undoing."
        ],
        "environments": [
          "The Dominion has been raised in a single generation on ground that has never before carried walls. Stone towns rise from its grass, fields fenced from old pasture, and roads cut where there were once trails. To the Horde, it is a betrayal of hammer and timber. To their people, it is a hopeful future, hauled up out of the earth by the hands of those oppressed the world over.",
          "At its heart, on the coast of a small inland sea, sprawls Phax. It is a disorganised boomtown of a capital city that has grown fast with the opportunities it presents. The Dominion welcomes all peoples, so its towns and Phax's neighbourhoods are a clamour of tongues and faiths under a new shelter: steppe-born settlers, refugees from orcish raids, Lotherkald who traded their hegemon for a new promise, and merchants, zealots, and chancers from every border hoping to capitalise on the early nation. It is governed, in theory, by councils and assemblies, but influence tends to drift towards the loudest merchant families.",
          "Underneath the stone remains the old country; the same burial mounds dot its fields, and the same ancestors lie beneath the foundations of its halls - honoured instead in permanent shrines of wood and cloth. In the centre of Phax is the Ironbark Standard, a symbol of their settlement.",
          "The Dominion's curse is its position, sitting as a new buffer between two great powers that would prefer it didn't exist. The Horde to the west sees it as a traitor, and the Lefranthan Empire to the north sees it as tumultuous ground ripe for the taking. Its eastern frontier grows more dangerous with every year, thick with Nogruk raids and imperial eyes. Its western edge weeps with blood. The young nation, made both rich and vulnerable by the openness that built it, survives on the narrow margin of being worth more to its neighbours alive than dead."
        ],
        "religions": [
          "The Greymark Dominion is one of two nations in Bellos without a faith of its own to enforce. Founded as a refuge for anyone willing to settle and build, it threw its doors open to every culture and creed that came, and its towns are now a jostle of gods and faiths. There are few religious institutions here. The Dominion's faith is the one carried out of the steppe, and is now more cultural.",
          "At its root, the Dominion is still a Greymark people, and it still keeps the ancestors. The dead are honoured here as among the Horde - the same Host, the same Endless Steppe, the same conviction that the living are watched and weighed by those who came before, but settled life has reshaped the practice. The Dominion raised permanent ancestor halls and shrines of carved wood, and regards the Horde's endless charms and veils as sincere but excessive, yet still treats them with superstition. Their raid tokens have become marks of achievement more than charged spiritual objects, their masks are wood rather than bone, and their cultural core is the Ironbark Standard, planted to declare that here the Greymark peoples have come to stay.",
          "Due to its various peoples, in Phax a person can find ancestor-halls, foreign shrines, street-corner preachers, and household spirits within a few streets of one another, and the Dominion's habit is simply to let them be. This openness is the closest thing the young state has to a shared belief: that no one creed should hold the others by the throat, and that a people made of many peoples is better bound together by trade and tolerance than by a single demanding god. That same openness, however, lets in a scrap for dominance. The Esirianfan Church of the Empire has been pressing missionaries into the Dominion for years, preachers who speak of unity and order and the proper custodianship of civilisation, and who see in the Greymark schism an opportunity to unite the faithless under the Flame, and bring them, through it, into thrall to the Empire itself. Erath Augustus decreed the construction of churches on their behalf.",
          "The Church has spread through the Dominion's towns and trade-routes with startling speed - a creed of unity and recovered glory, of a people and a faith made whole again, carried in plain pamphlets and plainer sermons and received most eagerly by those hungriest to believe their hard new country means something. It asks little and promises much. It is a fervent new doctrine that is winning hearts."
        ],
        "life": [
          "Life in the Dominion is lived at the speed of building. There is no bell and no tithe to mark the hours; the day is called instead by the caravans coming off the Red Moon Road, the barges on the inland sea, and the criers of a dozen rival ventures shouting their prospects in the street. It is a place where a person may arrive as no one - no name worth keeping, no past worth confessing - and be someone by the season's end. A fresh land of opportunity. Second chances are the local currency, and everyone in Phax is spending one.",
          "The building itself is a way of life, and half the population seems to hold a stake in some scheme to raise, drain, dig, or ship something before a rival does. Tents harden into timber and timber into stone within a single life, so that a returning traveller can lose the street they were born on; fortunes are made overnight and lost by morning; and speculation is so much the civic air that a Dominion man will invest in a venture the way a Lefranthan attends a feast-day - as a thing one simply does. It is exhilarating, precarious, and exhausting, and its people would not trade the churn for all the marble in Yelona.",
          "Out of the collision of so many transplanted peoples, something new has begun to set. A rough trade-cant fills the markets, blending a dozen tongues into one; foods no homeland would own are cooked on the same fire; steppe feast-days and refugee rites bleed into a shared, improvised calendar that belongs to none of them and all of them at once. And in the last few years a first true generation has begun to grow up knowing no other home - children who are not settlers or exiles or refugees, but simply Dominion, the first of a people the world has not seen before.",
          "Beneath the optimism runs a harder grain. The Road is not safe, the western marches weep with the schism's blood, and the lawless edges of the frontier keep their own rough justice where the councils' writ runs thin. For every honest venture there is a dressed-up swindle, and a country that asks no questions is a paradise for the clever and the crooked alike. The Dominion prizes all of this as freedom, and calls its disorder the price of hope. It has not yet had to learn what the freedom costs when a real fire comes - only that, so far, no fire has."
        ],
        "people": [
          "If the Dominion has anything like a founding aristocracy, it is the settlers who first chose to stop riding - the Greymark clans-that-stayed, ancestor-keepers to the bone but heretics to their mobile kin, who reckon themselves the makers of the nation and carry a certain first-comer pride into its halls. They are already outnumbered by everyone who came after, and the tension between them and the polyglot newcomers is the spine of Dominion society: the founders sure they built the house, the arrivals sure they are the ones now living in it.",
          "Everyone else came to become someone else. The Dominion draws the world's castoffs - freed and runaway peoples, deserters and exiles, the ruined and the hunted, the ambitious and the merely desperate - and it lets them shed their old selves at the porous borders, taking new names and burying old lives with a thoroughness no settled land would permit. It makes for a people of reinventors, generous and guarded in equal measure, quick to help a stranger and slow to trust one, all of them carrying a past they have agreed among themselves not to mention.",
          "Real power, whatever the councils pretend, has settled on the merchant houses. The great Phaxian families rule by leverage rather than title - who they employ, who they lend to, who owes them - and they are busily inventing themselves into a nobility the Dominion was founded to do without, complete with feuds, marriages-as-mergers, and dynastic ambition. Some rose on genuine enterprise; more than one rose on a fraud dressed as a venture, and a few have lately taken to funding churches and causes to launder a name. They are the closest thing the young nation has to lords, and they are making up the part as they go.",
          "What holds so mismatched a people together is a single fragile idea: that a nation of many peoples is better bound by trade and tolerance than by any shared blood or god. It is an untested faith, and its real trial is only now being born - in the first children who know no homeland but this one, and who will decide whether a nation of chosen strangers can harden into a people with a shared past. The Dominion believes it is building a homeland. Whether it has built one, or merely the world's most hopeful marketplace, its children will be the ones to answer."
        ],
        "champions": [
          "None yet known."
        ]
      }
    },

    "snowfals": {
      "title": "SNOWFALS",
      "name": "Snowfals",
      "headerImage": "assets/img/snowfals.jpg",
      "tabs": {
        "overview": [
          "Most who speak of the Most Serene Republic of Snowfals speak of its money. The great city that anchors the Republic straddles an icy strait at the top of the world, and through that strait passes a fair share of everything the world buys and sells; its harbours are forests of masts and its counting-houses heavy with coin. Despite this, the Republic was founded on a war of liberation, and beneath the mercantile prosperity runs a stubborn older conviction: that no one, anywhere, is born to be ruled.",
          "Three centuries ago these were subject lands of the Lefranthan Empire. Then came Clayard the Blonde, whose single command, to rise, turned scattered grievance into revolution and revolution into a free people. Clayard won the war and then, her work finished, simply vanished, leaving behind both a nation and a faith. Its people remember the price of that freedom in every shrine and on every weathered wall, and they have made themselves accordingly: hard-handed, proud of their endurance, slow to kneel, and certain they could outlast another winter, another siege, another empire, if it came to that.",
          "Two faiths sit at the Republic's heart, and between them they explain it. From the Word of Clayard comes its love of liberty and its distrust of kings. From the old spirits of the coast, and chiefly Mostal, Lord of Balance, comes its temperance: the belief that excess in any direction invites ruin, and that a thing kept in measure lasts longest. So the Republic governs itself by argument rather than decree. Its captains, traders, and elders meet, haggle, and vote, and power changes hands without changing the shape of the state. It calls itself Serene because it learned, at great cost, to prize a steady hand over a strong one.",
          "A republic grown rich, though, is not the same animal as a republic born poor and desperate. The wealth that pours through the strait has bred merchant houses with interests of their own, and not all of them are content to share. Where their ancestors bled for the freedom of strangers, some of the comfortable now ask what freedom is worth to people with everything to lose. The walls have held against every enemy for three hundred years. Whether a faith born of revolution can survive three hundred years of prosperity without toil is its core mystery."
        ],
        "environments": [
          "The Most Serene Republic of Snowfals occupies the cold north-west of the world, a country that by every expectation should have stayed poor and empty - swamp and standing water in its belly, tundra and ice at its top, hemmed by deep forest on every other side. That it became instead home to the most populous, and one of the wealthiest cities of Bellos, is a source of pride - never letting anyone forget the cost of it.",
          "The heart of the Republic is water. Broad marshes and black swamp spread inland from a central lake, where firm ground comes in islands and the roads are as often poled as walked. Out of this rises Faldeholl, the capital, a vast city straddling the isthmus where the wetlands meet the sea - the most populous settlement in the world and one of its greatest markets. To stand in its harbour is to observe the flow of every nation. Only Kul is wealthier, but less humble; its banks and merchants are treated with utmost respect.",
          "North of the wetlands, the land hardens and climbs into tundra, and then to true ice - a white frontier of beautiful fur, whale-oil, and the cold-quarried gems the Republic guards most jealously of all. This is the harsh edge that made the soft centre possible: the arctic reaches supply what no warmer country can, and the people who work them come back lean yet sturdy. Snowfals smiles like a diplomat and its spirit endures like permafrost.",
          "Between the frozen north and the drowned south run the central dark hills. To the east, where the hills give onto forest, the land pinches to a single narrow gate against the Lefranthan Empire - and there sits Ynathaeasha, the watch-city, a forest-shadowed fortress guarding the one road by which the old hegemon might ever come. The Snowfals tore their freedom from that empire three centuries past, and though now cordial, they remain untrustworthy. Southward the forests thin and run out altogether at the border with Midwel, the Republic's one easy neighbour, and the only frontier its merchants cross without first counting their guards.",
        ],
        "religions": [
          "The Most Serene Republic of Snowfals keeps two faiths. The folk pantheon represents balance; the new religion, revolution. The two faiths co-exist forming a unique Snowfallian culture and founding belief - that when the world falls out of equilibrium, you rise.",
          "The bedrock is Mostal, the Sacred, lord of balance and named by many the maker of the world. His is an old faith of harmony, far older than the Republic itself: the belief that all things must be kept in order, as excess in any direction breeds ruin, and that whatever does not give rise to evil is owed respect. Its practitioners tolerate other gods readily, judging them by their fruits rather than their doctrine, and are disciplined to waste nothing, sanctifying all creatures great and small. Mostal's worship runs deep beneath everything the Snowfallian do, from the keeping of their accounts to the keeping of their borders.",
          "Atop that ancient ground stands the younger and louder faith: the Word of Clayard. Clayard the Blonde was, according to legend, a mortal who became a goddess - a revolutionary who rose against the Lefranthan Empire three centuries ago, led the war that won the Republic its freedom, crying a single word, 'RISE', and then vanished from the world with the victory still in her hand. From that cry came the faith, freedom through revolution, the throwing-down of tyrants, and a promised peace at the end of all the rising. It is a creed made for the moment of liberation, and the Snowfallian always remember her, adding to Clayard's company each generation the names of other liberators who earned a place beside her. Where Mostal teaches the Snowfallian to endure the world, Clayard teaches them when to remake it.",
          "That the two should sit together is, to the Snowfallian, no contradiction at all. Mostal is the long peace; Clayard is the necessary war that defends it. A Republic built on balance still had to fight to exist, and a faith of revolution still wants, in the end, a world settled enough to keep. So the Snowfallian pray to Mostal, and swear by Clayard who told them to rise, and read their own armed serenity as divine proof of both. It makes for a people unusually hard to push and to fool - patient where patience serves, and capable, when cornered, of total ferocity that brittle nations never see coming."
        ],
        "life": [
          "Snowfallian life is woven out of associations. A person belongs to a guild, a captains' company, a canal-ward, a mutual-aid brotherhood, and it is through these overlapping fellowships - not through lord or parish - that they are fed in hard times, buried with honour, married, apprenticed, and known. The guildhall is a second hearth and a first loyalty; to be companyless is to be nearly a non-person. It makes for a busy, sociable, slightly clannish public life, thick with dues and dinners and standing quarrels, in which a Snowfallian is never quite alone and never quite unwatched by their own.",
          "The mercantile day has a moral texture the Republic wears with pride. Industry is a virtue and idleness a small disgrace; waste of any kind is close to sin, so that thrift is practised in the counting-house and the kitchen alike, and the ledger is kept as carefully as a conscience. Wealth here is worn soberly rather than flaunted - the richest merchant may dress little better than his clerks - and a fortune is respected less for its size than for the steadiness of its keeping. A Snowfallian measures a good day by what it added, to the purse and the community both, and reckons a squandered one a quiet offence against the balance they were raised to keep.",
          "For all their easy trade-manners, the Snowfallian keep two faces, and outsiders often meet only the first. There is the smooth, patient, diplomatic surface - courteous, fair-dealing, endlessly willing to negotiate - and beneath it the permafrost: a hard, stubborn, slow-warming core that does not forget a wrong or a kindness, and that closes ranks like ice when the Republic is threatened. They are slow to make a friend and slower to become an enemy, but they are the last people in the world one should mistake serenity for softness in.",
          "The year itself is shaped by endurance. The long northern winter drives life indoors to the guildhall and the hearth, months of close company, stored provision, and careful husbandry of warmth and coin; the brief thaw brings the return of the fleets, the reopening of the strait, and a burst of trade and festival crammed into too few weeks. Their feast-days are as often for freedom won and hardships survived as for any harvest. It is a life built to outlast the cold - and the Snowfallian carry that shape in their souls, a people who have made a virtue of the simple, unglamorous act of getting through."
        ],
        "people": [
          "The Snowfallian are, in the main, a single stubborn stock, grown from the northern seafaring folk who settled these cold shores before the Republic had a name, and hardened by long isolation behind ice and forest into a strong, plain, shared character. They are people in a world that keeps stranger things, and they wear it without apology: blunt, hardy, industrious, and proud of an independence they know they earned rather than inherited. What warmth they have is kept for their own; what patience they have is nearly bottomless; and what they lack, cheerfully, is any talent for being ruled.",
          "Rank is a matter of wealth and standing, and both are meant to be earned afresh. The great merchant houses and captains' families anchor the Republic and speak loudest in its councils; beneath them spreads the vast, comfortable middle of traders, shipwrights, guild-craftsmen, and clerks who are the true body of the state; and below them labour the hands of dock and quarry and the hard northern trades. It is not an equal society, whatever it tells itself, but it is a mobile one - a quarry-hand's grandson may sit in council if the family prospers - and the pretence that no one is born above another is one the Snowfallian take seriously enough that it half comes true.",
          "The great port at Faldeholl takes in sailors and traders of every nation, and Faldeholl absorbs the ones who stay the way it absorbs everything - filing them into a guild, a ward, and a share of the work until, a generation on, their grandchildren are simply Snowfallian. Belonging here is civic before it is ethnic: pull your weight, keep your word, and keep the peace, and the Republic will make a place for you, whatever face you were born with. It is one of the few nations in the world where the question is what you do rather than what you are.",
          "But this is a people forged poor and now grown rich, and every virtue they prize - endurance, thrift, solidarity, the levelling suspicion of the high - was cut to a hard measure they no longer entirely live by. A comfortable generation is rising that never knew scarcity, that hears the old songs of the liberation as history rather than memory, and that has begun to ask, ever more openly in the guildhalls, what the freedom of strangers is worth to people with everything to lose. The Republic still calls itself Serene but the younger generation are forgetting what made it such."
        ],        
        "champions": [
          "None yet known."
        ]
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
          "Midwel encompasses two faiths in its culture, but has forgotten how to practise either. From the Word of Clayard it takes a fondness for freedom; from the old coastal spirits, and Mostal above all, it takes the conviction that the world holds a balance worth defending against the things that would break it. Nowhere is that plainer than in its hunters. The Kingdom breeds noble houses sworn to ride out against the monsters other lands whisper about, and the greatest of them are spoken of like heroes in the villages and given a wide, wary berth at court. To common folk they are legends. To their fellow nobles they are a reminder that some duties are too ugly to leave to anyone but the very proud.",
          "For all its mountains, Midwel let its real danger in long ago, and it came wearing a friendly face. The Word of Clayard, which teaches that no one is born to rule, has put down deep roots in a kingdom founded entirely on the idea that some are. The creed the crown tolerates in its chapels is the same creed that has toppled empires, and it has been spreading among the common folk for generations, in spite of top-down anti-religious enforcement. Add the steppe raiders who have already torn pieces from the southern marches, and the old song begins to sound less like a triumph than a warning. Midwel's knights can hold the mountain passes against any army. They do not know how to hold them against the new."
        ],
        "environments": [
          "The Kingdom of Midwel is perhaps the most stable nation of Bellos, and it has its mountains to thank for the privilege. Where the rest of the world is in flux, Midwel has spent centuries as a green and ordered realm of knights and noble houses, fertile valleys, and old loyalties - a feudal kingdom in the classic mould, shielded on its hard frontiers by a great wall of rock and left free to grow comfortable behind it. Its mountains climb into snow and are breached by a handful of passes. The northern passes lead into Lefranthan lands, while the rest lead to the Horde. However, the reason the kingdom raises monster-hunting houses is to fight the monsters that lurk in its high peaks.",
          "The heart of Midwel is its rolling country: lush hills and broad valleys running down to a long western coast, worked by generations of the same families and watched over by the same noble lines. Cadeholl, the capital, sits as a coastal fortress above the western water, seat of a stable monarchy. Further inland the country is a patchwork of open savannah.",
        ],
        "religions": [
          "Midwel is the strange exception among the powers of the world, putting its faith in knowledge rather than the divine. Its pride and its energy have gone instead into the study of the world itself, and its veneration toward its noble houses and the King, Guillaume Cadeholl, himself. In Midwel, you are safe as long as you place the kingdom above faith.",
          "The kingdom has poured its ambitions into science - alchemy, natural philosophy, the workings of the body and the beast, the engineering of metal and machine - and this is no fashion of a few noble houses but the temper of the whole realm, from its courts to its workshops to its schools. Its most famous house, House Black, is simply the sharpest edge of the common mind: monster-hunters who treat even the horrors of the world as problems to be studied, dissected, and mastered.",
          "Midwel does not persecute the act of belief; it persecutes its organisation. A person may keep whatever god they like at their own hearth, and the crown will never ask - but let a congregation form or preach to a standing crowd - and the sword comes swift. The Esirianfan Church and Mostal are treated alike. A mass of people moved by one voice towards one feeling is the single thing a kingdom of lords and laws cannot abide, whatever they happen to be chanting. Faith in Midwel is mute. House Black's worship of Mostal remains behind laboratory doors. The Word of Clayard, the revolutionary goddess who bids the conquered rise against their masters, has spread into Midwel from the north. A creed whose central act is revolution, it is the faith most fiercely broken whenever it dares to gather, and the faith with the most reason to gather regardless.",
          "By forbidding religious gatherings, it raised two slow problems in its place. Its sciences keep reaching, generation by generation, towards arcane forces older and stranger than the rational mind is ready to understand. And beneath its calm, governed surface, a banned god of revolution gathers strength in cellars and back alleys among people who were never argued out of belief, only forbidden to share it aloud."
        ],
        "life": [
          "Life in Midwel keeps the shape of an old and comfortable order, turning on the manor, the harvest, and the long round of obligation between lord and commons. The lord's hall is where justice is heard and grievances settled; the tourney season and the hunt mark the calendar where feast-days would elsewhere; and a young life is measured out in apprenticeship, service, and the slow earning of a place. Chivalry here is lived rather than merely spoken - a lord who feasts while his people starve is held in open contempt, and the code that rank is a debt owed downward is enforced as much by common expectation as by any law.",
          "Yet threaded through this feudal round runs a second and stranger prestige, for Midwel honours the workshop nearly as much as the hall. Its towns keep colleges and academies of alchemy, natural philosophy, and engineering, and to be bound apprentice to a master-philosopher is as honourable a path as service to a knight. A clever child of low birth who elsewhere would climb through a church here climbs through a school, and the kingdom's great discoveries are toasted like victories. It makes for an unusual society - one where a manor's second son might be sent to the lists or to the laboratory with equal pride, and where the two paths, blade and beaker, are forever intermarrying.",
          "The court at Cadeholl is the sun the noble houses orbit, and its season is a pageant of marriages, alliances, and inheritances conducted with all the ceremony of a stable and ancient monarchy. What a stranger notices, and cannot quite place, is the silence where religion should be: the calendar is broken by harvest fairs, founders' days, and dynastic celebrations rather than holy ones, and no bell calls anyone to any temple. A devout visitor from the Empire finds it eerie - a whole kingdom of feast and courtesy and order, with the sacred simply absent from the public air.",
          "It has not been swept away, of course, only driven indoors. Because the crown breaks any faith that dares to gather, devotion in Midwel has gone small and private - the household shrine, the whispered grace, the god kept behind the laboratory door - and a curious double life results, a sunlit kingdom of knights and scholars above and a muffled, patient, unspoken devotion below. Most Midwelians think nothing of it; it is simply how one lives. But a great deal of feeling with nowhere to gather does not disperse. It waits, and it presses, and in a kingdom this content, few are watching the pressure build."
        ],        
        "people": [
          "Midwel is a kingdom descended from refugees who crossed the mountains generations ago to escape the Lefranthan Empire and never once looked back. That founding flight still marks them: they are a people who won their peace by walking away from a greater power, and who built, behind their wall of rock, a proud and inward society that regards the wider world as mostly trouble best kept at a distance. They are courteous, orderly, and confident to the very edge of complacency, certain that their green and reasonable kingdom is simply how civilisation ought to be arranged.",
          "Their society climbs by two ladders at once, and the strangeness of Midwel is how the two entwine. There is the ancient ladder of blood - the crown and the long roll of noble houses who hold their lands for generations and furnish the realm its knights - and beside it the newer ladder of learning, by which a brilliant commoner may rise through the colleges to honour that birth alone could never buy. Nobles dabble in natural philosophy to keep their standing; commoners are half-ennobled by a discovery; and the two prestiges court and resent each other endlessly. In Midwel, a great mind is very nearly as good as a great name - a thing that would scandalise the Empire and does scandalise the older houses.",
          "Apart from both stands a caste all its own: the monster-hunting houses, of which House Black is the most storied. Neither quite noble nor quite common, marked by the grafts, elixirs, and hard sciences they turn upon their own bodies to match their quarry, they are the people the kingdom summons when true horror walks and would rather not think about in between. The common folk adore them as living legend; their fellow nobles honour them and keep a wary distance, giving them a wide berth at court and a warm welcome only when something needs killing. They are Midwel's cutting edge and its uneasy conscience, and the clearest proof that the kingdom's faith in knowledge is paid for in scars.",
          "Over all of it presides King Guillaume Cadeholl and the house that bears the capital's name, the keystone of a people bound less by faith than by a flattering story about themselves - chivalrous, rational, and free, safe behind their mountains, ruled by lords who earn their rank. It is a good story and largely a true one, and that is exactly its danger, for a people this content are slow to feel the ground shifting beneath them: a forbidden creed hardening in their cellars, and their trusted sciences reaching, up in the high peaks, toward things older and stranger than any disciplined mind is ready to hold."
        ],     
        "champions": [
          "None yet known."
        ]
      }
    },

    "nog": {
      "title": "NOG",
      "name": "Nog",
      "headerImage": "assets/img/nog.jpg",
      "tabs": {
        "overview": [
          "Sailors have a saying about the black ships out of the frozen south: you see the sail before you see the storm. Nog is a kingdom of orcs built on a coast that should not support a kingdom at all, a place of iron cold and short, brutal summers, and its people long ago decided that if the land would give them nothing, they would take everything they needed from the sea and from everyone on the far side of it. For five centuries its fleets have carried that decision to other people's shores.",
          "The Kingdom was hammered together by Ulzugnud the Unyielding, a conqueror who won an empire by sea and then turned on his own people's past, declaring the old ways a shame to be burned out rather than honoured. From that purge came Vrarudism, the creed that still drives them: a hard faith teaching that comfort is rot, that hardship is the only honest teacher, and that destruction is not the end of a thing but the price of its rebirth. A Nogruk raised on this does not fear ruin. He half expects it, and means to be the one walking out of the wreckage.",
          "In Nog, weakness is the single unforgivable sin, and results are the only argument anyone respects. Birth counts for little; the captain who comes home with plunder and the captain who comes home with reasons are not spared by their fathers' names. Worth is proven over and over by what a man can survive and what he can take. This makes the Nogruk relentless and very hard to discourage. It also makes them exhausting to rule, because a people taught that destruction breeds rebirth are never wholly certain their own masters aren't the next thing due to be torn down.",
          "That is the bomb at the centre of Nog. Its fleets have swallowed islands and coastlines, but they broke at last against the riders of the steppe, who could not be caught and would not be cowed, and a kingdom that measures itself by conquest does not take such limits well. Denied easy enemies abroad, its ambition has turned inwards. In the high court, rivals smile and scheme and arrange one another's failures through hands that can never be traced, because open feuding is forbidden and the purges that follow a misstep are not. Nog's enemies have learned to dread its navy. Its courts have learned only to dread their rivals within."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": [
          "The Kingdom of Nog rose to power from the south-eastern taiga at the edge of the world. An orcish realm hacked out of black forest, frozen bog, and the great ice beyond - a country so unforgiving that its people long ago stopped expecting the ground to feed them and turned instead to the sea. Nog was born in conquest and developed by its colonial exploits, and it has made a virtue and religion from both. There is no softness anywhere in it. To be of Nog is to have decided, generation upon generation, that the world owes you nothing and that you will take it regardless.",
          "Inland, Nog is a dark country of dense conifer forest and standing water, where boreal woods crowd down to the coast and the rivers run cold and slow through bog and fen. Little grows easily here, and the settlements within sit sparse but stockaded, its people hardened by a climate that kills the meek. The Nogruk refuse to be beaten by their home.",
          "Nog's true country is the sea. Where the land is poor the cold waters are not, and the Nogruk have always reached outward across them - a maritime, colonising people whose fleets and longships carry their grasp far past their frozen shores to their scattered island-holds and distant coasts. At the meeting of forest, river, and ice stands Gha, the frozen port that is their capital and their gate to the wider world, a harbour that never entirely thaws. On the water Nog is formidable; off it, far less so. Generation after generation the kingdom has flung its naval might at the Greymark plains and watched it come to nothing against the riders of the steppe - a humiliation that gnaws at its courts.",
          "To the west are their original kin of Grug. And at Nog's south lies the great ice. The kingdom's southernmost holds sit out on the glacier itself, lonely outposts staring into a white void, monitoring whatever may stir within from where they spawned."
        ],
        "religions": [
          "The Nogruk believe, above all else, in never yielding. Its faith is Vrarudism, the creed of Ulzugnud the Unyielding, preaching that weakness is death and the past must be forgotten. It is a hard, forward-driving doctrine for a hard, forward-driving nation, asking only for a refusal to stop. Ulzugnud, the conqueror-prophet, forged the kingdom out of brutal war. His teaching is austere and pitiless. Destruction of the weak and the old is a necessary step to rebirth. The faith is kept through ritual dedications, formal oaths and trials by which a Nogruk binds themselves to the path of perseverance. To yield is the only true sin. To endure is righteous.",
          "The Nogruk are an orcish people descended from Grug, and Vrarudism's founding act was to reject it. In the kingdom's making, the old beliefs were branded the cause of every shame the people had ever suffered, and those who clung to them were purged in their first victory. A faith that began by erasing its own past does not flinch at remaking anything else. Lived out, Vrarudism is as much a way of ruling as a way of believing. The courts of Nog run on its logic precisely: a nest of ambitious factions in which weakness is fatal, success must be seized and held, and failures are cut out. It makes the Nogruk formidable, forever driving toward the next conquest because the doctrine recognises no point at which striving is permitted to stop.",
          "Beneath the creed runs an older faith that Vrarudism has never managed to cull, the Khuld naval tradition. The Nogruk live and die at sea, and sailors are not easily argued out of their gods - so sea-spirits and the worship of great dead raiders persist on every deck. To the strict Vrarudist it is superstition, a softness fit for purging. To the people who actually crew the longships through the brutal seas of the far south, it is the only faith that has ever reliably answered when called. The kingdom's grand ambition has made an ally of the truth of the ocean it depends on."
        ],
        "life": [
          "A Nogruk life begins as a series of hardships to be beaten. Children are set against cold, hunger, and fear the way other peoples set them to letters, for the household holds that comfort is a rot and that only what is survived is worth anything; warmth is rationed, softness corrected, and a child who does not complain is a child well raised. The settlements ashore are stockaded and sparse, austere in their comforts by deliberate choice, and a Nogruk at rest is understood to be merely a Nogruk between undertakings - impatient, and half-ashamed of the pause.",
          "The truest life, though, is lived at sea. The brief and brutal thaw brings the fitting-out of the fleets and the long voyages of raid and trade, and it is on the deck, far more than in any hall, that a Nogruk is fully themselves - schooled, tested, fed, and made. A ship's company is a small and merciless family in which the sea punishes weakness the crew has not already punished, and a person's worth is retallied with every voyage regardless of the name they sailed under. Whole lives are spent between the fitting-out and the return, and a Nogruk ashore too long grows restless in the bones.",
          "The passages of a life are marked not by holy days but by provings. A first voyage, a first command, a first raid, the avenging of a shame - each is a formal trial, sworn and witnessed, that binds a Nogruk one notch further onto the path of never yielding. What festivals they keep are austere, martial affairs, more oath-taking than revelry, where mercy shown too freely is remarked upon as a fault to be mended. A people raised entirely on the doctrine that hardship is the only honest teacher become, in the living of it, exactly what the doctrine intends: unsentimental, relentless, and very nearly impossible to discourage.",
          "Much of Nog does not live in Nog at all. A maritime empire scatters its people across island-holds and distant colonies and the decks of a hundred ships, so that a Nogruk's home is as likely to be a raw settlement on a stolen coast as the frozen streets of Gha. It is a diaspora held together by creed rather than soil - and by a restlessness that never lets any of them rest. For a doctrine that names every stopping-place a kind of death leaves its people no peace at all; there is always another shore, another proving, another undertaking."
        ],
        "people": [
          "The Nogruk are an orcish people, sprung from the same southern line as the orcs of Grug before the two parted in blood, and hammered since into something distinct by five centuries of their own harsh creed. But the true-born orcs are not the whole of Nog. Beneath them live the descendants of the many peoples their fleets subdued - crews, labourers, and colonists of mixed and conquered blood, Nogruk now in tongue and law and faith, yet never wholly of the first rank, forever proving a loyalty the true-born are simply assumed to hold. It is a colonial ladder standing inside a doctrine that claims to honour only strength, and everyone on it knows exactly which rung they were born to.",
          "Rank is the creed made into a social order: it flows to the strong, the surviving, and the successful, and birth is a starting hand. The kingdom's great figures are its admirals and fleet-lords, whose standing rises and falls with their conquests, and beneath them a whole society is sorted and re-sorted by results - captains, raiders, colonists, and crews, each as secure as their last voyage and no more. There is little pity kept for those who fall; a people taught that weakness is death do not keep a soft place to land. It makes the Nogruk formidable, mobile, and permanently uneasy, a nation that never quite lets anyone sit down.",
          "For a people who scorn inheritance, the Nogruk are surprisingly bound by kin - only they will not say so aloud. Crews function as clans, patrons raise their favourites, and the advantage of a well-placed family passes down under the polite fiction that every soul rose on merit alone. What the creed does hold to honestly is that strength answers to no birth and no sex: a woman who brings home plunder commands as readily as a man who does, and the fleets are captained by whoever the sea has proven, which is one of the few genuinely level things about a deeply unlevel people.",
          "What holds so scattered and self-devouring a people together is the single conviction their creed forbids them to question: that to yield is to die, and that those who never bend will outlast all who do. It has carried them from a frozen edge of the world to fleets that terrify three coasts. It has also left them a nation of restless conquerors slowly running out of things to conquer - and a people bound only by 'never yield', once there is nothing left to take, are a people who will sooner turn on one another than admit the striving might ever stop."
        ],
        "champions": [
          "None yet known."
        ]
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
          "A faith like that carries one flaw it can never mend: it needs pain the way a fire needs fuel. While there were heathens to convert and coasts to take, the hunger had somewhere to go. But the conquests have slowed; old subjects like the rich port of Kul slipped the leash and went unpunished; and a creed that cannot rest will turn its appetite on whatever stands nearest."
        ],
        "history": ["Lefrantha is a powerful empire..."],
        "environments": [
          "The Principality of Grug is the most secluded nation. A forested, rugged theocracy crammed into the world's south-western corner, it is a land of deep taiga and deeper conviction - the most fervent, most pitiless religious state anywhere. While its Nogruk neighbours endure the hardships of the land, Grug worships them.",
          "The land itself is mostly made up of dense forest that chokes its river-valleys, broken only by stretches of black bog and the vast tundra. The forest is where their shrines stand and their ordeals are kept. Settlements sit in clearings hacked from the gloom.",
          "South of the forests the land turns hard and cold - from taiga, to tundra, to the great ice. For Grug, like Nog beside it, sits at the very bottom of the world, spawned from the snow. Its southernmost holds are bleak, half-frozen places clinging to the forest's edge, where the warmth of the deep woods fails and the cold comes up out of the white. The tundra lends itself as a pilgrimage route, the loneliest frontier of a lonely country, ripe with pain and worship.",
          "For all its inward gloom, Grug faces the sea on its western edge, and once reached far across it. This was a conquering, seafaring power in its earlier centuries - orcish fleets that carved colonies from distant coasts and raised the plunder-port of Kul to bleed the steppe of its wealth. That age is over. Kul slipped its leash generations ago and now sits just up the coast as a permanent reproach, a rich and faithless city that Grug built and could not keep. Inland, on its river, stands Gazd, the capital and the burning heart of the faith, where the Principality's fervour runs hottest and its pain-priests rule without pretence."
        ],
        "religions": [
          "Grug worships pain, their religion alien to the rest of the world. Their god is Ar-Nard, the Divine Ancient, and his teaching is not that suffering must be endured but that it must be chased and inflicted upon oneself. To the people of Grug, agony is the source of meaning and purpose, and the wound a person carves into their own flesh is the truest prayer to the Gho-Ludh Church they will ever make, resulting in a hardened and zealous people who draw a strength born from sacrifice.",
          "The doctrine is bleak and absolute. Comfort is a poison; mercy is a cruelty done to the weak; and the only road to strength, meaning, and Ar-Nard runs straight through one's own broken body. A child of Grug seeks pain instinctively, and grows with its relationship to its own flesh turned inside out, so that by adulthood a true devotee feels the lash as warmth, the brand as clarity, the breaking of a bone as joy. This is the thing that diplomats cannot force their minds around - the people of Grug have detached themselves from what the rest of the world considers mortal. They lean into agony, smiling, because Ar-Nard is waiting, and the strength he gives them is measured exactly by how much they were willing to give.",
          "The faith is kept by its pain-priests who remake themselves, year upon year, with blade and hook, until their bodies are monuments to their own devotion - flesh scarred past recognition, skin studded with metal, joints deliberately broken such that every movement is painful. Rank is read off the body: the highest pain-priests are barely men any longer, scarcely able to stand, held upright by faith and iron frame, and venerated precisely because of it. Worship is constant and physical. The faithful open their own backs in prayer, take the brand for every vow and grief, and gather on holy days for trials that would simply kill anyone else - flesh sewn and torn and sewn again, fire walked barefoot, days spent hanging from hooks driven through living muscle. Before a Grug warrior goes to war, they wound themselves first, to call up the strength that only fresh agony unlocks. They march into battle already bleeding. There is nothing an enemy can do to them that they have not already done worse to themselves.",
          "At the summit of all devotion stand the Impenitent, and even by Grug's measure they are a horror. Unshackled by mortality, the Impenitent are creatures of perpetual suffering - devotees bound forever in cages of fire, iron, and barbs - and to be chosen is the single highest honour the faith can grant. The blessed go in willingly, weeping with gratitude, to be welded into a frame that will torture them without pause until the day they die, channelling that endless screaming agony into a strength no unbroken body could ever produce. A smoking, shrieking thing of metal and ruined flesh that Grug granted sainthood, to be venerated and aspired to by its people.",
          "The Grug cannot be bribed, because they want nothing the world can offer; cannot be threatened, because they have already done worse to themselves than any enemy would dare; and cannot truly be understood, because somewhere across the long centuries of their devotion they stopped being a people the rest of the world still shares a morality with."
        ],
        "life": [
          "Every hour in Grug belongs to the Church, and the year is a calendar of ordeals. Life is ordered from the ringing of the first devotion to the last, its days threaded with observance and its seasons built around the great holy sufferings toward which the whole nation bends; even the mundane work of the country - the felling, the forging, the tilling of the bog-fields - is timed and blessed and folded into worship. To live in Grug is to live inside a liturgy, with no hour unclaimed and no corner the faith does not reach into and govern. There is a terrible orderliness to it, the orderliness of a place where nothing at all is left to chance or to the self.",
          "A Grug body is a document, and everyone in the Principality can read it. The scars, brands, and deliberate ruinations a person carries are their biography, their rank, and their papers all at once - a stranger's whole history of vows, griefs, ordeals, and standing is legible at a glance to anyone who knows the grammar of the marks. There is no need of written credentials in Grug; a life is worn on the skin, and to go unmarked is to be a child, a foreigner, or a fraud. The faithful read one another the way scholars read a page, and a newcomer's blank flesh is the first and most damning thing about them.",
          "Beneath the horror there is, of necessity, an ordinary nation: someone must fell the timber, work the iron, till the sour fields, and raise the next generation. This workaday Grug is austere past any comfort - homes kept plain by conviction, food minimal and joyless, ease actively refused as a poison - and it labours under the same debt of pain that governs the priesthood, for there is no comfortable class in Grug exempt from the reckoning. It is a life without softness anywhere in it, lived in grey clearings hacked from the gloom, and its people would be bewildered to learn that anyone considers this a hardship rather than the plain and proper shape of being alive.",
          "The great aspiration of a devout life is the southward pilgrimage. The lonely tundra route toward the great ice is walked as the highest journey a Grug can undertake, a passage of deliberate hardship into the cold and the silence at the bottom of the world, and to make it is to draw as near Ar-Nard as an ordinary soul may come. Pilgrims go thin, scarred, and joyful, and some do not return, which is understood to be a mercy rather than a loss. It is a life bent entirely toward one end, with no rest and no doubt permitted along the way - a whole people, in truth, that seems always to be waiting for something, and walking south to meet it."
        ],        
        "people": [
          "The Grug are an orcish people, the elder branch of the southern orcs from whom the Nogruk later broke away, and they have been shaped less by blood than by five hundred years of a single merciless faith. Where other nations sort themselves by lineage or wealth, the Grug sort themselves by suffering: worth is read directly off the body, so that the most devout are also the most ruined and the most ruined the most revered. It makes them, to any outsider, a nation of the terribly marked - and to themselves, a society of perfect clarity, in which every soul's exact standing is written plainly on their skin for all to see.",
          "The Church is the state, entire, and it governs with a grim efficiency the horror tends to obscure. Beneath the ruling priesthood runs a real apparatus of rule - ordeal-grounds serving as local courts and temples both, registrars who keep the meaning of the brands, orders that raise and lead the war-bands, functionaries who administer a whole country in the Ar-Nard's name. There is a laity, vast and labouring, but no comfortable one: the ordinary faithful hold no priestly rank yet carry the same debt of pain, graded among themselves by the ordeals they have borne. Grug is not merely a nightmare. It is a working nation, and that is somehow the worse thing about it.",
          "A Grug childhood is the strangest passage of all, for a child is born unmarked and must be raised into the debt. The young are turned toward pain rather than away from it almost before they can walk, taught to unlearn the flinch every other creature is born with, and a Grug family's love expresses itself precisely in this hardening - to spare a child suffering would be to damn them. The soft, the doubting, and the merciful, wherever they surface, are treated as the sick are treated: as something to be corrected or cut away. There is no room in the people for the tender-hearted, and those born so learn early to hide it or to leave.",
          "What binds the Grug is the most total conviction of any people alive: that pain is the meaning of existence, and a life without it is a life wasted and unblessed. They cannot conceive of the comfortable world beyond their borders except as a thing to pity or despise - Kul, the port that renounced Ar-Nard to save its skin, is the very emblem of contempt - and they hold their own certainty first and most savagely against themselves, which is why nothing outside can threaten, bribe, or reason with them. But a people bred to suffer, whose old conquests have slowed and whose enemies have gone unpunished, are a people with a hunger and nowhere left to spend it. They have never learned to want less. The world beyond them has never had cause to wonder what they will do when the pain runs short - only, lately, the growing sense that they may soon go looking."
        ],
        "champions": [
          "None yet known."
        ]
      }
    },

    "kul": {
      "title": "KUL",
      "name": "Kul",
      "headerImage": "assets/img/kul.jpg",
      "tabs": {
        "overview": [
          "Kul is the most beautiful place that nobody entirely trusts. Its capital, En, is a wonder built out over warm, shining water, a maze of gilded towers and carved stone where the heavy hand of its orc founders and the fine craft of its human settlers have grown together into something the rest of the world can only envy. It is, by a long way, the richest nation alive. It is also a nation that has never once won a battle it could instead buy its way out of, and sees no reason to learn how.",
          "That instinct runs deeper than the wealth. Kul began as a conquered port, thrown up by the southern orcs of Grug and Nog, before their division, to ship home what they had stolen from the Greymark steppe. When a greater power came for it, its rulers did not fight to the last man; they knelt, changed gods, changed masters, and kept their warehouses. The peoples it abandoned have never forgiven the turn, and Kul has never lost a night's sleep over it. Survival and the massing of wealth - the way Kul reckons all things - are its founding principles.",
          "Where other nations are held together by blood or faith or a crown, Kul is held together by ledgers, and it has made that into a kind of freedom. Anyone may come, anyone may trade, anyone may worship as they like, provided its harbour fees are paid. Its merchant-princes rule by wealth and treat the whole world as a market, and the corner of that market they have made their own is the strangest one of all: the exotic, the ancient, and the arcane. Magic is rare in this world, and mostly feared. En is the one place where a buyer with enough coin can still turn up a relic out of a dead culture, an artefact nobody can quite explain, or some object that more cautious courts would have burned on sight.",
          "The trouble with owning everything is that everyone else wants it, and the trouble with loyalty for sale is that no one believes you will keep theirs. Kul has no real army and never wanted one. Its walls are its wealth and its allies are its account books, and both can come apart faster than stone. Every power it ever abandoned still remembers, and the Lefranthan Empire to the north watches its trade in forbidden things with a cold, patient eye. And then there is the merchandise itself. A city that buys and sells artefacts it does not understand is, sooner or later, going to sell the wrong one, or fail to sell it, and find out too late what it had been keeping quietly on a shelf."
        ],
        "environments": [
          "The Oligarchy of Kul is the richest place in the world, and it has never pretended to be anything more honourable than that. A maritime city-state sprawled across the warm coast of the south-west, Kul is a nation in the shape of a marketplace - wealthier than empires, beholden to none of the things empires believe in, and entirely comfortable with its arrangement. It keeps no grand faith and fights no holy wars. It has grown fat through the exchange of the mysterious and the funding of the unethical, while prouder nations bled themselves around it.",
          "The land gives Kul its character: a low, half-drowned coast of lagoon and channel and scattered islet, lush and warm where the rest of the south runs to forest and ice. Out of this shallow water rises En, the capital and the greatest port the world has ever built - a city raised on stilts and stone above the tide, hand-cut marble, tiered roofs, and shaded waterways, its harbours thick with dhows and deep-sea hulls. The markets of En hold the goods of every nation on the map. It is a beautiful city, but beneath the facade of sculpture sits grime and blood."
        ],
        "religions": [
          "Kul believes in nothing but money. En, its capital, keeps more gods than any city in the world, with shrines and temples to all faiths crowded along its canals - all meaningless commodities to its oligarchs. Its true belief is that everything has a price, and tolerance of religion brings good business. A port that offends no god offends no customer; a city open to every faith is a city open to every purse.",
          "If Kul holds anything sacred, then, it is not any of the gods on its shelves but the city of En itself, and its survival. The oligarchs that rule it keep whatever shrine is expedient and change it as conditions change, and the closest thing Kul has to a sin is not blasphemy but bad business. Kul will mourn no god and martyr itself for none; it has watched fervent nations break themselves on their beliefs and concluded, with the serene confidence of the very rich, that faith is a luxury best sold to others and never bought for oneself. And that is the bet Kul has been making for three hundred years: that nothing will ever come for it that cannot, in the end, be paid off, prayed to, or renounced in time to save the ledgers."
        ],
        "life": [
          "Kul lives better than anywhere else in the world, and makes no apology for it. En wakes to the poling of laden boats through its canals, the cries of a hundred markets, and the arrival of ships from every coast, and its people move through gilded towers and shaded waterways with the easy confidence of the very rich. The cuisine of every nation meets on Kulan tables; its festivals borrow freely from a dozen faiths and belong to none; its pleasures are refined to an art no poorer city could afford. Trade, in Kul, has become a whole way of living well, and the Kulan pursue it with the frank, unbothered appetite of people who have decided that comfort is nothing to be ashamed of.",
          "For a city that reveres nothing, Kul keeps one thing almost sacred: the contract. Everything here is a deal, sealed and witnessed and honoured, and a Kulan's word-under-seal is the one bond they will not lightly break even when nothing else restrains them - for the whole edifice of the city rests on the faith that a bargain struck will be a bargain kept. Notaries, factors, and brokers are its true clergy, and its commercial honour stands in for the moral and religious codes other nations live by. It is a strange, narrow virtue, but a real one: Kul will betray a god, an ally, or a master without a tremor, and pay a debt it swore to on time.",
          "Threaded through the pleasure-city is a grimier and more dangerous quarter - the demimonde of the relic-trade, where antiquarians, brokers, and fences deal in the exotic, the ancient, and the arcane that more cautious lands would burn on sight. It is a world of scholars-for-hire and discreet collectors, of warehouses where wonders and horrors are filed indifferently side by side, of coin paid for objects no one can quite name and questions carefully not asked. Beneath the gilt and the sculpture, this is the trade that truly made Kul, and it runs on smuggling, forgery, and the disappearance of anyone who inquires too closely into the wrong house's products.",
          "And beneath even that lies the other Kul, the one the ledgers prefer not to itemise: the dockhands, porters, smugglers, and bonded poor on whose cheap and endless labour the beautiful city floats. There are, in truth, two cities sharing one lagoon - the gilded one above the water and the drowned one below it - and the first depends utterly on the second while looking at it as little as it can manage. It is a comfortable arrangement, and a precarious one, for a paradise built on a foundation it refuses to see is a paradise that does not know where its own cracks are running."
        ],
        "people": [
          "The Kulan are, uniquely in the world, a people made by commerce rather than by blood or faith. Their foundation is the marriage of two stocks - the orc conquerors who first threw the port up, and the settlers who came to trade and stayed - grown together across centuries into a single mercantile people in whom the founders' hard hand and the newcomers' fine craft can no longer be told apart. To this core the great harbour adds a ceaseless stream of everyone else, until to be Kulan is less a matter of descent than of having thrown one's lot in with the city and its endless bargain. Belonging here is bought, earned, and renewed like anything else.",
          "Kul is ruled, plainly and without embarrassment, by its wealth. The merchant-princes are its true nobility - the oligarch houses whose dynasties command the fleets, the warehouses, and the relic-trade - and among them standing is measured in coin and credit rather than crown or blood, marriages are conducted as mergers, and a house rises and falls with its fortune rather than its name. Below them throngs a broad and prosperous middle of brokers, factors, and shipmasters for whom Kul's openness is a ladder any clever soul may climb; and below them, out of the towers' sight, labours the other Kul, of whom the houses speak as little as they can.",
          "What passes for a Kulan character is a supple, worldly, faintly amused pragmatism - a people hard to shock, hard to offend, and almost impossible to move by appeals to honour, blood, or god, having concluded long ago that all three are luxuries best sold to others. They make generous hosts and ruthless dealers, tolerant of every belief precisely because they hold none too firmly, and they regard the fervent nations around them, Grug's agonies and the Empire's fire alike, with the wary condescension of people who have watched conviction ruin far better cities than it ever built. Loyalty, to a Kulan, is a contract with a term; sentiment is an expense; and only the ledger is ever truly trusted.",
          "It is a clever way to live, and a lonely one. A people who have kept themselves alive by belonging to no one and betraying anyone when the price came due have made, over three hundred years, a great many others with cause to remember it - and have bought, in exchange for their beautiful survival, a place in the world that no one else quite trusts and no one else would quite mourn. The Kulan tell themselves this is simply the wisdom of the rich, and perhaps it is. But a nation whose only true ally is its own account book has never yet had to discover what it is worth to anyone on the day the coin stops answering - and that, the shrewdest of them are beginning, very privately, to suspect, is a day the ledger cannot help them survive."
        ],
        "champions": [
          "None yet known."
        ]
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
        "Ar-Nard the Divine Ancient revealed himself to the Khuld orcs of the southern coasts and showed them fire, in the brand and the forge. He claimed the Khuld must know suffering.",
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
        "The Nine, the most powerful council of Greymark shamans, condemned his sacrilegious means and banished him to Urzul-Mokh - taking this secret to their graves, reciting that Thorgrim Windcaller fell in battle. However, one of The Nine hid the truth deep in Thorgrim's burial mound."
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
        "Her call to rise literally became the Word of Clayard, the new Snowfals religion that swiftly replaced folk belief in Mostal, Lord of Balance. Clayard won the war and founded the Most Serene Republic of Snowfals, and with her work finished, she simply vanished, leaving behind both a nation and a faith.",
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
        "On the Greymark steppe, tension builds between the new and old nations, and a new terror, Bloodwind, preys upon clan and caravan alike. New faiths rise, empires crumble, arcane events occur more frequently - the world is unsure who will survive the change."
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
      "summary": "Theodore proclaims his father, Erath Augustus, to be an innocent man! He wishes to restore the reputation of his family, in spite of his father Erath's great fraud in the Dominion.",
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
      "summary": "Bloodwind's excavations awaken a great beast of the sand. With Orai Kashtamar's help, you slay the Kazgur Worm, and Mors sends its head back to the House Black estate in the Kingdom of Midwel.",
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
      "summary": "Friar Marv Ichtenbjorg of the Esirianfan Church is curious about magic wielders. He is revealed to be... a deviant, and he films a biased view of his lynching for the Church with his scrying eye. Theodore and Baldrick remain committed to the Church.",
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
      "summary": "Hobgoblin mercenaries hired to kill any trackers of Orai attack you. With T'Challa, as the storm closed in, you find that Orai had her memory wiped, as well as armour from the Dominion, Kul coin, and Horde furs in a camp with Bloodwind banners.",
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
      "summary": "With Druvash and T'Challa, you track Orai to the Great Shrine, the site of the Great Rotation - where the clans gather to race around hordelands once per decade, with the winning clan gaining great honour. You meet ten of eleven Horde clans and engage with their traditions. Theodore and Lucien agree to race under the new clan Augustus, with the sigil of a dragon.",
      "discoveredBy": "The Party",
      "nation": "greymark_horde"
    },
    {
      "session": 8,
      "date": "Day 5",
      "title": "One Man & the Future of Greymark",
      "summary": "Ulrich warns a hollow Orai, ahead of her evening clan speech at the Story Circle, that Bloodwind kidnapped her and slew her clan members. Ulrich is told to go to the arena at night.",
      "discoveredBy": "Ulrich Boulder-Axe",
      "nation": "greymark_horde"
    },
    {
      "session": 8,
      "date": "Day 5",
      "title": "The Rebirth of Theodore & The Death of Augustus",
      "summary": "In the Hall of the Windcaller, Torvhan Jarakhi presented Theodore Augustus with a rogue religious leaflet found in a prophetic duststorm. Its teachings directly contradict the Esirianfan Church doctrines that Erath had raised him on. Reading the text, Theodore fiercely branded the Church - 'HERESY!'. This word triggered his Lefranthan cane, transforming it into a majestic rapier. In a shattering moment of defiance, Theodore renounced his faith, cast aside his noble Augustus family name, and was crowned Archpriest Theodore Jarakhi. With his defection, Lucien is left as the sole racing representative of Clan Augustus.",
      "discoveredBy": "Archpriest Theodore Jarakhi",
      "nation": "greymark_horde"
    },
    {
      "session": 9,
      "date": "Day 5",
      "title": "The Rallying of the Horde",
      "summary": "Orai, stricken by grief, delivers her speech to the gathered clans by the green fire of the Great Shrine, naming Bloodwind as the enemy of the Horde. Following her speech, Torvhan Jarakhi honours the party and Orai, and poses the question: 'Who grows fat and rich in their settlements to the east whilst we fight the enemy in our borders?'. The word 'DOMINION!' spreads through the gathering. Lucien has a conversation with his patron.",
      "discoveredBy": "Grinzak the Lesser & Lucien Vex",
      "nation": "greymark_horde"
    },
    {
      "session": 9,
      "date": "Day 5",
      "title": "Where does your strength come from?",
      "summary": "Ulrich seeks the arena. In the sparring grounds, he faces an Ingdeth warrior, who reveals they carry a great burden of shame to keep the clans united. In the arena, Ulrich meets Dravid Stormborn, an immense old monk who has walked the Great Rotation on foot for decades. Dravid asks Ulrich where his strength comes from, dismantling every answer with a flurry of blows, naming his pride, ambition, and Shamecrusher as hindrances to his strength. Ulrich names his friends as the source of his strength, throws Shamecrusher to the ground, and destroys it. Shamecrusher absorbs his might as a final punishment - leaving Ulrich a thin and frail man.",
      "discoveredBy": "Ulrich Boulder-Axe",
      "nation": "greymark_horde"
    },
    {
      "session": 9,
      "date": "Day 5",
      "title": "The Spider",
      "summary": "Grinzak, following the Vassian Korr thread, stumbles over his web of lies, and Torvhan seizes him, placing him in a makeshift prison with two other orcs - also merchants from Phax, with many lies to tell. Lucien breaks Grinzak free by setting Torvhan's shack alight, the two other orcs vanish into the fray, and the Jarakhi begin praying to the fire.",
      "discoveredBy": "Grinzak the Lesser & Lucien Vex",
      "nation": "greymark_horde"
    },
    {
      "session": 9,
      "date": "Day 5",
      "title": "Brother...",
      "summary": "Mors, Lucien, Ulrich, and Grinzak ride east to clear a gorge along the Great Rotation route of a Kazh-Varath - a great predator that kills with bioelectric discharge. The beast restructures mid-fight and Mors feels his own blood respond. With his claws deep in the beast from his killing blow, its body tightens around his arm, its galvanic blood entering his wounds and meeting the elixir in his veins. The two beasts momentarily exist as one, and the Kazh-Varath names him 'Brother'. Mors' scars glow purple as he has a childhood vision, and his body is irrevocably changed - presenting new boons, but at what cost?",
      "discoveredBy": "Mors Harald-Otto of House Black",
      "nation": "greymark_horde"
    },
  ],
  "worldMap": {
    "notes": "Node coords are normalised [u,v] at the CENTRE OF THE PLACE ICON on the map (the drawing above the name): u=x/width (0 = west edge), v=y/height (0 = north edge). To add a place: copy a marker and set id (unique slug), name, u, v, type (capital|city|town|village|ruin|landmark), nation (links to its nation page and tints the pin; omit for none), and an optional desc - a sentence or two shown in the detail card when the node is clicked.",
    "base": {
      "texture": "assets/img/map/base.jpg?v=7",
      "height": "assets/img/map/height.png?v=7",
      "aspect": 1.3333
    },
    "overlays": [
      {
        "id": "political",
        "label": "Political",
        "texture": null,
        "blurb": "The drawn borders of Bellos as they stand.",
        "legend": []
      },
      {
        "id": "nations",
        "label": "Nations",
        "texture": "assets/img/map/overlay_nations.png?v=7",
        "blurb": "Sovereign powers and their claimed reach.",
        "legend": [
          {
            "color": "#e0719f",
            "label": "Lefranthan Empire"
          },
          {
            "color": "#5aa87f",
            "label": "Greymark Horde"
          },
          {
            "color": "#5a86d6",
            "label": "Greymark Dominion"
          },
          {
            "color": "#9b6fc4",
            "label": "Snowfals"
          },
          {
            "color": "#d1443a",
            "label": "Midwel"
          },
          {
            "color": "#e0a13c",
            "label": "Nog"
          },
          {
            "color": "#e8d24a",
            "label": "Grug"
          },
          {
            "color": "#c79be0",
            "label": "Kul"
          }
        ]
      },
      {
        "id": "cultures",
        "label": "Cultures",
        "texture": "assets/img/map/overlay_cultures.png?v=7",
        "blurb": "The living peoples and their spheres of custom.",
        "legend": [
          {
            "color": "#e0c24a",
            "label": "Snowfallian"
          },
          {
            "color": "#c94f42",
            "label": "Horde"
          },
          {
            "color": "#d98a45",
            "label": "Bil"
          },
          {
            "color": "#4a63b8",
            "label": "Thelelthan"
          },
          {
            "color": "#8f62c9",
            "label": "Lotherkald"
          },
          {
            "color": "#66c7d8",
            "label": "Khuld"
          },
          {
            "color": "#8fbf55",
            "label": "Dominion"
          },
          {
            "color": "#4f83d1",
            "label": "Kul"
          }
        ]
      },
      {
        "id": "religions",
        "label": "Religions",
        "texture": "assets/img/map/overlay_religions.png?v=7",
        "blurb": "Faiths and the reach of their devotion.",
        "legend": [
          {
            "color": "#3fbfb2",
            "label": "Esirianfan Church"
          },
          {
            "color": "#e0c24a",
            "label": "Ancestor Worship"
          },
          {
            "color": "#7ec3de",
            "label": "Snowfals Spirits"
          },
          {
            "color": "#5470d6",
            "label": "The Word of Clayard"
          },
          {
            "color": "#d873a8",
            "label": "Thelelthan Spirits"
          },
          {
            "color": "#c94f42",
            "label": "Gho-Ludh Church"
          },
          {
            "color": "#3a3a45",
            "label": "Vrarudism"
          },
          {
            "color": "#5aa86e",
            "label": "Naval Tradition"
          },
          {
            "color": "#d98a45",
            "label": "Mountain Gods"
          },
          {
            "color": "#8f62c9",
            "label": "Thardor Heresy"
          },
          {
            "color": "#8f959c",
            "label": "Godless/Pluralist"
          }
        ]
      }
    ],
    "markers": [
      {
        "id": "faldeholl",
        "name": "Faldeholl",
        "u": 0.2788,
        "v": 0.1616,
        "type": "capital",
        "nation": "snowfals"
      },
      {
        "id": "heartmouth",
        "name": "Heartmouth",
        "u": 0.2538,
        "v": 0.1445,
        "type": "city",
        "nation": "snowfals"
      },
      {
        "id": "ynatheasha",
        "name": "Ynatheasha",
        "u": 0.314,
        "v": 0.1986,
        "type": "town",
        "nation": "snowfals"
      },
      {
        "id": "oakgulf",
        "name": "Oakgulf",
        "u": 0.2561,
        "v": 0.247,
        "type": "town",
        "nation": "snowfals"
      },
      {
        "id": "westwatch",
        "name": "Westwatch",
        "u": 0.1716,
        "v": 0.1003,
        "type": "town",
        "nation": "snowfals"
      },
      {
        "id": "wildholl",
        "name": "Wildholl",
        "u": 0.1606,
        "v": 0.1426,
        "type": "village",
        "nation": "snowfals"
      },
      {
        "id": "earthspell",
        "name": "Earthspell",
        "u": 0.1924,
        "v": 0.1491,
        "type": "village",
        "nation": "snowfals"
      },
      {
        "id": "mosspell",
        "name": "Mosspell",
        "u": 0.1997,
        "v": 0.1628,
        "type": "village",
        "nation": "snowfals"
      },
      {
        "id": "dirtstrand",
        "name": "Dirtstrand",
        "u": 0.1905,
        "v": 0.0495,
        "type": "village",
        "nation": "snowfals"
      },
      {
        "id": "shiverpeak",
        "name": "Shiverpeak",
        "u": 0.313,
        "v": 0.0146,
        "type": "village",
        "nation": "snowfals"
      },
      {
        "id": "tower-of-clayard",
        "name": "Tower of Clayard",
        "u": 0.2446,
        "v": 0.1146,
        "type": "landmark",
        "nation": "snowfals"
      },
      {
        "id": "cadeholl",
        "name": "Cadeholl",
        "u": 0.1535,
        "v": 0.2557,
        "type": "capital",
        "nation": "midwel"
      },
      {
        "id": "horesthold",
        "name": "Horesthold",
        "u": 0.0964,
        "v": 0.2907,
        "type": "town",
        "nation": "midwel"
      },
      {
        "id": "feywalken",
        "name": "Feywalken",
        "u": 0.2119,
        "v": 0.2734,
        "type": "village",
        "nation": "midwel"
      },
      {
        "id": "dawnband",
        "name": "Dawnband",
        "u": 0.2397,
        "v": 0.2744,
        "type": "village",
        "nation": "midwel"
      },
      {
        "id": "diervaq",
        "name": "Diervaq",
        "u": 0.2526,
        "v": 0.3243,
        "type": "village",
        "nation": "midwel"
      },
      {
        "id": "pondton",
        "name": "Pondton",
        "u": 0.0752,
        "v": 0.3672,
        "type": "village",
        "nation": "midwel"
      },
      {
        "id": "anhold",
        "name": "Anhold",
        "u": 0.0305,
        "v": 0.3786,
        "type": "town",
        "nation": "midwel"
      },
      {
        "id": "yelona",
        "name": "Yelona",
        "u": 0.6013,
        "v": 0.3232,
        "type": "capital",
        "nation": "lefrantha"
      },
      {
        "id": "mytheas",
        "name": "Mytheas",
        "u": 0.4075,
        "v": 0.2809,
        "type": "city",
        "nation": "lefrantha"
      },
      {
        "id": "thyenathesi",
        "name": "Thyenathesi",
        "u": 0.3643,
        "v": 0.1904,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "cymaranthyr",
        "name": "Cymaranthyr",
        "u": 0.4595,
        "v": 0.1644,
        "type": "city",
        "nation": "lefrantha"
      },
      {
        "id": "enorofena",
        "name": "Enorofena",
        "u": 0.5366,
        "v": 0.2858,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "adrananill",
        "name": "Adrananill",
        "u": 0.6587,
        "v": 0.2939,
        "type": "city",
        "nation": "lefrantha"
      },
      {
        "id": "kynead-shora",
        "name": "Kynead Shora",
        "u": 0.3081,
        "v": 0.3493,
        "type": "village",
        "nation": "lefrantha"
      },
      {
        "id": "azirukthazi",
        "name": "Azirukthazi",
        "u": 0.5049,
        "v": 0.4756,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "zhiazal",
        "name": "Zhiazal",
        "u": 0.7561,
        "v": 0.4508,
        "type": "city",
        "nation": "lefrantha"
      },
      {
        "id": "szeqashir",
        "name": "Szeqashir",
        "u": 0.7598,
        "v": 0.5732,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "nunulgathan",
        "name": "Nunulgathan",
        "u": 0.7119,
        "v": 0.5407,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "kracavuth",
        "name": "Kracavuth",
        "u": 0.8603,
        "v": 0.6504,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "khrakleth",
        "name": "Khrakleth",
        "u": 0.7646,
        "v": 0.7148,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "shree",
        "name": "Shree",
        "u": 0.9312,
        "v": 0.7695,
        "type": "town",
        "nation": "lefrantha"
      },
      {
        "id": "kiruktharbhs-watch",
        "name": "Kiruktharbh's Watch",
        "u": 0.6533,
        "v": 0.4258,
        "type": "landmark",
        "nation": "lefrantha"
      },
      {
        "id": "shazilgaths-gate",
        "name": "Shazilgath's Gate",
        "u": 0.3525,
        "v": 0.4193,
        "type": "landmark",
        "nation": "lefrantha"
      },
      {
        "id": "givzie",
        "name": "Givzie",
        "u": 0.3203,
        "v": 0.6253,
        "type": "capital",
        "nation": "greymark_horde"
      },
      {
        "id": "celhob",
        "name": "Celhob",
        "u": 0.1641,
        "v": 0.4557,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "feltia",
        "name": "Feltia",
        "u": 0.3408,
        "v": 0.4827,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "oadowfalls",
        "name": "Oadowfalls",
        "u": 0.0696,
        "v": 0.4658,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "gobligz",
        "name": "Gobligz",
        "u": 0.0989,
        "v": 0.5732,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "vreagab",
        "name": "Vreagab",
        "u": 0.1843,
        "v": 0.6165,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "brybgard",
        "name": "Brybgard",
        "u": 0.127,
        "v": 0.6432,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "tasinx",
        "name": "Tasinx",
        "u": 0.291,
        "v": 0.7327,
        "type": "town",
        "nation": "greymark_horde"
      },
      {
        "id": "grazzuz",
        "name": "Grazzuz",
        "u": 0.2144,
        "v": 0.7923,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "odzal",
        "name": "Odzal",
        "u": 0.326,
        "v": 0.7562,
        "type": "village",
        "nation": "greymark_horde"
      },
      {
        "id": "en",
        "name": "En",
        "u": 0.1651,
        "v": 0.7073,
        "type": "capital",
        "nation": "kul"
      },
      {
        "id": "fruict",
        "name": "Fruict",
        "u": 0.1542,
        "v": 0.6911,
        "type": "village",
        "nation": "kul"
      },
      {
        "id": "ulbligz",
        "name": "Ulbligz",
        "u": 0.1899,
        "v": 0.7083,
        "type": "town",
        "nation": "kul"
      },
      {
        "id": "phax",
        "name": "Phax",
        "u": 0.511,
        "v": 0.6286,
        "type": "capital",
        "nation": "greymark_dominion"
      },
      {
        "id": "pax",
        "name": "Pax",
        "u": 0.5566,
        "v": 0.6302,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "bresheaf",
        "name": "Bresheaf",
        "u": 0.501,
        "v": 0.58,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "lasnex",
        "name": "Lasnex",
        "u": 0.6445,
        "v": 0.6361,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "laili",
        "name": "Laili",
        "u": 0.6611,
        "v": 0.57,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "joimtoilm",
        "name": "Joimtoilm",
        "u": 0.5342,
        "v": 0.7148,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "chalkvish",
        "name": "Chalkvish",
        "u": 0.605,
        "v": 0.6644,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "stroi",
        "name": "Stroi",
        "u": 0.4269,
        "v": 0.6449,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "felsirtstead",
        "name": "Felsirtstead",
        "u": 0.4502,
        "v": 0.6709,
        "type": "village",
        "nation": "greymark_dominion"
      },
      {
        "id": "gazd",
        "name": "Gazd",
        "u": 0.261,
        "v": 0.8379,
        "type": "capital",
        "nation": "grug"
      },
      {
        "id": "khorbric",
        "name": "Khorbric",
        "u": 0.3501,
        "v": 0.7891,
        "type": "town",
        "nation": "grug"
      },
      {
        "id": "zun-rug",
        "name": "Zun-Rug",
        "u": 0.3907,
        "v": 0.8205,
        "type": "village",
        "nation": "grug"
      },
      {
        "id": "dhogniz",
        "name": "Dhogniz",
        "u": 0.258,
        "v": 0.9338,
        "type": "village",
        "nation": "grug"
      },
      {
        "id": "gha",
        "name": "Gha",
        "u": 0.5884,
        "v": 0.8281,
        "type": "capital",
        "nation": "nog"
      },
      {
        "id": "kragmukh",
        "name": "Kragmukh",
        "u": 0.42,
        "v": 0.828,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "bulgzo",
        "name": "Bulgzo",
        "u": 0.492,
        "v": 0.823,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "zrad",
        "name": "Zrad",
        "u": 0.6265,
        "v": 0.9063,
        "type": "village",
        "nation": "nog"
      },
      {
        "id": "dirdkog",
        "name": "Dirdkog",
        "u": 0.7222,
        "v": 0.627,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "gneabtong",
        "name": "Gneabtong",
        "u": 0.6421,
        "v": 0.6986,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "blix",
        "name": "Blix",
        "u": 0.6763,
        "v": 0.7018,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "lorgrurd",
        "name": "Lorgrurd",
        "u": 0.6455,
        "v": 0.7515,
        "type": "town",
        "nation": "nog"
      },
      {
        "id": "drogga",
        "name": "Drogga",
        "u": 0.792,
        "v": 0.7318,
        "type": "town",
        "nation": "nog"
      }
    ]
  }
};