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
  { id: "Salutation", texte: "SALUTATION", type: "H2", conditions: {} },
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
    { id: "ActePenitentiel",texte: "ACTE PENITENTIEL", type: "H2", conditions: {} },
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
    au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true} },
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
  { id: "Professiondefoi",texte: `PROFESSION DE FOI`, type: "H2", conditions: {showCredo: true} },
  
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
  { type : "insert-preface" },
    { conditions: {typePE: "PE4"}, class: "tableau",items:[
        {class:"grandelettrine", texte:`Vraiment il est juste et bon,
            pour ta gloire et notre salut,`, type: "dialogueV"},
        {class:"indent1all", texte:`de t’offrir notre action de grâce,
            toujours et en tout lieu,`, type: "dialogueV"},
        {class:"indent1all", texte:`Seigneur, Père très saint,
            Dieu éternel et tout-puissant,
            par le Christ, notre Seigneur.`, type: "dialogueV"},
        { class:"sautdeligne", texte: `\n`, type: "dialogueV",},
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
        { class:"sautdeligne", texte: `\n`, type: "dialogueV"},
        {class:"indent1all", texte:`C’est pourquoi, avec les anges et les archanges,
            avec les puissances d’en haut et tous les esprit bienheureux,
            nous chantons l’hymne de ta gloire
            et sans fin nous proclamons\u00A0:`, type: "dialogueV"}]},
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

  { id: "PE1", texte: `PRIÈRE EUCHARISTIQUE I`, type: "H3", conditions: {showPE: true, typePE: "PE1"} },
  { id: "PE2", texte: `PRIÈRE EUCHARISTIQUE II`, type: "H3", conditions: {showPE: true, typePE: "PE2"} },
  { id: "PE3", texte: `PRIÈRE EUCHARISTIQUE III`, type: "H3", conditions: {showPE: true, typePE: "PE3"} },
  { id: "PE4", texte: `PRIÈRE EUCHARISTIQUE IV`, type: "H3", conditions: {showPE: true, typePE: "PE4"} },
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
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { class:"grandelettrine", texte: `Voici donc l’offrande que nous présentons devant toi,
nous, tes serviteurs, et ta famille entière\u00A0:`, type: "dialogueV", conditions: {} },
  { class:"indent1p", texte: `Seigneur, dans ta bienveillance, accepte-la.`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `Assure toi-même la paix de notre vie,
arrache-nous à la damnation éternelle
et veuille nous admettre au nombre de tes élus.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { texte: `<span style="color: #b30000;">(</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">)</span>`, type: "dialogueV", conditions: {} },

  { texte: `Tenant les mains étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
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
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
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
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
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
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
  ] },
//PE 2
{ conditions: {typePE: "PE2", showPE: true}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {} },
  { class:"grandelettrine", texte: `Toi qui es vraiment Saint,
toi qui es la source de toute sainteté, Dieu notre Père,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `nous voici rassemblés devant toi,
et, dans la communion de toute l’Église,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `nous célébrons le jour
où le Christ est ressuscité d’entre les morts.`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `Par lui que tu as élevé à ta droite, nous te prions\u00A0:`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Il joint les mains, et, les tenant étendues sur les offrandes, il dit\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { texte: `Sanctifie ces offrandes
en répandant sur elles ton Esprit\u00A0;`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `il joint les mains, puis il fait un signe de croix sur le pain et le calice, en disant\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class:"indent1all", texte: `qu’elles deviennent pour nous
le Corps <span style="color: #b30000;">✠</span> et le Sang
de Jésus, le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
  { class:"indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },

{ texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées distinctement et clairement, comme le requiert la nature de ces paroles.`, type: "rubrique" },
  { class:"sautdeligne", texte: `\n`, type: "", conditions: {hideRubriques:true} },
  { class:"grandelettrine", texte: `Au moment d’être livré
et d’entrer librement dans sa passion,`, type: "dialogueV" },
  {  class: "indent1p",texte: `Il prend le pain et le tient un peu au-dessus de l’autel.`, type: "rubriqueinterne" },
  { texte: `il prit le pain, il rendit grâce, il le rompit
et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  { class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  { class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  { texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `il prit la coupe ;`, type: "dialogueV" },
  { texte: `de nouveau il rendit grâce,
et la donna à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  { class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
]},
//PE 3
{ conditions: {typePE: "PE3", showPE: true}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `Tu es vraiment saint, Dieu de l’univers, 
    et il est juste que toute la création proclame ta louange,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `car c’est toi qui donnes la vie, 
    c’est toi qui sanctifies toutes choses, 
    par ton Fils, Jésus Christ, notre Seigneur, 
    avec la puissance de l’Esprit Saint\u00A0;`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et tu ne cesses de rassembler ton peuple, 
    afin que, du levant au couchant du soleil, 
    une offrande pure soit présentée à ton nom.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains, puis, les tenant étendues sur les offrandes, il dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `C<span></span>’est pourquoi nous voici rassemblés devant toi, Dieu notre Père, 
    et, dans la communion de toute l’Église,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `nous célébrons le jour 
    où le Christ est ressuscité d’entre les morts.`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `Par lui, que tu as élevé à ta droite, 
    nous te supplions de consacrer toi-même 
    les offrandes que nous apportons\u00A0:`, type: "dialogueV", conditions: {} },
  { class: "indentallp", texte: `Sanctifie-les par ton Esprit 
    pour qu’elles deviennent`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Il joint les mains puis il fait le signe de croix sur le pain et le calice, en disant\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class: "indentallp", texte: `le Corps <span style="color: #b30000;">✠</span> et le Sang de ton Fils,
    Jésus Christ, notre Seigneur,`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1p", texte: `qui nous a dit de célébrer ce mystère.`, type: "dialogueV", conditions: {} },
  { texte: `Dans les formules qui suivent, les paroles du Seigneur seront prononcées ou chantées de façon distincte et claire, comme le requiert la nature de ces paroles.`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `La nuit même où il fut livré,`, type: "dialogueV", conditions: {} },
  { texte: `Il prend le pain et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1p", texte: `il prit le pain,`, type: "dialogueV", conditions: {} },
  { texte: `en te rendant grâce il dit la bénédiction, 
    il rompit le pain, 
    et le donna à ses disciples, en disant\u00A0:`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ᴍᴀɴɢᴇᴢ-ᴇɴ ᴛᴏᴜs :
ᴄᴇᴄɪ ᴇsᴛ ᴍᴏɴ Cᴏʀᴘs
ʟɪᴠʀᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs. »`, type: "dialogueV" },
  { texte: `Il montre au peuple l’hostie consacrée, la repose sur la patène, et adore en faisant la génuflexion.`, type: "rubrique" },
  { class:"sautdeligne", texte: `\n`},
  { texte: `Ensuite, il continue\u00A0:`, type: "rubrique" },
  { class:"grandelettrine", texte: `De même, après le repas,`, type: "dialogueV" },
  { texte: `Il prend le calice et, le tenant un peu au-dessus de l’autel, il continue\u00A0:`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `il prit la coupe ;`, type: "dialogueV" },
  { texte: `en te rendant grâce il dit la bénédiction, 
    et donna la coupe à ses disciples, en disant\u00A0:`, type: "dialogueV" },
  { class: "indent1g", texte: `Il s’incline un peu.`, type: "rubriqueinterne" },
  { class:"sautdeligne", texte: `\n`},
  { class: "centre", texte: `« Pʀᴇɴᴇᴢ, ᴇᴛ ʙᴜᴠᴇᴢ-ᴇɴ ᴛᴏᴜs,
ᴄᴀʀ ᴄᴇᴄɪ ᴇsᴛ ʟᴀ ᴄᴏᴜᴘᴇ ᴅᴇ ᴍᴏɴ Sᴀɴɢ,
ʟᴇ Sᴀɴɢ ᴅᴇ ʟ’Aʟʟɪᴀɴᴄᴇ ɴᴏᴜᴠᴇʟʟᴇ ᴇᴛ ᴇ́ᴛᴇʀɴᴇʟʟᴇ,
ǫᴜɪ sᴇʀᴀ ᴠᴇʀsᴇ́ ᴘᴏᴜʀ ᴠᴏᴜs ᴇᴛ ᴘᴏᴜʀ ʟᴀ ᴍᴜʟᴛɪᴛᴜᴅᴇ
ᴇɴ ʀᴇ́ᴍɪssɪᴏɴ ᴅᴇs ᴘᴇ́ᴄʜᴇ́s.
Vᴏᴜs ғᴇʀᴇᴢ ᴄᴇʟᴀ ᴇɴ ᴍᴇ́ᴍᴏɪʀᴇ ᴅᴇ ᴍᴏɪ.\u00A0»`, type: "dialogueV" },
  { texte: `Il montre le calice au peuple, le dépose sur le corporal, et adore en faisant la génuflexion.`, type: "rubrique" },
]},
//PE 4
{ conditions: {typePE: "PE4", showPE: true}, class: "tableau",items:[
  { texte: `Le prêtre dit, les mains étendues\u00A0:`, type: "rubrique", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
]},


//Acclamation eucharistique / Anamnèse
  { id: "Anamnèse", texte: `Puis il introduit une des acclamations suivantes\u00A0:`, type: "rubrique", conditions: {showPE: true} },
  { class: "indent1g lettrine", texte: `Il est grand, le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE1", showPE: true} },
  { class: "indentallg", texte: `Nous annonçons ta mort, Seigneur Jésus,
nous proclamons ta résurrection,
nous attendons ta venue dans la gloire.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE1", showPE: true} },
    { class: "indent1g lettrine", texte: `Acclamons le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE2", showPE: true} },
  { class: "indentallg", texte: `Quand nous mangeons ce Pain
et buvons à cette Coupe,
nous annonçons ta mort, Seigneur ressuscité,
et nous attendons que tu viennes.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE2", showPE: true} },
    { class: "indent1g lettrine", texte: `Qu’il soit loué, le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE3", showPE: true} },
  { class: "indentallg", texte: `Sauveur du monde, sauve-nous !
Par ta croix et ta résurrection, tu nous as libérés.`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE3", showPE: true} },
    { class: "indent1g lettrine", texte: `Proclamons le mystère de la foi :`, type: "dialogueV", conditions: {AcclamationEucharistique: "AE4", showPE: true} },
  { class: "indentallg", texte: `Gloire à toi qui étais mort,
gloire à toi qui es vivant,
notre Sauveur et notre Dieu :
Viens, Seigneur Jésus !`, type: "dialogueR", conditions: {AcclamationEucharistique: "AE4", showPE: true} },
  
//Suite PE 1
{ conditions: {typePE: "PE1", showPE: true}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique" },
  { class: "grandelettrine", texte: `Voilà pourquoi nous, tes serviteurs,
et ton peuple saint avec nous,
faisant mémoire`, type: "dialogueV" },
  { class: "indentallp", texte: `de la passion bienheureuse de ton Fils,
Jésus, le Christ, notre Seigneur,
de sa résurrection du séjour des morts
et de sa glorieuse ascension dans le ciel,`, type: "dialogueV" },
  { class: "indent1all", texte: `nous te présentons, Dieu de gloire et de majesté,
cette offrande
prélevée sur les biens que tu nous donnes,`, type: "dialogueV" },
  { class: "indent1all", texte: `le sacrifice pur et saint, le sacrifice parfait,
Pain de la vie éternelle et Coupe du salut.`, type: "dialogueV" },
  { class:"sautdeligne", texte: `\n`},
  { class: "indent1all", texte: `Et comme il t’a plu d’accueillir
les présents de ton serviteur Abel le Juste,
le sacrifice d’Abraham, notre père dans la foi,`, type: "dialogueV" },
  { class: "indent1all", texte: `et celui que t’offrit Melchisédech, ton grand prêtre,
oblation sainte et immaculée,`, type: "dialogueV" },
  { class: "indent1all", texte: `regarde ces offrandes avec amour
et, dans ta bienveillance, accepte-les`, type: "dialogueV" },
  { texte: `Incliné, les mains jointes, il continue\u00A0:`, type: "rubriqueinterne" },
  { texte: `Nous t’en supplions, Dieu tout-puissant :`, type: "dialogueV" },
  { class: "indent1all", texte: `Qu’elles soient portées
par les mains de ton saint Ange`, type: "dialogueV" },
  { class: "indent1all", texte: `en présence de ta gloire,
sur ton autel céleste,`, type: "dialogueV" },
  { class: "indent1all", texte: `afin qu’en recevant ici,
par notre communion à l’autel,
le Corps et le Sang très saints de ton Fils,`, type: "dialogueV" },
  { class: "indent1g", texte: `il se redresse et se signe en disant\u00A0:`, type: "rubriqueinterne" },
  { texte: `nous soyons comblés de la grâce
et de toute bénédiction du ciel.
<span style="color: #b30000;">[</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">]</span>`, type: "dialogueV" },
  { class:"sautdeligne", texte: `\n`},
  { texte: `COMMÉMORATION DES DÉFUNTS.`, type: "rubrique" },
  { class: "indent1g", texte: `Les mains étendues, il dit\u00A0:`, type: "rubriqueinterne" },
  { class:"grandelettrine", texte: `Souviens-toi aussi, Seigneur,
de tes serviteurs et de tes servantes <span style="color: #b30000;">(</span>de <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.)</span>`, type: "dialogueV" },
  { class: "indent1all", texte: `qui nous ont précédés,
marqués du signe de la foi,`, type: "dialogueV" },
  { texte: `et qui dorment dans la paix.`, type: "dialogueV" },
  { class:"sautdeligne", texte: `\n`},
  { class: "indent1g ", texte: `Il joint les mains et prie en silence quelques instants pour les défunts dont il porte l’intention.`, type: "rubriqueinterne" },
  { class: "indent1g", texte: `Puis il reprend, les mains étendues\u00A0:`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `nous implorons ta bonté, Seigneur\u00A0:`, type: "dialogueV" },
  { class: "indent1all", texte: `qu’ils demeurent dans la joie,
la lumière et la paix.`, type: "dialogueV" },
  { class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `<span style="color: #b30000;">[</span>Par le Christ, notre Seigneur. Amen.<span style="color: #b30000;">]</span>`, type: "dialogueV" },
  { class: "indent1p", texte: `Il se frappe la poitrine avec la main droite, en disant\u00A0:`, type: "rubrique" },
  { class: "grandelettrine", texte: `Et nous pécheurs, tes serviteurs,`, type: "dialogueV" },
  { class: "indent1p", texte: `il étend les mains et continue\u00A0:`, type: "rubriqueinterne" },
  { class: "indentallp", texte: `qui mettons notre espérance
en ta miséricorde inépuisable,`, type: "dialogueV" },
  { class: "indent1all", texte: `admets-nous dans la communauté
des saints Apôtres et Martyrs,
avec Jean Baptiste, Étienne, Matthias et Barnabé,`, type: "dialogueV" },
  { class: "indentallp", texte: `<span style="color: #b30000;">[</span>Ignace, Alexandre, Marcellin et Pierre,
Félicité et Perpétue, Agathe, Lucie,
Agnès, Cécile, Anastasie,<span style="color: #b30000;">]</span>
et tous les saints ;`, type: "dialogueV" },
  { class: "indent1all", texte: `nous t’en prions, accueille-nous dans leur compagnie,
sans nous juger sur le mérite
mais en accordant largement ton pardon.`, type: "dialogueV" },
  { class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne" },
  { class: "indent1p", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV" },
  { class:"sautdeligne", texte: `\n`},
  { texte: `Il continue :`, type: "rubriqueinterne" },
  { class: "indent1all", texte: `Par lui, tu ne cesses de créer tous ces biens,
tu les sanctifies, leur donnes la vie,
les bénis, et nous en fais le don.`, type: "dialogueV" },
] },
//Suite PE 2
{ conditions: {typePE: "PE2", showPE: true}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `En faisant ainsi mémoire
    de la mort et de la résurrection de ton Fils,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `nous t’offrons, Seigneur, 
    le Pain de la vie et la Coupe du salut,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et nous te rendons grâce, 
    car tu nous as estimés dignes 
    de nous tenir devant toi pour te servir.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "indent1all", texte: `Humblement, nous te demandons 
    qu’en ayant part au Corps et au Sang du Christ, 
    nous soyons rassemblés par l’Esprit Saint 
    en un seul corps.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Souviens-toi, Seigneur, 
    de ton Église répandue à travers le monde :`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `fais-la grandir dans ta charité 
    en union avec ton serviteur notre pape <span style="color: #b30000;">N.</span>, 
    notre évêque <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et tous les évêques, les prêtres et les diacres.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Souviens-toi aussi de nos frères et soeurs 
    qui se sont endormis dans l’espérance de la résurrection,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et souviens-toi, dans ta miséricorde, de tous les défunts\u00A0: 
    accueille-les dans la lumière de ton visage.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Sur nous tous enfin, 
    nous implorons ta bonté :`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `permets qu’avec la Vierge Marie, 
    la bienheureuse Mère de Dieu, 
    avec saint Joseph, son époux, 
    les Apôtres et tous les saints 
    qui ont fait ta joie au long des âges,`, type: "dialogueV", conditions: {} },
  { texte: `nous ayons part à la vie éternelle 
    et que nous chantions ta louange et ta gloire,`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1p", texte: `par ton Fils Jésus, le Christ.`, type: "dialogueV", conditions: {} },
] },
//Suite PE 3
{ conditions: {typePE: "PE3", showPE: true}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `En faisant ainsi mémoire de ton Fils,
    de sa passion qui nous sauve,`, type: "dialogueV", conditions: {} },
  { class: "indentallp", texte: `de sa glorieuse résurrection 
    et de son ascension dans le ciel,`, type: "dialogueV", conditions: {} },
  { texte: `alors que nous attendons son dernier avènement,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `nous t’offrons, Seigneur, en action de grâce, 
    ce sacrifice vivant et saint.`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `Regarde, nous t’en prions, 
    l’oblation de ton Église,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et daigne y reconnaître ton Fils qui, selon ta volonté, 
    s’est offert en sacrifice pour nous réconcilier avec toi.`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `Quand nous serons nourris de son Corps et de son Sang, 
    et remplis de l’Esprit Saint,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `accorde-nous d’être un seul corps et un seul esprit 
    dans le Christ.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Que l’Esprit Saint fasse de nous 
    une éternelle offrande à ta gloire,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `pour que nous obtenions un jour l’héritage promis, 
    avec tes élus :`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `en premier lieu la bienheureuse Vierge Marie, 
    Mère de Dieu,`, type: "dialogueV", conditions: {} },
  { texte: `avec saint Joseph, son époux, 
    les bienheureux Apôtres, les glorieux martyrs, 
    <span style="color: #b30000;">(</span>saint <span style="color: #b30000;">N.)</span>`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: ``, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `et tous les saints, 
    qui ne cessent d’intercéder auprès de toi 
    et nous assurent de ton secours.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Et maintenant nous te supplions, Seigneur : 
    par le sacrifice qui nous réconcilie avec toi,`, type: "dialogueV", conditions: {} },
  { class: "indent1p", texte: `étends au monde entier le salut et la paix.`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `Affermis ton Église, en pèlerinage sur la terre, 
    dans la foi et la charité,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `en union avec ton serviteur notre pape <span style="color: #b30000;">N.</span>, 
    et notre évêque <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `l’ensemble des évêques, les prêtres, les diacres, 
    et tout le peuple que tu as racheté.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "indent1all", texte: `Écoute, en ta bonté, les prières de ta famille, 
    que tu as voulu rassembler devant toi.`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `Dans ta miséricorde, ramène à toi, Père très aimant, 
    tous tes enfants dispersés.`, type: "dialogueV", conditions: {} },
  { class:"sautdeligne", texte: `\n`},
  { class: "grandelettrine", texte: `Pour nos frères et soeurs défunts, 
    et pour tous ceux qui ont quitté ce monde`, type: "dialogueV", conditions: {} },
  { class: "indentallp", texte: `et trouvent grâce devant toi, 
    nous te prions :`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `en ta bienveillance, 
    accueille-les dans ton royaume,`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `où nous espérons être comblés de ta gloire, 
    tous ensemble et pour l’éternité,`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1all", texte: `par le Christ, notre Seigneur, 
    par qui tu donnes au monde 
    toute grâce et tout bien.`, type: "dialogueV", conditions: {} },
] },
//Suite PE 4
{ conditions: {typePE: "PE4", showPE: true}, class: "tableau",items:[
  { texte: `Ensuite, les mains étendues, le prêtre dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
  { class: "", texte: ``, type: "", conditions: {} },
] },



//Doxologie 
  { class:"sautdeligne", texte: `\n`},
  { id:"Doxologie", class:"no-print", texte: "", type: "H3", conditions:{showPE: true} },
  { texte: `Il prend la patène avec l’hostie, ainsi que le calice, et, en les élevant ensemble, il dit\u00A0:`, type: "rubrique", conditions:{showPE: true} },
  //Français
  { class:"indentallg grandelettrine", texte: `Par lui, avec lui et en lui,
à toi, Dieu le Père tout-puissant,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: false}  },
  { class:"indent1gg", texte: `dans l’unité du Saint-Esprit,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: false}  },
  { class:"indentallg", texte: `tout honneur et toute gloire,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: false}  },
  { class:"indent1gg", texte: `pour les siècles des siècles.`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: false} },
  //Latin
  { class:"indentallg grandelettrine", texte: `Per ipsum, et cum ipso, et in ipso,
est tibi Deo Patri omnipoténti,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: true}  },
  { class:"indent1gg", texte: `in unitáte Spíritus Sancti,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: true}  },
  { class:"indentallg", texte: `omnis honor et glória,`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: true}  },
  { class:"indent1gg", texte: `per ómnia sǽcula sæculórum.`, type: "dialogueV", conditions:{showPE: true, DoxologieLt: true} },
  
  { class:"indent1p", texte: `Le peuple acclame :`, type: "rubrique", conditions:{showPE: true}  },
  { class: "indent1g", texte: `Amen.`, type: "dialogueR", conditions:{showPE: true },},

  { texte: `RITE DE LA COMMUNION`, type: "H2", conditions: {} },
  //Notre Père
  { id:"NotrePère", class:"no-print", texte: ``, type: "H3", conditions: {} },
  { texte: `Lorsqu’il a déposé le calice et la patène, le prêtre, les mains jointes, dit\u00A0:`, type: "rubrique", conditions: {} },
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
  { class:"grandelettrine indentallg", texte: `Notre Père qui es aux cieux,
que ton nom soit sanctifié,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg", texte: `que ton règne vienne,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1g", texte: `que ta volonté soit faite`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg",texte: `sur la terre comme au ciel.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1g", texte: `Donne-nous aujourd’hui`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg", texte: `notre pain de ce jour.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1g", texte: `Pardonne-nous nos offenses,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg", texte: `comme nous pardonnons aussi`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg", texte: `à ceux qui nous ont offensés.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1g", texte: `Et ne nous laisse pas entrer en tentation,`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  { class:"indent1gg", texte: `mais délivre-nous du Mal.`, type: "dialogueV", conditions: {NotrePère:["NP1","NP2"]} },
  //Latin
    { class:"grandelettrine indentallg", texte: `Pater noster, qui es in cælis :
sanctificétur nomen tuum ;,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1gg", texte: `advéniat regnum tuum ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1g", texte: `fiat volúntas tua,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1gg",texte: `sicut in cælo, et in terra.`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1g", texte: `Panem nostrum cotidiánum`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1gg", texte: `da nobis hódie ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1g", texte: `et dimítte nobis débita nostra,`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1gg", texte: `sicut et nos dimíttimus debitóribus nostris ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1g", texte: `et ne nos indúcas in tentatiónem ;`, type: "dialogueV", conditions: {NotrePère:"NP3"} },
  { class:"indent1gg", texte: `sed líbera nos a malo.`, type: "dialogueV", conditions: {NotrePère:"NP3"} },

  { texte: `Les mains étendues, le prêtre, seul, continue\u00A0:`, type: "rubrique", conditions: {} },
  { class:"grandelettrine", texte: `Délivre-nous de tout mal, Seigneur,
et donne la paix à notre temps :`, type: "dialogueV", conditions: {} },
  { texte: `soutenus par ta miséricorde,`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `nous serons libérés de tout péché,
à l’abri de toute épreuve ;`, type: "dialogueV", conditions: {} },
  { class:"indent1all", texte: `et nous attendons que se réalise cette bienheureuse espérance :
l’avènement de Jésus Christ, notre Sauveur.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains.`, type: "rubrique", conditions: {} },
  { texte: `Le peuple conclut la prière par l’acclamation\u00A0:`, type: "rubrique", conditions: {} },
  { class:"indentallg", texte: `Car c’est à toi qu’appartiennent
le règne, la puissance et la gloire
pour les siècles des siècles !`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, les mains étendues, le prêtre dit à haute voix\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine", texte: `Seigneur Jésus Christ,
tu as dit à tes Apôtres :`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `« Je vous laisse la paix,
je vous donne ma paix » ;`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `ne regarde pas nos péchés
mais la foi de ton Église ;`, type: "dialogueV", conditions: {} },
  { class: "indent1all", texte: `pour que ta volonté s’accomplisse,
donne-lui toujours cette paix,`, type: "dialogueV", conditions: {} },
  { texte: `et conduis-la vers l’unité parfaite,`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `il joint les mains`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1p", texte: `toi qui vis et règnes pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubrique", conditions: {} },
  { texte: `Amen`, type: "dialogueR", conditions: {} },

  { texte: `Le prêtre, tourné vers l’assemblée, ajoute en étendant les mains\u00A0:`, type: "rubrique", conditions: {} },
  { class: "indentallg grandelettrine", texte: `Que la paix du Seigneur
soit toujours avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Il joint les mains.`, type: "rubriqueinterne", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubrique", conditions: {} },
  { class: "indentallg", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, si cela convient, le diacre ou le prêtre ajoute\u00A0:`, type: "rubrique", conditions: {} },
  { class: "indentallg", texte: `Dans la charité du Christ,
donnez-vous la paix.`, type: "dialogueV", conditions: {} },
  { texte: `Et tous se manifestent la paix et la charité mutuelles selon les coutumes locales.`, type: "rubrique", conditions: {} },
  { texte: `Le rite de la paix étant achevé, le prêtre prend l’hostie, la rompt au-dessus de la patène, et en met un fragment dans le calice, en disant tout bas:`, type: "rubrique", conditions: {secret: true} },
  { class: "lettrine indent1allg", texte: `Que le Corps et le Sang de notre Seigneur Jésus Christ,
réunis dans cette coupe,`, type: "voixbasse", conditions: {secret: true} },
  { class: "indent1g", texte: `nourrissent en nous la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Pendant ce temps, on chante ou on dit\u00A0:`, type: "rubrique", conditions: {} },
  
  //Agnus français
  { class: "grandelettrine indentallg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde,
prends pitié de nous.`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  { class:"sautdeligne", texte: `\n`, conditions:{OrdinaireLatin: false} },
  { class: "indent1allg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  { class: "indent1g", texte: `prends pitié de nous.`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  { class:"sautdeligne", texte: `\n`, conditions:{OrdinaireLatin: false} },
  { class: "indent1allg", texte: `Agneau de Dieu,
qui enlèves les péchés du monde`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  { class: "indent1g", texte: `prends pitié de nous.`, type: "dialogueV", conditions: {OrdinaireLatin: false} },
  
  //Agnus latin
{ class: "grandelettrine indentallg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,
miserére nobis.`, type: "dialogueV", conditions: {OrdinaireLatin: true} },
  { class:"sautdeligne", texte: `\n`, conditions:{OrdinaireLatin: true} },
  { class: "indent1allg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,`, type: "dialogueV", conditions: {OrdinaireLatin: true} },
  { class: "indent1g", texte: `miserére nobis.`, type: "dialogueV", conditions: {OrdinaireLatin: true} },
  { class:"sautdeligne", texte: `\n`, conditions:{OrdinaireLatin: true} },
  { class: "indent1allg", texte: `Agnus Dei, 
  qui tollis peccáta mundi,`, type: "dialogueV", conditions: {OrdinaireLatin: true} },
  { class: "indent1g", texte: `dona nobis pacem.`, type: "dialogueV", conditions: {OrdinaireLatin: true} },

  { id:"Apologies", class:"no-print", texte: "", type: "H3", conditions:{secret: true} },
  { texte: `Puis, les mains jointes, le prêtre dit tout bas l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {secret: true} },
  //Type1
  { class: "lettrine indent1allg", texte: `Seigneur Jésus Christ,
Fils du Dieu vivant,`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  { class: "indent1allg", texte: `selon la volonté du Père
et avec la puissance du Saint-Esprit,
tu as donné, par ta mort, la vie au monde ;`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  { class: "indent1allg", texte: `que ton Corps et ton Sang très saints
me délivrent de mes péchés et de tout mal ;`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  { class: "indent1allg", texte: `fais que je demeure fidèle à tes commandements
et que jamais je ne sois séparé de toi.`, type: "voixbasse", conditions: {secret: true, Apologies: "1"} },
  //Type2
  { class: "lettrine indent1allg", texte: `Seigneur Jésus Christ,`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },
  { class: "indent1allg", texte: `que cette communion à ton Corps et à ton Sang
n’entraîne pour moi ni jugement ni condamnation ;`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },
  { class: "indent1allg", texte: `mais que, par ta bonté, elle soutienne mon esprit et mon corps
et me donne la guérison.`, type: "voixbasse", conditions: {secret: true, Apologies: "2"} },

  { texte: `Le prêtre fait la génuflexion, prend l’hostie, et, la tenant un peu élevée au-dessus de la patène ou du calice, tourné vers le peuple, dit à voix haute\u00A0:`, type: "rubrique", conditions: {} },
  { class: "grandelettrine indentallg", texte: `Voici l’Agneau de Dieu,
    voici celui qui enlève les péchés du monde.`, type: "dialogueV", conditions: {} },
  { class: "indent1g", texte: `Heureux les invités au repas des noces de l’Agneau\u00A0!`, type: "dialogueV", conditions: {} },
  { texte: `Et il ajoute avec le peuple\u00A0:`, type: "rubriqueinterne", conditions: {} },
  { class: "lettrine indent1g", texte: `Seigneur, je ne suis pas digne de te recevoir\u00A0;`, type: "dialogueV", conditions: {} },
  { class: "indent1allg", texte: `mais dis seulement une parole,
et je serai guéri.`, type: "dialogueV", conditions: {} },
  { texte: `Puis le prêtre, tourné vers l’autel, dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true} },
  { class: "indent1p lettrine", texte: `Que le Corps du Christ me garde pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Et il consomme avec respect le Corps du Christ.`, type: "rubrique", conditions: {secret: true} },
  { texte: `Ensuite, il prend le calice, et dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true} },
  { class: "indent1p lettrine", texte: `Que le Sang du Christ me garde pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Et il boit avec respect le Sang du Christ.`, type: "rubrique", conditions: {secret: true} },

  { texte: `Le prêtre prend alors la patène ou le ciboire, et s’approche des communiants ; il montre à chacun l’hostie en l’élevant légèrement, et dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "lettrine indent1g", texte: `Le Corps du Christ.`, type: "dialogueV", conditions: {} },
  { texte: `Le communiant répond :`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1g", texte: `Amen.`, type: "dialogueR", conditions: {} },
  { texte: `Et il communie.`, type: "rubrique", conditions: {} },
  { texte: `Pendant que le prêtre communie au Corps du Christ, on commence le chant de communion.`, type: "rubrique", conditions: {} },
  { texte: `Lorsque la distribution de la communion est achevée, le prêtre, le diacre ou l’acolyte purifie la patène au-dessus du calice, et le calice lui-même.`, type: "rubrique", conditions: {} },
  { texte: `Au moment où le prêtre fait la purification, il dit tout bas\u00A0:`, type: "rubrique", conditions: {secret:true} },
  { class: "lettrine indent1allg", texte: `Puissions-nous accueillir d’un coeur pur, Seigneur,
ce que notre bouche a reçu,`, type: "voixbasse", conditions: {secret: true} },
 { class: "indent1allg", texte: `et trouver dans cette communion d’ici-bas
la guérison pour la vie éternelle.`, type: "voixbasse", conditions: {secret: true} },
  { texte: `Le prêtre peut alors retourner à son siège. On peut rester en silence pendant un certain temps. On peut chanter un psaume ou un cantique de louange ou une hymne.`, type: "rubrique", conditions: {} },
  
  { texte: `PRIÈRE APRÈS LA COMMUNION`, type: "H3", conditions: {} },
  { texte: `Ensuite, debout à l’autel ou au siège, le prêtre, les mains jointes, dit, tourné vers le peuple\u00A0:`, type: "rubrique", conditions: {} },
  { texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
  { texte: `Et tous prient en silence avec le prêtre pendant quelque temps, à moins qu’on ait gardé le silence précédemment. Puis le prêtre, les mains étendues, dit la prière après la communion.`, type: "rubrique", conditions: {} },
  { type : "insert-priereApresLaCommunion"},
  { class: "indent1p", texte: `Amen.`, type: "dialogueR", conditions: {} },
 ],

//Rites de conclusion
ritesdeConclusion: [
  { texte: `RITES DE CONCLUSION`, type: "H2", conditions: {} },
  { texte: `Si c’est nécessaire, on fait alors brièvement les annonces pour la communauté présente.`, type: "rubrique", conditions: {} },
  { texte: `On fait ensuite le renvoi. Le prêtre, tourné vers le peuple, dit en étendant les mains\u00A0:`, type: "rubrique", conditions: {} },
  { class: "lettrine indent1g", texte: `Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1g", texte: `Et avec votre esprit.`, type: "dialogueR", conditions: {} },
  { texte: `Le prêtre bénit le peuple, en disant :`, type: "rubriqueinterne", conditions: {} },
  { class: "grandelettrine indentallg", texte: `Que Dieu tout-puissant vous bénisse,
le Père, et le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit.`, type: "dialogueV", conditions: {} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {} },
  { class: "indentallg", texte: `Amen.`, type: "dialogueR", conditions: {} },
  { id:"Conclusion", class:"no-print", texte: "", type: "H3", conditions:{} },    
  { texte: `Puis le diacre, ou le prêtre lui-même, les mains jointes, tourné vers l’assemblée, dit\u00A0:`, type: "rubrique", conditions: {} },
  { class: "lettrine indent1g", texte: `Allez, dans la paix du Christ.`, type: "dialogueV", conditions: {Conclusion:"1"} },
  { class: "lettrine indent1g", texte: `Allez porter l’Évangile du Seigneur.`, type: "dialogueV", conditions: {Conclusion:"2"} },
  { class: "lettrine indent1g", texte: `Allez en paix, glorifiez le Seigneur par votre vie.`, type: "dialogueV", conditions: {Conclusion:"3"} },
  { class: "lettrine indent1g", texte: `Allez en paix.`, type: "dialogueV", conditions: {Conclusion:"4"} },
  { texte: `Le peuple répond :`, type: "rubriqueinterne", conditions: {} },
  { class: "indent1g", texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
  { texte: `Ensuite, selon l’usage, le prêtre vénère l’autel par un baiser, comme au commencement. Après une inclination profonde, faite en même temps que les ministres, il se retire.`, type: "rubrique", conditions: {} },
],};
// modèle plusieurs conditions: { moment: "messe", langue: "français", saison: "avent"  }
// conditions logiques conditions: { and: [...], or: [...] }

//  { texte: ``, type: "", conditions: {} },
// { class: "", texte: ``, type: "", conditions: {} },
//  { texte: "", type: "", conditions: {} },