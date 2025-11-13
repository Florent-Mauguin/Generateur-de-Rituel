import { Type } from "docx";

export const ritual = {
ritesInitiaux: [  
  { texte: "RITES INITIAUX", type: "H1", conditions: {} },
  {texte: `Lorsque le peuple est rassemblé, le prêtre s’avance vers l’autel avec les ministres, pendant le chant d’entrée.`, type: "rubrique", conditions: {} },
  { texte: "Quand il est parvenu à l’autel, il fait une inclination profonde avec les ministres, puis il vénère l’autel par un baiser et, si cela convient, il encense la croix et l’autel. Ensuite, il gagne son siège avec les ministres.", type: "rubrique", conditions: {} },
  { texte: "Le chant d’entrée achevé, le prêtre et les fidèles, debout, font le signe de la croix, tandis que le prêtre, tourné vers le peuple dit :", type: "rubrique", conditions: {} },
    { class:"lettrine", texte: "Au nom du Père, et du Fils, et du Saint-Esprit.", type: "dialogueV", conditions: {} },
    { texte: "Amen.", type: "dialogueR", conditions: {} },
  { texte: "SALUTATION", type: "H2", conditions: {} },
    {texte: "Puis, les mains étendues, le prêtre salue le peuple en utilisant l’une des trois formules suivantes :", type:"rubrique", conditions: {} },
    { class:"lettrine", texte: "La paix soit avec vous.", type: "dialogueV", conditions: {presenceBishop: true}},
    { class:"lettrine", texte: "Le Seigneur soit avec vous.", type: "dialogueV", conditions: {presenceBishop: false}},
    { texte: "Et avec votre esprit.", type: "dialogueR", conditions: {} },
    { texte: "Le Prêtre, le diacre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {} },

{ type: "pageBreak" },

// Acte pénitentiel   
    { texte: "ACTE PENITENTIEL", type: "H2", conditions: {} },
    {texte: "Le dimanche, et surtout au Temps pascal, au lieu de l’acte pénitentiel habituel, on peut aussi faire la bénédiction et l’aspersion de l’eau en mémoire du baptême", type: "rubrique", conditions: {}}, 
   
{ texte: "PREMIERE FORMULE", type: "H3", conditions: {ChoixPenitentiel: "1CP" } },
{ texte: "DEUXIEME FORMULE", type: "H3", conditions: {ChoixPenitentiel: "2CP"} },
{ texte: "TROISIEME FORMULE", type: "H3", conditions: {ChoixPenitentiel: "3CP"} },

{ texte: "Le prêtre invite les fidèles à faire l’acte pénitentiel :", type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Frères et sœurs,
préparons-nous à célébrer le mystère de l’Eucharistie,
en reconnaissant que nous avons péché.`, type: "dialogueV", conditions: {} },

// PREMIERE FORMULE
  { texte: `On fait une brève pause en silence.`, type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {ChoixPenitentiel: "1CP"} },
  { texte: "Tous disent ensemble la formule de confession générale :", type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"lettrine allindentation", texte: `Je confesse à Dieu tout-puissant,
je reconnais devant vous, frères et sœurs,`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"allindentation", texte: `que j’ai péché
en pensée, en parole,
par action et par omission ;`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"grandeindentation", texte: `On se frappe la poitrine en disant`, type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"premiereindentation", texte: `oui, j’ai vraiment péché.`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"grandeindentation", texte: `On continue :`, type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"allindentation", texte: `C’est pourquoi je supplie
la bienheureuse Vierge Marie,
les anges et tous les saints,
et vous aussi, frères et sœurs,
de prier pour moi le Seigneur notre Dieu.`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },

// DEUXIEME FORMULE
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {ChoixPenitentiel: "2CP"} },
  { texte: `On fait une brève pause en silence. Puis le prêtre dit :`, type: "rubrique", conditions: {ChoixPenitentiel: "2CP"} },
  { class:"lettrine", texte: `Prends pitié de nous, Seigneur.`, type: "dialogueV", conditions: {ChoixPenitentiel: "2CP"} },
  { texte: `Nous avons péché contre toi.`, type: "dialogueR", conditions: {ChoixPenitentiel: "2CP"} },
  { class:"lettrine", texte: `Montre-nous, Seigneur, ta miséricorde.`, type: "dialogueV", conditions: {ChoixPenitentiel: "2CP"} },
  { texte: `Et donne-nous ton salut.`, type: "dialogueR", conditions: {ChoixPenitentiel: "2CP"} },

// TROISIEME FORMULE
  { texte: `On fait une brève pause en silence.`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Puis le prêtre, le diacre ou un autre ministre chante ou dit les invocations suivantes :`, type: "rubrique", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"lettrine", texte: `Seigneur Jésus, envoyé pour guérir`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `les cœurs qui reviennent vers toi :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"premiereindentation", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"lettrine", texte: `Ô Christ, venu appeler les pécheurs :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"premiereindentation", texte: `O Christ, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Ô Christ, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"lettrine", texte: `Seigneur, qui sièges à la droite du Père`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `où tu intercèdes pour nous :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"premiereindentation", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },

  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
{ texte: `Puis le prêtre prononce l’absolution :`, type: "rubrique", conditions: {} },
  { class:"lettrine allindentation", texte: `Que Dieu tout-puissant
nous fasse miséricorde ;`, type: "dialogueV", conditions: {} },
  { class:"allindentation", texte: `qu’il nous pardonne nos péchés
et nous conduise à la vie éternelle.`, type: "dialogueV", conditions: {} },
  { texte: `Amen.`, type: "dialogueR", conditions: {} },
  { type: "pageBreak" },




  { texte: ``, type: "", conditions: {} },
  { texte: "", type: "", conditions: {} },
  



    { type: "insert-collecte" },
  { texte: "Chant d'entrée solennel", conditions: { celebrationType: ["paques"] } },
],
eveque: [  ],
servants: [
    { texte: "Gloria obligatoire", conditions: { celebrationType: ["paques"] } },
    { texte: "Pas de Gloria", type: "rubrique", conditions: { celebrationType: ["careme"] } },
    { texte: "Chant d'entrée simple", conditions: { celebrationType: ["Dominicale"] } },
    { texte: "L'évêque préside la célébration", conditions: { presenceBishop: true } },
    { texte: "Encensement à l'entrée", type: "rubrique", conditions: { presenceBishop: true } },
],
eucharistie: [    
    { texte: "Deux servants portent les cierges", conditions: { servants: 2 } },
    { texte: "Un servant porte la croix", conditions: { servants: 1 } },
    { texte: "Aucun service d'autel", conditions: { servants: 0 } },
    { texte: "Encensement facultatif", conditions: { incense: true, presenceBishop: false } },
    { texte: "Liturgie eucharistique", conditions: {} },
    { texte: "Envoi : 'Allez dans la paix du Christ'", conditions: {} },
    { texte: "Un servant porte la croix", conditions: { servants: 1 } },
    { texte: "Aucun service d'autel", conditions: { servants: 0 } },
    { texte: "Encensement facultatif", conditions: { incense: true, presenceBishop: false } },
    { texte: "Liturgie eucharistique", conditions: {} },
    { texte: "Envoi : 'Allez dans la paix du Christ'", conditions: {} }
]
};
// modèle plusieurs conditions: { moment: "messe", langue: "français", saison: "avent"  }
// conditions logiques conditions: { and: [...], or: [...] }