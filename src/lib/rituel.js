import { text } from "@sveltejs/kit";

export const rituel = {
autresrituel: [
      { type: "insert-autresrituel"},
],
ritesInitiaux: [  
      { type: "insert-introduction"},
  {class:"sansmarge", texte: "RITES INITIAUX", type: "H1", conditions: {} },
  {texte: `Lorsque le peuple est rassemblé, le prêtre s’avance vers l’autel avec les ministres, pendant le chant d’entrée.`, type: "rubrique", conditions: {celebrationType: ["Solennité", "Dominicale", "Fête"], presenceBishop: false } },
  {texte: `Lorsque le peuple est rassemblé, l'évêque s’avance vers l’autel avec les ministres, pendant le chant d’entrée.`, type: "rubrique", conditions: {celebrationType: ["Solennité", "Dominicale", "Fête"], presenceBishop: true} },
  {texte: `Lorsque le peuple est rassemblé, le prêtre s’avance vers l’autel avec les ministres.`, type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: false } },
  {texte: `Lorsque le peuple est rassemblé, l'évêque s’avance vers l’autel avec les ministres.`, type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: true } },
    { texte: "La procession d'entrée se déroule dans l'ordre suivant :", type:"servants", conditions: {} },
    { texte: "- le thuriféraire avec l'encensoir fumant et le naviculaire à sa droite s'il est droitier (gauche s'il est gaucher) de façon à ce que l'encensoir soit au milieu des deux", type:"servants", conditions: {incense: true}},
    { texte: "- le cruciféraire", type:"servants", conditions: {cruciferaire: true}},
    { texte: "- les céroferaires avec leurs cierges", type:"servants", conditions: {ceroferaire: true}},
    { texte: "- le diacre portant l'évangéliaire", type:"servants", conditions: {presenceDiacre: true}},
    { texte: "- les servants par ordre de taille", type:"servants", conditions: {}},
    { texte: "- les prêtres concélébrants", type:"servants", conditions: {}},
    { texte: "- le célébrant", type:"servants", conditions: {}},
    { texte: "- les porte-insignes", type:"servants", conditions: {porteinsigne: true}},
    { texte: "Arrivés au sanctuaire, tous font une inclination profonde devant l’autel ; si le Saint-Sacrement est conservé au tabernacle derrière l'autel, ils font la génuflexion.", type:"servants"},
    { texte: "Ceux qui portent des objets comme la croix, les cierges, l'évangéliaire, ne font ni génuflexion ni inclination profonde.", type:"servants"},
    { texte: ``, type:"servants", conditions: {}},
    { texte: "<b>Les céroféraires</b> déposent leurs cierges près de l’autel ou au lieu prévu à cet effet.", type:"servants", conditions: {ceroferaire: true}},
    { texte: "Parvenu devant l'autel, l'évêque remet la crosse et dépose la mitre <b>aux porte-insignes</b>", type:"servants", conditions: {porteinsigne: true}},
  { texte: "Quand il est parvenu à l’autel, il fait une inclination profonde avec les ministres, puis il vénère l’autel par un baiser. Ensuite, il gagne son siège avec les ministres.", type: "rubrique", conditions: {incense: false} },
  { texte:"Arrivé à l'autel, <b>le thuriféraire</b> tend l'encensoir au prêtre qui impose l'encens et bénit l'autel", type:"servants", conditions: {incense: true, presenceBishop: false} },
  { texte:"Arrivé à l'autel, <b>le thuriféraire</b> tend l'encensoir à l'évêque qui impose l'encens et bénit l'autel", type:"servants", conditions: {incense: true, presenceBishop: true} },
  { texte: "Quand il est parvenu à l’autel, il fait une inclination profonde avec les ministres, puis il vénère l’autel par un baiser et, si cela convient, il encense la croix et l’autel. Ensuite, il gagne son siège avec les ministres.", type: "rubrique", conditions: {incense: true} },
  { texte: "S’il n’y a pas de chant pour l´entrée, on fait réciter l´antienne que propose le Missel, soit par les fidèles, soit par un lecteur ou, autrement, par le prêtre lui-même.", type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: false}},
  { texte: "S’il n’y a pas de chant pour l´entrée, on fait réciter l´antienne que propose le Missel, soit par les fidèles, soit par un lecteur ou, autrement, par l'évêque lui-même.", type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: true}},
  { texte: `ANTIENNE D’OUVERTURE`, type: "H3"  , conditions: {oraisons : true, celebrationType: "Semaine"}},
  { type: "insert-antienne_ouverture"},
  { texte: "Le chant d’entrée achevé, le prêtre et les fidèles, debout, font le signe de la croix, tandis que le prêtre, tourné vers le peuple dit :", type: "rubrique", conditions: {celebrationType: ["Solennité", "Dominicale", "Fête"], presenceBishop: false } },
  { texte: "Le chant d’entrée achevé, l'évêque et les fidèles, debout, font le signe de la croix, tandis que l'évêque, tourné vers le peuple dit :", type: "rubrique", conditions: {celebrationType: ["Solennité", "Dominicale", "Fête"], presenceBishop: true } },
  { texte: "Ensuite, le prêtre et les fidèles, debout, font le signe de la croix, tandis que le prêtre, tourné vers le peuple dit :", type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: false}},
  { texte: "Ensuite, l'évêque et les fidèles, debout, font le signe de la croix, tandis que l'évêque, tourné vers le peuple dit :", type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop: true} },
  {class:"lettrine", texte: "Au nom du Père, et du Fils, et du Saint-Esprit.", type: "dialogueV", conditions: {} },
    { texte: "Amen.", type: "dialogueR", conditions: {} },
  { id: "Salutation", texte: "SALUTATION", type: "H2", conditions: {} },
    {texte: "Puis, les mains étendues, le prêtre salue le peuple en disant :", type:"rubrique", conditions: {presenceBishop: false} },
    {texte: "Puis, les mains étendues, l'évêque salue le peuple en disant :", type:"rubrique", conditions: {presenceBishop: true} },
    {class:"lettrine", texte: "La paix soit avec vous.", type: "dialogueV", conditions: {presenceBishop: true, salutation: "S3"} },
    {class:"lettrine", texte: "Le Seigneur soit avec vous.", type: "dialogueV", conditions: {presenceBishop: false, salutation: "S3"} },
    {class:"lettrine", texte: `La grâce de Jésus, le Christ, notre Seigneur, 
      l’amour de Dieu le Père,`, type: "dialogueV", conditions: {salutation: "S1"} },
    {class:"indent1all", texte: `et la communion de l’Esprit Saint, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S1"} },
    {class:"lettrine indent1all", texte: `Que la grâce et la paix 
      de Dieu notre Père 
      et du Seigneur Jésus, le Christ, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S2"} },
    { texte: "Et avec votre esprit.", type: "dialogueR", conditions: {} },
    { texte: "Le prêtre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {presenceDiacre: false, presenceBishop: false} },
    { texte: "L'évêque ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {presenceDiacre: false, presenceBishop: true} },
    { texte: "Le prêtre, le diacre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {presenceDiacre: true, presenceBishop: false} },
    { texte: "L'évêque, le diacre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {presenceDiacre: true, presenceBishop: true} },
// Acte pénitentiel   
    { id: "ActePenitentiel",texte: "ACTE PENITENTIEL", type: "H2", conditions: {aspersion: false} },
  { texte: "Le prêtre invite les fidèles à faire l’acte pénitentiel :", type: "rubrique", conditions: {aspersion: false, presenceBishop: false} },
  { texte: "L'évêque invite les fidèles à faire l’acte pénitentiel :", type: "rubrique", conditions: {aspersion: false, presenceBishop: true} },
  {class:"lettrine", texte: `Frères et sœurs,
préparons-nous à célébrer le mystère de l’Eucharistie,
en reconnaissant que nous avons péché.`, type: "dialogueV", conditions: {aspersion: false} },

// PREMIERE FORMULE
  { texte: `On fait une brève pause en silence.`, type: "rubrique", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  { texte: "Tous disent ensemble la formule de confession générale :", type: "rubrique", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"lettrine indent1all", texte: `Je confesse à Dieu tout-puissant,
je reconnais devant vous, frères et sœurs,`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"indent1all", texte: `que j’ai péché
en pensée, en parole,
par action et par omission ;`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"indent1g", texte: `On se frappe la poitrine en disant`, type: "rubriqueinterne", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"indent1p", texte: `oui, j’ai vraiment péché.`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"indent1g", texte: `On continue :`, type: "rubriqueinterne", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },
  {class:"indent1all", texte: `C’est pourquoi je supplie
la bienheureuse Vierge Marie,
les anges et tous les saints,
et vous aussi, frères et sœurs,
de prier pour moi le Seigneur notre Dieu.`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP", aspersion: false} },

// DEUXIEME FORMULE
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {ChoixPenitentiel: "2CP", aspersion: false} },
  { texte: `On fait une brève pause en silence. Puis le prêtre dit :`, type: "rubrique", conditions: {ChoixPenitentiel: "2CP", aspersion: false, presenceBishop: false} },
  { texte: `On fait une brève pause en silence. Puis l'évêque dit :`, type: "rubrique", conditions: {ChoixPenitentiel: "2CP", aspersion: false, presenceBishop: true} },
  {class:"lettrine", texte: `Prends pitié de nous, Seigneur.`, type: "dialogueV", conditions: {ChoixPenitentiel: "2CP", aspersion: false} },
  { texte: `Nous avons péché contre toi.`, type: "dialogueR", conditions: {ChoixPenitentiel: "2CP", aspersion: false} },
  {class:"lettrine", texte: `Montre-nous, Seigneur, ta miséricorde.`, type: "dialogueV", conditions: {ChoixPenitentiel: "2CP", aspersion: false} },
  { texte: `Et donne-nous ton salut.`, type: "dialogueR", conditions: {ChoixPenitentiel: "2CP", aspersion: false} },

// TROISIEME FORMULE
  { texte: `On fait une brève pause en silence.`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `Puis le prêtre ou un autre ministre chante ou dit les invocations suivantes :`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP", aspersion: false, presenceDiacre: false, presenceBishop: false} },
  { texte: `Puis l'évêque ou un autre ministre chante ou dit les invocations suivantes :`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP", aspersion: false, presenceDiacre: false, presenceBishop: true} },
  { texte: `Puis le prêtre, le diacre ou un autre ministre chante ou dit les invocations suivantes :`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP", aspersion: false, presenceDiacre: true, presenceBishop: false} },
  { texte: `Puis l'évêque, le diacre ou un autre ministre chante ou dit les invocations suivantes :`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP", aspersion: false, presenceDiacre: true, presenceBishop: true} },
  {class:"lettrine", texte: `Seigneur Jésus, envoyé pour guérir`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `les cœurs qui reviennent vers toi :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  {class:"indent1p", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  {class:"lettrine", texte: `Ô Christ, venu appeler les pécheurs :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  {class:"indent1p", texte: `O Christ, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `Ô Christ, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  {class:"lettrine", texte: `Seigneur, qui sièges à la droite du Père`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `où tu intercèdes pour nous :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  {class:"indent1p", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP", aspersion: false} },

  {class:"sautdeligne", texte: `\n`, type: "", conditions: {aspersion: false} },
{ texte: `Puis le prêtre prononce l’absolution :`, type: "rubrique", conditions: {aspersion: false, presenceBishop: false} },
{ texte: `Puis l'évêque prononce l’absolution :`, type: "rubrique", conditions: {aspersion: false, presenceBishop: true} },
  {class:"lettrine indent1all", texte: `Que Dieu tout-puissant
nous fasse miséricorde ;`, type: "dialogueV", conditions: {aspersion: false} },
  {class:"indent1all", texte: `qu’il nous pardonne nos péchés
et nous conduise à la vie éternelle.`, type: "dialogueV", conditions: {aspersion: false} },
  { texte: `Amen.`, type: "dialogueR", conditions: {aspersion: false} },

// Kyrie
  { id:"kyrie", texte: "KÝRIE ELÉISON", type: "H2", conditions: {ChoixPenitentiel: ["1CP", "2CP"], aspersion: false} },
  //Latin
  { conditions: {ChoixPenitentiel: ["1CP", "2CP"], kyriegrec: true, aspersion: false},  class: "tableau",  items:[
    {class:"indent1p", type: "dialogueV", texte: "Kýrie eléison."},
    { type: "dialogueR", texte: "Kýrie eléison."},
    {class:"indent1p", type: "dialogueV", texte: "Christe eléison."},
    { type: "dialogueR", texte: "Christe eléison."},
    {class:"indent1p", type: "dialogueV", texte: "Kýrie eléison."},
    { type: "dialogueR", texte: "Kýrie eléison."},
  ],},
  //français
    { conditions: {ChoixPenitentiel: ["1CP", "2CP"], kyriegrec: false, aspersion: false},  class: "tableau",  items:[
    { type: "dialogueV", texte: "Seigneur, prends pitié."},
    { type: "dialogueR", texte: "Seigneur, prends pitié."},
    { type: "dialogueV", texte: "Ô Christ, prends pitié."},
    { type: "dialogueR", texte: "Ô Christ, prends pitié."},
    { type: "dialogueV", texte: "Seigneur, prends pitié."},
    { type: "dialogueR", texte: "Seigneur, prends pitié."},
  ],},

  //Rite de l'aspersion
    { texte: "BÉNÉDICTION ET ASPERSION DE L’EAU BÉNITE", type: "H2", conditions: {aspersion: true} },
    { texte: "La bénédiction de l’eau et l’aspersion, en mémoire du baptême, peuvent se faire aux messes dominicales, surtout au temps pascal, même à celles qui sont célébrées dès le samedi soir. L'aspersion tient lieu d’acte pénitentiel au début de la messe.", type: "rubrique", conditions: {aspersion: true} },
    { texte: `<b>Un servant</b> s'avance avec le vase contenant l'eau à bénir`, type:"servants", conditions: {aspersion: true}},
    { texte: "Après la salutation, le prêtre, debout au siège, tourné vers le peuple, ayant devant lui le vase avec l’eau à bénir, invite à prier en ces termes ou d’autres semblables :", type: "rubrique", conditions: {aspersion: true, presenceBishop: false} },
    { texte: "Après la salutation, l'évêque, debout au siège, tourné vers le peuple, ayant devant lui le vase avec l’eau à bénir, invite à prier en ces termes ou d’autres semblables :", type: "rubrique", conditions: {aspersion: true, presenceBishop: true} },
    {class:"indent1all", texte:`Frères et sœurs bien-aimés,
demandons au demandons au Seigneur de bénir cette eau qu’il a créée ;
nous allons en être aspergés en mémoire de notre baptême : 
que Dieu nous garde fidèles
à l’Esprit que nous avons reçu.`,  type: "dialogueV", conditions: {aspersion: true}},
    {id:"aspersion", texte:"Après un bref silence, il dit, les mains jointes, l’une des prières de bénédiction de l’eau.",  type: "rubrique", conditions: {aspersion: true}},
    {class:"grandelettrine", texte:`Dieu éternel et tout puissant,
tu as voulu que l’eau, source de vie et principe de pureté ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},
    {class:"indent1p", texte:`lave aussi nos âmes
et nous apporte le don de la vie téternelle ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},
    {class:"indent1all", texte:`daigne bénir <span style="color: #b30000;">✠</span> cette eau,
pour que nous en recevions des forces
en ce jour qui t’est consacré.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},
    {class:"indent1all", texte:`Par cette eau,
renouvelle en nous la source vive de ta grâce,
défends-nous contre tout mal de l’âme l’esprit et du corps ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},
    {class:"indent1all", texte:`nous pourrons alors nous approcher de toi avec un cœur pur,
et accueillir pleinement le salut que tu nous donnes.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},
    {texte:`Par le Christ, notre Seigneur.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "4CP"}},

    {class:"grandelettrine", texte:`Seigneur, Dieu tout-puissant, 
toi qui es la source et l’origine`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {class:"indent1p", texte:`de toute vie du corps et de l’âme, 
nous te prions de bénir <span style="color: #b30000;">✠</span> cette eau :`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {class:"indent1all", texte:`nous y recourons avec confiance 
pour implorer le pardon de nos fautes
et obtenir la protection de ta grâce
contre toute maladie`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {texte:`et contre les embûches de l’Adversaire.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {class:"indent1all", texte:`Dans ta miséricorde, Seigneur,
ne cesse pas de faire jaillir pour nous
les eaux vives du salut ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {class:"indent1all", texte:`nous pourrons alors nous approcher de toi avec un cœur pur,
et nous soustraire aux périls de l’âme et du corps.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},
    {texte:`Par le Christ, notre Seigneur.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "5CP"}},

    {class:"grandelettrine", texte:`Seigneur, Dieu tout-puissant: 
sois favorable aux prières de ton peuple :`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1p", texte:`alors que nous venons célébrer la merveille de notre création`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`tandis que nous célébrons la merveille de notre création 
et la merveille plus grande encore de notre rédemption, 
daigne bénir <span style="color: #b30000;">✠</span> cette eau.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`Tu l’as créée pour féconder la terre
et donner à nos corps fraîcheur et pureté.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`Tu en as fait aussi l’instrument de ta miséricorde :`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`par elle tu as libéré ton peuple de la servitude
et tu as étanché sa soif dans le désert ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`par elle les prophètes ont annoncé la nouvelle Alliance
que tu allais conclure avec l’humanité ;`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`par elle enfin, eau sanctifiée par le Christ au Jourdain,
tu as renouvelé notre nature pécheresse
dans le bain de la nouvelle naissance.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`Que cette eau, maintenant,
nous rappelle notre baptême`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`et nous fasse participer à la joie de nos frères et sœurs
les baptisés de Pâques.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},
    {class:"indent1all", texte:`Par le Christ, notre Seigneur.`,  type: "dialogueV", conditions: {aspersion: true, ChoixPenitentiel: "6CP"}},

    { texte:`Amen.`,  type: "dialogueR", conditions: {aspersion: true}},
//Ajouter la bénédiction du sel ?
    { texte: `<b>Un servant</b> accompagne le célébrant, portant le vase d’eau bénite pour l’aspersion.`, type:"servants", conditions: {aspersion: true}},
    {texte:`Ensuite, prenant le goupillon, il se signe lui-même avec l’eau, puis il asperge les ministres et l’assemblée, en circulant dans l’église si cela est utile pour la signification du geste. Pendant ce temps, on chante un chant approprié.`,  type: "rubrique", conditions: {aspersion: true}},
    {texte:`Revenu au siège, le prêtre, tourné vers le peuple, les mains jointes, dit, quand le chant est terminé :`,  type: "rubrique", conditions: {aspersion: true, presenceBishop: false}},
    {texte:`Revenu au siège, l'évêque, tourné vers le peuple, les mains jointes, dit, quand le chant est terminé :`,  type: "rubrique", conditions: {aspersion: true, presenceBishop: true}},
    {class:"grandelettrine", texte:`Que Dieu tout-puissant nous purifie de nos péchés 
et, par la célébration de cette eucharistie,`,  type: "dialogueV", conditions: {aspersion: true}},
    {class:"indent1p", texte:`nous rende dignes de participer à la table de son Royaume,`,  type: "dialogueV", conditions: {aspersion: true}},
    { texte:`<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur<span style="color: #b30000;">)</span>.`,  type: "dialogueV", conditions: {aspersion: true}},
    { texte:`Amen.`,  type: "dialogueR", conditions: {aspersion: true}},

// Gloria
  { id:"gloria", texte: "GLOIRE À DIEU", type: "H2", conditions: {hideGloria: false}},
    { type: "insert-gloria"},
  { type: "dialogueV", conditions: {hideGloria: false, glorialatin: false}, class:"grandelettrine",
  texte: `Gloire à Dieu, au plus haut des cieux, 
  et paix sur la terre aux hommes qu’il aime. 
  Nous te louons, nous te bénissons, 
  nous t’adorons, nous te glorifions, 
  nous te rendons grâce, pour ton immense gloire, 
  Seigneur Dieu, Roi du ciel, 
  Dieu le Père tout-puissant. 
  Seigneur, Fils unique, Jésus Christ, 
  Seigneur Dieu, Agneau de Dieu, le Fils du Père ; 
  toi qui enlèves les péchés du monde, prends pitié de nous ; 
  toi qui enlèves les péchés du monde, reçois notre prière ; 
  toi qui es assis à la droite du Père, prends pitié de nous. 
  Car toi seul es Saint, 
  toi seul es Seigneur, 
  toi seul es le Très-Haut : 
  Jésus Christ, avec le Saint-Esprit 
  dans la gloire de Dieu le Père. Amen.` },

  { type: "dialogueV", conditions: {glorialatin: true, hideGloria: false} , class:"grandelettrine",
  texte: `Glória in excélsis Deo 
  et in terra pax homínibus bonæ voluntátis. 
  Laudámus te, benedícimus te, 
  adorámus te, glorificámus te, 
  grátias ágimus tibi propter magnam glóriam tuam, 
  Dómine Deus, Rex cæléstis, 
  Deus Pater omnípotens. 
  Dómine Fili Unigénite, Iesu Christe, 
  Dómine Deus, Agnus Dei, Fílius Patris, 
  qui tollis peccáta mundi, miserére nobis ; 
  qui tollis peccáta mundi, suscipe deprecátionem nostram. 
  Qui sedes ad déxteram Patris, miserére nobis. 
  Quóniam tu solus Sanctus, tu solus Dóminus, 
  tu solus Altíssimus, 
  Iesu Christe, cum Sancto Spíritu : in glória Dei Patris. Amen.` },

// Oraison
{ texte: `PRIERE D’OUVERTURE (COLLECTE)`, type: "H2"  , conditions: {oraisons : true}},
{ texte: "<b>Le porte-missel</b> présente au président le missel pour la prière d’ouverture (collecte).", type:"servants", conditions: {portemissel: true}},
{ texte: "L’hymne finie, le prêtre, les mains jointes, dit ou chante :", type: "rubrique", conditions: {oraisons : true, presenceBishop: false } },
{ texte: "L’hymne finie, l'évêque, les mains jointes, dit ou chante :", type: "rubrique", conditions: {oraisons : true, presenceBishop: true } },
{class:"lettrine", texte: `Prions le Seigneur.`, type: "dialogueV" , conditions: {oraisons : true}},
{class:"sautdeligne", texte: `\n`, type: "", conditions: {oraisons: true} },
{ texte:`Tous prient en silence quelques instants, en même temps que le prêtre.
Puis le prêtre, les mains étendues, dit la prière d’ouverture ou collecte.` , type: "rubrique", conditions: {oraisons : true, presenceBishop: false } },
{ texte:`Tous prient en silence quelques instants, en même temps que l'évêque.
Puis l'évêque, les mains étendues, dit la prière d’ouverture ou collecte.` , type: "rubrique", conditions: {oraisons : true, presenceBishop: true } },
{ type: "insert-collecte" },
{ texte: "Amen", type: "dialogueR", conditions: {oraisons : true} },
{ texte: `L'évêque reçoit la mitre.`, type:"servants", conditions: {porteinsigne: true}},

],

/*****************************************************
 * LITURGIE DE LA PAROLE
 *****************************************************/
liturgiedelaparole: [  
  { texte: "LITURGIE DE LA PAROLE", type: "H1", conditions: {} },
  { texte: "LECTURES", type: "H2", conditions: {} },
  { texte: "Première lecture", type: "H3", conditions: {} },
  { texte: `À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {} },
  {class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: "Psaume", type: "H3", conditions: {} },
  { texte: "Deuxième lecture", type: "H3", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { texte: `À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  {class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { texte: "Évangile", type: "H3", conditions: {} },
  { texte: `Vient ensuite le chant d’acclamation à l’Évangile : l’Alléluia ou un autre chant selon le temps et les normes liturgiques.`, type: "rubrique", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `<b>Le thuriféraire</b> s'avance, le prêtre met l'encens dans l'encensoir et le bénit sans rien dire.`, type:"servants", conditions: {incense: true, presenceBishop: false}},
  { texte: `<b>Le thuriféraire</b> s'avance, l'évêque met l'encens dans l'encensoir et le bénit sans rien dire.`, type:"servants", conditions: {incense: true, presenceBishop: true}},
  { texte: `Puis le diacre qui va proclamer l’Évangile, incliné profondément devant le prêtre, demande la bénédiction, en disant à voix basse :`, type: "rubrique", conditions: {secret:true, presenceDiacre: true, presenceBishop: false} },
  { texte: `Puis le diacre qui va proclamer l’Évangile, incliné profondément devant l'évêque, demande la bénédiction, en disant à voix basse :`, type: "rubrique", conditions: {secret:true, presenceDiacre: true, presenceBishop: true} },
  { texte: `Puis le prêtre qui va proclamer l’Évangile, incliné profondément devant l'évêque, demande la bénédiction, en disant à voix basse :`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop: true} },
  { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
  { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true} },
  { texte: `Le prêtre dit à voix basse :`, type: "rubrique", conditions: {secret:true, presenceDiacre: true, presenceBishop: false} },
  { texte: `L'évêque dit à voix basse :`, type: "rubrique", conditions: {secret:true, presenceBishop: true} },
  { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
    pour que vous proclamiez dignement son Évangile : 
    au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
  { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
    pour que vous proclamiez dignement son Évangile : 
    au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true} },
  { texte: `Le diacre fait le signe de la croix et répond :`, type: "rubrique", conditions: {secret:true, presenceDiacre: true} },
  { texte: `Le prêtre fait le signe de la croix et répond :`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop:true } },
  { texte: `Amen.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
  { texte: `Amen.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true}},
  { texte: `L'évêque dépose la mitre et se lève.`, type:"servants", conditions: {porteinsigne: true, presenceBishop: true}},
  { texte: `Le prêtre, incliné devant l’autel, prie tout bas :`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop: false} },
  { texte: `Purifie mon coeur et mes lèvres, 
    Dieu tout-puissant, 
    pour que j’annonce dignement ton saint Évangile.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop: false} },
  { texte: `<b>Les céroféraires</b> accompagnent le ministre à l'ambon.`, type:"servants", conditions: {incense:false, ceroferaire: true}},
  { texte: `<b>Le thuriféraire</b> et <b>les céroféraires</b> accompagnent le ministre à l'ambon.`, type:"servants", conditions: {incense:true, ceroferaire: true}},
  { texte: `<b>Le thuriféraire</b> accompagne le ministre à l'ambon.`, type:"servants", conditions: {incense:true, ceroferaire: false}},
  { texte: `Ensuite, le prêtre se rend à l’ambon, et il dit ou chante :`, type: "rubrique", conditions: {presenceDiacre: false} },
  { texte: `Ensuite, le diacre prend avec respect l'évangéliaire et, sans faire d'inclination devant l'autel, il s'avance jusqu'à l’ambon en portant le livre solennellement.`, type: "rubrique", conditions: {presenceDiacre: true} },
  { texte: `Il dit ou chante :`, type: "rubrique", conditions: {presenceDiacre: true} },
  {class:"lettrine", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Le prêtre dit :`, type: "rubrique", conditions: {presenceDiacre: false} },
  { texte: `Le diacre poursuit :`, type: "rubrique", conditions: {presenceDiacre: true} },
  {class:"lettrine", texte: `Évangile de Jésus Christ <span style="color: #b30000;">✠</span> selon saint <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
  { texte: `Gloire à toi, Seigneur !`, type: "dialogueR", conditions: {} },
  { texte: `L'évêque reçoit la crosse`, type:"servants", conditions: {porteinsigne: true}},
  { texte: `<b>Le thuriféraire</b> présente l'encensoir au diacre`, type:"servants", conditions: {incense: true, presenceDiacre: true}},
  { texte: `<b>Le thuriféraire</b> présente l'encensoir au prêtre`, type:"servants", conditions: {incense: true, presenceDiacre: false}},
  { texte: `Puis le prêtre encense le livre, si l’on utilise l’encens, et il proclame l’Évangile.`, type: "rubrique", conditions: {incense:true, presenceDiacre: false} },
  { texte: `Puis le prêtre proclame l’Évangile.`, type: "rubrique", conditions: {incense:false, presenceDiacre: false} },
  { texte: `Puis le diacre encense le livre, si l’on utilise l’encens, et il proclame l’Évangile.`, type: "rubrique", conditions: {incense:true, presenceDiacre: true} },
  { texte: `Puis le diacre proclame l’Évangile.`, type: "rubrique", conditions: {incense:false, presenceDiacre: true} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `L’Évangile achevé, le prêtre dit ou chante :`, type: "rubrique", conditions: {presenceDiacre: false} },
  { texte: `L’Évangile achevé, le diacre dit ou chante :`, type: "rubrique", conditions: {presenceDiacre: true} },
  {class:"lettrine", texte: `Acclamons la Parole de Dieu.`, type: "dialogueV", conditions: {} },
  { texte: `Louange à toi, Seigneur Jésus !`, type: "dialogueR", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Ensuite, il vénère le livre d’un baiser en disant tout bas :`, type: "rubrique", conditions: {secret:true, presenceBishop: false} },
  { texte: `Ensuite, il vénère le livre d’un baiser ou le porte à baiser à l'évêque, qui dit à voix basse :`, type: "rubrique", conditions: {secret:true, presenceBishop: true} },
  { texte: `Que cet Évangile efface mes péchés.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `<b>Les céroféraires</b> retournent  à leur place`, type:"servants", conditions: {ceroferaire:true, incense:false}},
  { texte: `<b>Les céroféraires</b> et <b>le thuriféraire</b> retournent  à leur place`, type:"servants", conditions: {ceroferaire:true, incense:true}},
  { texte: `<b>Le thuriféraire</b> retourne à sa place`, type:"servants", conditions: {ceroferaire:false, incense:true}},
  { texte: `Si l'évêque prêche depuis sa cathèdre, il reçoit la mitre`, type:"servants", conditions: {porteinsigne: true}},
  { texte: `Puis le prêtre prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: false} },
  { texte: `Puis l'évêque prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: true} },
  { texte: `Puis le prêtre ou le diacre prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop: false} },
  { texte: `Puis l'évêque ou le diacre prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop: true} },
      { type: "insert-avanthomelie"},
  { texte: `L'homélie achevée, l'évêque dépose la mitre et la crosse`, type:"servants", conditions: {porteinsigne: true}},
      { type: "insert-apreshomelie"},

//Credo
  { id: "Professiondefoi",texte: `PROFESSION DE FOI`, type: "H2", conditions: {hideCredo: false, celebrationType: ["Dominicale", "Solennité"], typeCredo: ["NC", "Lt", "AP"]} },
  { texte: "<b>Le porte-missel</b> présente au président le missel pour la profession de foi et pour l'invitation sacerdotale de la prière universelle.", type:"servants", conditions: {portemissel: true}},

  
  //Credo de Nicée-Constantinople
  { texte: `Symbole de Nicée-Constantinople`, type: "H3", conditions: {typeCredo: "NC", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]} },
  { conditions: {typeCredo: "NC", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]},  class: "tableau",  items:[
  {class:"grandelettrine" , texte: `Je crois en un seul Dieu,
le Père tout-puissant, créateur du ciel et de la terre,`, type: "dialogueV" },
  {class:"indent1p", texte: `de l’univers visible et invisible.`, type: "dialogueV" },
  {class:"indent1all", texte: `Je crois en un seul Seigneur, Jésus Christ,
le Fils unique de Dieu, né du Père avant tous les siècles\u00A0:`, type: "dialogueV" },
  {class:"indent1all", texte: `Il est Dieu, né de Dieu,
lumière née de la lumière,
vrai Dieu, né du vrai Dieu,`, type: "dialogueV" },
  {class:"indent1all", texte: `Engendré, non pas créé,
consubstantiel au Père,
et par lui tout a été fait.`, type: "dialogueV" },
  {class:"indent1all", texte: `Pour nous les hommes, et pour notre salut,
il descendit du ciel\u00A0;`, type: "dialogueV" },
  {class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « s’est fait homme\u00A0».`, type: "rubriqueinterne" },
//  {class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « s’est fait homme\u00A0».`, type: "rubriqueinterne", conditions: {Dateliturgique: "NAT"} },
  {class:"indent1all", texte: `Par l’Esprit Saint, il a pris chair de la Vierge Marie,
et s’est fait homme.`, type: "dialogueV"},
  {class:"indent1all", texte: `Crucifié pour nous sous Ponce Pilate,
il souffrit sa passion et fut mis au tombeau.`, type: "dialogueV" },
  {class:"indent1all", texte: `Il ressuscita le troisième jour, conformément aux Écritures,
et il monta au ciel ; il est assis à la droite du Père.`, type: "dialogueV" },
  {class:"indent1all", texte: `Il reviendra dans la gloire, pour juger les vivants et les morts\u00A0;
et son règne n’aura pas de fin.`, type: "dialogueV" },
  {class:"indent1all", texte: `Je crois en l’Esprit Saint, qui est Seigneur et qui donne la vie\u00A0;
il procède du Père et du Fils\u00A0;`, type: "dialogueV" },
  {class:"indent1all", texte: `Avec le Père et le Fils, il reçoit même adoration et même gloire\u00A0;
il a parlé par les prophètes.`, type: "dialogueV" },
  { texte: `Je crois en l’Église, une, sainte, catholique et apostolique.
Je reconnais un seul baptême pour le pardon des péchés.
J’attends la résurrection des morts, et la vie du monde à venir. Amen.`, type: "dialogueV" },
],},

//Credo de Nicée-Constantinople
  { texte: `Symbole de Nicée-Constantinople`, type: "H3", conditions: {typeCredo: "Lt", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]} },
  { conditions: {typeCredo: "Lt", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]}, class: "tableau", items:[
  {class:"grandelettrine" , texte: `Credo in unum Deum,
Patrem omnipótentem, factórem cæli et terræ,`, type: "dialogueV"},
  {class:"indent1p", texte: `visibílium ómnium et invisibílium.`, type: "dialogueV" },
  {class:"indent1all", texte: `Et in unum Dóminum Iesum Christum,
Fílium Dei unigénitum,
et ex Patre natum ante ómnia sǽcula.`, type: "dialogueV" },
  {class:"indent1all", texte: `Deum de Deo, lumen de lúmine, Deum verum de Deo vero,
    génitum, non factum, consubstantiálem Patri\u00A0:
    per quem ómnia facta sunt.`, type: "dialogueV" },
  {class:"indent1all", texte: `Qui propter nos hómines et propter nostram salútem
descéndit de cælis.`, type: "dialogueV" },
  {class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « factus est\u00A0».`, type: "rubriqueinterne" },
  {class:"indent1all", texte: `Et incarnátus est de Spíritu Sancto
ex María Vírgine, et homo factus est.`, type: "dialogueV" },
  {class:"indent1all", texte: `Crucifíxus étiam pro nobis sub Póntio Piláto ;
passus et sepúltus est,
et resurréxit tértia die, secúndum Scriptúras,
et ascéndit in cælum, sedet ad déxteram Patris.`, type: "dialogueV" },
  {class:"indent1all", texte: `Et íterum ventúrus est cum glória,
iudicáre vivos et mórtuos,
cuius regni non erit finis.`, type: "dialogueV" },
  {class:"indent1all", texte: `Et in Spíritum Sanctum, Dóminum et vivificántem\u00A0:
qui ex Patre Filióque procédit.`, type: "dialogueV" },
  {class:"indent1all", texte: `Qui cum Patre et Fílio simul adorátur et conglorificátur\u00A0:
qui locútus est per prophétas.`, type: "dialogueV" },
  {class:"indent1all", texte: `Et unam, sanctam, cathólicam et apostólicam Ecclésiam.`, type: "dialogueV" },
  { texte: `Confíteor unum baptísma in remissiónem peccatórum.`, type: "dialogueV" },
  {class:"indent1all", texte: `Et exspécto resurrectiónem mortuórum,
et vitam ventúri sǽculi. Amen.`, type: "dialogueV" },
],},

//Credo des Apôtres
  { texte: `Symbole des Apôtres`, type: "H3", conditions: {typeCredo: "AP", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]} },
  { conditions: {typeCredo: "AP", hideCredo: false, celebrationType: ["Dominicale", "Solennité"]}, class: "tableau",items:[
  { texte: `Surtout aux temps du Carême et de Pâques, on peut prendre le symbole baptismal de l’Église romaine appelé Symbole des Apôtres.`, type: "rubrique" },
  {class:"grandelettrine" , texte: `Je crois en Dieu, le Père tout-puissant,
créateur du ciel et de la terre.`, type: "dialogueV"},
  { texte: `Et en Jésus Christ, son Fils unique, notre Seigneur,`, type: "dialogueV" },
  {class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « Vierge Marie\u00A0».`, type: "rubriqueinterne" },
  {class:"indent1all", texte: `qui a été conçu du Saint-Esprit,
est né de la Vierge Marie,
a souffert sous Ponce Pilate,
a été crucifié, est mort et a été enseveli,
est descendu aux enfers,
le troisième jour est ressuscité des morts,
est monté aux cieux,
est assis à la droite de Dieu le Père tout-puissant,
d’où il viendra juger les vivants et les morts.`, type: "dialogueV" },
  {class:"indent1all", texte: `Je crois en l’Esprit Saint,
à la sainte Église catholique,
à la communion des saints,
à la rémission des péchés,
à la résurrection de la chair,
à la vie éternelle. Amen.`, type: "dialogueV" },
],},

//Prière universelle
  { texte: `PRIÈRE UNIVERSELLE`, type: "H3", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { texte: `Quelques invitations sacerdotales et prières de conclusion sont proposées ici pour la commodité du prêtre et n’excluent pas l’usage d’autres formules.`, type: "rubrique", conditions: {celebrationType: ["Dominicale", "Solennité"], presenceBishop:false} },
  { texte: `Quelques invitations sacerdotales et prières de conclusion sont proposées ici pour la commodité de l'évêque et n’excluent pas l’usage d’autres formules.`, type: "rubrique", conditions: {celebrationType: ["Dominicale", "Solennité"], presenceBishop:true} },
  { id:"InvitS", texte: `INVITATION SACERDOTALE`, type: "H4", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { conditions: {celebrationType: ["Dominicale", "Solennité"]}, class: "tableau",items:[
    { class:"lettrine",texte: `Tandis que nous attendons l’avènement
de notre Seigneur Jésus Christ,
implorons sa miséricorde
pour qu’il apporte le salut au monde d’aujourd’hui.`, type: "dialogueV", conditions: {InvitS: "1"} },
    { class:"lettrine",texte: `Frères bien-aimés, implorons avec confiance
Dieu le Père tout-puissant,
car il a tant aimé le monde
qu’il lui a donné son Fils unique.`, type: "dialogueV", conditions: {InvitS: "2"} },
    { class:"lettrine",texte: `À l’approche des solennités pascales,
prions le Seigneur de façon plus pressante,
afin que l’univers entier bénéficie davantage
des richesses du mystère du salut.`, type: "dialogueV", conditions: {InvitS: "3"} },
    { class:"lettrine",texte: `En ces jours très saints,
supplions le Père tout-puissant,
afin que la Pâque de son Fils unique,
Jésus Christ, notre Seigneur,
apporte grâce et joie au monde entier.`, type: "dialogueV", conditions: {InvitS: "4"} },
  { class:"lettrine",texte: `Frères et soeurs,
rassemblés pour la prière commune,
supplions le Seigneur très bon
pour nous-mêmes et pour tous les hommes.`, type: "dialogueV", conditions: {InvitS: "5" }},
  { class:"lettrine",texte: `Dans une prière unanime,
faisons monter vers le Seigneur
notre supplication pour tous les hommes,
afin que tous puissent mener
une vie calme et paisible,
et parvenir au bonheur éternel.`, type: "dialogueV", conditions: {InvitS: "6"} },
  { class:"lettrine",texte: `Pour que tous les hommes
puissent mener sur terre
une vie digne et fraternelle,
faisons monter ensemble
notre prière vers le Seigneur.`, type: "dialogueV", conditions: {InvitS: "7"} },
  { class:"lettrine",texte: `Élargissons notre supplication
à la mesure de la charité du Christ,
et présentons au Père
les intentions de tous nos frères les hommes.`, type: "dialogueV", conditions: {InvitS: "8"} },
  { class:"lettrine",texte: `Réunis pour célébrer les bienfaits de Dieu,
prions-le, mes frères,
de nous inspirer lui-même
une prière qui il puisse exaucer.`, type: "dialogueV", conditions: {InvitS: "9"} },
  { class:"lettrine", texte: `Et maintenant, frères bien-aimés,
ouvrons nos coeurs à toutes les souffrances
et à tous les besoins de nos frères les hommes.`, type: "dialogueV", conditions: {InvitS: "10"} }]},

  {class:"sautdeligne", texte: `\n`, conditions: {celebrationType: ["Dominicale", "Solennité"]}, type: "dialogueV"},
  { id:"PriereC", texte: `PRIÈRES DE CONCLUSION`, type: "H4", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
  { conditions: {celebrationType: ["Dominicale", "Solennité"]}, class: "tableau",items:[
  {class:"indent1all lettrine", texte: `À tes fidèles, Seigneur,
tends une main secourable :`, type: "dialogueV", conditions: {PriereC: "1"} },
{class:"indent1all", texte: `Qu’ils te cherchent de tout coeur,
et voient exaucées leurs justes demandes.`, type: "dialogueV", conditions: {PriereC: "1"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "1" }},
{class:"indent1all lettrine", texte: `Regarde avec bonté, Seigneur,
le peuple qui se confie en ta miséricorde ;`, type: "dialogueV", conditions: {PriereC: "2"} },
{class:"indent1all", texte: `Et comme il ne peut subsister sans toi,
soutiens-le maintenant de tes bienfaits
pour qu’il progresse jusqu’à l’éternité.`, type: "dialogueV", conditions: {PriereC: "2"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "2" }},
{class:"indent1all lettrine", texte: `Dieu qui sauves tous les hommes
et ne veux en perdre aucun,`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3"} },
{class:"indent1all", texte: `Écoute la prière de ton peuple
et donne-lui la joie d’être exaucé.
Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3" }},
{class:"indent1all lettrine", texte: `Seigneur, viens au secours de ton peuple
qui espère en ta miséricorde :`, type: "dialogueV", conditions: {PriereC: "4"} },
{class:"indent1all", texte: `Que ta puissance le soutienne en cette vie
et le conduise aux joies de l’éternité.`, type: "dialogueV", conditions: {PriereC: "4"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "4" }},
{class:"indent1all lettrine", texte: `Dieu qui sais toutes choses,
tu vois tous les besoins de notre vie humaine.`, type: "dialogueV", conditions: {PriereC: "5"} },
{class:"indent1all", texte: `Accueille les prières de ceux qui croient en toi,
exauce les désirs de ceux qui te supplient.`, type: "dialogueV", conditions: {PriereC: "5"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "5" }},
{class:"indent1all lettrine", texte: `Seigneur, écoute avec bonté les prières de ton peuple :`, type: "dialogueV", conditions: {PriereC: "6"} },
{class:"indent1all", texte: `Accorde à tous ce qu’ils te demandent
et à chacun ce qu’il lui faut.`, type: "dialogueV", conditions: {PriereC: "6"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "6" }},
{class:"indent1all lettrine", texte: `Écoute, Seigneur, les prières
que tu inspires toi-même à ton Église,`, type: "dialogueV", conditions: {PriereC: "7"} },
{class:"indent1all", texte: `Et, dans ta bonté, daigne les exaucer.`, type: "dialogueV", conditions: {PriereC: "7"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "7" }},
{class:"indent1all lettrine", texte: `Aux appels de ton peuple en prière,
réponds, Seigneur, en ta bonté :`, type: "dialogueV", conditions: {PriereC: "8"} },
{class:"indent1all", texte: `Donne à chacun la claire vision de ce qu’il doit faire
et la force de l’accomplir.`, type: "dialogueV", conditions: {PriereC: "8"} },
{ texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "8" }},
{class:"indent1all lettrine", texte: `Seigneur Jésus,
qui te tiens au milieu des croyants
rassemblés en ton Nom,`, type: "dialogueV", conditions: {PriereC: "9"} },
{class:"indent1all", texte: `Écoute les supplications de ta famille
et daigne répondre à ses appels.`, type: "dialogueV", conditions: {PriereC: "9"} },
{ texte: `Toi qui vis et règnes pour les siècles des siècles.`, type: "dialogueV", conditions: {PriereC: "9" }},
  ]}
],

liturgieeucharistique: [
  { texte: "LITURGIE EUCHARISTIQUE", type: "H1", conditions: {} },
  { texte: `La prière universelle achevée, l'évêque s'assied et reçoit la mitre`, type:"servants", conditions: {porteinsigne: true}},

  { texte: `PRÉPARATION DES DONS`, type: "H2", conditions: {} },
  { texte: `<b>Les acolytes</b> apportent à l'autel les offrandes et objets liturgiques`, type:"servants", conditions: {acolytes: true}},
  { texte: `Après cela, on commence le chant d’offertoire. 
  Pendant ce temps, les ministres placent sur l’autel le missel, le corporal, le purificatoire, le calice et la pale.
  Il est bon que les fidèles manifestent leur participation par une offrande, en apportant le pain et le vin pour la célébration de l’eucharistie, ou même d’autres dons destinés à subvenir aux besoins de l’Église et des pauvres.`, type: "rubrique", conditions: {} },
  { type: "insert-offertoire"},
  { texte: `Le prêtre, debout à l’autel, prend la patène avec le pain, et la tient à deux mains, un peu élevée au-dessus de l’autel, en disant :`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dépose la mitre`, type:"servants", conditions: {porteinsigne: true}},
  { texte: `L'évêque, debout à l’autel, prend la patène avec le pain, et la tient à deux mains, un peu élevée au-dessus de l’autel, en disant :`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"grandelettrine indentallg", texte: `Tu es béni, Seigneur, Dieu de l’univers :
nous avons reçu de ta bonté
le pain que nous te présentons,
fruit de la terre et du travail des hommes ;
il deviendra pour nous le pain de la vie.`, type: "dialogueV", conditions: {} },
  { texte: `S’il n’y a pas de chant d’offertoire, le prêtre peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `S’il n’y a pas de chant d’offertoire, l'évêque peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"indentallg", texte: `Béni soit Dieu, maintenant et toujours !`, type: "dialogueR", conditions: {} },
  { texte: `Le prêtre, verse le vin et un peu d’eau dans le calice, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false,presenceBishop:false } },
  { texte: `Un prêtre, verse le vin et un peu d’eau dans le calice, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop:true } },
  { texte: `Le diacre verse le vin et un peu d’eau dans le calice, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: true } },
  {class:"voixbasse lettrine indentallg" , texte: `Comme cette eau se mêle au vin
pour le sacrement de l’Alliance,
puissions-nous être unis à la divinité
de Celui qui a voulu prendre notre humanité.`, type: "voixbasse", conditions: {secret:true } },
  { texte: `Ensuite, le prêtre prend le calice, et le tient à deux mains, un peu élevé au-dessus de l’autel, en disant à voix basse\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, l'évêque prend le calice, et le tient à deux mains, un peu élevé au-dessus de l’autel, en disant à voix basse\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine indentallg", texte: `Tu es béni, Seigneur, Dieu de l’univers\u00A0:
  nous avons reçu de ta bonté
  le vin que nous te présentons,
  fruit de la vigne et du travail des hommes ;
  il deviendra pour nous le vin du Royaume éternel.`, type: "dialogueV", conditions: {} },
  { texte: `S’il n’y a pas de chant d’offertoire, le prêtre peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `S’il n’y a pas de chant d’offertoire, l'évêque peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"indentallg", texte: `Béni soit Dieu, maintenant et toujours !`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, le prêtre, profondément incliné, dit tout bas :`, type: "rubrique", conditions: {secret:true, presenceBishop:false} },
  { texte: `Ensuite, l'évêque, profondément incliné, dit tout bas :`, type: "rubrique", conditions: {secret:true, presenceBishop:true } },
  { texte: `Le coeur humble et contrit,
  nous te supplions, Seigneur,
  accueille-nous :
  que notre sacrifice, en ce jour,
  trouve grâce devant toi,
  Seigneur notre Dieu.`, type: "voixbasse", conditions: {secret:true }},
//
  { texte: `<b>Le thuriféraire</b> s'approche de l'autel avec l'encensoir`, type:"servants", conditions: {incense: true}}, 
  { texte: `Le prêtre encense les offrandes, la croix et l’autel ; puis, le thuriféraire encense le prêtre et le peuple.`, type: "rubrique", conditions: {incense:true, presenceDiacre: false, presenceBishop:false} },
  { texte: `L'évêque encense les offrandes, la croix et l’autel ; puis, le thuriféraire encense l'évêque, les concélébrants et le peuple.`, type: "rubrique", conditions: {incense:true, presenceDiacre: false, presenceBishop:true} },
  { texte: `Le prêtre encense les offrandes, la croix et l’autel ; puis, le diacre ou un autre ministre encense le prêtre et le peuple.`, type: "rubrique", conditions: {incense:true, presenceDiacre: true, presenceBishop:false} },
  { texte: `L'évêque encense les offrandes, la croix et l’autel ; puis, le diacre ou un autre ministre encense l'évêque, les concélébrants et le peuple.`, type: "rubrique", conditions: {incense:true, presenceDiacre: true, presenceBishop:true} },
  { texte: `<b>Deux acolytes</b> s'avancent vers le prêtre avec le bassin et le manuterge`, type:"servants", conditions: {acolytes: true, presenceBishop:false}}, 
  { texte: `<b>Deux acolytes</b> s'avancent vers l'évêque avec le bassin et le manuterge`, type:"servants", conditions: {acolytes: true, presenceBishop:true}}, 
  { texte: `Ensuite, le prêtre, sur le côté de l’autel, se lave les mains, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceBishop:false } },
  { texte: `Ensuite, l'évêque, sur le côté de l’autel, se lave les mains, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceBishop:true } },
  { texte: `Lave-moi de mes fautes, Seigneur,
  et purifie-moi de mon péché.`, type: "voixbasse", conditions: {secret:true}},

//Prière sur les offrandes
  { texte: `PRIÈRE SUR LES OFFRANDES`, type: "H3", conditions: {} },
  { texte: `Revenu au milieu de l’autel, tourné vers le peuple, étendant puis joignant les mains, il dit\u00A0:`, type: "rubrique", conditions: {} },
  {class:"grandelettrine indentallg", texte: `Priez, frères (et soeurs) :
que mon sacrifice, qui est aussi le vôtre,
soit agréable à Dieu le Père tout-puissant.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple se lève et répond :`, type: "rubrique", conditions: {} },
  {class:"indentallg", texte: `Que le Seigneur reçoive de vos mains ce sacrifice
à la louange et à la gloire de son nom,
pour notre bien et celui de toute l’Église.`, type: "dialogueR", conditions: {} },
  { texte: `Puis, les mains étendues, le prêtre dit la prière sur les offrandes.`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Puis, les mains étendues, l'évêque dit la prière sur les offrandes.`, type: "rubrique", conditions: {presenceBishop:true} },
  {type : "insert-priereSurLesOffrandes"},
  { texte: "Amen", type: "dialogueR", conditions: {oraisons : true} },
  { texte: `L'évêque dépose la calotte`, type:"servants", conditions: {porteinsigne: true}},
  
//Prière eucharistique
  { texte: `PRIÈRE EUCHARISTIQUE`, type: "H2", conditions: {hidePE: false} },
  { texte: `Le prêtre commence alors la Prière eucharistique. Étendant les mains, il dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque commence alors la Prière eucharistique. Étendant les mains, il dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"lettrine indent1p", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  {class:"lettrine indent1p", texte: `Élevons notre coeur.`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `Nous le tournons vers le Seigneur.`, type: "dialogueR", conditions: {} },
  {class:"lettrine indent1p", texte: `Rendons grâce au Seigneur notre Dieu.`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `Cela est juste et bon.`, type: "dialogueR", conditions: {} },
  { type: "titre-preface"},
  { type: "soustitre-preface"},
  { texte: `Le prêtre dit la préface, les mains étendues.`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dit la préface, les mains étendues.`, type: "rubrique", conditions: {presenceBishop:true} },
  { type : "insert-preface" },
    { conditions: {typePE: "PE4"}, class: "tableau",items:[
        {class:"grandelettrine", texte:`Vraiment il est juste et bon,
            pour ta gloire et notre salut,`, type: "dialogueV"},
        {class:"indent1all", texte:`de t’offrir notre action de grâce,
            toujours et en tout lieu,`, type: "dialogueV"},
        {class:"indent1all", texte:`Seigneur, Père très saint,
            Dieu éternel et tout-puissant,
            par le Christ, notre Seigneur.`, type: "dialogueV"},
        {class:"sautdeligne", texte: `\n`, type: "dialogueV",},
        {class:"indent1all", texte:`Dans le mystère de sa Pâque,
            il a fait une œuvre merveilleuse :`, type: "dialogueV"},
        {class:"indent1all", texte:`car nous étions esclaves de la mort et du péché,
            et nous sommes appelés à partager sa gloire ;`, type: "dialogueV"},
        {class:"indent1all", texte:`nous portons désormais ces noms glorieux :
            descendance choisie, sacerdoce royal,
            nation sainte, peuple racheté ;`, type: "dialogueV"},
        {class:"indent1all", texte:`nous pouvons annoncer au monde
            les merveilles que tu as accomplies,`, type: "dialogueV"},
        {class:"indent1all", texte:`toi qui nous appelles des ténèbres
            à ton admirable lumière.`, type: "dialogueV"},
        {class:"sautdeligne", texte: `\n`, type: "dialogueV"},
        {class:"indent1all", texte:`C’est pourquoi, avec les anges et les archanges,
            avec les puissances d’en haut et tous les esprit bienheureux,
            nous chantons l’hymne de ta gloire
            et sans fin nous proclamons\u00A0:`, type: "dialogueV"}]},
  { id:"sanctus", texte: `À la fin de la préface, le prêtre joint les mains et, avec le peuple, proclame\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { id:"sanctus", texte: `À la fin de la préface, l'évêque joint les mains et, avec le peuple, proclame\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },

  //Sanctus
  //français
  {class:"grandelettrine indentallg", texte: `Saint ! Saint ! Saint, le Seigneur, Dieu de l’univers !
  Le ciel et la terre sont remplis de ta gloire.
  Hosanna au plus haut des cieux.
  Béni soit celui qui vient au nom du Seigneur.
  Hosanna au plus haut des cieux.`, type: "dialogueV", conditions: {sanctusLt: false} },
  //Latin
  {class:"grandelettrine indentallg", texte: `Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth.
  Pleni sunt cæli et terra glória tua.
  Hosánna in excélsis.
  Benedíctus qui venit in nómine Dómini.
  Hosánna in excélsis.`, type: "dialogueV", conditions: {sanctusLt: true} },
  { texte: `Si tel est l’usage, <b>les céroféraires</b> et <b>le thuriféraire</b> se rendent devant l’autel pendant le chant du Sanctus.`, type:"servants", conditions: {ceroferaire: true, incense:true}},
  { texte: `Si tel est l’usage, <b>les céroféraires</b> se rendent devant l’autel pendant le chant du Sanctus.`, type:"servants", conditions: {ceroferaire: true, incense:false}},
  { texte: `Si tel est l’usage, <b>le thuriféraire</b> se rend devant l’autel pendant le chant du Sanctus.`, type:"servants", conditions: {ceroferaire: false, incense:true}},
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },

  { id: "PE1", texte: `PRIÈRE EUCHARISTIQUE I`, type: "H3", conditions: {hidePE: false, typePE: "PE1"} },
  { id: "PE2", texte: `PRIÈRE EUCHARISTIQUE II`, type: "H3", conditions: {hidePE: false, typePE: "PE2"} },
  { id: "PE3", texte: `PRIÈRE EUCHARISTIQUE III`, type: "H3", conditions: {hidePE: false, typePE: "PE3"} },
  { id: "PE4", texte: `PRIÈRE EUCHARISTIQUE IV`, type: "H3", conditions: {hidePE: false, typePE: "PE4"} },
//PE 1
  { conditions: {typePE: "PE1", hidePE: false}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"grandelettrine", texte: `Toi, Père très aimant,
nous te prions et te supplions
par Jésus Christ, ton Fils, notre Seigneur,`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `il joint les mains et dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { texte: `d’accepter`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `puis il fait un signe de croix sur le pain et le calice et dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class:"indent1p", texte: `et de bénir <span style="color: #b30000;">✠</span> ces dons, ces offrandes,
sacrifice pur et saint,`, type: "dialogueV", conditions: {} },
  { texte: `<b>Les servants</b> se mettent à genoux.`, type:"servants", conditions: {}},
  {class:"indent1g", texte: `il étend les mains et continue :`, type: "rubriqueinterne", conditions: {} },
  {class:"indent1all", texte: `que nous te présentons
avant tout pour ta sainte Église catholique\u00A0:`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `accorde-lui la paix et protège-la,
daigne la rassembler dans l’unité
et la gouverner par toute la terre ;`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `nous les présentons
en union avec ton serviteur notre Pape <span style="color: #b30000;">N.</span>,
notre Évêque <span style="color: #b30000;">N.</span>,`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `et tous ceux qui gardent fidèlement
la foi catholique reçue des Apôtres.`, type: "dialogueV", conditions: {} },
  { texte: `COMMEMORATION DES VIVANTS`, type: "rubrique", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `Souviens-toi, Seigneur,
de tes serviteurs et de tes servantes (de <span style="color: #b30000;">N.</span> et de <span style="color: #b30000;">N.</span>),`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `Il joint les mains, prie en silence. Puis il reprend, les mains étendues\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class:"indent1all", texte: `et de tous ceux qui sont ici réunis,
dont tu connais la foi et l’attachement.`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `Nous t’offrons pour eux,
ou ils t’offrent pour eux-mêmes et tous les leurs
ce sacrifice de louange,`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `pour leur propre rédemption,
pour la paix, et le salut qu’ils espèrent\u00A0;`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `ils te rendent cet hommage,
à toi, Dieu éternel, vivant et vrai.`, type: "dialogueV", conditions: {} },

  { texte: `DURANT L’ACTION`, type: "rubrique", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `Unis dans une même communion,
    nous célébrons le jour`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class:"indentallp", texte: `où le Christ est ressuscité d’entre les morts\u00A0;`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class:"indent1all", texte: `et vénérant d’abord la mémoire
de la bienheureuse Marie toujours Vierge,
Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
//De la Nativité du Seigneur jusqu’au 1er janvier inclus
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`où Marie, dans la gloire de sa virginité,
  enfanta le Sauveur du monde ;`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
//Pour l'épiphanie
{class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`où ton Fils unique
  qui partage éternellement ta propre gloire`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`s’est manifesté à nos yeux
  dans un vrai corps pris de notre chair ;`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
//De la Veillée pascale jusqu’au 2e dimanche de Pâques inclus
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`où ressuscita selon la chair
  notre Seigneur Jésus Christ ;`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//Pour la présentation du Seigneur au temple
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
  {class: "indent1all", texte:`où la Vierge Marie te présenta dans le Temple
    ton Fils unique, son enfant nouveau-né`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de cette Vierge bienheureuse,
  La Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
//Pour l'Ascension du Seigneur
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`où notre Seigneur, ton Fils unique,
  ayant pris notre nature avec sa faiblesse,
  la fit entrer dans ta gloire, à ta droite ;`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
//Pour le dimanche de la Pentecôte
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint de la Pentecôte,`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`où l’Esprit Saint s’est manifesté aux Apôtres
  par d’innombrables langues de feu ;`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
//Pour l'Assomption de la Vierge Marie
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour où la Vierge Marie
  a été élevée dans la gloire du ciel ;`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
//Pour la fête de tous les saints
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour
  consacré à la mémoire de tous les saints :`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`ils ont imité le Christ pendant leur vie
  et, à leur mort, ils ont reçu de lui la couronne de gloire ;`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
//Pour le jeudi saint
  {class: "grandelettrine", texte:`Unis dans une même communion,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
  {class: "indentallp", texte:`où notre Seigneur Jésus Christ
fut livré pour nous ;`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
  {class: "indent1all", texte:`et vénérant d’abord la mémoire
  de la bienheureuse Marie toujours Vierge,
  Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
//En semaine
  {class:"grandelettrine", texte: `Unis dans une même communion,
vénérant d’abord la mémoire`, type: "dialogueV", conditions: {Communicantes:"Semaine"} },
{class:"indent1all", texte: `de la bienheureuse Marie toujours Vierge,
Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {Communicantes:"Semaine"} },

  {class:"indentallp", texte: `et celle de saint Joseph, son époux,
des bienheureux Apôtres et martyrs
Pierre et Paul, André,
<span style="color: #b30000;">(</span>Jacques et Jean, Thomas, Jacques et Philippe,
Barthélemy et Matthieu, Simon et Jude,
Lin, Clet, Clément, Sixte, Corneille et Cyprien,
Laurent, Chrysogone, Jean et Paul, Côme et Damien<span style="color: #b30000;">)</span>
et de tous les saints,`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `nous t’en supplions\u00A0:
accorde-nous, par leur prière et leurs mérites,
d’être toujours et partout,
forts de ton secours et de ta protection.
<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {} },

  { texte: `Les mains étendues il continue`, type: "rubriqueinterne", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `Voici donc l’offrande que nous présentons devant toi,
nous, tes serviteurs, et ta famille entière\u00A0:`, type: "dialogueV", conditions: {} },
//De la Veillée pascale jusqu’au 2e dimanche de Pâques inclus
  {class:"indent1all", texte: `particulièrement pour les baptisés de Pâques
  que tu as fait renaître de l’eau et de l’Esprit Saint,
  en pardonnant tous leurs péchés.`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class:"indent1all", texte: `Nous t’en prions, Seigneur,
  dans ta bienveillance, accepte cette offrande.`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//jeudi saint
  {class:"indentallp", texte: `le jour même où notre Seigneur Jésus Christ
  a livré à ses disciples, pour qu’ils les célèbrent,
  les mystères de son corps et de son sang.`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
  {class:"indent1all", texte: `Nous t’en prions, Seigneur,
dans ta bienveillance, accepte cette offrande.`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
//
  {class:"indent1p", texte: `Seigneur, dans ta bienveillance, accepte-la.`, type: "dialogueV", conditions: {precision:""} },
  {class:"indent1all", texte: `Assure toi-même la paix de notre vie,
arrache-nous à la damnation éternelle
et veuille nous admettre au nombre de tes élus.`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { texte: `<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {} },

  { texte: `Tenant les mains étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `Seigneur Dieu, nous t’en prions,
daigne bénir et accueillir cette offrande,`, type: "dialogueV" },
  {class:"indent1all", texte: `accepte-la pleinement,
rends-la parfaite et digne de toi\u00A0:`, type: "dialogueV" },
  { texte: `qu’elle devienne pour nous`, type: "dialogueV" },
  {class:"indentallp", texte: `le Corps et le Sang de ton Fils bien-aimé,
Jésus, le Christ, notre Seigneur.`, type: "dialogueV" },
  {class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },

  { texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées ou chantées
de façon distincte et claire, comme le requiert la nature de ces paroles`, type: "rubrique" },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `La veille de sa passion,`, type: "dialogueV", conditions: {precision:""} },
  {class:"grandelettrine", texte: `La veille du jour où il devait souffrir
  pour notre salut et celui de tous les hommes,
  c’est-à-dire aujourd’hui,`, type: "dialogueV", conditions: {precision:"jeudisaint"} },

  {  class: "indent1p",texte: `Il prend le pain et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `il prit le pain dans ses mains très saintes`, type: "dialogueV" },
  {class: "indent1g", texte: `Il élève les yeux.`, type: "rubriqueinterne" },
  {class: "indent1all", texte: `et, les yeux levés au ciel,
vers toi, Dieu, son Père tout-puissant,`, type: "dialogueV" },
  {class: "indent1all", texte: `en te rendant grâce il dit la bénédiction,
il rompit le pain,`, type: "dialogueV" },
  { texte: `et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir l'hostie lors de l'élévation`, type:"servants", conditions: {incense:true}},
  {class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  {class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  {  class: "indent1p", texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `il prit cette coupe incomparable dans ses mains très saintes\u00A0;`, type: "dialogueV" },
  {class: "indent1all", texte: `et, te rendant grâce à nouveau, il dit la bénédiction,
et donna la coupe à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir le calice lors de l'élévation`, type:"servants", conditions: {incense:true}},
  ] },
//PE 2
{ conditions: {typePE: "PE2", hidePE: false}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
et, dans la communion de toute l’Église,`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class:"indent1all", texte: `nous célébrons le jour
où le Christ est ressuscité d’entre les morts.`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class:"indent1all", texte: `Par lui que tu as élevé à ta droite, nous te prions\u00A0:`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
//De la Dimanche du Seigneur jusqu’au 1er janvier inclus
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`où Marie, dans la gloire de sa virginité,
  enfanta le Sauveur du monde.`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et notre Seigneur, nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
//Pour l'épiphanie
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`où ton Fils unique
  qui partage éternellement ta propre gloire`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`s’est manifesté à nos yeux
  dans un vrai corps pris de notre chair ;`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et notre Seigneur, nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
//De la Veillée pascale jusqu’au 2e dimanche de Pâques inclus
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`où ressuscita selon la chair
  notre Seigneur Jésus Christ ;`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et notre Sauveur, nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//Pour la présentation du Seigneur au temple
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`où la Vierge Marie te présenta dans le Temple
    son enfant nouveau-né,
    ton Fils unique, notre Seigneur`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
  {class: "indent1all", texte:`Par lui, lumière née de ta lumière,
    nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
//Pour l'Ascension du Seigneur
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`où notre Seigneur, ton Fils unique,
  ayant pris notre nature avec sa faiblesse,
  la fit entrer dans ta gloire, à ta droite ;`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`Par lui, qui siège désormais à ta droite, nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
//Pour le dimanche de la Pentecôte
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`où l’Esprit Saint s’est manifesté aux Apôtres
  par d’innombrables langues de feu ;`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`et nous te prions, Seigneur :`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
//Pour l'Assomption de la Vierge Marie
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour où la Vierge, Mère de Dieu,
  a été élevée au ciel, dans la gloire de son fils,
  Jésus Christ, notre Seigneur.`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
  {class:"indent1all", texte: `Par lui, qui est à l’origine de notre foi
  et qui la mène à sa perfection,`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
  {class: "indent1all", texte:`nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
//Pour la fête de tous les saints
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour
  consacré à la mémoire de tous les saints :`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`ils ont suivi le Christ pendant leur vie
  et, à leur mort, ils ont reçu de lui la couronne de gloire.`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`Par lui, qui est à l’origine de notre foi
  et qui la mène à sa perfection,
  nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
//Pour le jeudi saint
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {precision:"jeudisaint"} },
  {class:"indent1all", texte: `nous voici rassemblés devant toi,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint
où notre Seigneur Jésus Christ fut livré pour nous.`, type: "dialogueV", conditions: {precision:"jeudisaint"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et Sauveur, que tu as glorifié,
  nous te prions :`, type: "dialogueV", conditions: {precision:"jeudisaint"} },
//En semaine
  {class:"grandelettrine", texte: `Toi qui es vraiment Saint,
  toi qui es la source de toute sainteté,`, type: "dialogueV", conditions: {Communicantes:"Semaine"} },
  {class:"grandelettrine", texte: `Seigneur, nous te prions :`, type: "dialogueV", conditions: {Communicantes:"Semaine"} },

  {class:"indent1g", texte: `Il joint les mains, et, les tenant étendues sur les offrandes, il dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { texte: `Sanctifie ces offrandes
en répandant sur elles ton Esprit\u00A0;`, type: "dialogueV", conditions: {} },
  {class:"indent1g", texte: `il joint les mains, puis il fait un signe de croix sur le pain et le calice, en disant\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class:"indent1all", texte: `qu’elles deviennent pour nous
le Corps <span style="color: #b30000;">✠</span> et le Sang
de Jésus, le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `<b>Les servants</b> se mettent à genoux.`, type:"servants", conditions: {}},
  {class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },

{ texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées distinctement et clairement, comme le requiert la nature de ces paroles.`, type: "rubrique" },
  {class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  {class:"grandelettrine", texte: `Au moment d’être livré
et d’entrer librement dans sa passion,`, type: "dialogueV", conditions: {precision:""} },
  {class:"grandelettrine", texte: `Au moment d’être livré
  et d’entrer librement dans sa passion,
  c’est à dire aujourd’hui,`, type: "dialogueV", conditions: {precision:"jeudisaint"} },
  {  class: "indent1p",texte: `Il prend le pain et le tient un peu au-dessus de l’autel.`, type: "rubriqueinterne" },
  { texte: `il prit le pain, il rendit grâce, il le rompit
et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir l'hostie lors de l'élévation`, type:"servants", conditions: {incense:true}},
  {class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  {class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  { texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `il prit la coupe ;`, type: "dialogueV" },
  { texte: `de nouveau il rendit grâce,
et la donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir le calice lors de l'élévation`, type:"servants", conditions: {incense:true}},
]},
//PE 3
{ conditions: {typePE: "PE3", hidePE: false}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `Tu es vraiment saint, Dieu de l’univers, 
    et il est juste que toute la création proclame ta louange,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `car c’est toi qui donnes la vie, 
    c’est toi qui sanctifies toutes choses, 
    par ton Fils, Jésus Christ, notre Seigneur, 
    avec la puissance de l’Esprit Saint\u00A0;`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et tu ne cesses de rassembler ton peuple, 
    afin que, du levant au couchant du soleil, 
    une offrande pure soit présentée à ton nom.`, type: "dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
//Dimanche
  {class: "grandelettrine", texte: `C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
    et, dans la communion de toute l’Église,`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class: "indent1all", texte: `nous célébrons le jour 
    où le Christ est ressuscité d’entre les morts.`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  {class: "indent1all", texte: `Par lui, que tu as élevé à ta droite, 
    nous te supplions de consacrer toi-même 
    les offrandes que nous apportons\u00A0:`, type: "dialogueV", conditions: {Communicantes:"Dimanche"} },
  //De la Nativité du Seigneur jusqu’au 1er janvier inclus
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`où Marie, dans la gloire de sa virginité,
  enfanta le Sauveur du monde ;`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et notre Seigneur,
  nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Nativité"} },
//Pour l'épiphanie
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`où ton Fils unique
  qui partage éternellement ta propre gloire`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`s’est manifesté à nos yeux
  dans un vrai corps pris de notre chair ;`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
  {class: "indent1all", texte:`Par lui, notre Rédempteur et notre Sauveur,
  nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Epiphanie"} },
//De la Veillée pascale jusqu’au 2e dimanche de Pâques inclus
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père,
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint <span style="color: #b30000;">ou (</span>la nuit très sainte<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`où ressuscita selon la chair
  notre Seigneur Jésus Christ ;`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  {class: "indent1all", texte:`Par lui que tu as élevé à ta droite,
  nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//Pour la présentation du Seigneur au temple
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`où la Vierge Marie te présenta dans le Temple
    son enfant nouveau-né,
    ton Fils unique, notre Seigneur`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
  {class: "indent1all", texte:`Par lui, lumière née de ta lumière,
    nous te supplions de consacrer toi-même
    les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Présentation"} },
//Pour l'Ascension du Seigneur
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`où notre Seigneur, ton Fils unique,
  ayant pris notre nature avec sa faiblesse,
  la fit entrer dans ta gloire, à ta droite ;`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
  {class: "indent1all", texte:`Par lui, qui siège désormais à ta droite,
  nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Ascension"} },
//Pour le dimanche de la Pentecôte
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour très saint de la Pentecôte,`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`où l’Esprit Saint s’est manifesté aux Apôtres
  par d’innombrables langues de feu ;`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
  {class: "indent1all", texte:`nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Pentecôte"} },
//Pour l'Assomption de la Vierge Marie
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour où la Vierge, Mère de Dieu,
  a été élevée au ciel, dans la gloire de son fils,
  Jésus Christ, notre Seigneur.`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
  {class: "indent1all", texte:`Par lui, qui est à l’origine de notre foi
  et qui la mène à sa perfection,`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },  
  {class: "indent1all", texte:`nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Assomption"} },
//Pour la fête de tous les saints
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,
  nous célébrons le jour
  consacré à la mémoire de tous les saints :`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`ils ont suivi le Christ pendant leur vie
  et, à leur mort, ils ont reçu de lui la couronne de gloire ;`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
  {class: "indent1all", texte:`Par lui, qui est à l’origine de notre foi
  et qui la mène à sa perfection,`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },  
  {class: "indent1all", texte:`nous te supplions de consacrer toi-même
  les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Toussaint"} },
//Pour le jeudi saint
  {class: "grandelettrine", texte:`C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
  et, dans la communion de toute l’Église,`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
{class: "indent1p", texte:`  nous célébrons le jour très saint`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
{ texte:`où notre Seigneur Jésus Christ fut livré pour nous.`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },
  {class: "indent1all", texte:`Par lui notre Rédempteur et Sauveur, que tu as glorifié,
nous te supplions de consacrer toi-même
les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"jeudisaint"} },  
//En semaine
  {class:"grandelettrine", texte: `C<span></span>’est pourquoi nous te supplions, Seigneur,
de consacrer toi-même
les offrandes que nous apportons :`, type: "dialogueV", conditions: {Communicantes:"Semaine"} },

  { texte: `Il joint les mains, puis, les tenant étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  {class: "indentallp", texte: `Sanctifie-les par ton Esprit 
    pour qu’elles deviennent`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il joint les mains puis il fait le signe de croix sur le pain et le calice, en disant\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class: "indentallp", texte: `le Corps <span style="color: #b30000;">✠</span> et le Sang de ton Fils,
    Jésus Christ, notre Seigneur,`, type: "dialogueV", conditions: {} },
  { texte: `<b>Les servants</b> se mettent à genoux.`, type:"servants", conditions: {}},
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1p", texte: `qui nous a dit de célébrer ce mystère.`, type: "dialogueV", conditions: {} },
  { texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées ou chantées de façon distincte et claire, comme le requiert la nature de ces paroles.`, type: "rubrique", conditions: {} },
  {class: "grandelettrine", texte: `La nuit même où il fut livré,`, type: "dialogueV", conditions: {precision:""} },
  {class:"grandelettrine", texte: `La nuit même où il fut livré,
  c’est à dire aujourd’hui,`, type: "dialogueV", conditions: {precision:"jeudisaint"} },
  { texte: `Il prend le pain et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1p", texte: `il prit le pain,`, type: "dialogueV", conditions: {} },
  { texte: `en te rendant grâce il dit la bénédiction, 
    il rompit le pain, 
    et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir l'hostie lors de l'élévation`, type:"servants", conditions: {incense:true}},
  {class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  {class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  { texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `il prit la coupe ;`, type: "dialogueV" },
  { texte: `en te rendant grâce il dit la bénédiction, 
    et donna la coupe à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir le calice lors de l'élévation`, type:"servants", conditions: {incense:true}},
]},
//PE 4
{ conditions: {typePE: "PE4", hidePE: false}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine indentallp", texte: `Père très saint, 
    nous proclamons que tu es grand`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et que tu as fait toutes choses 
    avec sagesse et par amour :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `tu as créé l’homme à ton image 
    et tu lui as confié l’univers,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `afin qu’en te servant, toi seul, son Créateur, 
    il règne sur la création.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Comme il avait perdu ton amitié par sa désobéissance, 
    tu ne l’as pas abandonné au pouvoir de la mort.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Dans ta miséricorde, 
    tu es venu en aide à tous les hommes 
    pour qu’ils te cherchent et puissent te trouver.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Tu as multiplié les alliances avec eux, 
    et tu les as formés, par les prophètes, 
    dans l’espérance du salut.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Tu as tellement aimé le monde, 
    Père très saint,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `que tu nous as envoyé ton Fils unique, 
    lorsque les temps furent accomplis, 
    pour qu’il soit notre Sauveur.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Dieu fait homme, conçu de l’Esprit Saint, 
    né de la Vierge Marie,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `il a vécu notre condition humaine 
    en toute chose, excepté le péché,`, type: "dialogueV", conditions: {} },
  { texte: `annonçant aux pauvres la bonne nouvelle du salut ; 
    aux captifs, la délivrance ; 
    aux affligés, la joie.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Pour accomplir le dessein de ton amour, 
    il s’est livré lui-même à la mort,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et, par sa résurrection, 
    il a détruit la mort et renouvelé la vie.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Afin que désormais notre vie ne soit plus à nous-mêmes, 
    mais à lui qui est mort et ressuscité pour nous,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `il a envoyé d’auprès de toi, Père, 
    comme premier don fait aux croyants,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `l’Esprit Saint qui continue son oeuvre dans le monde 
    et achève toute sanctification.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains puis, les tenant étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  {class: "grandelettrine", texte: `Que ce même Esprit Saint, 
    nous t’en prions, Seigneur,`, type: "dialogueV", conditions: {} },
  { texte: `sanctifie ces offrandes :`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il joint les mains puis il fait le signe de croix sur le pain et le calice, en disant\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1all", texte: `qu’elles deviennent ainsi
    le Corps <span style="color: #b30000;">✠</span> et le Sang
    de notre Seigneur Jésus, le Christ,`, type: "dialogueV", conditions: {} },
  { texte: `<b>Les servants</b> se mettent à genoux.`, type:"servants", conditions: {}},
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1all", texte: `dans la célébration de ce grand mystère, 
    que lui-même nous a laissé 
    en signe de l’Alliance éternelle.`, type: "dialogueV", conditions: {} },
  { texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées ou chantées de façon distincte et claire, comme le requiert la nature de ces paroles.`, type: "rubrique", conditions: {} },
  {class: "grandelettrine", texte: `Quand l’heure fut venue où tu allais le glorifier,
    Père très saint,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `comme il avait aimé les siens qui étaient dans le monde, 
    il les aima jusqu’au bout :`, type: "dialogueV", conditions: {} },
  { texte: `pendant le repas qu’il partageait avec eux,`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il prend le pain et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1all", texte: `il prit le pain, 
    dit la bénédiction, 
    le rompit`, type: "dialogueV", conditions: {} },
  { texte: `et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir l'hostie lors de l'élévation`, type:"servants", conditions: {incense:true}},
  {class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  {class:"grandelettrine", texte: `De même,`, type: "dialogueV" },
  {class: "indent1g", texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `il prit la coupe remplie de vin ;`, type: "dialogueV" },
  { texte: `il rendit grâce, 
    et donna la coupe à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  {class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  {class:"sautdeligne", texte: `\n`},
  {class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
  { texte: `<b>Le thuriféraire</b> encense de trois coups d'encensoir le calice lors de l'élévation`, type:"servants", conditions: {incense:true}},
]},


//Acclamation eucharistique / Anamnèse
  { id: "Anamnèse", texte: `Puis il introduit une des acclamations suivantes\u00A0:`, type: "rubrique", conditions: {hidePE: false} },
  {class: "indent1g lettrine", texte: `Il est grand, le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE1", hidePE: false} },
  {class: "indentallg", texte: `Nous annonçons ta mort, Seigneur Jésus,
nous proclamons ta résurrection,
nous attendons ta venue dans la gloire.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE1", hidePE: false} },
    {class: "indent1g lettrine", texte: `Acclamons le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE2", hidePE: false} },
  {class: "indentallg", texte: `Quand nous mangeons ce Pain
et buvons à cette Coupe,
nous annonçons ta mort, Seigneur ressuscité,
et nous attendons que tu viennes.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE2", hidePE: false} },
    {class: "indent1g lettrine", texte: `Qu’il soit loué, le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE3", hidePE: false} },
  {class: "indentallg", texte: `Sauveur du monde, sauve-nous !
Par ta croix et ta résurrection, tu nous as libérés.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE3", hidePE: false} },
    {class: "indent1g lettrine", texte: `Proclamons le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE4", hidePE: false} },
  {class: "indentallg", texte: `Gloire à toi qui étais mort,
gloire à toi qui es vivant,
notre Sauveur et notre Dieu :
Viens, Seigneur Jésus !`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE4", hidePE: false} },
  
//Suite PE 1
{ conditions: {typePE: "PE1", hidePE: false}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, les mains étendues, l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `Voilà pourquoi nous, tes serviteurs,
et ton peuple saint avec nous,
faisant mémoire`, type: "dialogueV" },
  {class: "indentallp", texte: `de la passion bienheureuse de ton Fils,
Jésus, le Christ, notre Seigneur,
de sa résurrection du séjour des morts
et de sa glorieuse ascension dans le ciel,`, type: "dialogueV" },
  {class: "indent1all", texte: `nous te présentons, Dieu de gloire et de majesté,
cette offrande
prélevée sur les biens que tu nous donnes,`, type: "dialogueV" },
  {class: "indent1all", texte: `le sacrifice pur et saint, le sacrifice parfait,
Pain de la vie éternelle et Coupe du salut.`, type: "dialogueV" },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Et comme il t’a plu d’accueillir
les présents de ton serviteur Abel le Juste,
le sacrifice d’Abraham, notre père dans la foi,`, type: "dialogueV" },
  {class: "indent1all", texte: `et celui que t’offrit Melchisédech, ton grand prêtre,
oblation sainte et immaculée,`, type: "dialogueV" },
  {class: "indent1all", texte: `regarde ces offrandes avec amour
et, dans ta bienveillance, accepte-les`, type: "dialogueV" },
  { texte: `Incliné, les mains jointes, il continue\u00A0:`, type: "rubriqueinterne" },
  { texte: `Nous t’en supplions, Dieu tout-puissant :`, type: "dialogueV" },
  {class: "indent1all", texte: `Qu’elles soient portées
par les mains de ton saint Ange`, type: "dialogueV" },
  {class: "indent1all", texte: `en présence de ta gloire,
sur ton autel céleste,`, type: "dialogueV" },
  {class: "indent1all", texte: `afin qu’en recevant ici,
par notre communion à l’autel,
le Corps et le Sang très saints de ton Fils,`, type: "dialogueV" },
  {class: "indent1g", texte: `il se redresse et se signe en disant\u00A0:`, type: "rubriqueinterne" },
  { texte: `nous soyons comblés de la grâce
et de toute bénédiction du ciel.
<span style="color: #b30000;">[</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">]</span>`, type: "dialogueV" },
  {class:"sautdeligne", texte: `\n`},
  { texte: `COMMÉMORATION DES DÉFUNTS.`, type: "rubrique" },
  {class: "indent1g", texte: `Les mains étendues, il dit\u00A0:`, type: "rubriqueinterne" },
  {class:"grandelettrine", texte: `Souviens-toi aussi, Seigneur,
de tes serviteurs et de tes servantes <span style="color: #b30000;">(</span>de <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.)</span>`, type: "dialogueV" },
  {class: "indent1all", texte: `qui nous ont précédés,
marqués du signe de la foi,`, type: "dialogueV" },
  { texte: `et qui dorment dans la paix.`, type: "dialogueV" },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1g ", texte: `Il joint les mains et prie en silence quelques instants pour les défunts dont il porte l’intention.`, type: "rubriqueinterne" },
  {class: "indent1g", texte: `Puis il reprend, les mains étendues\u00A0:`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `nous implorons ta bonté, Seigneur\u00A0:`, type: "dialogueV" },
  {class: "indent1all", texte: `qu’ils demeurent dans la joie,
la lumière et la paix.`, type: "dialogueV" },
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `<span style="color: #b30000;">[</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">]</span>`, type: "dialogueV" },
  {class: "indent1p", texte: `Il se frappe la poitrine avec la main droite, en disant\u00A0:`, type: "rubrique" },
  {class: "grandelettrine", texte: `Et nous pécheurs, tes serviteurs,`, type: "dialogueV" },
  {class: "indent1p", texte: `il étend les mains et continue\u00A0:`, type: "rubriqueinterne" },
  {class: "indentallp", texte: `qui mettons notre espérance
en ta miséricorde inépuisable,`, type: "dialogueV" },
  {class: "indent1all", texte: `admets-nous dans la communauté
des saints Apôtres et Martyrs,
avec Jean Baptiste, Étienne, Matthias et Barnabé,`, type: "dialogueV" },
  {class: "indentallp", texte: `<span style="color: #b30000;">[</span>Ignace, Alexandre, Marcellin et Pierre,
Félicité et Perpétue, Agathe, Lucie,
Agnès, Cécile, Anastasie,<span style="color: #b30000;">]</span>
et tous les saints ;`, type: "dialogueV" },
  {class: "indent1all", texte: `nous t’en prions, accueille-nous dans leur compagnie,
sans nous juger sur le mérite
mais en accordant largement ton pardon.`, type: "dialogueV" },
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },
  {class: "indent1p", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV" },
  {class:"sautdeligne", texte: `\n`},
  { texte: `Il continue :`, type: "rubriqueinterne" },
  {class: "indent1all", texte: `Par lui, tu ne cesses de créer tous ces biens,
tu les sanctifies, leur donnes la vie,
les bénis, et nous en fais le don.`, type: "dialogueV" },
] },
//Suite PE 2
{ conditions: {typePE: "PE2", hidePE: false}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, les mains étendues, l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `En faisant ainsi mémoire
    de la mort et de la résurrection de ton Fils,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `nous t’offrons, Seigneur, 
    le Pain de la vie et la Coupe du salut,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et nous te rendons grâce, 
    car tu nous as estimés dignes 
    de nous tenir devant toi pour te servir.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Humblement, nous te demandons 
    qu’en ayant part au Corps et au Sang du Christ, 
    nous soyons rassemblés par l’Esprit Saint 
    en un seul corps.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Souviens-toi, Seigneur, 
    de ton Église répandue à travers le monde :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `fais-la grandir dans ta charité 
    en union avec ton serviteur notre pape <span style="color: #b30000;">N.</span>, 
    notre évêque <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et tous les évêques, les prêtres et les diacres.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
//Ajout Pâques
  {texte: `De la Veillée pascale jusqu’au deuxième dimanche de Pâques inclus, on peut ajouter :`, type: "rubrique", conditions: {Communicantes:"Pâques"} },
  {class: "grandelettrine", texte: `Souviens-toi des baptisés de Pâques
que tu as fait renaître de l’eau et de l’Esprit Saint`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  { texte: `pour une vie nouvelle dans le Christ.`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//Ajout Défunts
  {texte: `Aux messes pour les défunts, on peut ajouter :`, type: "rubrique", conditions: {Messe:"Défunts"} },
  {class: "grandelettrine", texte: `Souviens-toi de <span style="color: #b30000;">N.</span> <span style="color: #b30000;">ou</span> celui (celle) (ton serviteur <span style="color: #b30000;">ou</span> ta servante)
qui a quitté ce monde (aujourd’hui)`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1p", texte: `et que tu appelles auprès de toi.`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1all", texte: `Puisqu’il (elle) a été uni (e) à la mort de ton Fils,
accorde-lui de participer à sa résurrection.`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class:"sautdeligne", texte: `\n`},

  {class: "grandelettrine", texte: `Souviens-toi aussi de nos frères et soeurs 
    qui se sont endormis dans l’espérance de la résurrection,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et souviens-toi, dans ta miséricorde, de tous les défunts\u00A0: 
    accueille-les dans la lumière de ton visage.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Sur nous tous enfin, 
    nous implorons ta bonté :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `permets qu’avec la Vierge Marie, 
    la bienheureuse Mère de Dieu, 
    avec saint Joseph, son époux, 
    les Apôtres et tous les saints 
    qui ont fait ta joie au long des âges,`, type: "dialogueV", conditions: {} },
  { texte: `nous ayons part à la vie éternelle 
    et que nous chantions ta louange et ta gloire,`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1p", texte: `par ton Fils Jésus, le Christ.`, type: "dialogueV", conditions: {} },
] },
//Suite PE 3
{ conditions: {typePE: "PE3", hidePE: false}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, les mains étendues, l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `En faisant ainsi mémoire de ton Fils,
    de sa passion qui nous sauve,`, type: "dialogueV", conditions: {} },
  {class: "indentallp", texte: `de sa glorieuse résurrection 
    et de son ascension dans le ciel,`, type: "dialogueV", conditions: {} },
  { texte: `alors que nous attendons son dernier avènement,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `nous t’offrons, Seigneur, en action de grâce, 
    ce sacrifice vivant et saint.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Regarde, nous t’en prions, 
    l’oblation de ton Église,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et daigne y reconnaître ton Fils qui, selon ta volonté, 
    s’est offert en sacrifice pour nous réconcilier avec toi.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Quand nous serons nourris de son Corps et de son Sang, 
    et remplis de l’Esprit Saint,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `accorde-nous d’être un seul corps et un seul esprit 
    dans le Christ.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Que l’Esprit Saint fasse de nous 
    une éternelle offrande à ta gloire,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `pour que nous obtenions un jour l’héritage promis, 
    avec tes élus :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en premier lieu la bienheureuse Vierge Marie, 
    Mère de Dieu,`, type: "dialogueV", conditions: {} },
  { texte: `avec saint Joseph, son époux, 
    les bienheureux Apôtres, les glorieux martyrs, 
    <span style="color: #b30000;">(</span>saint <span style="color: #b30000;">N.)</span>`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: ``, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et tous les saints, 
    qui ne cessent d’intercéder auprès de toi 
    et nous assurent de ton secours.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Et maintenant nous te supplions, Seigneur : 
    par le sacrifice qui nous réconcilie avec toi,`, type: "dialogueV", conditions: {} },
  {class: "indent1p", texte: `étends au monde entier le salut et la paix.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Affermis ton Église, en pèlerinage sur la terre, 
    dans la foi et la charité,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en union avec ton serviteur notre pape <span style="color: #b30000;">N.</span>, 
    et notre évêque <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `l’ensemble des évêques, les prêtres, les diacres, 
    et tout le peuple que tu as racheté.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  //Ajout Pâques
  {texte: `De la Veillée pascale jusqu’au deuxième dimanche de Pâques inclus, on peut ajouter :`, type: "rubrique", conditions: {Communicantes:"Pâques"} },
  {class: "grandelettrine", texte: `Souviens-toi des baptisés de Pâques
  que tu as fait renaître de l’eau et de l’Esprit Saint`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
  { texte: `pour une vie nouvelle dans le Christ.`, type: "dialogueV", conditions: {Communicantes:"Pâques"} },
//Ajout Défunts
//A completer
  {texte: `Aux messes pour les défunts, on peut dire :`, type: "rubrique", conditions: {Messe:"Défunts"} },
  {class: "grandelettrine", texte: `Souviens-toi de <span style="color: #b30000;">N.</span> <span style="color: #b30000;">ou</span> celui (celle) (ton serviteur <span style="color: #b30000;">ou</span> ta servante)
  qui a quitté ce monde (aujourd’hui)`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1p", texte: `et que tu appelles auprès de toi.`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1all", texte: `Puisqu’il (elle) a été uni (e) à la mort de ton Fils,`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1all", texte: `accorde-lui de participer à sa résurrection
  le jour où le Christ ressuscitera dans la chair ceux qui sont morts,
  et transformera nos pauvres corps à l’image de son corps glorieux.`, type: "dialogueV", conditions: {Messe:"Défunts"} },  
  {class: "indent1all", texte: `Souviens-toi aussi de nos frères et soeurs défunts,
  souviens-toi de tous ceux qui ont quitté ce monde
  et trouvent grâce devant toi :`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1all", texte: `en ta bienveillance,
  reçois-les dans ton Royaume,
  où nous espérons être comblés de ta gloire,
  tous ensemble et pour l’éternité,
  quand tu essuieras toute larme de nos yeux ;`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class: "indent1all", texte: `en te voyant, toi notre Dieu, tel que tu es,
  nous te serons semblables éternellement
  et, sans fin, nous chanterons ta louange`, type: "dialogueV", conditions: {Messe:"Défunts"} },
  {class:"sautdeligne", texte: `\n`},

  {class: "indent1all", texte: `Écoute, en ta bonté, les prières de ta famille, 
    que tu as voulu rassembler devant toi.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Dans ta miséricorde, ramène à toi, Père très aimant, 
    tous tes enfants dispersés.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Pour nos frères et soeurs défunts, 
    et pour tous ceux qui ont quitté ce monde`, type: "dialogueV", conditions: {} },
  {class: "indentallp", texte: `et trouvent grâce devant toi, 
    nous te prions :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en ta bienveillance, 
    accueille-les dans ton royaume,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `où nous espérons être comblés de ta gloire, 
    tous ensemble et pour l’éternité,`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1all", texte: `par le Christ, notre Seigneur, 
    par qui tu donnes au monde 
    toute grâce et tout bien.`, type: "dialogueV", conditions: {} },
] },
//Suite PE 4
{ conditions: {typePE: "PE4", hidePE: false}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, les mains étendues, l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `Voilà pourquoi, Seigneur, 
    nous célébrons aujourd’hui`, type: "dialogueV", conditions: {} },
  {class: "indent1p", texte: `le mémorial de notre rédemption :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en rappelant la mort du Christ 
    et sa descente au séjour des morts,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en proclamant sa résurrection 
    et son ascension à ta droite,`, type: "dialogueV", conditions: {} },
  { texte: `en attendant sa venue dans la gloire,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `nous t’offrons son Corps et son Sang, 
    le sacrifice qui est digne de toi 
    et qui sauve le monde entier.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "indent1all", texte: `Regarde, Seigneur, Celui qui s’offre dans le sacrifice 
    que toi-même as préparé pour ton Église,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `et, dans ta bonté, accorde 
    à tous ceux qui vont partager ce Pain 
    et boire à cette Coupe`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `d’être rassemblés par l’Esprit Saint en un seul corps, 
    pour qu’ils deviennent eux-mêmes dans le Christ 
    une vivante offrande à la louange de ta gloire.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Et maintenant, Seigneur, rappelle-toi 
    tous ceux pour qui nous offrons le sacrifice :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `en premier lieu, ton serviteur notre pape <span style="color: #b30000;">N.</span>, 
    notre évêque <span style="color: #b30000;">N.</span>, et l’ensemble des évêques, 
    les prêtres et les diacres,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `les fidèles qui présentent cette offrande, 
    les membres de notre assemblée,`, type: "dialogueV", conditions: {} },
  { texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> (ceux) que tu as fait renaître aujourd’hui 
   de l’eau et de l’Esprit Saint`, type: "dialogueR", conditions: {Sacrement:"Baptême"} },
  {class: "indent1p", texte: `le peuple entier qui t’appartient,`, type: "dialogueV", conditions: {} },
  { texte: `et tous ceux qui te cherchent avec droiture.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `Souviens-toi aussi 
    de ceux qui sont morts dans la paix du Christ,`, type: "dialogueV", conditions: {} },
  { texte: `et de tous les défunts dont toi seul connais la foi.`, type: "dialogueV", conditions: {} },
  {class:"sautdeligne", texte: `\n`},
  {class: "grandelettrine", texte: `À nous qui sommes tes enfants, 
    accorde, Père très bon,`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `l’héritage de la vie éternelle 
    auprès de la Vierge Marie, 
    la bienheureuse Mère de Dieu, 
    auprès de saint Joseph, son époux, 
    des Apôtres et de tous les saints, 
    dans ton royaume.`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `Nous pourrons alors, 
    avec la création tout entière, 
    enfin libérée de la corruption du péché et de la mort, 
    te glorifier 
    par le Christ, notre Seigneur,`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1p", texte: `par qui tu donnes au monde toute grâce et tout bien.`, type: "dialogueV", conditions: {} },
] },



//Doxologie 
  {class:"sautdeligne", texte: `\n`},
  { id:"Doxologie", texte: `Il prend la patène avec l’hostie, ainsi que le calice, et, en les élevant ensemble, il dit\u00A0:`, type: "rubrique", conditions:{hidePE: false} },
  //Français
  {class:"grandelettrine", texte: `Par lui, avec lui et en lui,
à toi, Dieu le Père tout-puissant,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: false}  },
  {class:"indent1p", texte: `dans l’unité du Saint-Esprit,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: false}  },
  { texte: `tout honneur et toute gloire,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: false}  },
  {class:"indent1p", texte: `pour les siècles des siècles.`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: false} },
  //Latin
  {class:"grandelettrine", texte: `Per ipsum, et cum ipso, et in ipso,
est tibi Deo Patri omnipoténti,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: true}  },
  {class:"indent1p", texte: `in unitáte Spíritus Sancti,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: true}  },
  { texte: `omnis honor et glória,`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: true}  },
  {class:"indent1p", texte: `per ómnia sǽcula sæculórum.`, type: "dialogueV", conditions:{hidePE: false, DoxologieLt: true} },
  
  {class:"indent1p", texte: `Le peuple acclame :`, type: "rubrique", conditions:{hidePE: false}  },
  { texte: `Amen.`, type: "dialogueR", conditions:{hidePE: false },},

  { texte: `RITE DE LA COMMUNION`, type: "H2", conditions: {} },
  //Notre Père
  { id:"NotrePère", class:"no-print", texte: ``, type: "H3", conditions: {} },
  { texte: `Lorsqu’il a déposé le calice et la patène, le prêtre, les mains jointes, dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Lorsqu’il a déposé le calice et la patène, l'évêque, les mains jointes, dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  { texte: `Comme nous l’avons appris du Sauveur,
et selon son commandement, nous osons dire\u00A0:`, type: "dialogueV", conditions: {NotrePère:"NP1"} },
  { texte: `Unis dans le même Esprit,
nous pouvons dire avec confiance
la prière que nous avons reçue du Sauveur\u00A0:`, type: "dialogueV", conditions: {NotrePère:"NP2"} },
  { texte: `Præcéptis salutáribus móniti,
et divína institutióne formáti,
audémus dícere\u00A0:`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { texte: `Il étend les mains, et, avec le peuple, il continue\u00A0:`, type: "rubrique", conditions: {} },
  //Français
  {class:"grandelettrine indentallg", texte: `Notre Père qui es aux cieux,
que ton nom soit sanctifié,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg", texte: `que ton règne vienne,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1g", texte: `que ta volonté soit faite`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg",texte: `sur la terre comme au ciel.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1g", texte: `Donne-nous aujourd’hui`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg", texte: `notre pain de ce jour.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1g", texte: `Pardonne-nous nos offenses,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg", texte: `comme nous pardonnons aussi`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg", texte: `à ceux qui nous ont offensés.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1g", texte: `Et ne nous laisse pas entrer en tentation,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  {class:"indent1gg", texte: `mais délivre-nous du Mal.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  //Latin
    {class:"grandelettrine indentallg", texte: `Pater noster, qui es in cælis :
sanctificétur nomen tuum ;,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1gg", texte: `advéniat regnum tuum ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1g", texte: `fiat volúntas tua,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1gg",texte: `sicut in cælo, et in terra.`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1g", texte: `Panem nostrum cotidiánum`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1gg", texte: `da nobis hódie ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1g", texte: `et dimítte nobis débita nostra,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1gg", texte: `sicut et nos dimíttimus debitóribus nostris ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1g", texte: `et ne nos indúcas in tentatiónem ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  {class:"indent1gg", texte: `sed líbera nos a malo.`, type: "dialogueV", conditions: {NotrePère:"NP3"} },

  { texte: `Les mains étendues, le prêtre, seul, continue\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Les mains étendues, l'évêque, seul, continue\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"grandelettrine", texte: `Délivre-nous de tout mal, Seigneur,
et donne la paix à notre temps :`, type: "dialogueV", conditions: {} },
  { texte: `soutenus par ta miséricorde,`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `nous serons libérés de tout péché,
à l’abri de toute épreuve ;`, type: "dialogueV", conditions: {} },
  {class:"indent1all", texte: `et nous attendons que se réalise cette bienheureuse espérance :
l’avènement de Jésus Christ, notre Sauveur.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains.`, type: "rubrique", conditions: {} },
  { texte: `Le peuple conclut la prière par l’acclamation\u00A0:`, type: "rubrique", conditions: {} },
  {class:"indentallg", texte: `Car c’est à toi qu’appartiennent
le règne, la puissance et la gloire
pour les siècles des siècles !`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, les mains étendues, le prêtre dit à haute voix\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, les mains étendues, l'évêque dit à haute voix\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine", texte: `Seigneur Jésus Christ,
tu as dit à tes Apôtres :`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `« Je vous laisse la paix,
je vous donne ma paix » ;`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `ne regarde pas nos péchés
mais la foi de ton Église ;`, type: "dialogueV", conditions: {} },
  {class: "indent1all", texte: `pour que ta volonté s’accomplisse,
donne-lui toujours cette paix,`, type: "dialogueV", conditions: {} },
  { texte: `et conduis-la vers l’unité parfaite,`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `il joint les mains`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1p", texte: `toi qui vis et règnes pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubrique", conditions: {} },
  { texte: `Amen`, type: "dialogueR", conditions: {} },

  { texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { texte: `Le prêtre, tourné vers l’assemblée, ajoute en étendant les mains\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque, tourné vers l’assemblée, ajoute en étendant les mains\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "indentallg grandelettrine", texte: `Que la paix du Seigneur
soit toujours avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubrique", conditions: {} },
  {class: "indentallg", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, si cela convient, le prêtre ajoute\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:false} },
  { texte: `Ensuite, si cela convient, l'évêque ajoute\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:true} },
  { texte: `Ensuite, si cela convient, le diacre ajoute\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
  {class: "indentallg", texte: `Dans la charité du Christ,
donnez-vous la paix.`, type: "dialogueV", conditions: {} },
  { texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { texte: `Et tous se manifestent la paix et la charité mutuelles selon les coutumes locales.`, type: "rubrique", conditions: {} },
  { texte: `Le rite de la paix étant achevé, le prêtre prend l’hostie, la rompt au-dessus de la patène, et en met un fragment dans le calice, en disant tout bas:`, type: "rubrique", conditions: {secret: true, presenceBishop:false} },
  { texte: `Le rite de la paix étant achevé, l'évêque prend l’hostie, la rompt au-dessus de la patène, et en met un fragment dans le calice, en disant tout bas:`, type: "rubrique", conditions: {secret: true, presenceBishop:true} },
  {class: "lettrine indent1allg", texte: `Que le Corps et le Sang de notre Seigneur Jésus Christ,
réunis dans cette coupe,`, type: "voixbasse", conditions: {secret: true} },
  {class: "indent1g", texte: `nourrissent en nous la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { id:"agnus", texte: `Pendant ce temps, on chante ou on dit\u00A0:`, type: "rubrique", conditions: {} },
  
  //Agnus français
  {class: "grandelettrine indentallg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde,
prends pitié de nous.`, type: "dialogueV", conditions: {agnusLt: false} },
  {class:"sautdeligne", texte: `\n`, conditions:{agnusLt: false} },
  {class: "indent1allg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde`, type: "dialogueV", conditions: {agnusLt: false} },
  {class: "indent1g", texte: `prends pitié de nous.`, type: "dialogueV", conditions: {agnusLt: false} },
  {class:"sautdeligne", texte: `\n`, conditions:{agnusLt: false} },
  {class: "indent1allg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde`, type: "dialogueV", conditions: {agnusLt: false} },
  {class: "indent1g", texte: `prends pitié de nous.`, type: "dialogueV", conditions: {agnusLt: false} },
  
  //Agnus latin
{class: "grandelettrine indentallg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,
miserére nobis.`, type: "dialogueV", conditions: {agnusLt: true} },
  {class:"sautdeligne", texte: `\n`, conditions:{agnusLt: true} },
  {class: "indent1allg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,`, type: "dialogueV", conditions: {agnusLt: true} },
  {class: "indent1g", texte: `miserére nobis.`, type: "dialogueV", conditions: {agnusLt: true} },
  {class:"sautdeligne", texte: `\n`, conditions:{agnusLt: true} },
  {class: "indent1allg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,`, type: "dialogueV", conditions: {agnusLt: true} },
  {class: "indent1g", texte: `dona nobis pacem.`, type: "dialogueV", conditions: {agnusLt: true} },

  { texte: `Selon l'usage, <b>les servants</b> se rendent au fond de l'Eglise pour la procession de communion`, type:"servants", conditions: {}},
  { id:"Apologies", class:"no-print", texte: "", type: "H3", conditions:{secret: true} },
  { texte: `Puis, les mains jointes, le prêtre dit tout bas l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:false} },
  { texte: `Puis, les mains jointes, l'évêque dit tout bas l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:true} },
  //Type1
  {class: "lettrine indent1allg", texte: `Seigneur Jésus Christ,
Fils du Dieu vivant,`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  {class: "indent1allg", texte: `selon la volonté du Père
et avec la puissance du Saint-Esprit,
tu as donné, par ta mort, la vie au monde ;`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  {class: "indent1allg", texte: `que ton Corps et ton Sang très saints
me délivrent de mes péchés et de tout mal ;`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  {class: "indent1allg", texte: `fais que je demeure fidèle à tes commandements
et que jamais je ne sois séparé de toi.`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  //Type2
  {class: "lettrine indent1allg", texte: `Seigneur Jésus Christ,`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },
  {class: "indent1allg", texte: `que cette communion à ton Corps et à ton Sang
n’entraîne pour moi ni jugement ni condamnation ;`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },
  {class: "indent1allg", texte: `mais que, par ta bonté, elle soutienne mon esprit et mon corps
et me donne la guérison.`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },

  { texte: `\n`, type: "", conditions: {hideRubriques:true} },
        { type: "insert-avantagneau"},
  { texte: `Le prêtre fait la génuflexion, prend l’hostie, et, la tenant un peu élevée au-dessus de la patène ou du calice, tourné vers le peuple, dit à voix haute\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque fait la génuflexion, prend l’hostie, et, la tenant un peu élevée au-dessus de la patène ou du calice, tourné vers le peuple, dit à voix haute\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "grandelettrine indentallg", texte: `Voici l’Agneau de Dieu,
    voici celui qui enlève les péchés du monde.`, type: "dialogueV", conditions: {} },
  {class: "indent1g", texte: `Heureux les invités au repas des noces de l’Agneau\u00A0!`, type: "dialogueV", conditions: {} },
  { texte: `Et il ajoute avec le peuple\u00A0:`, type: "rubriqueinterne", conditions: {} },
  {class: "lettrine indent1g", texte: `Seigneur, je ne suis pas digne de te recevoir\u00A0;`, type: "dialogueV", conditions: {} },
  {class: "indent1allg", texte: `mais dis seulement une parole,
et je serai guéri.`, type: "dialogueV", conditions: {} },
  { texte: `Puis le prêtre, tourné vers l’autel, dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:false} },
  { texte: `Puis l'évêque, tourné vers l’autel, dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:true} },
  {class: "indent1p lettrine", texte: `Que le Corps du Christ me garde pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Et il consomme avec respect le Corps du Christ.`, type: "rubrique", conditions: {secret: true} },
  { texte: `Ensuite, il prend le calice, et dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true} },
  {class: "indent1p lettrine", texte: `Que le Sang du Christ me garde pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Et il boit avec respect le Sang du Christ.`, type: "rubrique", conditions: {secret: true} },

  { texte: `Pendant que le prêtre communie au Corps du Christ, on commence le chant de communion.`, type: "rubrique", conditions: {celebrationType: [ "Solennité", "Dominicale", "Fête"], presenceBishop:false} },
  { texte: `Pendant que l'évêque communie au Corps du Christ, on commence le chant de communion.`, type: "rubrique", conditions: {celebrationType: [ "Solennité", "Dominicale", "Fête"], presenceBishop:true} },
  { texte: `ANTIENNE DE COMMUNION`, type: "H3"  , conditions: {oraisons : true, celebrationType: "Semaine"}},
  { texte: `S´il n´y a pas de chant, l´antienne proposée dans le Missel peut être dite soit par les fidèles, soit par un lecteur ou, à défaut, par le prêtre, après avoir lui-même communié et avant qu’il ne distribue la communion aux fidèles.`, type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop:false} },
  { texte: `S´il n´y a pas de chant, l´antienne proposée dans le Missel peut être dite soit par les fidèles, soit par un lecteur ou, à défaut, par l'évêque, après avoir lui-même communié et avant qu’il ne distribue la communion aux fidèles.`, type: "rubrique", conditions: {celebrationType: "Semaine", presenceBishop:true} },
  { type: "insert-antienne_communion"},
  { texte: `\n`, type: "", conditions: {celebrationType: "Semaine"} },
    { type: "insert-avantlacommunion"},
  { texte: `Le prêtre prend la patène ou le ciboire, et s’approche des communiants ; il montre à chacun l’hostie en l’élevant légèrement, et dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque prend la patène ou le ciboire, et s’approche des communiants ; il montre à chacun l’hostie en l’élevant légèrement, et dit\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class: "lettrine indent1g", texte: `Le Corps du Christ.`, type: "dialogueV", conditions: {hideRubriques:false} },
  { texte: `Le communiant répond :`, type: "rubriqueinterne", conditions: {hideRubriques:false} },
  {class: "indent1g", texte: `Amen.`, type: "dialogueR", conditions: {} },
  { texte: `Et il communie.`, type: "rubrique", conditions: {} },
  { texte: `Lorsque la distribution de la communion est achevée, le prêtre ou l’acolyte purifie la patène au-dessus du calice, et le calice lui-même.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:false} },
  { texte: `Lorsque la distribution de la communion est achevée, l'évêque ou l’acolyte purifie la patène au-dessus du calice, et le calice lui-même.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:true} },
  { texte: `Lorsque la distribution de la communion est achevée, le diacre ou l’acolyte purifie la patène au-dessus du calice, et le calice lui-même.`, type: "rubrique", conditions: {presenceDiacre: true} },
  { texte: "<b>Les acolytes</b> assistent le ministre pour la purification", type:"servants", conditions: {acolytes: true}},
  { texte: `Au moment où le prêtre fait la purification, il dit tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop:false} },
  { texte: `Au moment de la purification, on dit tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop:true} },
  { texte: `Au moment où le diacre fait la purification, il dit tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: true} },
  {class: "lettrine indent1allg", texte: `Puissions-nous accueillir d’un coeur pur, Seigneur,
ce que notre bouche a reçu,`, type: "voixbasse", conditions: {secret: true} },
 {class: "indent1allg", texte: `et trouver dans cette communion d’ici-bas
la guérison pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
      { type: "insert-findecommunion"},
  { texte: `Le prêtre peut alors retourner à son siège. On peut rester en silence pendant un certain temps. On peut chanter un psaume ou un cantique de louange ou une hymne.`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `L'évêque peut alors retourner à son siège. On peut rester en silence pendant un certain temps. On peut chanter un psaume ou un cantique de louange ou une hymne.`, type: "rubrique", conditions: {presenceBishop:true} },
  
  { texte: `PRIÈRE APRÈS LA COMMUNION`, type: "H3", conditions: {} },
  { texte: "<b>Le porte-missel</b> présente au président le missel pour la prière après la communion.", type:"servants", conditions: {portemissel: true}},
  { texte: `Ensuite, debout à l’autel ou au siège, le prêtre, les mains jointes, dit, tourné vers le peuple\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, debout à l’autel ou au siège, l'évêque, les mains jointes, dit, tourné vers le peuple\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
  {class:"lettrine", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Et tous prient en silence avec le prêtre pendant quelque temps, à moins qu’on ait gardé le silence précédemment. Puis le prêtre, les mains étendues, dit la prière après la communion.`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Et tous prient en silence avec l'évêque pendant quelque temps, à moins qu’on ait gardé le silence précédemment. Puis l'évêque, les mains étendues, dit la prière après la communion.`, type: "rubrique", conditions: {presenceBishop:true} },
  { type : "insert-priereApresLaCommunion"},
  {class: "indent1p", texte: `Amen.`, type: "dialogueR", conditions: {} },
  { type : "insert-conclusion"},
 ],

//Rites de conclusion
ritesdeConclusion: [
  { texte: `RITES DE CONCLUSION`, type: "H2", conditions: {} },
  { texte: `Si c’est nécessaire, on fait alors brièvement les annonces pour la communauté présente.`, type: "rubrique", conditions: {} },
//Conclusion 1
  { texte: `On fait ensuite le renvoi. Le prêtre, tourné vers le peuple, dit en étendant les mains\u00A0:`, type: "rubrique", conditions: {presenceBishop:false, Conclusion :"1"} },
  { texte: `On fait ensuite le renvoi. L'évêque, tourné vers le peuple, dit en étendant les mains\u00A0:`, type: "rubrique", conditions: {presenceBishop:true, Conclusion :"1"} },
  {class: "lettrine indent1g", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {Conclusion :"1"} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {Conclusion :"1"} },
  {class: "indent1g", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {Conclusion :"1"} },
  { texte: `Le prêtre bénit le peuple, en disant :`, type: "rubriqueinterne", conditions: {presenceBishop:false, Conclusion :"1"} },
  { texte: `L'évêque bénit le peuple, en disant :`, type: "rubriqueinterne", conditions: {presenceBishop:true, Conclusion :"1"} },
  {class: "grandelettrine indentallg", texte: `Que Dieu tout-puissant vous bénisse,
  le Père, et le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit.`, type: "dialogueV", conditions: {Conclusion :"1"} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {Conclusion :"1"} },
  {class: "indentallg", texte: `Amen.`, type: "dialogueR", conditions: {Conclusion :"1"} },
//Conclusion 2
  { texte: `Le diacre, ou à son défaut le prêtre, dit l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction</span>. Puis le prêtre, les mains étendues sur le peuple, prononce la prière :`, type: "rubrique", conditions: {Conclusion :"2", presenceDiacre: true} },
  { texte: `Le prêtre, dit l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction</span>. Puis le prêtre, les mains étendues sur le peuple, prononce la prière :`, type: "rubrique", conditions: {Conclusion :"2", presenceDiacre: false} },
  { type : "insert-SurLePeuple", conditions: {Conclusion :"2"}},
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {Conclusion :"2"} },
  {class: "indentallg", texte: `Amen.`, type: "dialogueR", conditions: {Conclusion :"2"} },
  { texte: `Après la prière, le prêtre ajoute toujours :`, type: "rubrique", conditions: {Conclusion :"2"} },
  {class: "grandelettrine", texte: `Et que la bénédiction de Dieu tout-puissant,
    le Père, et le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit,
    descende sur vous et y demeure toujours.`, type: "dialogueV", conditions: {Conclusion :"2"} },
  { texte: `Amen.`, type: "dialogueR", conditions: {Conclusion :"2"} },
//Conclusion 3
  { texte: `Le diacre dit l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction</span>. Puis le prêtre, les mains étendues sur le peuple, prononce la prière :`, type: "rubrique", conditions: {Conclusion :"3", presenceDiacre: true} },
  { texte: `Le prêtre, dit l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction</span>. Puis le prêtre, les mains étendues sur le peuple, prononce la prière :`, type: "rubrique", conditions: {Conclusion :"3", presenceDiacre: false} },
  { type : "insert-benediction"},
  {class: "grandelettrine", texte: `Et que la bénédiction de Dieu tout-puissant,
    le Père, et le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit,
    descende sur vous et y demeure toujours.`, type: "dialogueV", conditions: {Conclusion :"3"} },
  { texte: `Amen.`, type: "dialogueR", conditions: {Conclusion :"3"} },

//Envoi
  { id:"envoi", class:"no-print", texte: "", type: "H3", conditions:{} },    
  { texte: `Puis le prêtre, les mains jointes, tourné vers l’assemblée, chante ou dit\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:false} },
  { texte: `Puis l'évêque, les mains jointes, tourné vers l’assemblée, chante ou dit\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:true} },
  { texte: `Puis le diacre, les mains jointes, tourné vers l’assemblée, chante ou dit\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
  {class: "lettrine indent1g", texte: `Allez, dans la paix du Christ.`, type: "dialogueV", conditions: {envoi:"1"} },
  {class: "lettrine indent1g", texte: `Allez porter l’Évangile du Seigneur.`, type: "dialogueV", conditions: {envoi:"2"} },
  {class: "lettrine indent1g", texte: `Allez en paix, glorifiez le Seigneur par votre vie.`, type: "dialogueV", conditions: {envoi:"3"} },
  {class: "lettrine indent1g", texte: `Allez en paix.`, type: "dialogueV", conditions: {envoi:"4"} },
  {class: "lettrine indent1g", texte: `Allez dans la paix du Christ, alléluia, alléluia.`, type: "dialogueV", conditions: {envoi:"5"} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {} },
  {class: "indent1g", texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {envoi:["1","2","3","4"]} },
  {class: "indent1g", texte: `Nous rendons grâce à Dieu, alléluia, alléluia.`, type: "dialogueR", conditions: {envoi:"5"} },
  { texte: `Ensuite, selon l’usage, le prêtre vénère l’autel par un baiser, comme au commencement. Après une inclination profonde, faite en même temps que les ministres, il se retire.`, type: "rubrique", conditions: {presenceBishop:false} },
  { texte: `Ensuite, selon l’usage, l'évêque vénère l’autel par un baiser, comme au commencement. Après une inclination profonde, faite en même temps que les ministres, il se retire.`, type: "rubrique", conditions: {presenceBishop:true} },
],};
// modèle plusieurs conditions: { moment: "messe", langue: "français", saison: "avent"  }
// conditions logiques conditions: { and: [...], or: [...] }

//  { texte: ``, type: "", conditions: {} },
// { texte: ``, type: "", conditions: {} },
//  { texte: "", type: "", conditions: {} },