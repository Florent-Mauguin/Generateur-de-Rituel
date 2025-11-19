import { MathLimitUpper, Type } from "docx";
import { OraisonsDominicales } from "./oraisons";

export const ritual = {
ritesInitiaux: [  
  { texte: "RITES INITIAUX", type: "H1", conditions: {} },
  {texte: `Lorsque le peuple est rassemblé, le prêtre s’avance vers l’autel avec les ministres, pendant le chant d’entrée.`, type: "rubrique", conditions: {} },
  { texte: "Quand il est parvenu à l’autel, il fait une inclination profonde avec les ministres, puis il vénère l’autel par un baiser et, si cela convient, il encense la croix et l’autel. Ensuite, il gagne son siège avec les ministres.", type: "rubrique", conditions: {} },
  { texte: "Le chant d’entrée achevé, le prêtre et les fidèles, debout, font le signe de la croix, tandis que le prêtre, tourné vers le peuple dit :", type: "rubrique", conditions: {} },
    { class:"lettrine", texte: "Au nom du Père, et du Fils, et du Saint-Esprit.", type: "dialogueV", conditions: {} },
    { texte: "Amen.", type: "dialogueR", conditions: {} },
  { texte: "SALUTATION", type: "H2", conditions: {} },
    {texte: "Puis, les mains étendues, le prêtre salue le peuple en disant :", type:"rubrique", conditions: {} },
    { class:"lettrine", texte: "La paix soit avec vous.", type: "dialogueV", conditions: {presenceBishop: true, salutation: "S3"} },
    { class:"lettrine", texte: "Le Seigneur soit avec vous.", type: "dialogueV", conditions: {presenceBishop: false, salutation: "S3"} },
    { class:"lettrine", texte: `La grâce de Jésus, le Christ, notre Seigneur, 
      l’amour de Dieu le Père,`, type: "dialogueV", conditions: {salutation: "S1"} },
    { class:"allindentation", texte: `et la communion de l’Esprit Saint, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S1"} },
    { class:"lettrine allindentation", texte: `Que la grâce et la paix 
      de Dieu notre Père 
      et du Seigneur Jésus, le Christ, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S2"} },
    { texte: "Et avec votre esprit.", type: "dialogueR", conditions: {} },
    { texte: "Le Prêtre, le diacre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {} },

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

// Kyrie
  { texte: "KÝRIE ELÉISON", type: "H2", conditions: {ChoixPenitentiel: ["1CP", "2CP"]} },
  { "type": "kyrie", conditions: {ChoixPenitentiel: ["1CP", "2CP"]},
  "left": [
    { class:"premiereindentation", type: "dialogueV", texte: "Kýrie eléison." },
    { type: "dialogueR", texte: "Kýrie eléison." },
    { class:"premiereindentation", type: "dialogueV", texte: "Christe eléison."},
    { type: "dialogueR", texte: "Christe eléison."},
    { class:"premiereindentation", type: "dialogueV", texte: "Kýrie eléison." },
    { type: "dialogueR", texte: "Kýrie eléison." },
  ],
  "middle": [ { type: "rubrique", texte: "Ou bien :" },  ],
  "right": [
    { type: "dialogueV", texte: "Seigneur, prends pitié." },
    { type: "dialogueR", texte: "Seigneur, prends pitié." },
    { type: "dialogueV", texte: "Ô Christ, prends pitié." },
    { type: "dialogueR", texte: "Ô Christ, prends pitié." },
    { type: "dialogueV", texte: "Seigneur, prends pitié." },
    { type: "dialogueR", texte: "Seigneur, prends pitié." },
  ]
},

// Gloria
  { texte: "GLOIRE À DIEU", type: "H2", conditions: {hideGloria: false}},
  { type: "dialogueV", conditions: {hideGloria: false, gloriaLatin: false}, class:"grandelettrine",
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

  { type: "dialogueV", conditions: {gloriaLatin: true, hideGloria: false} , class:"grandelettrine",
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
{ texte: "L’hymne finie, le prêtre, les mains jointes, dit ou chante :", type: "rubrique", conditions: {oraisons : true } },
{ class:"lettrine", texte: `Prions le Seigneur.`, type: "dialogueV" , conditions: {oraisons : true}},
{ class:"sautdeligne", texte: `\n`, type: "", conditions: {oraisons: true} },
{ texte:`Tous prient en silence quelques instants, en même temps que le prêtre.
Puis le prêtre, les mains étendues, dit la prière d’ouverture ou collecte.` , type: "rubrique", conditions: {oraisons : true } },
{ type: "insert-collecte" },
{ texte: "Amen", type: "dialogueR", conditions: {oraisons : true} },
],

/*****************************************************
 * LITURGIE DE LA PAROLE
 *****************************************************/
liturgiedelaparole: [  
  { type: "pageBreak" },
  { texte: "LITURGIE DE LA PAROLE", type: "H1", conditions: {} },
  { texte: "LECTURES", type: "H2", conditions: {} },
  { texte: `Ensuite, un lecteur se rend à l’ambon et fait la première lecture, que tous écoutent assis. À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: `Le psalmiste dit ou chante le psaume auquel le peuple répond, habituellement par un refrain.`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Ensuite, s’il doit y avoir une deuxième lecture avant l’Évangile, un lecteur la fait à 
    l’ambon comme la première. À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: `Vient ensuite le chant d’acclamation à l’Évangile : l’Alléluia ou un autre chant selon le temps et les normes liturgiques.`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Pendant ce temps, le prêtre impose l’encens, si l’on en fait usage. Puis le diacre qui va proclamer l’Évangile, incliné profondément devant le prêtre, demande la bénédiction, en disant à voix basse :`, type: "rubrique", conditions: {} },
  { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {} },
  { texte: `Le prêtre dit à voix basse :`, type: "rubrique", conditions: {} },
  { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
    pour que vous proclamiez dignement son Évangile : 
    au nom du Père, et du Fils,  et du Saint-Esprit.`, type: "voixbasse", conditions: {} },
  { texte: `Le diacre fait le signe de la croix et répond :`, type: "rubrique", conditions: {} },
  { texte: `Amen.`, type: "voixbasse", conditions: {} },
  { texte: `S’il n’y a pas de diacre, le prêtre, incliné devant l’autel, prie tout bas :`, type: "rubrique", conditions: {} },
  { texte: `Purifie mon coeur et mes lèvres, 
    Dieu tout-puissant, 
    pour que j’annonce dignement ton saint Évangile.`, type: "voixbasse", conditions: {} },
  { texte: `Ensuite, le diacre ou le prêtre se rend à l’ambon, accompagné éventuellement des ministres avec l’encens et les cierges, et il dit ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Le diacre ou le prêtre dit :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Évangile de Jésus Christ  selon saint N.`, type: "dialogueV", conditions: {} },
  { texte: `Gloire à toi, Seigneur !`, type: "dialogueR", conditions: {} },
  { texte: `Puis le diacre ou le prêtre encense le livre, si l’on utilise l’encens, et il proclame l’Évangile.`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `L’Évangile achevé, le diacre dit ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Acclamons la Parole de Dieu.`, type: "dialogueV", conditions: {} },
  { texte: `Louange à toi, Seigneur Jésus !`, type: "dialogueR", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Ensuite, il le vénère d’un baiser en disant tout bas :`, type: "rubrique", conditions: {} },
  { texte: `Que cet Évangile efface mes péchés.`, type: "voixbasse", conditions: {} },
  { texte: `Puis le prêtre ou le diacre prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {} },
],

servants: [],
eucharistie: [  ]
};
// modèle plusieurs conditions: { moment: "messe", langue: "français", saison: "avent"  }
// conditions logiques conditions: { and: [...], or: [...] }

//  { texte: ``, type: "", conditions: {} },
//  { texte: "", type: "", conditions: {} },