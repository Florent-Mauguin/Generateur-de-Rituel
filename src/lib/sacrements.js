import { benedictions } from "./benedictions";

export const Sacrements = {

  "baptême": [
    {class:"premiergénéré", texte: "RITUEL DU BAPTEME DES PETITS ENFANTS", type: "h2", conditions: {} },
    {class:"", texte: `Le baptême a lieu autant que possible le dimanche, jour où l'Église célèbre la Pâque du Christ.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le baptême a lieu autant que possible le dimanche, jour où l'Église célèbre la Pâque du Christ. On ne célébrera pas deux fois le baptême dans la même église, le même jour, sauf pour un juste motif.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Si possible, les enfants nés récemment seront baptisés dans une même célébration. Des fidèles, ou tout au moins des proches, des amis et des voisins, seront invités à y prendre une part active.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Des fidèles, ou tout au moins des proches, des amis et des voisins, seront invités à y prendre une part active.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `L'ACCUEIL`, type:"h1", conditions: {} },
    {class:"", texte: `Il appartient au père et à la mère de présenter leur enfant à l'Église pour le baptême ; les parrains et marraines les accompagnent. Ils se groupent autant que possible à l'entrée de l'église ; c'est par le baptême qu'on franchit le seuil et qu'on entre dans l'Église. On peut commencer par un chant.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Il appartient au père et à la mère de présenter leur enfant à l'Église pour le baptême; le parrain et la marraine les accompagnent. Ils se groupent autant que possible à l'entrée de l'église: c'est par le baptême qu'on franchit le seuil et qu'on entre dans l'Église. On peut commencer par un chant.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `S'il y a beaucoup d'enfants à baptiser et qu'il y ait là plusieurs prêtres ou diacres, ceux-ci peuvent aider le célébrant à accomplir certains rites, comme il est indiqué aux endroits prévus.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"italic", texte: `Dialogue initial`, type:"h2", conditions: {} },
    {class:"", texte: `Le célébrant, en aube, avec l'étole de fête, s'approche des personnes présentes et salue d'abord les parents et les parrains et marraines. En quelques mots, il rappelle la joie des parents qui reçoivent leur enfant comme un don de Dieu, source de toute vie. Dieu veut maintenant donner à ces enfants sa propre vie. (Le célébrant tiendra compte de la situation familiale des participants.)`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant, en aube, avec l'étole de fête, s'approche des personnes présentes et salue d'abord les parents, le parrain et la marraine. En quelques mots, il rappelle la joie des parents qui reçoivent leur enfant comme un don de Dieu, source de toute vie. Dieu veut maintenant donner à cet enfant sa propre vie. (Le célébrant tiendra compte de la situation familiale des participants.)`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Ensuite, il interroge les parents:`, type:"rubrique", conditions: {} },
    {class:"lettrine", texte: `Quel nom avez-vous choisi pour votre enfant ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `<span style="color: #b30000;">Les parents : N.</span>`, type:"dialogueR", conditions: {} },
    {class:"lettrine", texte: `Que demandez-vous pour <span style="color: #b30000;">N.</span> à l'Église de Dieu ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `<span style="color: #b30000;">Les parents :</span> Le baptême.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Pour ce dialogue, le célébrant peut employer d'autres mots, et les parents peuvent donner des réponses comme : la foi, la grâce du Christ, l'entrée dans l'Église, la vie éternelle, etc...`, type:"rubrique", conditions: {} },
    {class:"", texte: `S'il y a beaucoup d'enfants à baptiser, la première question peut s'adresser à tous les parents qui répondent à tour de rôle.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant souligne l'importance de cette démarche, en disant par exemple :`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Vous demandez le baptême pour vos enfants. 
    Vous devrez les éduquer dans la foi,
    et leur apprendre à garder les commandements, 
    pour qu'ils aiment Dieu et leur prochain
    comme le Christ nous l'a enseigné.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"grandelettrine", texte: `Vous demandez le baptême pour votre enfant. 
            Vous devrez l'éduquer dans la foi,
            et lui apprendre à garder les commandements, 
            pour qu'il aime Dieu et son prochain
            comme le Christ nous l'a enseigné.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Êtes-vous conscients de cela ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Les parents\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Oui (nous le sommes).`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Le célébrant s'adresse alors aux parrains et marraines en disant par exemple:`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant s'adresse alors au parrain et à la marraine en disant par exemple:`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"grandelettrine", texte: `Et vous, qui avez accepté d'être 
    les parrains et les marraines de ces enfants, 
    vous devrez aider les parents à exercer leur responsabilité.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"grandelettrine", texte: `Et vous, qui avez accepté d'être 
            le parrain et la marraine de <span style="color: #b30000;">N.</span> (cet enfant), 
            vous devrez aider ses parents à exercer leur responsabilité`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Êtes-vous disposés à le faire ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Les parrains et marraines\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
            {class:"", texte: `Les parrain et marraine\u00A0:`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Oui (nous le sommes).`, type:"dialogueR", conditions: {} },
    {class:"italic", texte: `Signation`, type:"h2", conditions: {} },
    {class:"", texte: `Avant de marquer chacun des enfants du signe de la croix, le célébrant dit\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
            {class:"", texte: `Avant de marquer l'enfant du signe de la croix, le célébrant dit :`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> (<span style="color: #b30000;">ou</span> Mes chers enfants), la communauté chrétienne vous accueille avec joie. En son nom, je vous marque de la croix, le signe du Christ, notre Sauveur.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"", texte: `<span style="color: #b30000;">N.</span>, la communauté chrétienne t'accueille avec joie. En son nom, je te marque de la croix, le signe du Christ, notre Sauveur.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all", texte: `Et vous, leurs parents (leurs parrains et marraines), 
        vous les marquerez après moi du signe de la croix.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Et vous, ses parents (son parrain et sa marraine), 
            vous le marquerez après moi du signe de la croix.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Le célébrant, sans rien dire, trace une croix sur le front de chaque enfant ; puis, à son invitation, les parents, et éventuellement les parrains et marraines, font de même.`, type:"rubrique", conditions: {Pbapteme: true} },
            {class:"", texte: `Le célébrant, sans rien dire, trace une croix sur le front de l'enfant ; puis, à son invitation, les parents et éventuellement le parrain et la marraine font de même.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"italic", texte: `Entrée dans l'Église`, type:"h2", conditions: {} },
    {class:"", texte: `Si l'accueil a eu lieu à la porte de l'église, le célébrant peut dire\u00A0:`, type:"rubrique", conditions: {} },
    {class:"indent1all", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, entrez dans la maison de Dieu 
        afin d'avoir part avec le Christ pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `<span style="color: #b30000;">N.</span>, entre dans la maison de Dieu, 
            afin d'avoir part avec le Christ pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `On se rend alors au lieu où se tiendra la célébration de la Parole, en chantant le psaume 99 (ou un cantique approprié).`, type:"rubrique", conditions: {} },
    
    {class:"sansmarge", texte: "LITURGIE DE LA PAROLE", type: "h1", conditions: {} },
    {class:"", texte: `Le célébrant peut introduire la liturgie de la Parole par une brève monition.`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `Lectures bibliques`, type:"h2", conditions: {} },
    {class:"", texte: `Un des membres de l'assemblée lit un ou plusieurs textes bibliques relatifs au baptême, qui se trouvent au lectionnaire. On pourra élargir le choix en fonction du désir des parents et de l'utilité des fidèles.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Entre les lectures, on peut chanter (ou dialoguer) le psaume responsorial`, type:"rubrique", conditions: {} },
    {class:"", texte: `Dans une brève homélie, le célébrant introduit au mystère du baptême, ainsi qu'à ses exigences, non seulement pour les enfants qui vont le recevoir, mais aussi pour leurs parents, leurs parrains et marraines, et pour toute la communauté qui les accueille.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Dans une brève homélie, le célébrant introduit au mystère du baptême, ainsi qu'à ses exigences, non seulement pour l'enfant qui va le recevoir, mais aussi pour ses parents, ses parrain et marraine, et pour toute la communauté qui l'accueille.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Après l'homélie, il est bon de ménager un temps de silence.`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `Prière commune de l'assemblée`, type:"h2", conditions: {} },
    {id:"prierecommunebapteme", class:"", texte: ``, type: "", conditions: {} },
    {class:"", texte: `Le célébrant invite alors l'assemblée à une prière commune. 
    Les intentions peuvent être dites par un lecteur.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Prions pour ces enfants qui vont recevoir la grâce du baptême,
    prions pour leurs parents, leurs parrains et marraines et pour tous les baptisés.`, type:"dialogueV", conditions: {prierecommunebapteme: "1", Pbapteme: true} },
            {class:"", texte: `Prions pour cet enfant qui va recevoir la grâce du baptême,
            prions pour ses parents, ses parrain et marraine et pour tous les baptisés.`, type:"dialogueV", conditions: {prierecommunebapteme: "1", Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
    {class:"", texte: `Par l'intercession des saints qui nous ont précédés dans la foi,
    confions-nous les uns les autres à la bonté de Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {prierecommunebapteme: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "rubrique", texte: "ou bien"},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Christe, eléison."},
        { type: "dialogueV", texte: "Ô Christ, prends pitié."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Christe, eléison."},
        { type: "dialogueR", texte: "Ô Christ, prends pitié."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Marie, Mère de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Michel et tous les anges de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Jean Baptiste,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Joseph,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Pierre et saint Paul,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Tous les Apôtres du Seigneur,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        {class:"", texte: `Il est bon d'ajouter ici d'autres noms, 
            en particulier ceux des saints patrons des enfants, de l'église, du pays, avant de conclure\u00A0:`, type:"rubrique", conditions: {prierecommunebapteme: "1", Pbapteme: true} },
                    {class:"", texte: `Il est bon d'ajouter ici d'autres noms, 
                    en particulier ceux des saints patrons de l'enfant, de l'église, du pays, avant de conclure\u00A0:`, type:"rubrique", conditions: {prierecommunebapteme: "1", Pbapteme: false} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Vous tous, saints et saintes de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Jésus, Fils du Dieu vivant,"},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Pour que ces enfants deviennent"}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: "Pour que cet enfant devienne"}]},
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "par le baptême membres de ton Corps, "},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: "par le baptême membre de ton Corps, "},
                { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour qu'ils vivent selon l'Esprit qu'ils vont recevoir,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: `Pour qu'il vive selon l'Esprit qu'il va recevoir,`},
                { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour qu'ils demeurent toute leur vie`}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: `Pour qu'il demeure toute sa vie`}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `dans la famille des enfants de Dieu,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour que leurs parents, leurs parrains et marraines`}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: `Pour que ses parent, ses parrain et marraine`}]},
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `les aident à connaître Dieu et à l'aimer,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: `l'aide à connaître Dieu et à l'aimer,`},
                { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour que tous les chrétiens`}]},
        { conditions: {prierecommunebapteme: "1", Pbapteme: true},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `donnent à ces enfants le témoignage de la foi,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
                { conditions: {prierecommunebapteme: "1", Pbapteme: false},  class: "colonnes2",  items:[
                { type: "dialogueV", texte: `donnent à cet enfant le témoignage de la foi,`},
                { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "1"} },
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Ô Christ écoute-nous,"},
        { type: "dialogueV", texte: "Ô Christ écoute-nous,"}]},
        { conditions: {prierecommunebapteme: "1"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Ô Christ, exauce-nous,"},
        { type: "dialogueV", texte: "Ô Christ, exauce-nous,"}]},
//Formule 2
    {class:"lettrine", texte: `Parents, parrains et marraines, et nous tous ici rassemblés,
    supplions pour ces enfants la miséricorde du Christ.`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"lettrine", texte: `Parents, parrain et marraine, et nous tous ici rassemblés,
            supplions pour cet enfant la miséricorde du Christ.`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils renaissent de l'eau et de l'Esprit Saint pour la vie éternelle.`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il renaisse de l'eau et de l'Esprit Saint pour la vie éternelle.`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Seigneur, nous te prions.`, type:"dialogueR", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils deviennent des membres vivants de ton Église, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il devienne un membre vivant de ton Église, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils puissent écouter ton saint Évangile et le mettre en pratique, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il puisse écouter ton saint Évangile et le mettre en pratique, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils parviennent avec joie à la table du sacrifice eucharistique, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il parvienne avec joie à la table du sacrifice eucharistique, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils aiment le Seigneur Dieu et leur prochain, comme tu l'as enseigné, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il aime le Seigneur Dieu et son prochain, comme tu l'as enseigné, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils trouvent autour d'eux des exemples de vie chrétienne, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il trouve autour de lui des exemples de vie chrétienne, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Qu'ils grandissent en sagesse et en sainteté, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
            {class:"", texte: `Qu'il grandisse en sagesse et en sainteté, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `Prions aussi pour que tous les disciples du Christ soient unis dans la foi et l'amour, <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {prierecommunebapteme: "2"} },
    {class:"", texte: `On invoque ensuite les saints\u00A0:`, type:"rubrique", conditions: {prierecommunebapteme: "2"} },
    { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Marie, Mère de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Michel et tous les anges de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Jean Baptiste,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Joseph,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Pierre et saint Paul,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Tous les Apôtres du Seigneur,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        {class:"", texte: `Il est bon d'ajouter ici d'autres noms, 
            en particulier ceux des saints patrons des enfants, de l'église, du pays, avant de conclure\u00A0:`, type:"rubrique", conditions: {prierecommunebapteme: "2", Pbapteme: true} },
                {class:"", texte: `Il est bon d'ajouter ici d'autres noms, 
                en particulier ceux des saints patrons de l'enfant, de l'église, du pays, avant de conclure\u00A0:`, type:"rubrique", conditions: {prierecommunebapteme: "2", Pbapteme: false} },
        { conditions: {prierecommunebapteme: "2"},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Vous tous, saints et saintes de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
    {class:"italic", texte: `Prière d'exorcisme et de délivrance`, type:"h2", conditions: {} },
    {class:"", texte: `* Dans la prière du Notre Père, on dit, à la fin de la liturgie du baptême : « Délivre-nous du Mal.» Ces paroles donnent un sens à ce qui est fait maintenant.
    Tout au long de sa vie, le baptisé devra lutter contre le mal et se convertir, en s'appuyant sur le sacrement du pardon.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Le célébrant dit\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Père tout-puissant,
        tu as envoyé ton Fils unique dans le monde`, type:"dialogueV", conditions: {} },
    {class:"indentallp", texte: `pour délivrer l'homme, esclave du péché,
        et lui rendre la liberté propre à tes fils;`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `tu sais que ces enfants, comme chacun de nous,
        seront tentés par les mensonges de ce monde
        et devront résister à Satan ;`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `tu sais que cet enfant, comme chacun de nous,
            sera tenté par les mensonges de ce monde
            et devra résister à Satan ;`, type:"dialogueV", conditions: {Pbapteme: false} },    
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all", texte: `Nous t'en prions humblement:
        par la passion de ton Fils et sa résurrection,
        arrache-les au pouvoir des ténèbres ;
        donne-leur la force du Christ,
        et garde-les tout au long de leur vie`, type:"dialogueV", conditions: {Pbapteme: true} },
        {class:"indent1all", texte: `Nous t'en prions humblement:
        par la passion de ton Fils et sa résurrection,
        arrache-le au pouvoir des ténèbres ;
        donne-lui la force du Christ,
        et garde-le tout au long de sa vie`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Dieu éternel et tout-puissant,
        tu as envoyé ton Fils dans le monde`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `pour nous libérer du pouvoir de Satan, l'esprit du mal,
        et pour que l'homme, arraché aux ténèbres,
        soit introduit dans ton Royaume de lumière ;`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all", texte: `Nous te supplions pour ces petits enfants :
        qu'ils soient rachetés du péché originel,
        qu'ils resplendissent de ta présence,
        et que l'Esprit Saint habite en eux.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Nous te supplions pour ce petit enfant :
            qu'il soit racheté du péché originel,
            qu'il resplendisse de ta présence,
            et que l'Esprit Saint habite en lui.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `* Pour signifier que les enfants reçoivent la force du Christ, le célébrant fait ensuite sur leur poitrine une onction avec l'huile des catéchumènes ou impose la main sur la tête de chacun.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `* Pour signifier que l'enfant reçoit la force du Christ, le célébrant fait ensuite sur sa poitrine une onction avec l'huile des catéchumènes ou impose la main sur sa tête.`, type:"rubrique", conditions: {Pbapteme: false} },
    {id:"ped", class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Avant de faire l'onction d'huile, le célébrant dit pour tous les enfants\u00A0:`, type:"rubrique", conditions: {ped: "1", Pbapteme: true} },
    {class:"", texte: `Avant de faire l'onction d'huile, le célébrant dit\u00A0:`, type:"rubrique", conditions: {ped: "1", Pbapteme: false} },
    {class:"grandelettrine", texte: `Que la force du Christ vous fortifie,
    lui qui est le Sauveur;
    qu'elle vous imprègne
    comme cette huile du salut
    dont je vous marque
    dans le Christ notre Seigneur,
    lui qui vit pour les siècles des siècles.`, type:"dialogueV", conditions: {ped: "1", Pbapteme: true} },
            {class:"grandelettrine", texte: `Que la force du Christ te fortifie,
            lui qui est le Sauveur;
            qu'elle t'imprègne
            comme cette huile du salut
            dont je te marque
            dans le Christ notre Seigneur,
            lui qui vit pour les siècles des siècles.`, type:"dialogueV", conditions: {ped: "1", Pbapteme: false} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {ped: "1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {ped: "1"} },
    {class:"", texte: `Il fait ensuite une onction sur la poitrine de chaque enfant. S'il y a beaucoup d'enfants à baptiser, il peut faire appel à plusieurs ministres.`, type:"rubrique", conditions: {ped: "1", Pbapteme: true} },
    {class:"", texte: `Il fait ensuite une onction sur la poitrine de l'enfant.`, type:"rubrique", conditions: {ped: "1", Pbapteme: false} },
    
    {class:"", texte: `Avant d'imposer la main, le célébrant dit, pour tous les enfants\u00A0:`, type:"rubrique", conditions: {ped: "2", Pbapteme: true} },
    {class:"", texte: `Avant d'imposer la main, le célébrant dit\u00A0:`, type:"rubrique", conditions: {ped: "2", Pbapteme: false} },
    {class:"grandelettrine", texte: `Que la force du Christ vous fortifie,
        lui qui est le Sauveur
        et qui vit pour les siècles des siècles.`, type:"dialogueV", conditions: {ped: "2", Pbapteme: true} },
            {class:"grandelettrine", texte: `Que la force du Christ te fortifie,
            lui qui est le Sauveur
            et qui vit pour les siècles des siècles.`, type:"dialogueV", conditions: {ped: "2", Pbapteme: false} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {ped: "2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {ped: "2"} },
    {class:"", texte: `Puis il impose la main sur chaque enfant, en silence.`, type:"rubrique", conditions: {ped: "2", Pbapteme: true} },
    {class:"", texte: `Puis il impose la main sur l'enfant, en silence.`, type:"rubrique", conditions: {ped: "2", Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Si on le juge bon, le célébrant peut reprendre ici un geste de Jésus dans l'Évangile (Mc 7, 32-35): il touche les oreilles et la bouche de chaque enfant, en disant\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Si on le juge bon, le célébrant peut reprendre ici un geste de Jésus dans l'Évangile (Mc 7, 32-35): il touche les oreilles et la bouche de l'enfant, en disant\u00A0:`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Effétah (c'est-à-dire) : Ouvre-toi !`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all", texte: `Le Seigneur Jésus a fait entendre les sourds et parler les muets ; 
        qu'il te donne d'écouter sa parole, 
        et de proclamer la foi pour la louange 
        et la gloire de Dieu le Père.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `On se rend alors en procession au baptistère, au chant du psaume 22 (ou de la litanie des saints, ou d'un cantique approprié).`, type:"rubrique", conditions: {} },
    {class:"", texte: `Si le baptistère ne peut contenir l'assemblée, on célébrera le baptême dans un endroit plus adapté de l'église. Famille après famille, les parents portant l'enfant, accompagnés des parrain et marraine, approchent, au moment opportun, de la fontaine ou de la cuve baptismale.`, type:"rubrique", conditions: {Pbapteme: true} },
    
    {class:"", texte: `AU BAPTISTÈRE`, type:"h1", conditions: {} },
    {class:"italic", texte: `Bénédiction et invocation sur l'eau`, type:"h2", conditions: {} },
    {class:"", texte: `* C'est à Dieu que la bénédiction est adressée : on le bénit pour les actes de salut qu'il a accomplis au moyen de l'eau ; on le supplie de continuer aujourd'hui, par l'eau du baptême, son œuvre de salut.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Lorsque l'assemblée s'est groupée autour de la fontaine ou de la cuve baptismale, le célébrant l'invite à la prière en disant, par exemple\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Dieu a voulu se servir de l'eau pour donner sa vie aux croyants. 
        Tournons vers lui notre cœur et prions : 
        qu'il fasse naître ces enfants à la vie nouvelle par l'eau et l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"lettrine indent1all", texte: `Dieu a voulu se servir de l'eau pour donner sa vie aux croyants. 
            Tournons vers lui notre cœur et prions : 
            qu'il fasse naître cet enfant à la vie nouvelle par l'eau et l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Mes frères et soeurs, prions le Seigneur notre Dieu : 
        qu'il fasse jaillir en ces enfants la grâce de la vie nouvelle.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"lettrine indent1all", texte: `Mes frères et soeurs, prions le Seigneur notre Dieu : 
            qu'il fasse jaillir en cet enfant la grâce de la vie nouvelle.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Il choisit une des prières suivantes. Au temps pascal, cette prière prend la forme d'une action de grâce pour l'eau qui a été bénite durant la Nuit Sainte.`, type:"rubrique", conditions: {} },
    {id : "benbapt", class:"no-print", texte: ``, type:"", conditions: {} },
//benbapt 1
    {class:"", texte: `Hors du temps pascal.`, type:"h3", conditions: {benbapt: "1"} },
    {class:"", texte: `Le signe R/ indique que l'on peut introduire une acclamation, telle que: « Éternel est ton amour ! ».`, type:"rubrique", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Dieu,
        dont la puissance invisible
        accomplit des merveilles par les sacrements,
        tu as voulu, au cours des temps,
        que l'eau, ta créature,
        révèle ce que serait la grâce du baptême.`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Dès les commencements du monde,
        c'est ton Esprit qui planait sur les eaux,
        pour qu'elles reçoivent en germe
        la force de sanctifier. <span style="color: #b30000;">(R/)</span>`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Par les flots du déluge,
        tu annonçais le baptême qui fait renaître,
        puisque l'eau y préfigurait à la fois
        la fin de tout péché et le début de toute justice. <span style="color: #b30000;">(R/)</span>`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Aux enfants d'Abraham,
        tu as fait passer la mer Rouge à pied sec
        pour que le peuple d'Israël, libéré de la servitude,
        préfigure le peuple des baptisés. <span style="color: #b30000;">(R/)</span>`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Ton Fils bien-aimé,
        baptisé par Jean dans les eaux du Jourdain,
        consacré par l'onction de ton Esprit,
        suspendu au bois de la croix,
        laissa couler de son côté ouvert
        du sang et de l'eau ;`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `et quand il fut ressuscité, il dit à ses disciples:
        « Allez, enseignez toutes les nations,
        et baptisez-les au nom du Père, et du Fils, et du Saint-Esprit.\u00A0» <span style="color: #b30000;">(R/)</span>`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Maintenant, Seigneur notre Dieu,
        regarde avec amour ton Église
        et fais jaillir en elle la source du baptême.`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Que cette eau reçoive de l'Esprit Saint
        la grâce de ton Fils unique,
        afin que l'homme, créé à ta ressemblance
        et lavé par le baptême
        des souillures qui déforment cette image,
        puisse renaître de l'eau et de l'Esprit
        pour la vie nouvelle d'enfant de Dieu.`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"", texte: `Le célébrant touche l'eau de la main droite, et continue\u00A0:`, type:"rubrique", conditions: {benbapt: "1"} },
    {class:"indent1all", texte: `Nous t'en prions, Seigneur notre Dieu :
        Par la grâce de ton Fils,
        que vienne sur cette eau
        la puissance de l'Esprit Saint
        afin que tout homme qui sera baptisé,
        enseveli dans la mort avec le Christ,
        ressuscite avec le Christ pour la vie,
        car il est vivant pour les siècles des siècles.`, type:"dialogueV", conditions: {benbapt: "1"} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {benbapt: "1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benbapt: "1"} },
//benbapt 2
    {class:"indent1all", texte: `Père infiniment bon,
        tu as fait jaillir en nous
        la vie nouvelle des enfants de Dieu
        au jour de notre baptême.`, type:"dialogueV", conditions: {benbapt: "2"} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {benbapt: "2"} },
    {class:"", texte: `Béni sois-tu, Seigneur ! <span style="color: #b30000;">(ou une autre acclamation)</span>`, type:"dialogueR", conditions: {benbapt: "2"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "2"} },
    {class:"indent1all", texte: `Tu rassembles en ton Fils Jésus Christ
        tous ceux qui sont baptisés dans l'eau et l'Esprit Saint,
        pour qu'ils deviennent un seul peuple.`, type:"dialogueV", conditions: {benbapt: "2"} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "2"} },
    {class:"indent1all", texte: `Tu répands ton Esprit d'amour dans nos cœurs,
        pour nous rendre libres
        et nous faire goûter la paix de ton Royaume.`, type:"dialogueV", conditions: {benbapt: "2"} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "2"} },
    {class:"indent1all", texte: `Tu choisis les baptisés
        pour annoncer parmi toutes les nations
        l'Évangile du Christ.`, type:"dialogueV", conditions: {benbapt: "2"} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "2"} },
    {class:"indent1all", texte: `Père, c'est toi qui appelles <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> (ces enfants),
        aujourd'hui présentés au baptême
        dans la foi de l'Église.`, type:"dialogueV", conditions: {benbapt: "2", Pbapteme: true} },
            {class:"indent1all", texte: `Père, c'est toi qui appelles <span style="color: #b30000;">N.</span> (cet enfant),
            aujourd'hui présenté au baptême
            dans la foi de l'Église.`, type:"dialogueV", conditions: {benbapt: "2", Pbapteme: false} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "2"} },
    {id : "tempspascal", texte: `\n`, type:"sautdeligne", conditions: {benbapt: "2"} },
    {class:"", texte: `Hors du temps pascal, le célébrant conclut\u00A0:`, type:"rubrique", conditions: {benbapt: "2", tempspascal: false} },
    {class:"indent1all", texte: `Daigne maintenant bénir <span style="color: #b30000;">✠</span> cette eau
        où ils vont renaître de l'Esprit Saint
        pour vivre de la vie éternelle.
        Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {benbapt: "2", tempspascal: false, Pbapteme: true} },
            {class:"indent1all", texte: `Daigne maintenant bénir <span style="color: #b30000;">✠</span> cette eau
            où il va renaître de l'Esprit Saint
            pour vivre de la vie éternelle.
            Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {benbapt: "2", tempspascal: false, Pbapteme: false} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benbapt: "2", tempspascal: false} },
    {class:"", texte: `Au temps pascal, il conclut\u00A0:`, type:"rubrique", conditions: {benbapt: "2", tempspascal: true} },
    {class:"indent1all", texte: `Par le mystère de cette eau consacrée,
        fais-les renaître de l'Esprit Saint
        pour qu'ils vivent de la vie éternelle.
        Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {benbapt: "2", tempspascal: true, Pbapteme: true} },
            {class:"indent1all", texte: `Par le mystère de cette eau consacrée,
            fais-le renaître de l'Esprit Saint
            pour qu'il vive de la vie éternelle.
            Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {benbapt: "2", tempspascal: true, Pbapteme: false} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benbapt: "2", tempspascal: true} },
//benbapt 3
    {class:"indent1all", texte: `Béni sois-tu,
        Père tout-puissant, notre Créateur et notre Dieu :
        tu nous donnes l'eau qui purifie et qui fait vivre.`, type:"dialogueV", conditions: {benbapt: "3"} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {benbapt: "3"} },
    {class:"", texte: `Béni sois-tu, Seigneur ! <span style="color: #b30000;">(ou une autre acclamation)</span>`, type:"dialogueR", conditions: {benbapt: "3"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benbapt: "3"} },
    {class:"indent1all", texte: `Béni sois-tu ,
        Fils unique du Père, Jésus Christ, notre Dieu:
        pour que naisse l'Église
        dans le mystère de ta mort et de ta résurrection,
        tu laissas couler de ton côté ouvert l'eau et le sang.`, type:"dialogueV", conditions: {benbapt: "3"} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "3"} },
    {class:"indent1all", texte: `Béni sois-tu,
        Esprit Saint, notre Dieu :
        pour que nous soyons tous baptisés en toi,
        tu as consacré Jésus
        quand il fut baptisé dans les eaux du Jourdain`, type:"dialogueV", conditions: {benbapt: "3"} },
    {class:"", texte: `Béni sois-tu, Seigneur !`, type:"dialogueR", conditions: {benbapt: "3"} },
    {id : "tempspascal", texte: `\n`, type:"sautdeligne", conditions: {benbapt: "3"} },
    {class:"indent1all", texte: `Dieu, notre Père et Créateur de l'univers,
        viens à notre aide\u00A0:`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"indent1all", texte: `Pour que tout homme baptisé dans l'eau
        soit purifié du péché
        et renaisse à la vie des fils de Dieu,`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Seigneur, sanctifie cette eau.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Exauce-nous, Seigneur ! <span style="color: #b30000;">(ou une autre acclamation)</span>`, type:"dialogueR", conditions: {benbapt: "3", tempspascal: false} },
    {class:"indent1all", texte: `Pour que tout homme baptisé dans l'eau
        participe au mystère de la mort
        et de la résurrection de ton Fils,
        et lui ressemble parfaitement,`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Seigneur, sanctifie cette eau.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Exauce-nous, Seigneur !`, type:"dialogueR", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Le célébrant touche l'eau de la main droite, et dit\u00A0:`, type:"rubrique", conditions: {benbapt: "3", tempspascal: false} },
    {class:"indent1all", texte: `Pour que renaissent par l'Esprit Saint
        ceux que tu as appelés,
        et pour qu'ils soient de ton peuple,`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Seigneur, sanctifie cette eau.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: false} },
    {class:"", texte: `Exauce-nous, Seigneur !`, type:"dialogueR", conditions: {benbapt: "3", tempspascal: false} },

    {class:"indent1all", texte: `Père, c'est toi qui appelles ces enfants,
        aujourd'hui présentés au baptême
        dans la foi de l'Église.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: true, Pbapteme: true} },
            {class:"indent1all", texte: `Père, c'est toi qui appelles cet enfant,
            aujourd'hui présenté au baptême
            dans la foi de l'Église.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: true, Pbapteme: false} },
    {class:"indent1all", texte: `Par le mystère de cette eau consacrée,
        fais-les renaître de l'Esprit Saint
        pour qu'ils vivent de la vie éternelle.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: true, Pbapteme: true} },
            {class:"indent1all", texte: `Par le mystère de cette eau consacrée,
            fais-le renaître de l'Esprit Saint
            pour qu'il vive de la vie éternelle.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: true, Pbapteme: false} },
    {class:"", texte: `Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {benbapt: "3", tempspascal: true} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benbapt: "3", tempspascal: true} },
    
    {class:"italic", texte: `Renonciation à Satan et profession de foi`, type:"h2", conditions: {} },
    {class:"", texte: `Le célébrant s'adresse aux parents, parrains et marraines, en ces termes\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant s'adresse aux parents, parrain et marraine, en ces termes\u00A0:`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Maintenant, je m'adresse à vous, parents, parrains et marraines.`, type:"dialogueV", conditions: {Pbapteme: true} },
    {class:"", texte: `Maintenant, je m'adresse à vous, parents, parrain et marraine.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Par le sacrement de baptême, les enfants que vous présentez 
        vont recevoir de l'amour de Dieu une vie nouvelle : 
        ils vont naître de l'eau et de l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Par le sacrement de baptême, l'enfant que vous présentez 
            va recevoir de l'amour de Dieu une vie nouvelle : 
            il va naître de l'eau et de l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
    {class:"indent1all", texte: `Cette vie de Dieu rencontrera bien des obstacles. 
        Pour lutter contre le péché, pour grandir dans la foi, 
        ils auront besoin de vous.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Cette vie de Dieu rencontrera bien des obstacles. 
            Pour lutter contre le péché, pour grandir dans la foi, 
            il aura besoin de vous.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
    {class:"indent1all", texte: `Si donc vous êtes conduits par la foi 
        et si vous prenez la responsabilité de les aider, 
        je vous invite aujourd'hui, en vous rappelant votre baptême, 
        à renoncer au péché et à proclamer la foi en Jésus Christ, 
        la foi de l'Église, dans laquelle tout enfant est baptisé.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Si donc vous êtes conduits par la foi 
            et si vous prenez la responsabilité de l'aider, 
            je vous invite aujourd'hui, en vous rappelant votre baptême, 
            à renoncer au péché et à proclamer la foi en Jésus Christ, 
            la foi de l'Église, dans laquelle tout enfant est baptisé.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Après quoi, il les interroge\u00A0:`, type:"rubrique", conditions: {} },
    {id:"renonciation", texte: `\n`, type: "sautdeligne", conditions: {} },
    {class: "", texte: `Pour vivre dans la liberté des enfants de Dieu, rejetez-vous le péché ?`, type: "dialogueV", conditions: {renonciation: "1"} },
    {class:"", texte: `Parents et parrains\u00A0:`, type:"rubrique", conditions: {renonciation: "1"} },
    {class: "", texte: `Je le rejette.`, type: "dialogueR", conditions: {renonciation: "1"} },
    {class: "", texte: `Pour échapper à l'emprise du péché, rejetez-vous ce qui conduit au mal ?`, type: "dialogueV", conditions: {renonciation: "1"} },
    {class: "", texte: `Je le rejette.`, type: "dialogueR", conditions: {renonciation: "1"} },
    {class: "", texte: `Pour suivre Jésus, le Christ, rejetez-vous Satan qui est l'auteur du péché ?`, type: "dialogueV", conditions: {renonciation: "1"} },
    {class: "", texte: `Je le rejette.`, type: "dialogueR", conditions: {renonciation: "1"} },
    {class: "", texte: `Renoncez-vous à Satan ?`, type: "dialogueV", conditions: {renonciation: "2"} },
    {class:"", texte: `Parents et parrains:\u00A0:`, type:"rubrique", conditions: {renonciation: "2"} },
    {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
    {class: "", texte: `Renoncez-vous à toutes ses oeuvres, c’est-à-dire au péché ?`, type: "dialogueV", conditions: {renonciation: "2"} },
    {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
    {class: "", texte: `Renoncez-vous à toutes ses séductions, qui conduisent au péché ?`, type: "dialogueV", conditions: {renonciation: "2"} },
    {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
    {class:"", texte: `C'est dans la foi de l'Église que les enfants sont baptisés. Le célébrant demande aux parents et parrains une triple profession de foi que les enfants auront à apprendre et à redire personnellement.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `C'est dans la foi de l'Église que les enfants sont baptisés. Le célébrant demande aux parents et parrains une triple profession de foi que l'enfant aura à apprendre et à redire personnellement.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Croyez-vous en Dieu, 
        le Père tout-puissant, 
        créateur du ciel et de la terre ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Je crois.`, type:"dialogueR", conditions: {} },
    {class:"indent1all", texte: `Croyez-vous en Jésus Christ, 
        son Fils unique, notre Seigneur, 
        qui est né de la Vierge Marie, a souffert la passion, 
        a été enseveli, est ressuscité d'entre les morts, 
        et qui est assis à la droite du Père ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Je crois.`, type:"dialogueR", conditions: {} },
    {class:"indent1all", texte: `Croyez-vous en l'Esprit Saint, 
        à la sainte Église catholique, 
        à la communion des saints, au pardon des péchés, 
        à la résurrection de la chair, et à la vie éternelle ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Je crois.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Le célébrant\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Telle est notre foi.
        Telle est la foi de l'Église
        que nous sommes fiers de proclamer
        dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `On peut aussi remplacer cette formule ou une autre par un chant.`, type:"rubrique", conditions: {} },
    
    {class:"italic", texte: `Baptême`, type:"h2", conditions: {} },
    {class:"", texte: `Le célébrant invite la famille et les parrains du premier enfant à s'approcher avec celui-ci de l'eau baptismale. En désignant l'enfant par son nom, il leur pose la question suivante\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant invite la famille et les parrains à s'approcher de l'eau baptismale. En désignant l'enfant par son nom, il leur pose la question suivante :`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Voulez-vous que <span style="color: #b30000;">N.</span> soit baptisé dans cette foi de l'Église que tous ensemble nous venons d'exprimer ?`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Oui, nous le voulons.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Aussitôt, le célébrant baptise l'enfant. Il dit ou chante\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `N., je te baptise`, type:"dialogueV", conditions: {} },
    {class:"indent1p", texte: `au nom du Père,`, type:"dialogueV", conditions: {} },
    {class:"indent1p", texte: `Une première fois, il immerge l'enfant ou verse l'eau sur lui`, type:"rubrique", conditions: {} },
    {class:"indent1g", texte: `et du Fils,`, type:"dialogueV", conditions: {} },
    {class:"indent1p", texte: `Une deuxième fois, il immerge l'enfant ou verse l'eau sur lui`, type:"rubrique", conditions: {} },
    {class:"indent1g", texte: `et du Saint-Esprit.`, type:"dialogueV", conditions: {} },
    {class:"indent1p", texte: `Une troisième fois, il immerge l'enfant ou verse l'eau sur lui`, type:"rubrique", conditions: {} },
    {class:"", texte: `Pour chaque enfant, il interroge et procède ainsi.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Une brève acclamation du peuple est souhaitable après le baptême de chaque enfant.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Une brève acclamation du peuple est souhaitable après le baptême.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Il revient normalement à la mère (ou au père) de recevoir l'enfant lorsqu'il sort de l'eau, ou de le tenir au-dessus de la cuve baptismale si le baptême ne se fait pas par immersion.`, type:"rubrique", conditions: {} },
    
    {class:"italic", texte: `Onction avec le Saint-Chrême`, type:"h2", conditions: {} },
    {class:"", texte: `Par le baptême, le chrétien « renaît de l'eau et de l'Esprit\u00A0», selon la parole de Jésus (Jn 3. 5). L'onction du saint-chrême, l'huile parfumée bénite par l'évêque, signifie le don de l'Esprit Saint et annonce la Confirmation.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Le célébrant dit, pour tous les enfants\u00A0:`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant dit\u00A0:`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, vous êtes maintenant baptisés\u00A0:`, type:"dialogueV", conditions: {Pbapteme: true} },
    {class:"", texte: `<span style="color: #b30000;">N.</span>, tu es maintenant baptisé\u00A0:`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Le Dieu tout-puissant,
        Père de Jésus, le Christ, notre Seigneur,
        vous a libérés du péché
        et vous a fait renaître de l'eau et de l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Le Dieu tout-puissant,
            Père de Jésus, le Christ, notre Seigneur,
            t'a libéré du péché
            et t'a fait renaître de l'eau et de l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Désormais, vous faites partie de son peuple,
        vous êtes membres du Corps du Christ
        (et vous participez à sa dignité
        de prêtre, de prophète et de roi).`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Désormais, tu fais partie de son peuple,
            tu es membres du Corps du Christ
            (et tu participes à sa dignité
            de prêtre, de prophète et de roi).`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
    {class:"indent1all", texte: `Dieu vous marque de l'huile du salut
        afin que vous demeuriez dans le Christ
        pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Dieu te marque de l'huile du salut
            afin que tu demeures dans le Christ
            pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Après quoi, le célébrant fait, sur la tête de chaque enfant, une onction avec le saint-chrême (qu'il sera préférable de ne pas essuyer, pour que le rite garde son sens).`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Après quoi, le célébrant fait, sur la tête de l'enfant, une onction avec le saint-chrême (qu'il sera préférable de ne pas essuyer, pour que le rite garde son sens).`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Si le nombre des baptisés le demande, plusieurs ministres, prêtres ou diacres, peuvent faire l'onction.`, type:"rubrique", conditions: {Pbapteme: true} },
    
    {class:"italic", texte: `Remise du vêtement blanc`, type:"h2", conditions: {} },
    {class:"", texte: `Saint Paul déclare aux chrétiens: « Vous tous qui avez été baptisés dans le Christ, vous avez revêtu le Christ\u00A0» (Ga 3, 27). Revêtir le Christ, c'est ce que signifie la remise d'un vêtement au nouveau baptisé. Ce vêtement est blanc, comme celui du Christ en sa Transfiguration (Lc 9, 29) et comme celui des élus dans le ciel, selon l'Apocalypse (7, 9).`, type:"rubrique", conditions: {} },
    {class:"", texte: `Les marraines ou les parrains revêtent alors chacun des enfants du vêtement blanc qu'ils ont apporté pour lui.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `La marraine ou le parrain revêt alors l'enfant du vêtement blanc qu'ils ont apporté pour lui.`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"", texte: `Le célébrant dit\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, vous êtes une création nouvelle dans le Christ\u00A0:`, type:"dialogueV", conditions: {Pbapteme: true} },
    {class:"", texte: `<span style="color: #b30000;">N.</span>, tu es une création nouvelle dans le Christ\u00A0:`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `vous avez revêtu le Christ ;
        ce vêtement blanc en est le signe.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `tu as revêtu le Christ ;
            ce vêtement blanc en est le signe.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Que vos parents et amis vous aident,
        par leur parole et leur exemple,
        à garder intacte la dignité des fils de Dieu,
        pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Que tes parents et amis t'aident,
            par leur parole et leur exemple,
            à garder intacte la dignité des fils de Dieu,
            pour la vie éternelle.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"indent1all", texte: `On peut chanter, par exemple : 
        <span style="color: #000;">Vous tous qui avez été baptisés dans le Christ, vous avez revêtu le Christ. alléluia.</span>`, type:"rubrique", conditions: {} },
    
    {class:"italic", texte: `Remise du cierge allumé`, type:"h2", conditions: {} },
    {class:"", texte: ` Saint Paul rappelle encore: « Maintenant, dans le Seigneur, vous êtes devenus lumière ; vivez comme des fils de la lumière » (Ep 5, 8).`, type:"rubrique", conditions: {} },
    {class:"", texte: `Le célébrant présente à chaque père, ou à chaque parrain, un cierge allumé au cierge pascal, en disant :`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant présente au père, ou au parrain, un cierge allumé au cierge pascal, en disant :`, type:"rubrique", conditions: {Pbapteme: false} },
    {class:"lettrine", texte: `Recevez la lumière du Christ.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `On peut chanter, par exemple : 
        <span style="color: #000;">Ma lumière et mon salut, c'est le Seigneur, alléluia.</span>`, type:"rubrique", conditions: {} },
    {class:"", texte: `Après la remise des cierges, le célébrant dit :`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `C'est à vous, parents, parrains et marraines,
        que cette lumière est confiée.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"grandelettrine", texte: `C'est à vous, parents, parrain et marraine,
            que cette lumière est confiée.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Veillez à l'entretenir :
        que ces enfants, illuminés par le Christ,
        avancent dans la vie en enfants de lumière
        et demeurent fidèles à la foi de leur baptême.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Veillez à l'entretenir :
            que <span style="color: #b30000;">N.</span>, illuminé par le Christ,
            avance dans la vie en enfant de lumière
            et demeure fidèle à la foi de son baptême.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Ainsi, quand le Seigneur viendra,
        Ils pourront aller à sa rencontre dans son Royaume,
        avec tous les saints du ciel.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Ainsi, quand le Seigneur viendra,
            <span style="color: #b30000;">N.</span> pourra aller à sa rencontre dans son Royaume,
            avec tous les saints du ciel.`, type:"dialogueV", conditions: {Pbapteme: false} },

    {class:"", texte: `A L'AUTEL`, type:"h1", conditions: {} },
    {class:"", texte: `On se rend en procession vers l'autel (ou, si le baptême a eu lieu dans le sanctuaire, on entoure l'autel), en chantant le Magnificat ou un cantique baptismal.`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `La prière du Seigneur`, type:"h2", conditions: {} },    
    {class:"", texte: `Debout près de l'autel, le célébrant s'adresse à l'assemblée, en disant par exemple :`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Frères et soeurs, par le baptême, 
        ces enfants sont nés à la vie nouvelle.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"grandelettrine", texte: `Frères et soeurs, par le baptême, 
            <span style="color: #b30000;">N.</span> est né à la vie nouvelle.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Ils sont appelés fils de Dieu. 
        Ils le sont vraiment, dans le Christ Jésus.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Il est appelé fils de Dieu. 
            Il l'est vraiment, dans le Christ Jésus.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Un jour, par la Confirmation, ils recevront en plénitude l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Un jour, par la Confirmation, il recevra en plénitude l'Esprit Saint.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Un jour, ils approcheront de la table du Seigneur 
        pour prendre part au repas de l'Eucharistie, 
        ils donneront eux-mêmes à Dieu le nom de Père, 
        au milieu de leurs frères chrétiens.`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Un jour, il approchera de la table du Seigneur 
            pour prendre part au repas de l'Eucharistie, 
            il donnera lui-même à Dieu le nom de Père, 
            au milieu de ses frères chrétiens.`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"indent1all", texte: `Aujourd'hui, en leur nom, 
        dans l'Esprit reçu à notre baptême, 
        disons ensemble la prière des enfants de Dieu 
        que le Seigneur nous a enseignée :`, type:"dialogueV", conditions: {Pbapteme: true} },
            {class:"indent1all", texte: `Aujourd'hui, en son nom, 
            dans l'Esprit reçu à notre baptême, 
            disons ensemble la prière des enfants de Dieu 
            que le Seigneur nous a enseignée :`, type:"dialogueV", conditions: {Pbapteme: false} },
    {class:"", texte: `L'assemblée dit ou chante :`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Notre Père qui es aux cieux,
    que ton nom soit sanctifié,`, type: "dialogueV", conditions: {} },
    {class:"indentallp", texte: `que ton règne vienne,
    que ta volonté soit faite
    sur la terre comme au ciel.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Donne-nous aujourd’hui
    notre pain de ce jour.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Pardonne-nous nos offenses,
        comme nous pardonnons aussi
        à ceux qui nous ont offensés.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Et ne nous laisse pas entrer en tentation,
        mais délivre-nous du Mal.`, type: "dialogueV", conditions: {} },

    {class:"italic", texte: `Bénédiction finale`, type:"h2", conditions: {} },    
    {class:"", texte: `Le célébrant donne ensuite la bénédiction aux mères qui portent les nouveaux baptisés, aux pères, et à l'ensemble des fidèles présents.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le célébrant donne ensuite la bénédiction à la mère qui porte le nouveau baptisé, au père, et à l'ensemble des fidèles présents.`, type:"rubrique", conditions: {Pbapteme: false} },
    {id:"benfbapt", texte: ``, type: "", conditions: {} },
    {class:"grandelettrine", texte: `Nous vous confions tous à la grâce et à la bonté
        de Dieu le Père tout-puissant,`, type:"dialogueV", conditions: {benfbapt: "1"} },
    {class:"indentallp", texte: `de son Fils unique
        et de l'Esprit Saint.`, type:"dialogueV", conditions: {benfbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benfbapt: "1"} },
    {class:"indent1all", texte: `Qu'il veille sur votre vie:
        que vous parveniez au bonheur promis
        en marchant à la lumière de la foi,
        et que nous y parvenions avec vous.`, type:"dialogueV", conditions: {benfbapt: "1"} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benfbapt: "1"} },
    {class:"indent1all", texte: `Et que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type:"dialogueV", conditions: {benfbapt: "1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benfbapt: "1"} },
    
    {class:"grandelettrine", texte: `Par son Fils, né de la Vierge Marie,
        Dieu comble de joie les mères qui croient en lui :`, type:"dialogueV", conditions: {benfbapt: "2"} },
    {class:"indentallp", texte: `il leur donne l'espérance
        que leurs enfants vivront de la vie éternelle
        qui déjà resplendit en eux ;`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: true} },
            {class:"indentallp", texte: `il leur donne l'espérance
            que leur enfant vivra de la vie éternelle
            qui déjà resplendit en eux ;`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: false} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {benfbapt: "2"} },
    {class:"indent1all", texte: `Qu'il bénisse maintenant celles qui viennent d'être mères:
        elles rendent grâce pour leur enfant,
        qu'elles demeurent toujours en action de grâce avec lui,
        dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: true} },
            {class:"indent1all", texte: `Qu'il bénisse maintenant celle qui vient d'être mère :
            elle rend grâce pour son enfant,
            qu'elle demeure toujours en action de grâce avec lui,
            dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: false} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benfbapt: "2"} },
    {class:"indent1all", texte: `Dieu est le Père de tous les hommes :
        il donne la vie terrestre et la vie du ciel ;
        Qu'il bénisse les pères de ces nouveaux baptisés
        afin que, par l'exemple et la parole,
        ils soient eux-mêmes, avec leurs épouses,
        les premiers témoins de la foi pour leurs enfants,
        dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: true} },
            {class:"indent1all", texte: `Dieu est le Père de tous les hommes :
            il donne la vie terrestre et la vie du ciel ;
            Qu'il bénisse le père de <span style="color: #b30000;">N.</span>
            afin que, par l'exemple et la parole,
            il soit lui-même, avec son épouse,
            le premier témoin de la foi pour cet enfant,
            dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {benfbapt: "2", Pbapteme: false} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benfbapt: "2"} },
    {class:"indent1all", texte: `Dieu nous a fait renaître de l'eau et de l'Esprit Saint ;
        Qu'il bénisse tous les fidèles ici réunis :
        que toujours et partout
        ils soient des membres vivants de son peuple,
        dans le Christ Jésus, notre Seigneur.`, type:"dialogueV", conditions: {benfbapt: "2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benfbapt: "2"} },
    {class:"indent1all", texte: `Et que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type:"dialogueV", conditions: {benfbapt: "2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benfbapt: "2"} },
    {class:"", texte: `Le célébrant peut conclure :`, type:"rubrique", conditions: {} },
    {class:"lettrine", texte: `Allez, dans la paix du Christ.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Nous rendons grâce à Dieu.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Là où il est de tradition de porter les enfants baptisés devant une image de la Vierge Marie, il est bon de garder cette coutume. Il convient alors que l'assemblée chante sa joie pascale et son action de grâce, par exemple par le Magnificat, s'il n'a pas été chanté au cours de la célébration, ou par un cantique marial.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Les noms des nouveaux baptisés sont ensuite inscrits sur le registre paroissial des baptêmes, et le livret de famille chrétienne : ils seront désormais reconnus membres à part entière de l'Église, avec les droits et les devoirs qu'entraîne cette dignité.`, type:"rubrique", conditions: {Pbapteme: true} },
    {class:"", texte: `Le nom du nouveau baptisé est ensuite inscrit sur le registre paroissial des baptêmes et le livret de famille chrétienne : il sera désormais reconnu membre à part entière de l'Église, avec les droits et les devoirs qu'entraîne cette dignité.`, type:"rubrique", conditions: {Pbapteme: false} },
  ],

  "BetC": [
    {class:"", texte: ``, type:"rubrique", conditions: {} },
  ],

  "mariage": [
    {class:"premiergénéré", texte: "RITUEL DE LA CÉLÉBRATION DU MARIAGE", type: "h2", conditions: {} },
    {class:"sansmarge", texte: "RITES INITIAUX", type: "h1", conditions: {} },
    {id:"accueilmariage", class:"italic", texte: "Accueil des futurs époux", type: "h2", conditions: {} },
    //Forme 1
    {class:"", texte: `À l’heure fixée, le prêtre ou le diacre, accompagné des servants, se rend à la porte de l’église, accueille les futurs époux et leur souhaite la bienvenue pour montrer que l’Église prend part à leur joie.`, type:"rubrique", conditions: {accueilmariage: "1"} },
    {class:"italic", texte: "Procession d’entrée", type: "h2", conditions: {accueilmariage: "1"} },
    {class:"", texte: `On se rend ensuite à l’autel en procession : les servants marchent en tête, puis le prêtre ou le diacre, et les futurs époux, escortés, selon les coutumes locales, au moins par leurs parents et (ou) deux témoins, qui les accompagnent aux places préparées pour eux. Pendant ce temps, on chante le chant d’entrée. Si cela convient, l’orgue ou les instruments de musique peuvent jouer un morceau adapté au rite et à l’église.`, type:"rubrique", conditions: {accueilmariage: "1"} },
    {class:"", texte: `Le prêtre ou le diacre se rend à l’autel, le salue d’une profonde inclination, le vénère par un baiser. Puis il gagne son siège.`, type:"rubrique", conditions: {accueilmariage: "1"} },
    //Forme 2
    {class:"", texte: `À l’heure fixée, le prêtre ou le diacre, accompagné des servants, se rend à l’endroit préparé pour les futurs époux, ou à son siège`, type:"rubrique", conditions: {accueilmariage: "2"} },
    {class:"", texte: `Lorsque les futurs époux sont arrivés à leur place, le prêtre ou le diacre les accueille et leur souhaite la bienvenue pour montrer que l’Église prend part à leur joie.`, type:"rubrique", conditions: {accueilmariage: "2"} },
    {class:"", texte: `Puis, pendant le chant d’entrée, le prêtre ou le diacre se rend à l’autel, le salue d’une profonde inclination et gagne son siège.`, type:"rubrique", conditions: {accueilmariage: "2"} },
    {class:"italic", texte: `Salutation`, type:"h2", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre fait alors le signe de la croix et salue l’assemblée, en disant : une des formules suivantes\u00A0:`, type:"rubrique", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">I.</span> La grâce de Jésus notre Seigneur,
        l’amour de Dieu le Père,
        et la communion de l’Esprit Saint,`, type:"dialogueV", conditions: {} },
    {class:"indent1gg", texte: `soient toujours avec vous.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Et avec votre esprit.`, type:"dialogueR", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">II.</span> Que Dieu notre Père,
        et Jésus Christ notre Seigneur
        vous donnent la grâce et la paix.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Béni soit Dieu, maintenant et toujours.`, type:"dialogueR", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">III.</span> Le Seigneur soit avec vous.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Et avec votre esprit.`, type:"dialogueR", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">IV.</span> Que Dieu notre Père,
        qui a fait de l’alliance des époux
        le signe de l’union du Christ et de l’Église,
        vous donne la grâce et la paix.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Béni soit Dieu, maintenant et toujours.`, type:"dialogueR", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Puis il s’adresse aux futurs époux et à l’assemblée pour les préparer à la célébration du mariage, en ces termes ou en d’autres semblables\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Frères et soeurs,
        nous sommes venus avec joie dans la maison du Seigneur`, type:"dialogueV", conditions: {} },
    {class:"indentallp", texte: `pour cette célébration,
        accompagnant <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>
        en ce jour où ils désirent fonder leur propre maison.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Cette heure est pour eux d’une particulière importance.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Entourons-les de notre affectueuse amitié
        et de notre prière fraternelle.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Avec eux écoutons attentivement
        la parole que Dieu nous dit aujourd’hui.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `En communion avec la Sainte Église,
        supplions Dieu notre Père
        par le Christ notre Seigneur :
        dans sa bonté qu’il accueille ceux qui vont se marier,
        qu’il les bénisse et les unisse pour toujours.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine", texte: `N. et <span style="color: #b30000;">N.</span>, l’Église partage votre joie
        et vous accueille de grand coeur`, type:"dialogueV", conditions: {} },
    {class:"indentallp", texte: `avec vos parents et vos amis,
        au jour où, devant Dieu notre Père,
        vous établissez entre vous une communauté de toute la vie.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Que le Seigneur vous exauce en ce jour de fête.
        Du ciel, qu’il envoie son Esprit pour vous fortifier et vous protéger.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Qu’il vous donne ce que désire votre coeur
        et qu’il accomplisse toutes vos demandes.`, type:"dialogueV", conditions: {} },
    {id: "collectemariage", texte: `Prière d'ouverture`, type:"h2", conditions: {} },
    {class:"", texte: `Ensuite, les mains étendues, il prononce la prière suivante\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Seigneur notre Dieu,
        tu as sanctifié le mariage`, type:"dialogueV", conditions: {collectemariage: "1"} },
    {class:"indentallp", texte: `par un mystère si grand et si beau
        que tu en as fait le sacrement
        de l’alliance du Christ et de l’Église ;`, type:"dialogueV", conditions: {collectemariage: "1"} },
    {class:"indent1all", texte: `Accorde à <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>,
        qui vont recevoir ce sacrement dans la foi,
        de réaliser par toute leur vie ce qu’il exprime.`, type:"dialogueV", conditions: {collectemariage: "1"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "1"} },
    {class:"grandelettrine", texte: `Seigneur notre Dieu,
        puisqu’en en créant l’homme et la femme`, type:"dialogueV", conditions: {collectemariage: "2"} },
    {class:"indentallp", texte: `tu as voulu qu’ils ne fassent plus qu’un,`, type:"dialogueV", conditions: {collectemariage: "2"} },
    {class:"indent1all", texte: `attache l’un à l’autre par un amour sans partage
        <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> qui vont maintenant se marier\u00A0:`, type:"dialogueV", conditions: {collectemariage: "2"} },
    {class:"indent1all", texte: `donne-leur de s’aimer sans aucun égoïsme,
        pour qu’ils soient les témoins de ton amour.`, type:"dialogueV", conditions: {collectemariage: "2"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "2"} },
    {class:"grandelettrine", texte: `Sois attentif à nos supplications, 
        Seigneur\u00A0:`, type:"dialogueV", conditions: {collectemariage: "3"} },
    {class:"indent1all", texte: `Dans ta bonté, répands ta grâce sur <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>,
        et puisqu’ils sont devant ton autel
        pour s’engager l’un envers l’autre dans le mariage,
        que leur amour en soit fortifié.`, type:"dialogueV", conditions: {collectemariage: "3"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "3"} },
    {class:"grandelettrine", texte: `Dieu tout-puissant,
        nous te prions pour <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>,`, type:"dialogueV", conditions: {collectemariage: "4"} },
    {class:"indentallp", texte: `qui vont s’unir par le sacrement de mariage
        et donner ainsi le témoignage de leur foi ;`, type:"dialogueV", conditions: {collectemariage: "4"} },
    {class:"indent1all", texte: `Qu’ils grandissent dans la foi,
        et que leurs enfants soient croyants
        pour la joie de ton Église.`, type:"dialogueV", conditions: {collectemariage: "4"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "4"} },
    {class:"grandelettrine", texte: `Sois favorable à nos prières, 
        Seigneur,`, type:"dialogueV", conditions: {collectemariage: "5"} },
    {class:"indent1all", texte: `veille avec bonté
        sur le mariage que tu as établi
        pour la vie et la croissance du genre humain\u00A0:
        que ta grâce daigne conserver
        ce qui tient de toi son origine.`, type:"dialogueV", conditions: {collectemariage: "5"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "5"} },
    {class:"grandelettrine", texte: `Seigneur notre Dieu,
        toi qui dès le commencement du monde`, type:"dialogueV", conditions: {collectemariage: "6"} },
    {class:"indentallp", texte: `bénis le genre humain
        en lui donnant la grâce de la fécondité,`, type:"dialogueV", conditions: {collectemariage: "6"} },
    {class:"indent1all", texte: `sois attentif à nos supplications et
        répands sur tes serviteurs <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>
        l’abondance de ta bénédiction\u00A0:`, type:"dialogueV", conditions: {collectemariage: "6"} },
    {class:"indent1all", texte: `Accorde-leur de vivre unis,
        dans un amour mutuel,
        une vraie communion d’esprit
        et un même désir de sainteté.`, type:"dialogueV", conditions: {collectemariage: "6"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "6"} },
    {class:"grandelettrine", texte: `Dieu notre Père,
        tu nous as prouvé combien tu nous aimais`, type:"dialogueV", conditions: {collectemariage: "7"} },
    {class:"indentallp", texte: `en nous envoyant ton Fils
        qui a donné sa vie pour nous.`, type:"dialogueV", conditions: {collectemariage: "7"} },
    {class:"", texte: `Nous te prions, aujourd’hui, pour <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>\u00A0:`, type:"dialogueV", conditions: {collectemariage: "7"} },
    {class:"indent1p", texte: `Que Jésus Christ soit maintenant auprès d’eux,
        et les aide à se donner pour toujours l’un à l’autre.`, type:"dialogueV", conditions: {collectemariage: "7"} },
    {class:"indent1all", texte: `Lui qui vit et règne pour les siècles des siècles.`, type:"dialogueV", conditions: {collectemariage: "7"} },
    {class:"grandelettrine", texte: `En cet instant où <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>
        se présentent devant toi, Seigneur,`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"indentallp", texte: `nous te prions\u00A0:`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"indent1all", texte: `Leurs coeurs sont déjà remplis d’amour l’un pour l’autre,
        mais ils veulent te confier cet amour
        et te demandent de le consacrer.`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"indent1all", texte: `Sois la source même de la parole
        qu’ils vont se donner en ta présence
        et qu’ils auront à garder tout au long de leur vie.`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"indent1all", texte: `Donne-leur d’être fidèles comme tu es fidèle\u00A0:
        que leur union s’en trouve toujours affermie ;`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"indent1all", texte: `Donne-leur de s’aimer comme tu les aimes\u00A0:
        que leur amour en soit toujours nouveau.`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "8"} },
    {class:"grandelettrine", texte: `Seigneur, tu nous rassembles autour de <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>,
        qui sont venus dans cette église`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"indentallp", texte: `te confier leur amour
        et te demander de le bénir.`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"", texte: `Sois présent toi-même à leur fête\u00A0:`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"indent1all", texte: `Aide-nous à tenir dans la prière
        l’affection et l’amitié que nous leur portons ;`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"indent1all", texte: `Rends-nous tous attentifs à percevoir dans ta Parole
        la grandeur et la sainteté du mariage ;`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"indent1all  ", texte: `Fais que s’épanouisse en action de grâce
        la joie que nous avons d’être ici.`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"", texte: `Par Jésus Christ.`, type:"dialogueV", conditions: {collectemariage: "9"} },
    {class:"sansmarge", texte: "LITURGIE DE LA PAROLE", type: "h1", conditions: {} },
    {class:"", texte: `La liturgie de la Parole se fait de la manière habituelle. On peut prendre deux ou trois lectures : la première des trois est tirée de l’Ancien Testament (nn. 235-243), ou, au Temps pascal, de l’Apocalypse (n. 257), la dernière est toujours tirée de l’Évangile (nn. 269-278).`, type:"rubrique", conditions: {} },
    {class:"", texte: `On choisira toujours au moins une lecture qui parle explicitement du mariage.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Ensuite, dans l’homélie, le prêtre ou le diacre expose, à partir des textes bibliques choisis et en tenant compte des personnes présentes, le mystère du mariage chrétien, la dignité de l’amour conjugal, la grâce du sacrement et les responsabilités des époux.`, type:"rubrique", conditions: {} },
    {class:"sansmarge", texte: "CÉLÉBRATION DU MARIAGE", type: "h1", conditions: {} },

    {class:"italic", texte: `Profession de foi`, type:"h2", conditions: {} },
    {class:"", texte: `Si cela convient, on peut à l'ouverture du rite du mariage, proclamer la foi de l'Église.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Si les deux futurs époux sont baptisés, pour faire mémoire du baptême on pourra reprendre la profession de foi baptismale de la veillée pascale\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre\u00A0:`, type:"rubrique", conditions: {} },
    {class: "lettrine indent1all", texte: `Renoncez-vous à Satan, au péché
        et à tout ce qui conduit au péché ?`, type: "dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `J'y renonce.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre\u00A0:`, type:"rubrique", conditions: {} },
    {class: "lettrine indent1all", texte: `Croyez-vous en Dieu le Père tout puissant, 
        créateur du ciel et de la terre ?`, type: "dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `J'y crois.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre\u00A0:`, type:"rubrique", conditions: {} },
    {class: "lettrine indent1all", texte: `Croyez-vous en Jésus-Christ, son fils unique, notre Seigneur, 
        qui est né de la Vierge Marie,
        a souffert sa passion, a été enseveli,
        est ressuscité d'entre les morts,
        et qui est assis à la droite du Père ?`, type: "dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `J'y crois.`, type:"dialogueR", conditions: {} },
    {class: "lettrine indent1all", texte: `Croyez-vous en l'Esprit Saint, à la sainte Église catholique, 
        à la communion des saints, au pardon des péchés, 
        à la résurrection de la chair, et à la Vie éternelle ?`, type: "dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `J'y crois.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `On peut aussi choisir le symbole de Nicée-Constantinople ou celui des Apôtres.`, type:"rubrique", conditions: {} },

    {class:"italic", texte: `Dialogue initial avec les futurs époux`, type:"h2", conditions: {} },
    {class:"", texte: `Tous étant debout, le prêtre ou le diacre invite les témoins à se placer de chaque côté des futurs époux.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Puis le prêtre ou le diacre s’adresse à eux par ces mots ou d’autres semblables\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Chers amis (ou <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>),
        vous êtes venus dans cette église
        pour que le Seigneur confirme lui-même par sa grâce
        votre décision de contracter mariage,
        en présence du ministre de l’Église
        et devant la communauté.`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Le Christ bénit abondamment votre amour conjugal ;
        pour aider les époux
        à se garder toujours fidèles l’un à l’autre
        et à porter ensemble toutes les responsabilités du mariage,
        il enrichit et fortifie d’un sacrement spécial
        ceux qu’il a déjà consacrés par le baptême.
        C’est pourquoi je vous demande maintenant
        d’exprimer votre intention devant l’Église.`, type:"dialogueV", conditions: {} },
    {id: "dialoguemariage", class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Alors, le prêtre ou le diacre interroge les futurs époux au sujet de la liberté, de la fidélité, de l’accueil et de l’éducation des enfants. Chacun répond séparément.`, type:"rubrique", conditions: {dialoguemariage: "1"} },
    {class:"grandelettrine", texte: `N. et <span style="color: #b30000;">N.</span>, vous avez écouté la parole de Dieu
        qui révèle la grandeur de l’amour humain et du mariage.`, type:"dialogueV", conditions: {dialoguemariage: "1"} },
    {class:"indent1p", texte: `Il poursuit en ces termes\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Vous allez vous engager l’un envers l’autre.
        Est-ce librement et sans contrainte ?`, type:"dialogueV", conditions: {dialoguemariage: "1"} },
    {class:"indent1p", texte: `Les futurs époux (séparément)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `En vous engageant dans la voie du mariage
        vous vous promettez amour mutuel et respect.
        Est-ce pour toute votre vie ?`, type:"dialogueV", conditions: {dialoguemariage: "1"} },
    {class:"indent1p", texte: `Les futurs époux (séparément)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Oui (pour toute notre vie).`, type:"dialogueR", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Si les futurs époux sont avancés en âge on omettra ce qui est entre [ ].`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `<span style="color: #b30000;">[</span>Etes-vous prêts à accueillir les enfants que Dieu vous donne
        et à les éduquer selon l’Evangile du Christ et dans la foi de l’Eglise ? <span style="color: #b30000;">]</span>`, type:"dialogueV", conditions: {dialoguemariage: "1"} },
    {class:"indent1p", texte: `Les futurs époux (séparément)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Si cela convient, le prêtre ou le diacre peut ajouter, en ces termes ou en d’autres semblables\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Êtes-vous disposés à assumer ensemble votre mission de chrétiens
        dans le monde et dans l’Église ?`, type:"dialogueV", conditions: {dialoguemariage: "1"} },
    {class:"indent1p", texte: `Les futurs époux (ensemble)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {dialoguemariage: "1"} },
    {class:"", texte: `Le prêtre ou le diacre s’adresse à l’assemblée, en ces termes\u00A0:`, type:"rubrique", conditions: {dialoguemariage: "2"} },
    {class:"grandelettrine", texte: `Avec <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, nous avons écouté la parole de Dieu,
    qui révèle la grandeur de l’amour humain et du mariage.`, type:"dialogueV", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Puis il interroge les futurs époux au sujet de la liberté, de la fidélité, de l’accueil et de l’éducation des enfants. Chacun répond séparément. Si les futurs époux sont avancés en âge on omettra ce qui est entre [ ]`, type:"rubrique", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Il poursuit\u00A0:`, type:"rubrique", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Le mariage suppose que les époux s’engagent l’un envers l’autre librement et sans contrainte, qu’ils se promettent amour mutuel et respect pour toute leur vie <span style="color: #b30000;">[</span>qu’ils accueillent les enfants que Dieu leur donne et les éduquent selon l’Evangile du Christ et dans la foi de l’Eglise<span style="color: #b30000;">]</span>.`, type:"dialogueV", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Il s’adresse alors aux futurs époux\u00A0:`, type:"rubrique", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, est-ce bien ainsi que vous voulez vivre dans le mariage ?`, type:"dialogueV", conditions: {dialoguemariage: "2"} },
    {class:"indent1p", texte: `Les futurs époux (séparément)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Si cela convient, le prêtre ou le diacre peut ajouter, en ces termes ou en d’autres semblables\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Êtes-vous disposés à assumer ensemble votre mission de chrétiens
        dans le monde et dans l’Église ?`, type:"dialogueV", conditions: {dialoguemariage: "2"} },
    {class:"indent1p", texte: `Les futurs époux (ensemble)\u00A0:`, type:"rubriqueinterne", conditions: {dialoguemariage: "2"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {dialoguemariage: "2"} },
    {class:"italic", texte: `Échange des consentements par les futurs époux`, type:"h2", conditions: {} },
    {texte: `Le prêtre ou le diacre invite les futurs époux à se donner la main et à échanger leurs consentements. Il utilise l’une des formules suivantes\u00A0:`, type:"rubrique", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">I.</span> Puisque vous êtes décidés à vous engager
        dans les liens du mariage,
        en présence de Dieu et de son Église,
        donnez-vous la main
        et échangez vos consentements.`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">II.</span> Devant tous ceux qui sont ici réunis,
        en présence de Dieu et de l’Église,
        donnez-vous la main
        et échangez vos consentements.`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">III.</span> En présence de Dieu qui est source de votre amour
        et qui sera toujours avec vous,
        devant tous ceux qui sont ici réunis,
        donnez-vous la main
        et échangez vos consentements.`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">IV.</span> Afin que vous soyez unis dans le Christ,
        et que votre amour, transformé par lui,
        devienne un signe visible de l’amour de Dieu,
        devant l’Église ici rassemblée,
        donnez vous la main
        et échangez vos consentements.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Les futurs époux se donnent la main droite puis échangent leurs consentements en utilisant, sans la modifier, la formule suivante\u00A0:`, type:"rubrique", conditions: {} },
    {id: "consentements", class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "1"} },
    {class:"indent1all italic", texte: `Moi, <span style="color: #b30000;">N.</span>, je te reçois <span style="color: #b30000;">N.</span> comme épouse,
        et je promets de te rester fidèle,
        dans le bonheur et dans les épreuves,
        dans la santé et dans la maladie,
        pour t’aimer tous les jours de ma vie.`, type:"dialogueV", conditions: {consentements: "1"} },
    {class:"", texte: `La future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "1"} },
    {class:"indent1all italic", texte: `Moi, <span style="color: #b30000;">N.</span>, je te reçois <span style="color: #b30000;">N.</span> comme époux,
        et je promets de te rester fidèle,
        dans le bonheur et dans les épreuves,
        dans la santé et dans la maladie,
        pour t’aimer tous les jours de ma vie.`, type:"dialogueV", conditions: {consentements: "1"} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "2"} },
    {class:"indent1all italic", texte: `<span style="color: #b30000;">N.</span>, veux-tu être ma femme (mon épouse) ?`, type:"dialogueV", conditions: {consentements: "2"} },
    {class:"", texte: `La future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "2"} },
    {class:"italic", texte: `Oui (je le veux).
    Et toi, <span style="color: #b30000;">N.</span>, veux-tu être mon mari (mon époux) ?`, type:"dialogueV", conditions: {consentements: "2"} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "2"} },
    {class:"italic", texte: `Oui (je le veux).`, type:"dialogueV", conditions: {consentements: "2"} },
    {class:"indent1all italic", texte: `Moi, <span style="color: #b30000;">N.</span>, je te reçois <span style="color: #b30000;">N.</span> comme épouse
        et je serai ton époux.
        Je promets de t’aimer fidèlement
        dans le bonheur et dans les épreuves
        tout au long de notre vie.`, type:"dialogueV", conditions: {consentements: "2"} },
    {class:"", texte: `La future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "2"} },
    {class:"indent1all italic", texte: `Moi, <span style="color: #b30000;">N.</span>, je te reçois <span style="color: #b30000;">N.</span> comme époux
        et je serai ton épouse.
        Je promets de t’aimer fidèlement
        dans le bonheur et dans les épreuves
        tout au long de notre vie.`, type:"dialogueV", conditions: {consentements: "2"} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"indent1all italic", texte: `<span style="color: #b30000;">N.</span>, veux-tu être ma femme (mon épouse) ?`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `La future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"italic", texte: `Oui je veux être ta femme (ton épouse).
        Et toi, <span style="color: #b30000;">N.</span>, veux-tu être mon mari (mon époux) ?`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"indent1all italic", texte: `Oui, je veux être ton mari (ton époux).`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `La future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"indent1all italic", texte: `Je te reçois comme époux
        et je me donne à toi.`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `Le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"indent1all italic", texte: `Je te reçois comme épouse
        et je me donne à toi.`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `Ensemble\u00A0:`, type:"rubrique", conditions: {consentements: "3"} },
    {class:"indent1all italic", texte: `Pour nous aimer fidèlement
        dans le bonheur et dans les épreuves,
        et nous soutenir l’un l’autre,
        tout au long de notre vie.`, type:"dialogueV", conditions: {consentements: "3"} },
    {class:"", texte: `Si les futurs époux éprouvent de réelles difficultés à prononcer l’une des trois formules indiquées, ou pour d’autre raisons pastorales, le prêtre ou le diacre peut demander leur consentement en les interrogeant.`, type:"rubrique", conditions: {consentements: "4"} },
    {class:"", texte: `Il interroge d’abord le futur époux\u00A0:`, type:"rubrique", conditions: {consentements: "4"} },
    {class:"indent1all", texte: `<span style="color: #b30000;">N.</span>, voulez-vous prendre <span style="color: #b30000;">N.</span> comme épouse,
        et promettez-vous de lui rester fidèle,
        dans le bonheur et dans les épreuves,
        dans la santé et dans la maladie,
        pour l’aimer tous les jours de votre vie ?`, type:"dialogueV", conditions: {consentements: "4"} },
    {class:"", texte: `Le futur époux répond\u00A0:`, type:"rubrique", conditions: {consentements: "4"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {consentements: "4"} },
    {class:"", texte: `Puis le prêtre ou le diacre interroge la future épouse\u00A0:`, type:"rubrique", conditions: {consentements: "4"} },
    {class:"indent1all", texte: `<span style="color: #b30000;">N.</span>, voulez-vous prendre <span style="color: #b30000;">N.</span> comme époux,
        et promettez-vous de lui rester fidèle,
        dans le bonheur et dans les épreuves,
        dans la santé et dans la maladie,
        pour l’aimer tous les jours de votre vie ?`, type:"dialogueV", conditions: {consentements: "4"} },
    {class:"", texte: `La future épouse répond\u00A0:`, type:"rubrique", conditions: {consentements: "4"} },
    {class:"", texte: `Oui.`, type:"dialogueR", conditions: {consentements: "4"} },

    {class:"italic", texte: `Réception du consentement`, type:"h2", conditions: {} },
    {class:"", texte: `Ensuite, le prêtre ou le diacre qui reçoit le consentement peut accompagner les paroles ci-dessous d’un geste au choix\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `a- étendre la main droite en direction des époux,`, type:"rubrique", conditions: {} },
    {class:"", texte: `b- poser la main droite sur les mains jointes des époux.`, type:"rubrique", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"", texte: `Il leur dit\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Ce consentement que vous venez d’exprimer en présence de l’Église,
        que le Seigneur le confirme,
        et qu’il vous comble de sa bénédiction.
        Ce que Dieu a uni, que l’homme ne le sépare pas.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Que le Dieu d’Abraham, d’Isaac et de Jacob,
        le Dieu qui a uni nos premiers parents dans le paradis,
        confirme et bénisse dans le Christ
        le consentement que vous venez d’exprimer en présence de l’Église.
        Ce que Dieu a uni, que l’homme ne le sépare pas.`, type:"dialogueV", conditions: {} },
    {class:"italic", texte: `Bénédiction et remise des alliances`, type:"h2", conditions: {} },
    {class:"", texte: `Les alliances sont présentées au prêtre ou au diacre qui dit une des formules suivantes\u00A0:`, type:"rubrique", conditions: {} },
    {class:"indent1all indentallg", texte: `<span style="color: #b30000;">I.</span> Que le Seigneur bénisse <span style="color: #b30000;">✠</span> les alliances
        que vous allez vous donner l’un à l’autre
        en signe d’amour et de fidélité.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"indent1all indentallg", texte: `<span style="color: #b30000;">II.</span> Seigneur, bénis les alliances
        que nous bénissons <span style="color: #b30000;">✠</span> en ton nom.
        Donne à <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> de se garder l’un à l’autre
        une entière fidélité :
        qu’ils demeurent dans la paix en faisant ta volonté,
        qu’ils vivent toujours dans l’amour mutuel.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"indent1all indentallg", texte: `<span style="color: #b30000;">III.</span> Bénis <span style="color: #b30000;">✠</span>, Seigneur, et sanctifie dans leur amour
        tes serviteurs <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span> ;
        Ces alliances sont pour eux
        signes de fidélité :
        qu’elles soient aussi le rappel de leur tendresse.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"indent1all indentallg", texte: `<span style="color: #b30000;">IV.</span> Seigneur, notre Dieu,
        toi qui as fait Alliance avec nous par Jésus Christ,
        bénis <span style="color: #b30000;">✠</span> maintenant ces alliances :
        qu’elles soient pour <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>
        le signe de leur fidélité
        et le rappel de leur amour.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `Si c’est opportun, il asperge d’eau bénite les alliances et les remet aux époux.`, type:"rubrique", conditions: {} },
    {class:"", texte: `L’époux passe à l’annulaire de l’épouse l’alliance qui lui est destinée, en disant, si c’est opportun\u00A0:`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `<span style="color: #b30000;">N.</span>, reçois cette alliance,
        signe de mon amour et de ma fidélité.
        <span style="color: #b30000;">(</span>Au nom du Père, et du Fils, et du Saint-Esprit.<span style="color: #b30000;">)</span>`, type:"dialogueV", conditions: {} },
    {class:"", texte: `À son tour, l’épouse passe à l’annulaire de l’époux l’alliance qui lui est destinée, en disant, si c’est opportun\u00A0:`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `<span style="color: #b30000;">N.</span>, reçois cette alliance,
        signe de mon amour et de ma fidélité.
        <span style="color: #b30000;">(</span>Au nom du Père, et du Fils, et du Saint-Esprit.<span style="color: #b30000;">)</span>`, type:"dialogueV", conditions: {} },

    {class:"italic", texte: `Bénédiction nuptiale`, type:"h2", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre, debout et tourné vers l’épouse et l’époux, appelle sur eux la bénédiction de Dieu. Ce rite n’est jamais omis.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Les époux viennent devant l’autel et se tiennent debout, ou, selon l’opportunité, restent à leur place et s’agenouillent.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Dans le dernier paragraphe de la prière, les mots entre crochets peuvent être omis lorsque les circonstances semblent l’indiquer, par exemple si les époux sont avancés en âge.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre, mains jointes, invite l’assemblée à la prière, en ces termes ou en d’autres semblables\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Prions tous ensemble,
        et demandons à Dieu
        de répandre sa bénédiction sur ces nouveaux époux
        pour que dans sa bienveillance
        il accorde sa grâce à ceux qu’il a unis
        par le sacrement du mariage.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Et tous prient quelques instants en silence.
    Puis le prêtre ou le diacre, étendant les mains au-dessus des époux, continue\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Dieu tout puissant,
        tu as créé toutes choses`, type:"dialogueV", conditions: {} },
    {class:"indentallp", texte: `et dès le commencement tu as ordonné l’univers ;
        en faisant l’homme et la femme à ton image,
        tu as voulu que la femme demeure pour l’homme
        une compagne inséparable
        et qu’ils ne soient désormais plus qu’un,
        nous signifiant ainsi de ne jamais rompre
        l’unité qu’il t’avait plu de créer ;`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Dieu, tu as sanctifié les noces
        par un si grand mystère
        que tu en as fait le sacrement
        de l’alliance du Christ et de l’Église ;`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Dieu qui as uni l’homme et la femme,
        et qui dès l’origine as béni cette union
        de la seule bénédiction qui soit demeurée
        après la peine venue de la faute originelle
        et la condamnation par le déluge ;`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Regarde avec bonté
        ton serviteur et ta servante <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>
        unis par les liens du mariage
        et qui demandent le secours de ta bénédiction.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Envoie sur eux la grâce de l’Esprit Saint :
        par ta charité répandue dans leurs coeurs,
        qu’ils demeurent fidèles à l’alliance conjugale.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Que cette nouvelle mariée soit toute paix et tendresse ;
        qu’elle se conduise comme les saintes femmes
        dont l’Écriture fait l’éloge.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Que son époux lui donne sa confiance ;
        en reconnaissant qu’elle est son égale,
        héritière avec lui de la grâce de vie,
        qu’il la respecte et l’aime toujours
        comme le Christ a aimé son Église.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Et maintenant, Seigneur, nous t’en prions :
        accorde-leur d’être fermes dans la foi
        et d’aimer tes commandements ;
        qu’ils se gardent fidèles l’un à l’autre
        et que leur vie soit belle aux yeux de tous ;
        que la puissance de l’Évangile les rende forts
        et qu’ils soient de vrais témoins du Christ.`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `<span style="color: #b30000;">[</span>Que leur union soit féconde,
        qu’ils se conduisent en parents justes et bons,
        et que tous deux aient la joie
        de voir les enfants de leurs enfants.<span style="color: #b30000;">]</span>`, type:"dialogueV", conditions: {} },
    {class:"indent1all", texte: `Après une vieillesse heureuse,
        qu’ils parviennent à la vie sans fin
        dans le Royaume des cieux.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Par Jésus, le Christ, notre Seigneur.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    {class:"", texte: `En signe de reconnaissance pour le don du sacrement de mariage, l’assemblée peut chanter une acclamation, une hymne ou un cantique de louange. L’orgue ou les instruments de musique peuvent jouer un morceau adapté au rite et à l’église.`, type:"rubrique", conditions: {} },
    {class:"italic", texte: `Prière des époux`, type:"h2", conditions: {} },
    {class:"", texte: `Les époux qui le souhaitent expriment ici leur prière.`, type:"rubrique", conditions: {} },

    {class:"italic", texte: `Prière universelle`, type:"h2", conditions: {} },
    {class:"", texte: `Ensuite on fait la prière universelle.`, type:"rubrique", conditions: {} },
    {class:"", texte: `a. D’abord le prêtre ou le diacre invite à la prière en disant par exemple\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Dans la joie de cette fête,
        prions le Seigneur avec confiance,
        pour les nouveaux époux,
        pour nous tous, ici rassemblés,
        pour l’Église et pour le monde.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Frères et soeurs,
        par un don de sa grâce et de sa charité,
        Dieu a voulu parfaire et consacrer
        l’amour mutuel de <span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>,
        confions-les à sa grande tendresse.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `ou bien\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Frères et soeurs,
        accompagnons de nos prières ce nouveau foyer,
        pour que Dieu, dans sa bonté,
        fasse grandir leur amour
        et vienne en aide à toutes les familles dans le monde.`, type:"dialogueV", conditions: {} },
    {class:"", texte: `b. Viennent ensuite les invocations de la prière universelle avec la réponse des fidèles.`, type:"rubrique", conditions: {} },
    {class:"", texte: `Par exemple\u00A0:`, type:"rubrique", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">I.</span> Pour ces nouveaux époux
        et pour le bonheur de leur foyer,
        prions le Seigneur.`, type:"dialogueV", conditions: {} },
    {class:"indent1g", texte: `<span style= "font-weight: normal;"><span style="color: #b30000;">R/</span> Seigneur, écoute-nous, Seigneur exauce-nous.</span>`, type:"dialogueV", conditions: {} },
    {class:"indent1gg", texte: `Ou un autre refrain qui convienne.`, type:"rubriqueinterne", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">II.</span> Pour leurs proches et leurs amis
        et pour tous ceux qui les ont aidés,
        prions le Seigneur. <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">III.</span> Pour les jeunes qui se préparent au mariage,
        et pour tous ceux que le Seigneur appelle à une autre vocation,
        prions le Seigneur. <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">IV.</span> Pour toutes les familles dans le monde
        et pour que s’affermisse la paix entre les nations,
        prions le Seigneur. <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">V.</span> Pour les membres de nos familles
        qui ont quitté cette vie,
        et pour tous les défunts,
        prions le Seigneur. <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"indent1all indent1allg", texte: `<span style="color: #b30000;">VI.</span> Pour l’Église, Peuple saint de Dieu,
        et pour l’unité de tous les chrétiens,
        prions le Seigneur. <span style="color: #b30000;">R/</span>`, type:"dialogueV", conditions: {} },

    {class:"italic", texte: `Prière du Notre Père`, type:"h2", conditions: {} },
    {class:"", texte: `Le prêtre ou le diacre omet la prière de conclusion, et introduit directement le Notre Père, en ces termes ou en d’autres semblables\u00A0:`, type:"rubrique", conditions: {} },
    {class:"lettrine indent1all", texte: `Unis dans le même Esprit,
        adressons notre prière au Dieu de l’Alliance,
        au Père de Jésus Christ,
        qui est aussi notre Père.`, type:"dialogueV", conditions: {} },
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {class:"grandelettrine", texte: `Notre Père qui es aux cieux,
    que ton nom soit sanctifié,`, type: "dialogueV", conditions: {} },
    {class:"indentallp", texte: `que ton règne vienne,
    que ta volonté soit faite
    sur la terre comme au ciel.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Donne-nous aujourd’hui
    notre pain de ce jour.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Pardonne-nous nos offenses,
        comme nous pardonnons aussi
        à ceux qui nous ont offensés.`, type: "dialogueV", conditions: {} },
    {class:"indent1all", texte: `Et ne nous laisse pas entrer en tentation,
        mais délivre-nous du Mal.`, type: "dialogueV", conditions: {} },
    {class:"", texte: `Comme il n’y a pas de célébration de la messe, normalement on ne communie pas. Si néanmoins on doit distribuer la communion (ce qui reste exceptionnel, par exemple parce que le prêtre n’a pu être présent pour présider l’eucharistie), le diacre fera comme indiqué dans le Rituel de l’eucharistie en dehors de la messe, nn. 30-38.`, type: "rubrique", conditions: {} },
//Ajouter latin ?
//Bénédiction finale
    {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
    {id:"benedictionmariage", texte: `Bénédiction finale`, type:"h2", conditions: {} },
    {class:"", texte: `Ensuite, le prêtre ou le diacre bénit les époux et le peuple en utilisant la bénédiction finale suivante\u00A0:`, type:"rubrique", conditions: {} },
    {class:"grandelettrine", texte: `Que Dieu votre Père vous garde vraiment unis
        dans un mutuel amour,`, type:"dialogueV", conditions: {benedictionmariage:"1"} },
    {class:"", texte: `afin que la paix du Christ habite en vous
        et demeure toujours dans votre maison.`, type:"dialogueV", conditions: {benedictionmariage:"1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"1"} },
    {class:"lettrine indent1all", texte: `Puissiez-vous <span style="color: #b30000;">[</span>être bénis dans vos enfants,<span style="color: #b30000;">]</span>,
        avoir auprès de vous des amis qui vous aident,
        et vivre en paix avec tous.`, type:"dialogueV", conditions: {benedictionmariage:"1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"1"} },
    {class:"lettrine indent1all", texte: `Soyez dans le monde des témoins de l’amour de Dieu\u00A0:
        ouvrez votre porte aux malheureux et aux pauvres,
        qui vous recevront un jour avec reconnaissance
        dans la maison du Père.`, type:"dialogueV", conditions: {benedictionmariage:"1"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"1"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"1"}},
    {class: "grandelettrine", texte: `Et vous tous qui êtes ici réunis autour de ces nouveaux époux,
    que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"1"} },

    {class:"grandelettrine", texte: `Que Dieu le Père tout-puissant
        vous donne sa joie
        et vous bénisse <span style="color: #b30000;">[</span>dans vos enfants<span style="color: #b30000;">]</span>.`, type:"dialogueV", conditions: {benedictionmariage:"2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"2"} },
    {class:"lettrine indent1all", texte: `Que le Fils unique de Dieu veille sur vous et vous assiste
        dans le bonheur et dans l’épreuve.`, type:"dialogueV", conditions: {benedictionmariage:"2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"2"} },
    {class:"lettrine indent1all", texte: `Que l’Esprit de Dieu ne cesse de répandre
        son amour dans vos coeurs.`, type:"dialogueV", conditions: {benedictionmariage:"2"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"2"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"2"}},
    {class: "grandelettrine", texte: `Et vous tous qui êtes ici réunis autour de ces nouveaux époux,
    que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"2"} },

    {class:"grandelettrine", texte: `Que le Seigneur Jésus vous bénisse,
        ainsi que vos familles et vos amis,
        lui qui est venu aux noces de Cana.`, type:"dialogueV", conditions: {benedictionmariage:"3"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"3"} },
    {class:"lettrine indent1all", texte: `Qu’il répande lui-même son amour dans vos coeurs,
        lui qui s’est donné totalement à son Église.`, type:"dialogueV", conditions: {benedictionmariage:"3"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"3"} },
    {class:"lettrine indent1all", texte: `Que le Seigneur vous donne
        d’être des témoins de sa résurrection
        et d’attendre dans la joie le bonheur promis.`, type:"dialogueV", conditions: {benedictionmariage:"3"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {benedictionmariage:"3"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"3"}},
    {class: "grandelettrine", texte: `Et vous tous qui êtes ici réunis autour de ces nouveaux époux,
    que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"3"} },

    {class:"grandelettrine", texte: `Que le Seigneur votre Dieu
        vous garde unis dans un même amour
        et fasse grandir encore
        cet amour venu de lui.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `<span style="color: #b30000;">[</span>Que vos enfants soient la bénédiction de votre foyer
        et vous rendent sans mesure
        la joie que vous leur donnerez.<span style="color: #b30000;">]</span>`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que la paix du Christ habite en votre maison
        et qu’elle règne toujours entre vous.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que votre travail à tous deux soit béni,
        sans que les soucis vous accablent,
        sans que le bonheur vous égare loin de Dieu.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que de vrais amis se tiennent à vos côtés
        pour partager vos joies
        et vous aider dans la peine.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que toute personne en difficulté
        trouve auprès de vous
        soutien et réconfort.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que votre foyer soit un exemple pour les autres
        et qu’il réponde aux appels du prochain.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"indent1all", texte: `Que le Seigneur vous aide et vous guide
        tout au long de votre vie.`, type:"dialogueV", conditions: {benedictionmariage:"4"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"4"}},
    {class: "grandelettrine", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, et vous tous ici présents,
    que Dieu tout-puissant vous bénisse,
    le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"4"} },

    {class:"grandelettrine", texte: `Seigneur notre Dieu,
        regarde avec bonté ces nouveaux époux
        et daigne répandre sur eux tes bénédictions\u00A0:`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils soient unis dans un même amour
        et avancent vers une même sainteté.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `<span style="color: #b30000;">[</span>Qu’ils aient la joie de participer à ton amour créateur
        et puissent ensemble éduquer leurs enfants.<span style="color: #b30000;">]</span>`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils vivent dans la justice et la charité
        pour montrer ta lumière à ceux qui te cherchent.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils mettent leur foyer au service du monde
        et répondent aux appels de leur prochain.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils soient fortifiés par les sacrifices et les joies de leur vie
        et sachent témoigner de l’Évangile.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils vivent longtemps sans malheur ni maladie
        et que leur travail à tous deux soit béni.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
     {class:"indent1all", texte: `<span style="color: #b30000;">[</span>Qu’ils voient grandir en paix leurs enfants,
        qu’ils aient le soutien d’une famille heureuse.<span style="color: #b30000;">]</span>`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"indent1all", texte: `Qu’ils parviennent enfin avec tous ceux qui les ont précédés
        dans ta demeure où leur amour ne finira jamais.`, type:"dialogueV", conditions: {benedictionmariage:"5"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"5"}},
    {class: "grandelettrine", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, et vous tous ici présents,
        que Dieu tout-puissant vous bénisse,
        le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"5"} },

    {class:"grandelettrine", texte: `Que Dieu votre Père vous garde unis
        et fasse grandir votre amour ;`, type:"dialogueV", conditions: {benedictionmariage:"6"} },
    {class:"indent1all", texte: `<span style="color: #b30000;">[</span>que des enfants soient la joie de votre foyer
        et<span style="color: #b30000;">]</span> qu’en toute occasion de vrais amis vous entourent ;
        que votre travail à tous deux soit béni
        et que la paix demeure en votre maison.`, type:"dialogueV", conditions: {benedictionmariage:"6"} },
    {class:"sautdeligne", texte: `\n`, conditions: {benedictionmariage:"6"}},
    {class: "grandelettrine", texte: `<span style="color: #b30000;">N.</span> et <span style="color: #b30000;">N.</span>, et vous tous ici présents,
        que Dieu tout-puissant vous bénisse,
        le Père, le Fils, <span style="color: #b30000;">✠</span> et le Saint-Esprit`, type: "dialogueV", conditions: {benedictionmariage:"6"} },
    {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
//A verifier
    {class:"", texte: `Si cela convient, le prêtre ou le diacre pourra remettre au nouveaux époux, de la part de la communauté chrétienne une Bible, une crucifix, une icône, ou un chapelet qui sera pour leur nouveau foyer le rappel de la célébration de leur mariage à l’église.`, type:"rubrique", conditions: {} },
    {class:"", texte: `La célébration achevée, les témoins, le prêtre ou le diacre, et les époux signent l’acte de mariage. La signature aura lieu, plutôt en présence du peuple, de préférence sur une table préparée pour cela. On évitera de la faire sur l’autel.`, type:"rubrique", conditions: {} },
  ],

  "ordination": [
    {class:"", texte: ``, type:"rubrique", conditions: {} },
  ],

  "sacrementDesMalades": [
    {class:"", texte: ``, type:"rubrique", conditions: {} },
  ],
}