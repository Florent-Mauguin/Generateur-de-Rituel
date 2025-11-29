import { MathLimitUpper, Type } from "docx";
import { OraisonsDominicales } from "./oraisons";

export const ritual = {
ritesInitiaux: [  
  { class:"premiergénéré", texte: "RITES INITIAUX", type: "H1", conditions: {} },
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
    { class:"indent1all", texte: `et la communion de l’Esprit Saint, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S1"} },
    { class:"lettrine indent1all", texte: `Que la grâce et la paix 
      de Dieu notre Père 
      et du Seigneur Jésus, le Christ, 
      soient toujours avec vous.`, type: "dialogueV", conditions: {salutation: "S2"} },
    { texte: "Et avec votre esprit.", type: "dialogueR", conditions: {} },
    { texte: "Le Prêtre, le diacre ou un autre ministre peut introduire très brièvement les fidèles à la messe du jour.", type:"rubrique", conditions: {} },

// Acte pénitentiel   
    { texte: "ACTE PENITENTIEL", type: "H2", conditions: {} },
    {texte: "Le dimanche, et surtout au Temps pascal, au lieu de l’acte pénitentiel habituel, on peut aussi faire la bénédiction et l’aspersion de l’eau en mémoire du baptême", type: "rubrique", conditions: {}}, 
  { texte: "Le prêtre invite les fidèles à faire l’acte pénitentiel :", type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Frères et sœurs,
préparons-nous à célébrer le mystère de l’Eucharistie,
en reconnaissant que nous avons péché.`, type: "dialogueV", conditions: {} },

// PREMIERE FORMULE
  { texte: `On fait une brève pause en silence.`, type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {ChoixPenitentiel: "1CP"} },
  { texte: "Tous disent ensemble la formule de confession générale :", type: "rubrique", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"lettrine indent1all", texte: `Je confesse à Dieu tout-puissant,
je reconnais devant vous, frères et sœurs,`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"indent1all", texte: `que j’ai péché
en pensée, en parole,
par action et par omission ;`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"indent1g", texte: `On se frappe la poitrine en disant`, type: "rubriqueinterne", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"indent1p", texte: `oui, j’ai vraiment péché.`, type: "dialogueV", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"indent1g", texte: `On continue :`, type: "rubriqueinterne", conditions: {ChoixPenitentiel: "1CP"} },
  { class:"indent1all", texte: `C’est pourquoi je supplie
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
  { class:"indent1p", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"lettrine", texte: `Ô Christ, venu appeler les pécheurs :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"indent1p", texte: `O Christ, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Ô Christ, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"lettrine", texte: `Seigneur, qui sièges à la droite du Père`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `où tu intercèdes pour nous :`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { class:"indent1p", texte: `Seigneur, prends pitié.`, type: "dialogueV", conditions: {ChoixPenitentiel: "3CP"} },
  { texte: `Seigneur, prends pitié.`, type: "dialogueR", conditions: {ChoixPenitentiel: "3CP"} },

  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
{ texte: `Puis le prêtre prononce l’absolution :`, type: "rubrique", conditions: {} },
  { class:"lettrine indent1all", texte: `Que Dieu tout-puissant
nous fasse miséricorde ;`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `qu’il nous pardonne nos péchés
et nous conduise à la vie éternelle.`, type: "dialogueV", conditions: {} },
  { texte: `Amen.`, type: "dialogueR", conditions: {} },

// Kyrie
  { texte: "KÝRIE ELÉISON", type: "H2", conditions: {ChoixPenitentiel: ["1CP", "2CP"]} },
  //Latin
  { conditions: {ChoixPenitentiel: ["1CP", "2CP"], OrdinaireLatin: true},  class: "tableau",  items:[
    { class:"indent1p", type: "dialogueV", texte: "Kýrie eléison."},
    { type: "dialogueR", texte: "Kýrie eléison."},
    { class:"indent1p", type: "dialogueV", texte: "Christe eléison."},
    { type: "dialogueR", texte: "Christe eléison."},
    { class:"indent1p", type: "dialogueV", texte: "Kýrie eléison."},
    { type: "dialogueR", texte: "Kýrie eléison."},
  ],},
  //français
    { conditions: {ChoixPenitentiel: ["1CP", "2CP"], OrdinaireLatin: false},  class: "tableau",  items:[
    { type: "dialogueV", texte: "Seigneur, prends pitié."},
    { type: "dialogueR", texte: "Seigneur, prends pitié."},
    { type: "dialogueV", texte: "Ô Christ, prends pitié."},
    { type: "dialogueR", texte: "Ô Christ, prends pitié."},
    { type: "dialogueV", texte: "Seigneur, prends pitié."},
    { type: "dialogueR", texte: "Seigneur, prends pitié."},
  ],},

// Gloria
  { texte: "GLOIRE À DIEU", type: "H2", conditions: {hideGloria: false}},
  { type: "dialogueV", conditions: {hideGloria: false, OrdinaireLatin: false}, class:"grandelettrine",
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

  { type: "dialogueV", conditions: {OrdinaireLatin: true, hideGloria: false} , class:"grandelettrine",
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
  { texte: "Première lecture", type: "H3", conditions: {} },
  { texte: `À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: "Psaume", type: "H3", conditions: {} },
  { texte: "Deuxième lecture", type: "H3", conditions: {} },
  { texte: `À la fin de la lecture, le lecteur proclame ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: `Vient ensuite le chant d’acclamation à l’Évangile : l’Alléluia ou un autre chant selon le temps et les normes liturgiques.`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Pendant ce temps, le prêtre impose l’encens, si l’on en fait usage.`, type: "rubrique", conditions: {} },
  { texte: `Puis le diacre qui va proclamer l’Évangile, incliné profondément devant le prêtre, demande la bénédiction, en disant à voix basse :`, type: "rubrique", conditions: {secret:true} },
  { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `Le prêtre dit à voix basse :`, type: "rubrique", conditions: {secret:true} },
  { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
    pour que vous proclamiez dignement son Évangile : 
    au nom du Père, et du Fils,  et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `Le diacre fait le signe de la croix et répond :`, type: "rubrique", conditions: {secret:true} },
  { texte: `Amen.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `S’il n’y a pas de diacre, le prêtre, incliné devant l’autel, prie tout bas :`, type: "rubrique", conditions: {secret:true} },
  { texte: `Purifie mon coeur et mes lèvres, 
    Dieu tout-puissant, 
    pour que j’annonce dignement ton saint Évangile.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `Ensuite, le diacre ou le prêtre se rend à l’ambon, accompagné éventuellement des ministres avec l’encens et les cierges, et il dit ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Le diacre ou le prêtre dit :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Évangile de Jésus Christ <span style="color: #b30000;">✠</span> selon saint N.`, type: "dialogueV", conditions: {} },
  { texte: `Gloire à toi, Seigneur !`, type: "dialogueR", conditions: {} },
  { texte: `Puis le diacre ou le prêtre encense le livre, si l’on utilise l’encens, et il proclame l’Évangile.`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `L’Évangile achevé, le diacre dit ou chante :`, type: "rubrique", conditions: {} },
  { class:"lettrine", texte: `Acclamons la Parole de Dieu.`, type: "dialogueV", conditions: {} },
  { texte: `Louange à toi, Seigneur Jésus !`, type: "dialogueR", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
  { texte: `Ensuite, il le vénère d’un baiser en disant tout bas :`, type: "rubrique", conditions: {secret:true} },
  { texte: `Que cet Évangile efface mes péchés.`, type: "voixbasse", conditions: {secret:true} },
  { texte: `Puis le prêtre ou le diacre prononce l’homélie, qui doit avoir lieu tous les dimanches et fêtes de précepte ; les autres jours, elle est recommandée.`, type: "rubrique", conditions: {} },

//Credo
  { texte: `PROFESSION DE FOI`, type: "H2", conditions: {showCredo: true} },
  
  //Credo de Nicée-Constantinople
  { class: "premiergénéré", texte: `Symbole de Nicée-Constantinople`, type: "H3", conditions: {typeCredo: "NC", showCredo: true} },
  { conditions: {typeCredo: "NC", showCredo: true},  class: "tableau",  items:[
  { class:"grandelettrine" , texte: `Je crois en un seul Dieu,
le Père tout-puissant, créateur du ciel et de la terre,`, type: "dialogueV" },
  { class:"indent1p", texte: `de l’univers visible et invisible.`, type: "dialogueV" },
  { class:"indent1all", texte: `Je crois en un seul Seigneur, Jésus Christ,
le Fils unique de Dieu, né du Père avant tous les siècles\u00A0:`, type: "dialogueV" },
  { class:"indent1all", texte: `Il est Dieu, né de Dieu,
lumière née de la lumière,
vrai Dieu, né du vrai Dieu,`, type: "dialogueV" },
  { class:"indent1all", texte: `Engendré, non pas créé,
consubstantiel au Père,
et par lui tout a été fait.`, type: "dialogueV" },
  { class:"indent1all", texte: `Pour nous les hommes, et pour notre salut,
il descendit du ciel\u00A0;`, type: "dialogueV" },
  { class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « s’est fait homme\u00A0».`, type: "rubriqueinterne" },
  { class:"indent1all", texte: `Par l’Esprit Saint, il a pris chair de la Vierge Marie,
et s’est fait homme.`, type: "dialogueV"},
  { class:"indent1all", texte: `Crucifié pour nous sous Ponce Pilate,
il souffrit sa passion et fut mis au tombeau.`, type: "dialogueV" },
  { class:"indent1all", texte: `Il ressuscita le troisième jour, conformément aux Écritures,
et il monta au ciel ; il est assis à la droite du Père.`, type: "dialogueV" },
  { class:"indent1all", texte: `Il reviendra dans la gloire, pour juger les vivants et les morts\u00A0;
et son règne n’aura pas de fin.`, type: "dialogueV" },
  { class:"indent1all", texte: `Je crois en l’Esprit Saint, qui est Seigneur et qui donne la vie\u00A0;
il procède du Père et du Fils\u00A0;`, type: "dialogueV" },
  { class:"indent1all", texte: `Avec le Père et le Fils, il reçoit même adoration et même gloire\u00A0;
il a parlé par les prophètes.`, type: "dialogueV" },
  { texte: `Je crois en l’Église, une, sainte, catholique et apostolique.
Je reconnais un seul baptême pour le pardon des péchés.
J’attends la résurrection des morts, et la vie du monde à venir. Amen.`, type: "dialogueV" },
],},

//Credo en latin
  { class: "premiergénéré", texte: `Symbole de Nicée-Constantinople`, type: "H3", conditions: {typeCredo: "Lt", showCredo: true} },
  { conditions: {typeCredo: "Lt", showCredo: true}, class: "tableau", items:[
  { class:"grandelettrine" , texte: `Credo in unum Deum,
Patrem omnipótentem, factórem cæli et terræ,`, type: "dialogueV"},
  { class:"indent1p", texte: `visibílium ómnium et invisibílium.`, type: "dialogueV" },
  { class:"indent1all", texte: `Et in unum Dóminum Iesum Christum,
Fílium Dei unigénitum,
et ex Patre natum ante ómnia sǽcula.`, type: "dialogueV" },
  { class:"indent1all", texte: `Deum de Deo, lumen de lúmine, Deum verum de Deo vero,
    génitum, non factum, consubstantiálem Patri\u00A0:
    per quem ómnia facta sunt.`, type: "dialogueV" },
  { class:"indent1all", texte: `Qui propter nos hómines et propter nostram salútem
descéndit de cælis.`, type: "dialogueV" },
  { class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « factus est\u00A0».`, type: "rubriqueinterne" },
  { class:"indent1all", texte: `Et incarnátus est de Spíritu Sancto
ex María Vírgine, et homo factus est.`, type: "dialogueV" },
  { class:"indent1all", texte: `Crucifíxus étiam pro nobis sub Póntio Piláto ;
passus et sepúltus est,
et resurréxit tértia die, secúndum Scriptúras,
et ascéndit in cælum, sedet ad déxteram Patris.`, type: "dialogueV" },
  { class:"indent1all", texte: `Et íterum ventúrus est cum glória,
iudicáre vivos et mórtuos,
cuius regni non erit finis.`, type: "dialogueV" },
  { class:"indent1all", texte: `Et in Spíritum Sanctum, Dóminum et vivificántem\u00A0:
qui ex Patre Filióque procédit.`, type: "dialogueV" },
  { class:"indent1all", texte: `Qui cum Patre et Fílio simul adorátur et conglorificátur\u00A0:
qui locútus est per prophétas.`, type: "dialogueV" },
  { class:"indent1all", texte: `Et unam, sanctam, cathólicam et apostólicam Ecclésiam.`, type: "dialogueV" },
  { texte: `Confíteor unum baptísma in remissiónem peccatórum.`, type: "dialogueV" },
  { class:"indent1all", texte: `Et exspécto resurrectiónem mortuórum,
et vitam ventúri sǽculi. Amen.`, type: "dialogueV" },
],},

//Credo en latin
  { class: "premiergénéré", texte: `Symbole des Apôtres`, type: "H3", conditions: {typeCredo: "AP", showCredo: true} },
  { conditions: {typeCredo: "AP", showCredo: true}, class: "tableau",items:[
  { texte: `Surtout aux temps du Carême et de Pâques, on peut prendre le symbole baptismal de l’Église romaine appelé Symbole des Apôtres.`, type: "rubrique" },
  { class:"grandelettrine" , texte: `Je crois en Dieu, le Père tout-puissant,
créateur du ciel et de la terre.`, type: "dialogueV"},
  { texte: `Et en Jésus Christ, son Fils unique, notre Seigneur,`, type: "dialogueV" },
  { class:"indent1g", texte: `Aux mots qui suivent, tous s’inclinent jusqu’à « Vierge Marie\u00A0».`, type: "rubriqueinterne" },
  { class:"indent1all", texte: `qui a été conçu du Saint-Esprit,
est né de la Vierge Marie,
a souffert sous Ponce Pilate,
a été crucifié, est mort et a été enseveli,
est descendu aux enfers,
le troisième jour est ressuscité des morts,
est monté aux cieux,
est assis à la droite de Dieu le Père tout-puissant,
d’où il viendra juger les vivants et les morts.`, type: "dialogueV" },
  { class:"indent1all", texte: `Je crois en l’Esprit Saint,
à la sainte Église catholique,
à la communion des saints,
à la rémission des péchés,
à la résurrection de la chair,
à la vie éternelle. Amen.`, type: "dialogueV" },
],},

//Prière universelle
  { texte: `PRIÈRE UNIVERSELLE`, type: "H3", conditions: {} },
  { texte: `Quelques invitations sacerdotales et prières de conclusion sont proposées ici pour la commodité du prêtre et n’excluent pas l’usage d’autres formules.`, type: "rubrique", conditions: {} },
  { texte: `INVITATION SACERDOTALE`, type: "H4", conditions: {} },
  { texte: `Frères et soeurs,
rassemblés pour la prière commune,
supplions le Seigneur très bon
pour nous-mêmes et pour tous les hommes.`, type: "dialogueV", conditions: {} },
  { texte: `PRIÈRES DE CONCLUSION`, type: "H4", conditions: {} },
  { class:"indent1all", texte: `Dieu qui sauves tous les hommes
et ne veux en perdre aucun,`, type: "dialogueV", conditions: {} },
{ class:"indent1all", texte: `Écoute la prière de ton peuple
et donne-lui la joie d’être exaucé.
Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
],

liturgieeucharistique: [
  { texte: "LITURGIE EUCHARISTIQUE", type: "H1", conditions: {} },
//A ajouter plus tardAprès cela, on commence le chant d’offertoire. Pendant ce temps, les ministres placent sur
//l’autel le missel, le corporal, le purificatoire, le calice et la pale.
//Il est bon que les fidèles manifestent leur participation par une offrande, en apportant le
//pain et le vin pour la célébration de l’eucharistie, ou même d’autres dons destinés à subvenir
//aux besoins de l’Église et des pauvres.
  { texte: `PRÉPARATION DES DONS`, type: "H2", conditions: {} },
  { texte: `Le prêtre, debout à l’autel, prend la patène avec le pain, et la tient à deux mains, un peu élevée au-dessus de l’autel, en disant :`, type: "rubrique", conditions: {} },
  { class:"grandelettrine indentallg", texte: `Tu es béni, Seigneur, Dieu de l’univers :
nous avons reçu de ta bonté
le pain que nous te présentons,
fruit de la terre et du travail des hommes ;
il deviendra pour nous le pain de la vie.`, type: "dialogueV", conditions: {} },
  { texte: `S’il n’y a pas de chant d’offertoire, le prêtre peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {} },
  { class:"indentallg", texte: `Béni soit Dieu, maintenant et toujours !`, type: "dialogueR", conditions: {} },
  { texte: `Le diacre, ou le prêtre, verse le vin et un peu d’eau dans le calice, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true } },
  { class:"voixbasse lettrine indentallg" , texte: `Comme cette eau se mêle au vin
pour le sacrement de l’Alliance,
puissions-nous être unis à la divinité
de Celui qui a voulu prendre notre humanité.`, type: "voixbasse", conditions: {secret:true } },
  { texte: `Ensuite, le prêtre prend le calice, et le tient à deux mains, un peu élevé au-dessus de l’autel, en disant à voix basse\u00A0:`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
{ class:"grandelettrine indentallg", texte: `Tu es béni, Seigneur, Dieu de l’univers\u00A0:
nous avons reçu de ta bonté
le vin que nous te présentons,
fruit de la vigne et du travail des hommes ;
il deviendra pour nous le vin du Royaume éternel.`, type: "dialogueV", conditions: {} },
  { texte: `S’il n’y a pas de chant d’offertoire, le prêtre peut dire ces paroles à haute voix ; à la fin, le peuple peut dire l’acclamation :`, type: "rubrique", conditions: {} },
  { class:"indentallg", texte: `Béni soit Dieu, maintenant et toujours !`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, le prêtre, profondément incliné, dit tout bas :`, type: "rubrique", conditions: {secret:true } },
  { texte: `Le coeur humble et contrit,
nous te supplions, Seigneur,
accueille-nous :
que notre sacrifice, en ce jour,
trouve grâce devant toi,
Seigneur notre Dieu.`, type: "voixbasse", conditions: {secret:true }},
//Si cela convient, le prêtre encense les offrandes, la croix et l’autel ; puis, le diacre ou un autre ministre encense le prêtre et le peuple.
  { texte: `Ensuite, le prêtre, sur le côté de l’autel, se lave les mains, en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true } },
  { texte: `Lave-moi de mes fautes, Seigneur,
et purifie-moi de mon péché.`, type: "voixbasse", conditions: {secret:true}},

//Prière sur les offrandes
  { texte: `PRIÈRE SUR LES OFFRANDES`, type: "H3", conditions: {} },
  { texte: `Revenu au milieu de l’autel, tourné vers le peuple, étendant puis joignant les mains, il dit\u00A0:`, type: "rubrique", conditions: {} },
  { class:"grandelettrine indentallg", texte: `Priez, frères (et soeurs) :
que mon sacrifice, qui est aussi le vôtre,
soit agréable à Dieu le Père tout-puissant.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple se lève et répond :`, type: "rubrique", conditions: {} },
  { class:"indentallg", texte: `Que le Seigneur reçoive de vos mains ce sacrifice
à la louange et à la gloire de son nom,
pour notre bien et celui de toute l’Église.`, type: "dialogueR", conditions: {} },
  { texte: `Puis, les mains étendues, le prêtre dit la prière sur les offrandes.`, type: "rubrique", conditions: {} },
  {type : "insert-priere-sur-les-offrandes"},
  
//Prière eucharistique
  { texte: `PRIÈRE EUCHARISTIQUE`, type: "H2", conditions: {showPE: true} },
  { type: "titre-preface"},
  { type: "soustitre-preface"},
  { texte: `Le prêtre commence alors la Prière eucharistique. Étendant les mains, il dit\u00A0:`, type: "rubrique", conditions: {} },
  { class:"lettrine indent1p", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { class:"lettrine indent1p", texte: `Élevons notre coeur.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Nous le tournons vers le Seigneur.`, type: "dialogueR", conditions: {} },
  { class:"lettrine indent1p", texte: `Rendons grâce au Seigneur notre Dieu.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Cela est juste et bon.`, type: "dialogueR", conditions: {} },
  { texte: `Le prêtre dit la préface, les mains étendues.`, type: "rubrique", conditions: {} },
  { type : "insert-preface"},
  { texte: `À la fin de la préface, le prêtre joint les mains et, avec le peuple, proclame\u00A0:`, type: "rubrique", conditions: {} },
//Sanctus
  //français
  { class:"grandelettrine indentallg", texte: `Saint ! Saint ! Saint, le Seigneur, Dieu de l’univers !
Le ciel et la terre sont remplis de ta gloire.
Hosanna au plus haut des cieux.
Béni soit celui qui vient au nom du Seigneur.
Hosanna au plus haut des cieux.`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  //Latin
  { class:"grandelettrine indentallg", texte: `Sanctus, Sanctus, Sanctus Dóminus Deus Sábaoth.
Pleni sunt cæli et terra glória tua.
Hosánna in excélsis.
Benedíctus qui venit in nómine Dómini.
Hosánna in excélsis.`, type: "dialogueV", conditions: {OrdinaireLatin: true} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {} },

  { texte: `PRIÈRE EUCHARISTIQUE I`, type: "H3", conditions: {showPE: true, typePE: "PE1"} },
  { texte: `PRIÈRE EUCHARISTIQUE II`, type: "H3", conditions: {showPE: true, typePE: "PE2"} },
  { texte: `PRIÈRE EUCHARISTIQUE III`, type: "H3", conditions: {showPE: true, typePE: "PE3"} },
  { texte: `PRIÈRE EUCHARISTIQUE IV`, type: "H3", conditions: {showPE: true, typePE: "PE4"} },
//PE 1
  { conditions: {typePE: "PE1", showPE: true}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {} },
  { class:"grandelettrine", texte: `Toi, Père très aimant,
nous te prions et te supplions
par Jésus Christ, ton Fils, notre Seigneur,`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `il joint les mains et dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { texte: `d’accepter`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `puis il fait un signe de croix sur le pain et le calice et dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class:"indent1p", texte: `et de bénir <span style="color: #b30000;">✠</span> ces dons, ces offrandes,
sacrifice pur et saint,`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `il étend les mains et continue :`, type: "rubriqueinterne", conditions: {} },
  { class:"indent1all", texte: `que nous te présentons
avant tout pour ta sainte Église catholique\u00A0:`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `accorde-lui la paix et protège-la,
daigne la rassembler dans l’unité
et la gouverner par toute la terre ;`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `nous les présentons
en union avec ton serviteur notre Pape <span style="color: #b30000;">N.</span>,
notre Évêque <span style="color: #b30000;">N.</span>,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `et tous ceux qui gardent fidèlement
la foi catholique reçue des Apôtres.`, type: "dialogueV", conditions: {} },
  { texte: `COMMEMORATION DES VIVANTS`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { class:"grandelettrine", texte: `Souviens-toi, Seigneur,
de tes serviteurs et de tes servantes (de <span style="color: #b30000;">N.</span> et de <span style="color: #b30000;">N.</span>),`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Il joint les mains, prie en silence. Puis il reprend, les mains étendues\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class:"indent1all", texte: `et de tous ceux qui sont ici réunis,
dont tu connais la foi et l’attachement.`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `Nous t’offrons pour eux,
ou ils t’offrent pour eux-mêmes et tous les leurs
ce sacrifice de louange,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `pour leur propre rédemption,
pour la paix, et le salut qu’ils espèrent\u00A0;`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `ils te rendent cet hommage,
à toi, Dieu éternel, vivant et vrai.`, type: "dialogueV", conditions: {} },

  { texte: `DURANT L’ACTION`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { class:"grandelettrine", texte: `Unis dans une même communion,
    nous célébrons le jour`, type: "dialogueV", conditions: {celebrationType: "Dominicale" } },
  { class:"indentallp", texte: `où le Christ est ressuscité d’entre les morts\u00A0;`, type: "dialogueV", conditions: {celebrationType:"Dominicale"} },
  { class:"indent1all", texte: `et vénérant d’abord la mémoire
de la bienheureuse Marie toujours Vierge,
Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {celebrationType:"Dominicale"} },

  { class:"grandelettrine", texte: `Unis dans une même communion,
vénérant d’abord la mémoire`, type: "dialogueV", conditions: {celebrationType: "Semaine"} },
{ class:"indent1all", texte: `de la bienheureuse Marie toujours Vierge,
Mère de notre Dieu et Seigneur, Jésus Christ,`, type: "dialogueV", conditions: {celebrationType: "Semaine"} },

  { class:"indentallp", texte: `et celle de saint Joseph, son époux,
des bienheureux Apôtres et martyrs
Pierre et Paul, André,
<span style="color: #b30000;">(</span>Jacques et Jean, Thomas, Jacques et Philippe,
Barthélemy et Matthieu, Simon et Jude,
Lin, Clet, Clément, Sixte, Corneille et Cyprien,
Laurent, Chrysogone, Jean et Paul, Côme et Damien<span style="color: #b30000;">)</span>
et de tous les saints,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `nous t’en supplions\u00A0:
accorde-nous, par leur prière et leurs mérites,
d’être toujours et partout,
forts de ton secours et de ta protection.
<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {} },

  { texte: `Les mains étendues il continue`, type: "rubriqueinterne", conditions: {} },
  { class:"grandelettrine", texte: `Voici donc l’offrande que nous présentons devant toi,
nous, tes serviteurs, et ta famille entière\u00A0:`, type: "dialogueV", conditions: {} },
  { class:"indent1p", texte: `Seigneur, dans ta bienveillance, accepte-la.`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `Assure toi-même la paix de notre vie,
arrache-nous à la damnation éternelle
et veuille nous admettre au nombre de tes élus.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { texte: `<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {} },

  { texte: `Tenant les mains étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  { class:"grandelettrine", texte: `Seigneur Dieu, nous t’en prions,
daigne bénir et accueillir cette offrande,`, type: "dialogueV" },
  { class:"indent1all", texte: `accepte-la pleinement,
rends-la parfaite et digne de toi\u00A0:`, type: "dialogueV" },
  { texte: `qu’elle devienne pour nous`, type: "dialogueV" },
  { class:"indent1all", texte: `le Corps et le Sang de ton Fils bien-aimé,
Jésus, le Christ, notre Seigneur.`, type: "dialogueV" },
  { class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },

  { texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées ou chantées
de façon distincte et claire, comme le requiert la nature de ces paroles`, type: "rubrique" },
  { class:"grandelettrine", texte: `La veille de sa passion,`, type: "dialogueV" },
  {  class: "indent1p",texte: `Il prend le pain et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `il prit le pain dans ses mains très saintes`, type: "dialogueV" },
  { class: "indent1g", texte: `Il élève les yeux.`, type: "rubriqueinterne" },
  { class: "indent1all", texte: `et, les yeux levés au ciel,
vers toi, Dieu, son Père tout-puissant,`, type: "dialogueV" },
  { class: "indent1all", texte: `en te rendant grâce il dit la bénédiction,
il rompit le pain,`, type: "dialogueV" },
  { texte: `et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  { class: "indent1g", texte: `Il s’incline un peu`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« PRENEZ, ET MANGEZ-EN TOUS :
CECI EST MON CORPS
LIVRE POUR VOUS. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  { class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  {  class: "indent1p", texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `il prit cette coupe incomparable dans ses mains très saintes\u00A0;`, type: "dialogueV" },
  { class: "indent1all", texte: `et, te rendant grâce à nouveau, il dit la bénédiction,
et donna la coupe à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  { class: "indent1g", texte: `Il s’incline un peu`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« PRENEZ, ET BUVEZ-EN TOUS,
CAR CECI EST LA COUPE DE MON SANG,
LE SANG DE L’ALLIANCE NOUVELLE ET ETERNELLE,
QUI SERA VERSE POUR VOUS ET POUR LA MULTITUDE
EN REMISSION DES PECHES.
VOUS FEREZ CELA EN MEMOIRE DE MOI. »`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },

  { texte: ``, type: "" },

]},
],
eucharistie: [  ]
};
// modèle plusieurs conditions: { moment: "messe", langue: "français", saison: "avent"  }
// conditions logiques conditions: { and: [...], or: [...] }

//  { texte: ``, type: "", conditions: {} },
// { class: "", texte: ``, type: "", conditions: {} },
//  { texte: "", type: "", conditions: {} },