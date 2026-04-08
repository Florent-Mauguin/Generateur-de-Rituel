import { EndnoteReference } from "docx";
import { render } from "svelte/server";
import { preProcessFile } from "typescript";

export const Rituelplus = {

  "jeudisaint": {
    titre: "Cène",
    introduction: [
        {class:"", texte: `Le soir, à l’heure qui convient le mieux, on célèbre la messe en mémoire de la Cène du Seigneur, avec la pleine participation de toute la communauté locale, tous les prêtres et les ministres accomplissant leur fonction.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Tous les prêtres peuvent concélébrer, même s’ils ont déjà concélébré en ce jour la Messe chrismale ou si, pour le bien des fidèles, ils doivent célébrer une autre messe.`, type:"rubrique", conditions: {} },
        {class:"", texte: `L’autel sera orné de fleurs avec la modération qui convient à la nature de ce jour. Le tabernacle sera tout à fait vide ; pour la communion du clergé et du peuple aujourd’hui et demain, une quantité suffisante de pain sera consacrée à cette messe.`, type:"rubrique", conditions: {} },
    ],
    gloria: [
        {class:"", texte: `Pendant le chant du Gloria, un servant sonne les cloches.`, type:"servants", conditions: {} },
        {class:"", texte: `On chante le <span style="color: #000;">Gloria in excelsis</span>. Pendant le chant de l’hymne, les cloches sonnent. Elles se taisent ensuite jusqu’à la Vigile pascale, à moins que l’évêque diocésain, s’il le juge opportun, en décide autrement. De même, pendant ce temps, l’orgue et les autres instruments de musique ne peuvent être utilisés que pour soutenir le chant.`, type:"rubrique", conditions: {} },
    ],
    avanthomelie: [
        {class:"", texte: `L’homélie met en lumière les mystères principaux que célèbre cette messe, à savoir l’institution de l’Eucharistie et du Sacerdoce, ainsi que le commandement du Seigneur sur la charité fraternelle.`, type:"rubrique", conditions: {} },
    ],
    apreshomelie: [
        {class: "", texte: `LAVEMENT DES PIEDS`, type: "h3"},
        {class:"", texte: `Après l’homélie, on procède au lavement des pieds, là où, pastoralement, il semble bon de le faire.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Si cela est opportun, des servants disposent des sièges devant l’autel pour le lavement des pieds.`, type:"servants", conditions: {} },
        {class:"", texte: `Deux ou trois servants accompagnent le célébrant avec la bassine, l'aiguière (le pot à eau), et les serviettes.`, type:"servants", conditions: {} },
        {class:"", texte: `Ceux qui ont été choisis parmi le peuple de Dieu sont conduits par des ministres aux sièges qui leur ont été préparés à l’endroit le plus approprié. Alors l'évêque (après avoir déposé la chasuble si c’est nécessaire), s’approche de chacun, verse de l’eau sur les pieds, puis les essuie, aidé en tout cela par les ministres.`, type:"rubrique", conditions: {presenceBishop: true} },
        {class:"", texte: `Ceux qui ont été choisis parmi le peuple de Dieu sont conduits par des ministres aux sièges qui leur ont été préparés à l’endroit le plus approprié. Alors le prêtre (après avoir déposé la chasuble si c’est nécessaire), s’approche de chacun, verse de l’eau sur les pieds, puis les essuie, aidé en tout cela par les ministres.`, type:"rubrique", conditions: {presenceBishop: false} },
        {class:"", texte: `Pendant ce temps, on chante un chant qui convient.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Après le lavement des pieds, le prêtre se lave les mains et les essuie, il remet sa chasuble et revient à son siège, et de là, il préside à la Prière universelle.`, type:"rubrique", conditions: {presenceBishop: false} },
        {class:"", texte: `Après le lavement des pieds, l'évêque se lave les mains et les essuie, il remet sa chasuble et revient à son siège, et de là, il préside à la Prière universelle.`, type:"rubrique", conditions: {presenceBishop: true} },
        {class:"", texte: `On ne dit pas le <span style="color: #000;">Credo</span>.`, type:"rubrique", conditions: {} },
    ],
    findecommunion: [
        {class:"indent1g", texte: `Le ciboire avec les hosties pour la communion du lendemain, reste sur l’autel.`, type:"rubrique", conditions: {} },
    ],
    conclusion: [
        {class: "", texte: `TRANSFERT DU SAINT-SACREMENT`, type: "h3"},
        {class:"", texte: `<b>Le thuriféraire</b> apporte l'encensoir au célébrant qui impose l'encens.`, type:"servants", conditions: {incense:true} },
        {class:"", texte: `Après cette prière, le prêtre vient devant l’autel, il met l’encens dans l’encensoir, il le bénit et, à genoux, il encense trois fois le Saint-Sacrement. Ensuite, ayant reçu le voile huméral de couleur blanche, il se relève et prend le ciboire, qu’il recouvre avec les extrémités du voile.`, type:"rubrique", conditions: {presenceBishop: false} },
        {class:"", texte: `Après cette prière, l'évêque vient devant l’autel, il met l’encens dans l’encensoir, il le bénit et, à genoux, il encense trois fois le Saint-Sacrement. Ensuite, ayant reçu le voile huméral de couleur blanche, il se relève et prend le ciboire, qu’il recouvre avec les extrémités du voile.`, type:"rubrique", conditions: {presenceBishop: true} },
        {class:"", texte: `La procession s’organise pour porter le Saint-Sacrement, accompagné de cierges et d’encens, à travers l’église, vers le lieu du reposoir, préparé dans un endroit de l’église ou dans une chapelle convenablement ornée. Un ministre laïc précède avec la croix, entouré de deux autres portant des cierges allumés. Suivent d’autres ministres portant des cierges allumés. Devant le prêtre qui porte le Saint-Sacrement, avance le thuriféraire avec l’encensoir fumant. On chante pendant ce temps l’hymne <span style="color: #000;">Pange lingua</span> (sauf les deux dernières strophes) ou un autre chant eucharistique.`, type:"rubrique", conditions: {presenceBishop: false} },
        {class:"", texte: `La procession s’organise pour porter le Saint-Sacrement, accompagné de cierges et d’encens, à travers l’église, vers le lieu du reposoir, préparé dans un endroit de l’église ou dans une chapelle convenablement ornée. Un ministre laïc précède avec la croix, entouré de deux autres portant des cierges allumés. Suivent d’autres ministres portant des cierges allumés. Devant l'évêque qui porte le Saint-Sacrement, avance le thuriféraire avec l’encensoir fumant. On chante pendant ce temps l’hymne <span style="color: #000;">Pange lingua</span> (sauf les deux dernières strophes) ou un autre chant eucharistique.`, type:"rubrique", conditions: {presenceBishop: true} },
        {class:"", texte: `Lorsque la procession est parvenue au reposoir, le prêtre dépose le ciboire dans le tabernacle dont la porte demeure ouverte. Puis, ayant mis l’encens dans l’encensoir, il encense, à genoux, le Saint-Sacrement, tandis qu’on chante le <span style="color: #000;">Tantum ergo sacramentum</span> ou un autre chant eucharistique. Ensuite le prêtre referme la porte du tabernacle.`, type:"rubrique", conditions: {presenceBishop: false, presenceDiacre: false} },
        {class:"", texte: `Lorsque la procession est parvenue au reposoir, le prêtre, avec l’aide d’un diacre si besoin est, dépose le ciboire dans le tabernacle dont la porte demeure ouverte. Puis, ayant mis l’encens dans l’encensoir, il encense, à genoux, le Saint-Sacrement, tandis qu’on chante le <span style="color: #000;">Tantum ergo sacramentum</span> ou un autre chant eucharistique. Ensuite le diacre ou le prêtre lui-même referme la porte du tabernacle.`, type:"rubrique", conditions: {presenceBishop: false, presenceDiacre: true} },
        {class:"", texte: `Lorsque la procession est parvenue au reposoir, l'évêque dépose le ciboire dans le tabernacle dont la porte demeure ouverte. Puis, ayant mis l’encens dans l’encensoir, il encense, à genoux, le Saint-Sacrement, tandis qu’on chante le <span style="color: #000;">Tantum ergo sacramentum</span> ou un autre chant eucharistique. Ensuite l'évêque referme la porte du tabernacle.`, type:"rubrique", conditions: {presenceBishop: true, presenceDiacre: false} },
        {class:"", texte: `Lorsque la procession est parvenue au reposoir, l'évêque, avec l’aide d’un diacre si besoin est, dépose le ciboire dans le tabernacle dont la porte demeure ouverte. Puis, ayant mis l’encens dans l’encensoir, il encense, à genoux, le Saint-Sacrement, tandis qu’on chante le <span style="color: #000;">Tantum ergo sacramentum</span> ou un autre chant eucharistique. Ensuite le diacre ou l'évêque lui-même referme la porte du tabernacle.`, type:"rubrique", conditions: {presenceBishop: true, presenceDiacre: true} },
        {class:"", texte: `Après un temps d’adoration en silence, le prêtre et les ministres font la génuflexion et retournent à la sacristie.`, type:"rubrique", conditions: {presenceBishop: false} },
        {class:"", texte: `Après un temps d’adoration en silence, l'évêque et les ministres font la génuflexion et retournent à la sacristie.`, type:"rubrique", conditions: {presenceBishop: true} },
        {class:"", texte: `Au moment qui convient, on dépouille l’autel, et, si possible, on enlève les croix de l’église. Il convient de voiler celles que l’on ne peut enlever.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Ceux qui ont participé à la Messe du soir ne disent pas les Vêpres.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Les fidèles sont invités, selon les circonstances des lieux (et des choses), à poursuivre l’adoration devant le Saint-Sacrement pendant une partie convenable de la nuit. Toutefois, après minuit, cette adoration se fait sans solennité.`, type:"rubrique", conditions: {} },
        {class:"", texte: `Si la célébration de la Passion du Seigneur n’a pas lieu le lendemain vendredi dans la même église, la messe se conclut comme d’habitude et le Saint-Sacrement est déposé dans le tabernacle.`, type:"rubrique", conditions: {} },
    ]
      },
    
    "vendredisaint": {
    titre: "Passion du Seigneur",
    autresrituel: [
        {class: "", texte: `Le Vendredi et le Samedi saints, selon une très ancienne tradition, l’Église ne célèbre pas les sacrements, à l’exception de la pénitence et de l’onction des malades.`, type: "rubrique", conditions: {} },
        {class: "", texte: `En ce jour, l’autel doit être complètement dépouillé, sans croix, ni chandeliers, ni nappe.`, type: "rubrique", conditions: {} },
        {class: "", texte: `CÉLÉBRATION DE LA PASSION DU SEIGNEUR`, type: "h3", conditions: {} },
        {class: "", texte: `L’après-midi de ce jour, vers trois heures, à moins qu’une raison pastorale ne fasse choisir une heure plus tardive, on célèbre la Passion du Seigneur.`, type: "rubrique", conditions: {} },
        { texte: "La procession d'entrée se déroule en silence sans croix, ni cierges, ni encensoir.", type:"servants", conditions: {} },
        { texte: "Arrivés au sanctuaire, tous font une inclination profonde devant l’autel.", type:"servants"},
        {class: "", texte: ``, type: "servants", conditions: {} },
        {class: "", texte: `Le prêtre revêtu des vêtements de la messe, qui sont de couleur rouge, s’avance vers l’autel en silence, et, après l’avoir salué, se prosterne face contre terre ou se met à genoux. Tous prient en silence pendant quelque temps. Tous les autres se mettent à genoux.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:false} },
        {class: "", texte: `L'évêque et les prêtres, s’il y en a, revêtus des vêtements de la messe, qui sont de couleur rouge, s’avancent vers l’autel en silence, et, après l’avoir salué, se prosternent face contre terre ou se mettent à genoux. Tous prient en silence pendant quelque temps. Tous les autres se mettent à genoux.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop:true} },
        {class: "", texte: `Le prêtre et le diacre, s’il y en a un, revêtus des vêtements de la messe, qui sont de couleur rouge, s’avancent vers l’autel en silence, et, après l’avoir salué, se prosternent face contre terre ou se mettent à genoux. Tous prient en silence pendant quelque temps. Tous les autres se mettent à genoux.`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop:false} },
        {class: "", texte: `L'évêque, les prêtres et les diacres revêtus des vêtements de la messe, qui sont de couleur rouge, s’avancent vers l’autel en silence, et, après l’avoir salué, se prosternent face contre terre ou se mettent à genoux. Tous prient en silence pendant quelque temps. Tous les autres se mettent à genoux.`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop:true} },
        { texte: `Les servants se mettent à genoux à leur place.`, type:"servants", conditions: {}},
        {class: "", texte: `Ensuite, le prêtre avec les ministres gagne le siège, où, se tenant tourné vers le peuple, il dit, les mains étendues, l’une des prières suivantes, en omettant l’invitation <span style="color: #000;">Prions le Seigneur</span>.`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Ensuite, l'évêque avec les ministres gagne le siège, où, se tenant tourné vers le peuple, il dit, les mains étendues, l’une des prières suivantes, en omettant l’invitation <span style="color: #000;">Prions le Seigneur</span>.`, type: "rubrique", conditions: {presenceBishop: true} },
        { texte: "Le <b>porte-missel</b> présente au président le missel pour la prière d’ouverture (collecte).", type:"servants", conditions: {portemissel: true}},
        {class: "grandelettrine", texte: `Souviens-toi, Seigneur, de ta miséricorde, <span style="color: #b30000;">+</span> 
        sanctifie ceux qui veulent te servir`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `et protège-les toujours, <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `car c’est pour eux que ton Fils Jésus Christ <span style="color: #b30000;">/</span>
        a institué par son sang répandu le sacrement pascal.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `ou bien`, type: "rubrique", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        par la passion du Christ, ton Fils, notre Seigneur,`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `tu as détruit la mort héritée du premier péché,
        elle qui tenait l’humanité sous sa loi ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `accorde-nous de ressembler à ton Fils :
        du fait de notre nature,
        nous sommes à l’image de l’homme pétri d’argile ; <span style="color: #b30000;">/</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `de même, que ta grâce nous sanctifie
        pour que nous soyons à l’image de celui qui vient du ciel.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
//Liturgie de la parole
        {class: "", texte: `PREMIÈRE PARTIE`, type: "h2", conditions: {} },
        {class: "", texte: `LITURGIE DE LA PAROLE`, type: "h3", conditions: {} },
        {class: "", texte: `Ensuite, tous s’assoient, et on proclame la première lecture, tirée du prophète Isaïe (Is 52, 13 – 53, 12), avec son psaume.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Vient ensuite la deuxième lecture, tirée de l’épître aux Hébreux (He 4, 14-16; 5, 7-9), et le chant avant l’Évangile.`, type: "rubrique", conditions: {} },
        { texte: `Pour la lecture de la Passion, l'usage des cierges et de l'encens est omis.`, type:"servants", conditions: {incense:true, ceroferaire:true} },
        { texte: `Pour la lecture de la Passion, l'usage de l'encens est omis.`, type:"servants", conditions: {incense:true, ceroferaire:false} },
        { texte: `Pour la lecture de la Passion, l'usage des cierges est omis.`, type:"servants", conditions: {incense:false, ceroferaire:true} },
        {class: "", texte: `Puis on lit la Passion du Seigneur selon saint Jean (Jn 18, 1 – 19, 42), de la même manière que le dimanche des Rameaux.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après la lecture de la Passion, le prêtre fait une brève homélie, à la fin de laquelle il peut inviter les fidèles à rester quelque temps en silence.`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Après la lecture de la Passion, l'évêque fait une brève homélie, à la fin de laquelle il peut inviter les fidèles à rester quelque temps en silence.`, type: "rubrique", conditions: {presenceBishop: true} },
//PU
        {class: "", texte: `<span style="font-weight: bold;">Prière universelle</span>`, type: "h4", conditions: {} },
        {class: "", texte: `La liturgie de la Parole se termine par la Prière universelle qui, en ce jour, est dite de la manière suivante : le diacre debout à l’ambon, donne l’intention dans un invitatoire ; tous prient un moment en silence, puis le prêtre, debout à son siège ou, selon l’opportunité, à l’autel, les mains étendues, dit l’oraison.`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop: false} },
        {class: "", texte: `La liturgie de la Parole se termine par la Prière universelle qui, en ce jour, est dite de la manière suivante : le diacre debout à l’ambon, donne l’intention dans un invitatoire ; tous prient un moment en silence, puis l'évêque, debout à son siège ou, selon l’opportunité, à l’autel, les mains étendues, dit l’oraison.`, type: "rubrique", conditions: {presenceBishop: true, presenceDiacre: true} },
        {class: "", texte: `La liturgie de la Parole se termine par la Prière universelle qui, en ce jour, est dite de la manière suivante : un ministre laïc, debout à l’ambon, donne l’intention dans un invitatoire ; tous prient un moment en silence, puis le prêtre, debout à son siège ou, selon l’opportunité, à l’autel, les mains étendues, dit l’oraison.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: false} },
        {class: "", texte: `La liturgie de la Parole se termine par la Prière universelle qui, en ce jour, est dite de la manière suivante : un ministre laïc, debout à l’ambon, donne l’intention dans un invitatoire ; tous prient un moment en silence, puis l'évêque, debout à son siège ou, selon l’opportunité, à l’autel, les mains étendues, dit l’oraison.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: true} },
        {class: "", texte: `Pendant ces prières, les fidèles peuvent se tenir soit debout, soit à genoux.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Avant la prière du prêtre, on peut aussi employer, conformément à la tradition, la monition du diacre : <span style="color: #000;">Prions à genoux.</span>, suivie de l’agenouillement de tous pour une prière en silence dont le terme est marqué par l’invitation : <span style="color: #000;">Levons-nous.</span>`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop: false} },
        {class: "", texte: `Avant la prière de l'évêque, on peut aussi employer, conformément à la tradition, la monition du diacre : <span style="color: #000;">Prions à genoux.</span>, suivie de l’agenouillement de tous pour une prière en silence dont le terme est marqué par l’invitation : <span style="color: #000;">Levons-nous.</span>`, type: "rubrique", conditions: {presenceDiacre: true, presenceBishop: true} },
        {class: "", texte: `Pour une grave nécessité publique, l’évêque diocésain peut autoriser ou imposer une intention spéciale.`, type: "rubrique", conditions: {} },
        { texte: "Le <b>porte-missel</b> présente au président le missel à chaque oraison", type:"servants", conditions: {portemissel: true}},
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class: "", texte: `<span style="color: #000; font-weight: bold";>I.</span> POUR LA SAINTE ÉGLISE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Prions, frères et soeurs bien-aimés, pour la sainte Église de Dieu\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que notre Dieu et Seigneur
        lui donne la paix,
        la rassemble dans l’unité
        et la garde par toute la terre ;`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `qu’il nous accorde une vie calme et paisible,
        pour glorifier Dieu le Père tout-puissant.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        dans le Christ, tu as révélé ta gloire à tous les peuples ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `protège l’oeuvre de ta miséricorde,
        afin que ton Église répandue par tout l’univers
        demeure inébranlable dans la foi <span style="color: #b30000;">/</span>
        pour proclamer ton nom.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>II.</span> POUR LE PAPE`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour notre saint Père le pape <span style="color: #B30000;";>N.</span>,
        choisi par Dieu notre Seigneur dans le collège des évêques\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `qu’il le garde sain et sauf au service de son Église
        pour gouverner le peuple saint de Dieu.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant
        dont la sagesse organise toutes choses, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `écoute en ta bonté notre prière : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `protège avec amour l’évêque de Rome que tu nous as choisi,
        afin que, sous la conduite du Pontife suprême, <span style="color: #b30000;">/</span>
        le peuple chrétien que tu gouvernes
        progresse toujours dans la foi.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>III.</span> POUR LE CLERGÉ ET LE PEUPLE FIDELE`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour notre évêque <span style="color: #B30000;";>N.</span>,
        pour tous les évêques, les prêtres, les diacres de l’Église
        et pour l’ensemble du peuple des fidèles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant
        dont l’Esprit sanctifie et gouverne`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `le corps entier de l’Église, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `exauce les prières que nous t’adressons
        pour tes ministres : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `afin que, par le don de ta grâce, <span style="color: #b30000;">/</span>
        tout ton peuple te serve avec fidélité.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>IV.</span> POUR LES CATÉCHUMÈNES`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour les (nos) catéchumènes\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `Que Dieu notre Seigneur
        ouvre leur coeur à sa parole,
        et les accueille dans sa miséricorde ;`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `après avoir reçu le pardon de tous leurs péchés
        par le bain de la naissance nouvelle,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `qu’ils soient reconnus comme appartenant au Christ Jésus notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        toi qui assures la fécondité de ton Église`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `en lui donnant toujours de nouveaux enfants, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `augmente en nos catéchumènes
        la foi et l’intelligence de la foi : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `qu’ils renaissent à la source du baptême <span style="color: #b30000;">/</span>
        et prennent place parmi tes enfants d’adoption.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>V.</span> POUR L’UNITÉ DES CHRÉTIENS`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour tous nos frères et soeurs qui croient au Christ
        et cherchent à faire la vérité\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que le Seigneur notre Dieu
        les rassemble et les garde dans son unique Église.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        toi qui rassembles ce qui est dispersé,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `et qui gardes ce que tu as rassemblé, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `jette un regard de paix sur le troupeau conduit par ton Fils : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `accorde à ceux qu’un même baptême a consacrés
        d’être unis dans la plénitude de la foi
        et de demeurer en communion
        par le lien de la charité.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>VI.</span> POUR LES JUIFS`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour les Juifs
        à qui le Seigneur notre Dieu a parlé en premier\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `qu’il leur donne de progresser dans l’amour de son Nom
        et dans la fidélité à son Alliance.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        toi qui as confié tes promesses`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `à Abraham et à sa descendance, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `écoute avec bonté les prières de ton Église : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `donne au peuple que tu as choisi en premier <span style="color: #b30000;">/</span>
        de parvenir à la plénitude de la rédemption.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>VII.</span> POUR CEUX QUI NE CROIENT PAS AU CHRIST`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour ceux qui ne croient pas au Christ\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `demandons qu’à la lumière de l’Esprit Saint,
        ils puissent s’engager, eux aussi, sur le chemin du salut.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        donne à ceux qui ne reconnaissent pas le Christ`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `de marcher en ta présence d’un coeur sincère,
        afin de découvrir la vérité ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `et donne-nous de progresser sans cesse dans l’amour mutuel,
        attentifs à percevoir plus pleinement le mystère de ta vie, <span style="color: #b30000;">/</span>
        pour être dans le monde des témoins plus parfaits de ton amour.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>VIII.</span> POUR CEUX QUI NE CROIENT PAS EN DIEU`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour ceux qui ne connaissent pas Dieu\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `demandons qu’en recherchant d’un coeur sincère ce qui est droit
        ils puissent parvenir jusqu’à Dieu lui-même.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        tu as créé l’être humain`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `pour qu’il te cherche dans un désir inlassable
        et que son coeur s’apaise en te trouvant ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `nous t’en prions, fais que tous,
        au milieu des difficultés qui leur font obstacle,
        discernent les signes de ta tendresse
        et perçoivent le témoignage des oeuvres bonnes
        de ceux qui croient en toi, <span style="color: #b30000;">/</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `afin d’avoir le bonheur de te reconnaître,
        toi, le seul vrai Dieu et notre Père.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>IX.</span> POUR LES POUVOIRS PUBLICS`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Prions pour les chefs d’État
        et tous les responsables des affaires publiques\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que le Seigneur notre Dieu
        dirige leur esprit et leur coeur selon sa volonté
        pour la paix véritable et la liberté de tous.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        le coeur humain et les droits des peuples`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `sont dans ta main ; <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `regarde avec bienveillance ceux qui exercent le pouvoir sur nous ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que par ta grâce s’affermissent partout sur la terre
        la sécurité et la paix, la prospérité des nations <span style="color: #b30000;">/</span>
        et la liberté religieuse.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },

        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },    
        {class: "", texte: `<span style="color: #000; font-weight: bold";>X.</span> POUR CEUX QUI SONT DANS L’ÉPREUVE`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Frères et soeurs bien-aimés,
        prions Dieu le Père tout-puissant,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `pour qu’il purifie le monde de toute erreur,
        chasse les maladies et repousse la famine,
        ouvre les prisons et brise les chaînes,
        protège ceux qui voyagent,
        ramène chez eux les exilés,
        donne la force aux malades,
        et, aux mourants, accorde le salut.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Tous prient en silence. Puis le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Tous prient en silence. Puis l'évêque dit\u00A0:`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        consolation des affligés,`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `force de ceux qui peinent, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `entends les prières de ceux qui crient vers toi,
        quelles que soient leurs souffrances : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que tous aient la joie de trouver dans leurs détresses <span style="color: #b30000;">/</span>
        le secours de ta miséricorde.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
//Partie 2 : Adoration de la Croix
        {class: "", texte: `DEUXIÈME PARTIE`, type: "h2", conditions: {} },
        {class: "", texte: `ADORATION DE LA SAINTE CROIX`, type: "h3", conditions: {} },
        {class: "", texte: `La Prière universelle achevée, on fait l’adoration solennelle de la sainte Croix.`, type: "rubrique", conditions: {} },
        {id: "Croix", texte: `<span style="font-weight: bold;">Présentation de la sainte Croix</span>`, type: "h4", conditions: {} },
        {class: "", texte: `<span style="color: #000; font-style: italic;">Première forme</span>`, type: "rubrique", conditions: {croix:"1"} },
        {class: "", texte: `Le diacre, avec les ministres, ou un autre ministre idoine se rend à la sacristie d’où il apporte la croix recouverte d’un voile violet ; il s’avance en procession à travers l’église jusqu’au milieu du sanctuaire, accompagné de deux ministres qui portent des cierges allumés.`, type: "rubrique", conditions: {croix:"1", presenceDiacre: true} },
        {class: "", texte: `Un autre ministre idoine, avec les ministres se rend à la sacristie d’où il apporte la croix recouverte d’un voile violet ; il s’avance en procession à travers l’église jusqu’au milieu du sanctuaire, accompagné de deux ministres qui portent des cierges allumés.`, type: "rubrique", conditions: {croix:"1", presenceDiacre: false} },
        { texte: `<b>Les céroféraires</b> accompagnent la procession de la croix`, type:"servants", conditions: {ceroferaire:true} },
        {class: "", texte: `Le prêtre, debout devant l’autel, tourné vers le peuple, prend la croix, en découvre un peu le sommet et l’élève en commençant <span style="color: #000;">« Voici le bois de la Croix…»</span>, un diacre l’aidant dans le chant, ou, le cas échéant, une schola. Tous répondent : <span style="color: #000;">« Venez, adorons. »</span>`, type: "rubrique", conditions: {croix:"1", presenceDiacre: true, presenceBishop: false} },
        {class: "", texte: `Le prêtre, debout devant l’autel, tourné vers le peuple, prend la croix, en découvre un peu le sommet et l’élève en commençant <span style="color: #000;">« Voici le bois de la Croix…»</span>, une schola l’aidant dans le chant. Tous répondent : <span style="color: #000;">« Venez, adorons. »</span>`, type: "rubrique", conditions: {croix:"1", presenceDiacre: false, presenceBishop: false} },
        {class: "", texte: `L'évêque, debout devant l’autel, tourné vers le peuple, prend la croix, en découvre un peu le sommet et l’élève en commençant <span style="color: #000;">« Voici le bois de la Croix…»</span>, un diacre l’aidant dans le chant, ou, le cas échéant, une schola. Tous répondent : <span style="color: #000;">« Venez, adorons. »</span>`, type: "rubrique", conditions: {croix:"1", presenceDiacre: true, presenceBishop: true} },
        {class: "", texte: `L'évêque, debout devant l’autel, tourné vers le peuple, prend la croix, en découvre un peu le sommet et l’élève en commençant <span style="color: #000;">« Voici le bois de la Croix…»</span>, une schola l’aidant dans le chant. Tous répondent : <span style="color: #000;">« Venez, adorons. »</span>`, type: "rubrique", conditions: {croix:"1", presenceDiacre: false, presenceBishop: true} },
        {class: "indent1all indentallg", texte: `Voici le bois de la Croix,
        qui a porté le salut du monde.`, type: "dialogueV", conditions: {croix:"1"} },
        {class: "indentallg", texte: `Venez, adorons !`, type: "dialogueR", conditions: {croix:"1"} },
        {class: "", texte: `Puis tous s’agenouillent et adorent en silence durant quelques instants tandis que le prêtre reste debout et tient la Croix élevée.`, type: "rubrique", conditions: {croix:"1", presenceBishop: false} },
        {class: "", texte: `Puis tous s’agenouillent et adorent en silence durant quelques instants tandis que l'évêque reste debout et tient la Croix élevée.`, type: "rubrique", conditions: {croix:"1", presenceBishop: true} },
        {class: "", texte: `Ensuite, le prêtre découvre le bras droit de la Croix, il l’élève à nouveau en chantant : <span style="color: #000;">Voici le bois de la Croix…</span>, et on fait comme la première fois.`, type: "rubrique", conditions: {croix:"1", presenceBishop: false} },
        {class: "", texte: `Ensuite, l'évêque découvre le bras droit de la Croix, il l’élève à nouveau en chantant : <span style="color: #000;">Voici le bois de la Croix…</span>, et on fait comme la première fois.`, type: "rubrique", conditions: {croix:"1", presenceBishop: true} },
        {class: "", texte: `Le prêtre découvre enfin totalement la Croix, il l’élève une troisième fois en chantant : <span style="color: #000;">Voici le bois de la Croix…</span>, et on fait de nouveau comme la première fois.`, type: "rubrique", conditions: {croix:"1", presenceBishop:false} },
        {class: "", texte: `L'évêque découvre enfin totalement la Croix, il l’élève une troisième fois en chantant : <span style="color: #000;">Voici le bois de la Croix…</span>, et on fait de nouveau comme la première fois.`, type: "rubrique", conditions: {croix:"1", presenceBishop:true} },
        {class: "", texte: `<span style="color: #000; font-style: italic;">Deuxième forme</span>`, type: "rubrique", conditions: {croix:"2"} },
        {class: "", texte: `Le prêtre ou le diacre ou un autre ministre idoine, accompagné des autres ministres, se rend près de la porte de l’église où il prend la Croix non voilée, les autres ministres prennent les cierges allumés, et tous s’avancent en procession à travers l’église vers le sanctuaire.`, type: "rubrique", conditions: {croix:"2", presenceBishop: false, presenceDiacre: true} },
        {class: "", texte: `L'évêque ou le diacre ou un autre ministre idoine, accompagné des autres ministres, se rend près de la porte de l’église où il prend la Croix non voilée, les autres ministres prennent les cierges allumés, et tous s’avancent en procession à travers l’église vers le sanctuaire.`, type: "rubrique", conditions: {croix:"2", presenceBishop: true, presenceDiacre: true} },
        {class: "", texte: `Le prêtre ou un autre ministre idoine, accompagné des autres ministres, se rend près de la porte de l’église où il prend la Croix non voilée, les autres ministres prennent les cierges allumés, et tous s’avancent en procession à travers l’église vers le sanctuaire.`, type: "rubrique", conditions: {croix:"2", presenceBishop: true, presenceDiacre: false} },
        {class: "", texte: `L'évêque ou un autre ministre idoine, accompagné des autres ministres, se rend près de la porte de l’église où il prend la Croix non voilée, les autres ministres prennent les cierges allumés, et tous s’avancent en procession à travers l’église vers le sanctuaire.`, type: "rubrique", conditions: {croix:"2", presenceBishop: true, presenceDiacre: false} },
        {class: "", texte: `Près de la porte, puis au milieu de l’église, enfin devant l’entrée du sanctuaire, celui qui porte la Croix l’élève en chantant\u00A0:`, type: "rubrique", conditions: {croix:"2"} },
        {class: "indent1all indentallg", texte: `Voici le bois de la Croix,
        qui a porté le salut du monde.`, type: "dialogueV", conditions: {croix:"2"} },
        {class: "indent1g", texte: `Venez, adorons !`, type: "dialogueR", conditions: {croix:"2"} },
        {class: "", texte: `Après chacune de ces réponses, tous s’agenouillent et adorent en silence durant quelques instants`, type: "rubrique", conditions: {croix:"2"} },
        {texte: `<span style="font-weight: bold;">Adoration de la sainte Croix</span>`, type: "h4", conditions: {} },
        {class: "", texte: `Ensuite, accompagné de deux ministres portant des cierges allumés, le prêtre ou un diacre porte la croix jusqu’à l’entrée du sanctuaire ou jusqu’à un autre lieu adapté, et là, il la dépose ou la remet à des ministres qui la soutiennent, les cierges ayant été déposés à droite et à gauche.`, type: "rubrique", conditions: {presenceBishop: false, presenceDiacre: true} },
        {class: "", texte: `Ensuite, accompagné de deux ministres portant des cierges allumés, l'évêque ou un diacre porte la croix jusqu’à l’entrée du sanctuaire ou jusqu’à un autre lieu adapté, et là, il la dépose ou la remet à des ministres qui la soutiennent, les cierges ayant été déposés à droite et à gauche.`, type: "rubrique", conditions: {presenceBishop: true, presenceDiacre: true} },
        {class: "", texte: `Ensuite, accompagné de deux ministres portant des cierges allumés, le prêtre porte la croix jusqu’à l’entrée du sanctuaire ou jusqu’à un autre lieu adapté, et là, il la dépose ou la remet à des ministres qui la soutiennent, les cierges ayant été déposés à droite et à gauche.`, type: "rubrique", conditions: {presenceBishop: false, presenceDiacre: false} },
        {class: "", texte: `Ensuite, accompagné de deux ministres portant des cierges allumés, l'évêque porte la croix jusqu’à l’entrée du sanctuaire ou jusqu’à un autre lieu adapté, et là, il la dépose ou la remet à des ministres qui la soutiennent, les cierges ayant été déposés à droite et à gauche.`, type: "rubrique", conditions: {presenceBishop: true, presenceDiacre: false} },
        {class: "", texte: `Pour l’adoration de la Croix, le prêtre célébrant s’avance le premier, après avoir enlevé la chasuble et, éventuellement, s’être déchaussé. Ensuite, le clergé, les ministres laïcs et les fidèles s’avancent comme en procession, et rendent hommage à la Croix soit par une simple génuflexion, soit par un autre signe adapté, selon l’usage de la région, par exemple en l’embrassant.`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `Pour l’adoration de la Croix, l'évêque célébrant s’avance le premier, après avoir enlevé la chasuble et, éventuellement, s’être déchaussé. Ensuite, le clergé, les ministres laïcs et les fidèles s’avancent comme en procession, et rendent hommage à la Croix soit par une simple génuflexion, soit par un autre signe adapté, selon l’usage de la région, par exemple en l’embrassant.`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "", texte: `On ne présente qu’une seule croix à l’adoration. Si, du fait d'un très grand nombre de fidèles, il était trop long de faire passer chacun d'entre eux devant cette seule croix, on agirait de la façon suivante : lorsqu’un certain nombre de participants, clergé et fidèles, auront pu faire l’adoration, le prêtre prendra la Croix et, en se tenant au milieu, devant l’autel, il invitera en quelques mots l’assemblée à adorer la sainte Croix. Puis il élèvera celle-ci durant un peu de temps pour la présenter à l’adoration silencieuse des fidèles.`, type: "rubrique", conditions: {presenceBishop: false} },
        {class: "", texte: `On ne présente qu’une seule croix à l’adoration. Si, du fait d'un très grand nombre de fidèles, il était trop long de faire passer chacun d'entre eux devant cette seule croix, on agirait de la façon suivante : lorsqu’un certain nombre de participants, clergé et fidèles, auront pu faire l’adoration, l'évêque prendra la Croix et, en se tenant au milieu, devant l’autel, il invitera en quelques mots l’assemblée à adorer la sainte Croix. Puis il élèvera celle-ci durant un peu de temps pour la présenter à l’adoration silencieuse des fidèles.`, type: "rubrique", conditions: {presenceBishop: true} },
        {class: "", texte: `Pendant qu’on célèbre l’adoration de la sainte Croix, on chante l’antienne <span style="color: #000; font-style: italic;">Crucem tuam</span>, les Impropères, l’hymne <span style="color: #000; font-style: italic;">Crux fidelis</span> ou d’autres chants adaptés. Revenu à sa place, chacun s’assied.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Si les conditions de lieux ou les traditions populaires s’y prêtent et si la situation pastorale le permet, on peut chanter le Stabat Mater selon le Graduel romain, ou un autre chant adapté faisant mémoire de la compassion de la Bienheureuse Vierge Marie.`, type: "rubrique", conditions: {} },
        {class: "", texte: `L’adoration étant achevée, le diacre ou un ministre porte la Croix à sa place près de l’autel. Les cierges allumés sont déposés autour ou sur l’autel ou près de la Croix.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `L’adoration étant achevée, un ministre porte la Croix à sa place près de l’autel. Les cierges allumés sont déposés autour ou sur l’autel ou près de la Croix.`, type: "rubrique", conditions: {presenceDiacre: false} },
        
        {class: "", texte: `TROISIÈME PARTIE`, type: "h2", conditions: {} },
        {class: "", texte: `SAINTE COMMUNION`, type: "h3", conditions: {} },
        {class: "", texte: `On met la nappe sur l’autel. On y place le corporal et le Missel. Entre-temps un diacre ayant revêtu le voile huméral, va prendre le Saint-Sacrement au lieu où on l’a déposé la veille. Il revient à l’autel par le chemin le plus direct, tandis que tous se tiennent debout en silence. Deux ministres accompagnent le Saint-Sacrement avec des cierges allumés qu’ils déposent près de l’autel ou sur celui-ci.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `On met la nappe sur l’autel. On y place le corporal et le Missel. Entre-temps le prêtre ayant revêtu le voile huméral, va prendre le Saint-Sacrement au lieu où on l’a déposé la veille. Il revient à l’autel par le chemin le plus direct, tandis que tous se tiennent debout en silence. Deux ministres accompagnent le Saint-Sacrement avec des cierges allumés qu’ils déposent près de l’autel ou sur celui-ci.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: false} },
        {class: "", texte: `On met la nappe sur l’autel. On y place le corporal et le Missel. Entre-temps l'évêque ayant revêtu le voile huméral, va prendre le Saint-Sacrement au lieu où on l’a déposé la veille. Il revient à l’autel par le chemin le plus direct, tandis que tous se tiennent debout en silence. Deux ministres accompagnent le Saint-Sacrement avec des cierges allumés qu’ils déposent près de l’autel ou sur celui-ci.`, type: "rubrique", conditions: {presenceDiacre: false, presenceBishop: true} },
        {class: "", texte: `Lorsque le diacre a placé le Saint-Sacrement sur l’autel et découvert le ciboire, le prêtre s’approche, il monte à l’autel et fait la génuflexion.`, type: "rubrique", conditions: {presenceBishop:false, presenceDiacre: true} },
        {class: "", texte: `Lorsque le diacre a placé le Saint-Sacrement sur l’autel et découvert le ciboire, l'évêque s’approche, il monte à l’autel et fait la génuflexion.`, type: "rubrique", conditions: {presenceBishop:true, presenceDiacre: true} },
        { id:"NotrePère", class:"no-print", texte: ``, type: "h3", conditions: {} },
        {class: "", texte: `Ensuite le prêtre dit à voix haute, les mains jointes\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
        {class: "", texte: `Ensuite l'évêque dit à voix haute, les mains jointes\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
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
        et donne la paix à notre temps\u00A0:`, type: "dialogueV", conditions: {} },
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
        { texte: `Puis, les mains jointes, le prêtre dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:false} },
        { texte: `Puis, les mains jointes, l'évêque dit tout bas\u00A0:`, type: "rubrique", conditions: {secret: true, presenceBishop:true} },
        {class: "lettrine indent1allg", texte: `Seigneur Jésus Christ,`, type: "voixbasse", conditions: {secret: true} },
        {class: "indent1allg", texte: `que cette communion à ton Corps et à ton Sang
        n’entraîne pour moi ni jugement ni condamnation ;`, type: "voixbasse", conditions: {secret: true} },
        {class: "indent1allg", texte: `mais que, par ta bonté, elle soutienne mon esprit et mon corps
        et me donne la guérison.`, type: "voixbasse", conditions: {secret: true} },

        {class:"", texte: `\n`, type: "", conditions: {hideRubriques:true} },
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
        {class: "", texte: `Puis le prêtre distribue ensuite la communion aux fidèles. Pendant la communion on peut chanter le psaume 21 ou un autre chant approprié.`, type: "rubrique", conditions: {presenceBishop:false} },
        {class: "", texte: `Puis l'évêque distribue ensuite la communion aux fidèles. Pendant la communion on peut chanter le psaume 21 ou un autre chant approprié.`, type: "rubrique", conditions: {presenceBishop:true} },
        {class: "", texte: `Lorsque la distribution de la communion est achevée, le diacre ou un autre ministre désigné pour cela porte le ciboire à l’endroit qui a été préparé en dehors de l’église elle-même, ou bien, si les circonstances le demandent, il le dépose dans le tabernacle.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Lorsque la distribution de la communion est achevée, le prêtre ou un autre ministre désigné pour cela porte le ciboire à l’endroit qui a été préparé en dehors de l’église elle-même, ou bien, si les circonstances le demandent, il le dépose dans le tabernacle.`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "", texte: `Puis le prêtre, après avoir observé le temps de silence qui convient, dit : <span style="color: #000;">Prions le Seigneur</span>, et il dit la Prière après la communion.`, type: "rubrique", conditions: {presenceBishop:false} },
        {class: "", texte: `Puis l'évêque, après avoir observé le temps de silence qui convient, dit : <span style="color: #000;">Prions le Seigneur</span>, et il dit la Prière après la communion.`, type: "rubrique", conditions: {presenceBishop:true} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        tu nous as renouvelés`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `par la mort et la résurrection bienheureuse de ton Christ ; <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "", texte: `entretiens en nous l’oeuvre de ta miséricorde : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que notre communion à ce mystère <span style="color: #b30000;">/</span>
        consacre à ton service notre vie tout entière.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Pour le renvoi de l’assemblée, le diacre, ou, à son défaut, le prêtre lui-même peut dire l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction.</span>`, type: "rubrique", conditions: {presenceBishop:false, presenceDiacre:true} },
        {class: "", texte: `Pour le renvoi de l’assemblée, le diacre, ou, à son défaut, l'évêque lui-même peut dire l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction.</span>`, type: "rubrique", conditions: {presenceBishop:true, presenceDiacre:true} },
        {class: "", texte: `Pour le renvoi de l’assemblée, le prêtre peut dire l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction.</span>`, type: "rubrique", conditions: {presenceBishop:false, presenceDiacre:false} },
        {class: "", texte: `Pour le renvoi de l’assemblée, l'évêque peut dire l’invitation : <span style="color: #000;">Inclinez-vous pour la bénédiction.</span>`, type: "rubrique", conditions: {presenceBishop:true, presenceDiacre:false} },
        {class: "", texte: `Puis le prêtre, debout, tourné vers le peuple, et en étendant les mains sur lui, dit cette prière sur le peuple\u00A0:`, type: "rubrique", conditions: {presenceBishop:false} },
        {class: "", texte: `Puis l'évêque, debout, tourné vers le peuple, et en étendant les mains sur lui, dit cette prière sur le peuple\u00A0:`, type: "rubrique", conditions: {presenceBishop:true} },
        {class: "grandelettrine", texte: `Que ta bénédiction, nous t’en prions, Seigneur, 
        descende en abondance sur ton peuple`, type: "dialogueV", conditions: {} },
        {class: "indentallp", texte: `qui a célébré la mort de ton Fils
        dans l’espérance de sa propre résurrection : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `accorde-lui pardon et réconfort,
        augmente sa foi, <span style="color: #b30000;">/</span>
        assure son éternelle rédemption.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Puis tous, après avoir fait une génuflexion à la croix, se retirent en silence.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après la célébration, l’autel est dépouillé. Cependant, on laisse sur lui la croix, avec deux ou quatre chandeliers.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Ceux qui ont participé à la célébration de la Passion ne disent pas les Vêpres.`, type: "rubrique", conditions: {} },
    ],
    },

    "vigilepascale": {
    titre: "Vigile pascale",
    autresrituel: [
        {class: "", texte: `Selon une tradition très ancienne, cette nuit est « une veille en l’honneur du Seigneur » (Ex 12, 42). Elle est ordonnée de telle sorte que, selon la recommandation de l’Évangile (Lc 12, 35 sv.), les fidèles, tenant en main leurs flambeaux allumés, soient semblables à des hommes qui attendent leur maître, afin qu’à son retour il les trouve en train de veiller et les fasse asseoir à sa table.`, type: "rubrique", conditions: {} },
        {class: "", texte: `La Vigile pascale doit se célébrer entièrement de nuit. Elle ne peut commencer avant la tombée de la nuit, et elle doit être achevée avant l’aube du dimanche.`, type: "rubrique", conditions: {} },
        {class: "", texte: `La messe de la Vigile, même si elle est célébrée avant minuit, est la messe pascale du dimanche de Pâques.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Quiconque participe à la messe de la Vigile peut communier une seconde fois à la messe du jour de Pâques. Tout prêtre qui célèbre ou concélèbre la messe de la Vigile peut de nouveau célébrer ou concélébrer la messe du jour de Pâques.`, type: "rubrique", conditions: {} },
        {class: "", texte: `La Vigile pascale tient lieu de l’Office des lectures.`, type: "rubrique", conditions: {} },
        {class: "", texte: `On prépare des cierges pour tous ceux qui vont participer à la Vigile. Toutes les lumières de l’église sont éteintes.`, type: "rubrique", conditions: {} },
        {class: "", texte: `On ne confiera de cierge aux servants qu'après avoir jugé de leur aptitude à le porter avec dignité. Lors d'une longue vigile, on veillera à ce que ces cierges ne deviennent pas une occasion de distraction pour l'assemblée.`, type: "servants", conditions: {} },
        {class: "", texte: `OUVERTURE SOLENNELLE DE LA VIGILE
        ou : OFFICE DE LA LUMIÈRE`, type: "h1", conditions: {} },
        {class: "", texte: `<span style="font-weight: bold;">Bénédiction du feu et préparation du cierge</span>`, type: "h3", conditions: {} },
        { texte: `Pas de <b>cruciféraire</b> pour la bénédiction du feu et pour la procession`, type:"servants", conditions: {cruciferaire: true, ceroferaire: false}},
        { texte: `Pas de <b>céroféraire</b> pour la bénédiction du feu et pour la procession`, type:"servants", conditions: {ceroferaire: true, cruciferaire: false}},
        { texte: `Pas de <b>cruciféraire</b> ni de <b>céroféraire</b> pour la bénédiction du feu et pour la procession`, type:"servants", conditions: {ceroferaire: true, cruciferaire: true}},
        {class: "", texte: `À l’endroit qui convient, hors de l’église, on prépare un feu. Lorsque le peuple est rassemblé en cet endroit, le prêtre s’y rend avec les ministres dont l’un porte le cierge pascal. On ne porte pas la croix de procession ni les luminaires.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Là où il n’est pas possible d’allumer un feu en dehors de l’église, on adapte le rite de la bénédiction du feu. Le peuple se rassemble alors à l’intérieur de l’église. Le prêtre, accompagné des ministres portant le cierge pascal, se rend à la porte de l’église. Le peuple, autant que possible, se tourne vers le prêtre.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Le prêtre et les fidèles font le signe de la croix pendant qu’il dit : <span style="color: #000;">Au nom du Père, et du Fils, et du Saint-Esprit</span>. Ensuite, il salue comme à l’ordinaire le peuple rassemblé et lui explique brièvement le sens de la vigile de cette nuit. Il le fait en ces termes ou en d’autres semblables\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `Frères et soeurs bien-aimés,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `en cette nuit très sainte
        où notre Seigneur Jésus Christ est passé de la mort à la vie,
        l’Église invite tous ses enfants disséminés de par le monde
        à se réunir pour veiller et prier.`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `Nous allons donc commémorer la Pâque du Seigneur
        en écoutant sa parole et en célébrant ses mystères ;
        ainsi nous aurons l’espérance d’avoir part à son triomphe sur la mort
        et de vivre avec lui en Dieu.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "", conditions: {} },
        {class: "", texte: `Ensuite le prêtre bénit le feu, en disant, les mains étendues\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu,
        par ton Fils tu as apporté à tes fidèles`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `le feu de ta splendeur ;`, type: "dialogueV", conditions: {} },
        {class: "", texte: `sanctifie ce feu <span style="color: #b30000;">✠</span> nouveau ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `accorde-nous, durant ces fêtes pascales,
        d’être enflammés d’un si grand désir du ciel <span style="color: #b30000;">/</span>
        que nous puissions parvenir, avec un coeur pur,
        aux fêtes de l’éternelle lumière.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Après la bénédiction du feu nouveau, un acolyte ou un autre ministre présente le cierge pascal au prêtre qui préside, et celui-ci, avec un stylet, pratique sur le cierge une incision en forme de croix. Ensuite il trace au-dessus de cette croix la lettre grecque Alpha, au-dessous, la lettre Oméga, et, entre les bras de la croix, les quatre chiffres du millésime de l’année en cours. Il prononce en même temps les paroles suivantes\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">1.</span> Le Christ, hier et aujourd’hui,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le bras vertical)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">2.</span> Commencement et fin de toutes choses,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le bras horizontal)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">3.</span> Alpha`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave au-dessus du bras vertical la lettre A)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">4.</span> et Oméga ;`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave au-dessous du bras vertical la lettre Ω)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">5.</span> à lui, le temps`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le premier chiffre de l’année dans l’angle supérieur gauche de la croix)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">6.</span> et l’éternité,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le second chiffre de l’année dans l’angle supérieur droit de la croix)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">7.</span> à lui, la gloire et la puissance`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le troisième chiffre de l’année dans l’angle inférieur gauche de la croix)`, type: "rubriqueinterne", conditions: {} },
        {class: "", texte: `<span style="color: #b30000;">8.</span> pour les siècles sans fin. Amen.`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `(il grave le quatrième chiffre de l’année dans l’angle inférieur droit de la croix)`, type: "rubriqueinterne", conditions: {} },
                {class: "", texte: `\n`, type: "", conditions: {} },
        {class: "", texte: `Après l'incision en forme de croix et les autres signes, le prêtre peut fixer dans le cierge cinq grains d’encens, qu’il dispose en forme de croix, en disant\u00A0:`, type: "rubrique", conditions: {} },
        {class: "indent1p", texte: `<span style="color: #b30000;">1.</span> Par ses saintes plaies,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `<span style="color: #b30000;">2.</span> ses plaies glorieuses,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `<span style="color: #b30000;">3.</span> que le Christ Seigneur`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `<span style="color: #b30000;">4.</span> nous garde`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `<span style="color: #b30000;">5.</span> et nous protège. Amen.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Le prêtre allume alors le cierge pascal avec une flamme provenant du feu nouveau. Il dit\u00A0:`, type: "rubrique", conditions: {} },
        {class: "indent1all", texte: `Que la lumière du Christ, ressuscitant dans la gloire,
        dissipe les ténèbres de notre coeur et de notre esprit.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `<span style="font-weight: bold;">Procession</span>`, type: "h3", conditions: {} },
        {class:"", texte: `<b>Le thuriféraire</b> apporte l'encensoir au célébrant qui impose l'encens.`, type:"servants", conditions: {incense:true} },
        {class: "", texte: `Le cierge étant allumé, un des ministres prend des charbons ardents du feu et les dépose dans un encensoir, et le prêtre impose l’encens, comme d’habitude. Le diacre reçoit du ministre le cierge pascal et la procession commence.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Le cierge étant allumé, un des ministres prend des charbons ardents du feu et les dépose dans un encensoir, et le prêtre impose l’encens, comme d’habitude. Le ministre qui convient, reçoit du ministre le cierge pascal et la procession commence.`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "", texte: `Le thuriféraire tenant l’encensoir fumant marche devant le diacre qui porte le cierge pascal. Viennent ensuite le prêtre avec les ministres et le peuple, qui portent en mains leurs cierges éteints.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Le thuriféraire tenant l’encensoir fumant marche devant le ministre qui porte le cierge pascal. Viennent ensuite le prêtre avec les ministres et le peuple, qui portent en mains leurs cierges éteints.`, type: "rubrique", conditions: {presenceDiacre: false} },
        { texte: "La procession d'entrée se déroule dans l'ordre suivant :", type:"servants", conditions: {} },
        { texte: "- le thuriféraire avec l'encensoir fumant et le naviculaire à sa droite s'il est droitier (gauche s'il est gaucher) de façon à ce que l'encensoir soit au milieu des deux", type:"servants", conditions: {incense: true}},
        { texte: "- le diacre portant le cierge pascal", type:"servants", conditions: {presenceDiacre: true}},
        { texte: "- le ministre portant le cierge pascal", type:"servants", conditions: {presenceDiacre: false}},
        { texte: "- les servants par ordre de taille", type:"servants", conditions: {}},
        { texte: "- les prêtres concélébrants", type:"servants", conditions: {}},
        { texte: "- le célébrant", type:"servants", conditions: {}},
        { texte: "- les porte-insignes", type:"servants", conditions: {porteinsigne: true}},
        {class: "", texte: `À la porte de l’église, le diacre, se tenant debout et élevant le cierge, chante\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `À la porte de l’église, le ministre, se tenant debout et élevant le cierge, chante\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "indent1g", texte: `Lumière du Christ.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Et tous répondent\u00A0:`, type: "rubriqueinterne", conditions: {} },
        {class: "indent1g", texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Le prêtre allume son cierge à la flamme du cierge pascal.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Ensuite, le diacre avance au milieu de l’église et se tenant debout, il élève le cierge et chante de nouveau\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Ensuite, le ministre avance au milieu de l’église et se tenant debout, il élève le cierge et chante de nouveau\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "indent1g", texte: `Lumière du Christ.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Et tous répondent\u00A0:`, type: "rubriqueinterne", conditions: {} },
        {class: "indent1g", texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
        { texte: "Les servants transmettent aux fidèles la lumière reçue du cierge pascal.", type:"servants", conditions: {}},
        {class: "", texte: `Tous allument leurs cierges à la flamme du cierge pascal et s’avancent.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Lorsque le diacre arrive devant l’autel, il se tient debout, tourné vers le peuple, élève le cierge et chante une troisième fois\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Lorsque le ministre arrive devant l’autel, il se tient debout, tourné vers le peuple, élève le cierge et chante une troisième fois\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "indent1g", texte: `Lumière du Christ.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Et tous répondent\u00A0:`, type: "rubriqueinterne", conditions: {} },
        {class: "indent1g", texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Ensuite le diacre dépose le cierge pascal sur un grand chandelier préparé près de l’ambon ou au milieu du sanctuaire. Et on allume les lumières de l’église, excepté les cierges de l’autel.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Ensuite le ministre dépose le cierge pascal sur un grand chandelier préparé près de l’ambon ou au milieu du sanctuaire. Et on allume les lumières de l’église, excepté les cierges de l’autel.`, type: "rubrique", conditions: {presenceDiacre: false} },
        // A vérifier 
        { texte: "Parvenu devant l'autel, l'évêque remet la crosse et dépose la mitre <b>aux porte-insignes</b>", type:"servants", conditions: {porteinsigne: true}},
        {class: "", texte: `<span style="font-weight: bold;">Annonce de Pâques</span>`, type: "h3", conditions: {} },
        { texte: `<b>Le thuriféraire</b> s'avance, le prêtre met l'encens dans l'encensoir et le bénit sans rien dire.`, type:"servants", conditions: {incense: true, presenceBishop: false}},
        { texte: `<b>Le thuriféraire</b> s'avance, l'évêque met l'encens dans l'encensoir et le bénit sans rien dire.`, type:"servants", conditions: {incense: true, presenceBishop: true}},
        {class: "", texte: `Lorsqu’il parvient à l’autel, le prêtre se rend à son siège, il donne son cierge à un ministre, il impose et bénit l’encens, comme à l’évangile de la messe.`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "", texte: `Lorsqu’il parvient à l’autel, le prêtre se rend à son siège, il donne son cierge à un ministre, il impose et bénit l’encens, comme à l’évangile de la messe. Le diacre se présente au prêtre en disant : <span style="color: #000;">Père bénissez-moi</span>, il demande et reçoit la bénédiction du prêtre qui dit à voix basse\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
        pour que vous puissiez dignement annoncer
        la grande joie de Pâques :
        au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {presenceDiacre: true} },
        { texte: `Le diacre fait le signe de la croix et répond\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        { texte: `Amen.`, type: "voixbasse", conditions: {presenceDiacre: true} },
        { texte: `<b>Le thuriféraire</b> accompagne le ministre à l'ambon.`, type:"servants", conditions: {incense:true}},
        {class: "", texte: `Après avoir encensé le livre et le cierge pascal, le diacre, qui va chanter l’annonce pascale, monte à l’ambon, ou se rend au pupitre, et il commence cette Annonce, tous étant debout et tenant dans leurs mains leurs cierges allumés.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `En l’absence de diacre, l’annonce pascale peut être proclamée, par le prêtre lui-même, ou par un autre prêtre concélébrant. Si cependant, par nécessité, l’Annonce est faite par un chantre laïc, celui-ci omet les paroles depuis <span style="color: #000;">Et vous, mes frères bien-aimés…</span>, jusqu’à la fin de l’invitation. Il omet également la salutation : <span style="color: #000;">Le Seigneur soit avec vous.</span>`, type: "rubrique", conditions: {presenceDiacre: false} },
        {id: "exultet", texte: `\n`, type: "", conditions: {} },
//Exultet 1
        {class: "grandelettrine", texte: `Exultez dans le ciel, multitude des anges !
        Exultez, célébrez les mystères divins !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Résonne, trompette du salut,
        pour la victoire d’un si grand Roi !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Que la terre, elle aussi, soit heureuse,
        irradiée de tant de feux\u00A0:`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `illuminée de la splendeur du Roi éternel,
        qu’elle voie s’en aller l’obscurité
        qui recouvrait le monde entier !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Réjouis-toi, Église notre mère,
        parée d’une lumière si éclatante !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Que retentisse dans ce lieu saint
        l’acclamation de tous les peuples !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `<span style="color: #b30000;">[</span>Et vous, mes frères et soeurs bien-aimés, qui vous tenez ici
        dans l’admirable clarté de cette lumière sainte,`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `invoquez avec moi, je vous prie,
        la miséricorde de Dieu tout-puissant.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Il m’a choisi dans mon indignité
        pour être à son service\u00A0:`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `qu’il répande la clarté de sa lumière,
        pour que je puisse chanter la louange du cierge pascal<span style="color: #b30000;">]</span>`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `<span style="color: #b30000;">[</span>Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Et avec votre esprit.<span style="color: #b30000;">]</span>`, type: "dialogueR", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Élevons notre coeur.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Nous le tournons vers le Seigneur.`, type: "dialogueR", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Rendons grâce au Seigneur notre Dieu.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Cela est juste et bon.`, type: "dialogueR", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "grandelettrine", texte: `Vraiment, il est juste et bon
        de chanter à pleine voix,`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1p", texte: `dans tout l’élan du coeur et de l’esprit,`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `le Père tout-puissant, Dieu invisible,
        et son Fils unique, Jésus Christ, notre Seigneur.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `C’est lui qui a remis pour nous au Père éternel
        le prix de la dette encourue par Adam ;`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `c’est lui qui répandit son sang par amour
        pour effacer la condamnation du premier péché.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Car voici la fête de la Pâque
        dans laquelle est mis à mort l’Agneau véritable
        dont le sang consacre les portes des croyants.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Voici la nuit où tu as tiré d’Égypte
        les enfants d’Israël, nos pères,
        et leur as fait passer la mer Rouge à pied sec.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Voici la nuit où le feu d’une colonne lumineuse
        a dissipé les ténèbres du péché.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Voici la nuit
        qui arrache au monde corrompu, aveuglé par le mal,
        ceux qui, aujourd’hui et dans tout l’univers,
        ont mis leur foi dans le Christ\u00A0:`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `nuit qui les rend à la grâce
        et leur ouvre la communion des saints.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Voici la nuit où le Christ,
        brisant les liens de la mort,
        s’est relevé, victorieux, du séjour des morts.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `À quoi nous servirait-il de naître
        sans le bonheur d’être sauvés ?`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Ô merveilleuse condescendance de ta tendresse envers nous !
        inestimable choix de ton amour :
        pour racheter l’esclave, tu as livré le Fils !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Il fallait le péché d’Adam
        que la mort du Christ abolit.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Ô bienheureuse faute
        qui nous valut pareil Rédempteur !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Ô nuit de vrai bonheur,
        qui seule mérita de connaître le temps et l’heure
        où le Christ a surgi du séjour des morts !`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Voici la nuit dont il est écrit :
        « La nuit resplendira comme le jour ;
        la nuit même est lumière pour ma joie. »`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Car le pouvoir sanctifiant de cette nuit
        chasse les crimes et lave les fautes,
        rend l’innocence aux coupables et l’allégresse aux affligés,
        dissipe la haine, dispose à la concorde et soumet toute puissance.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Dans la grâce de cette nuit,
        accueille, Père très saint, en sacrifice du soir
        (la flamme montant de) cette colonne de cire (oeuvre des abeilles)
        que la sainte Église t’offre par nos mains.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Mais déjà nous savons ce que proclame cette colonne
        qui brûle avec éclat en l’honneur de Dieu\u00A0:`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `quand on en transmet la flamme,
        sa clarté ne diminue pas.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `[Car elle se nourrit de la cire
        produite par l’abeille, comme par une mère,
        pour former la substance de ce précieux luminaire.]`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Ô nuit de vrai bonheur,
        nuit où le ciel s’unit à la terre,
        où l’homme rencontre Dieu.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Aussi nous t’en prions, Seigneur\u00A0:`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `permets que ce cierge consacré en l’honneur de ton nom
        brûle sans déclin pour dissiper les ténèbres de cette nuit.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Qu’il te soit d’un parfum agréable
        et joigne sa clarté à celle des étoiles.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Qu’il brûle encore quand se lèvera l’astre du matin,
        cet astre sans pareil qui ne connaît pas de couchant,`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `le Christ, ton Fils, revenu du séjour des morts,
        qui répand sur le genre humain sa lumière et sa paix,`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {exultet:"1"} },
        {class: "indent1all", texte: `Amen.`, type: "dialogueR", conditions: {exultet:"1"} },
//Exultet 2
        {class: "grandelettrine", texte: `Exultez dans le ciel, multitude des anges !
        Exultez, célébrez les mystères divins !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Résonne, trompette du salut,
        pour la victoire d’un si grand Roi !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Que la terre, elle aussi, soit heureuse,
        irradiée de tant de feux\u00A0:`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `illuminée de la splendeur du Roi éternel,
        qu’elle voie s’en aller l’obscurité
        qui recouvrait le monde entier !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Réjouis-toi, Église notre mère,
        parée d’une lumière si éclatante !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Que retentisse dans ce lieu saint
        l’acclamation de tous les peuples !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `<span style="color: #b30000;">[</span>Le Seigneur soit avec vous.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Et avec votre esprit.<span style="color: #b30000;">]</span>`, type: "dialogueR", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Élevons notre coeur.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Nous le tournons vers le Seigneur.`, type: "dialogueR", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Rendons grâce au Seigneur notre Dieu.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Cela est juste et bon.`, type: "dialogueR", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "grandelettrine", texte: `Vraiment, il est juste et bon
        de chanter à pleine voix,`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1p", texte: `dans tout l’élan du coeur et de l’esprit,`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `le Père tout-puissant, Dieu invisible,
        et son Fils unique, Jésus Christ, notre Seigneur.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `C’est lui qui a remis pour nous au Père éternel
        le prix de la dette encourue par Adam ;`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `c’est lui qui répandit son sang par amour
        pour effacer la condamnation du premier péché.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Car voici la fête de la Pâque
        dans laquelle est mis à mort l’Agneau véritable
        dont le sang consacre les portes des croyants.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Voici la nuit où tu as tiré d’Égypte
        les enfants d’Israël, nos pères,
        et leur as fait passer la mer Rouge à pied sec.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Voici la nuit où le feu d’une colonne lumineuse
        a dissipé les ténèbres du péché.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Voici la nuit
        qui arrache au monde corrompu, aveuglé par le mal,
        ceux qui, aujourd’hui et dans tout l’univers,
        ont mis leur foi dans le Christ\u00A0:`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `nuit qui les rend à la grâce
        et leur ouvre la communion des saints.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Voici la nuit où le Christ,
        brisant les liens de la mort,
        s’est relevé, victorieux, du séjour des morts.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Ô merveilleuse condescendance de ta tendresse envers nous !
        inestimable choix de ton amour :
        pour racheter l’esclave, tu as livré le Fils !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Il fallait le péché d’Adam
        que la mort du Christ abolit.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Ô bienheureuse faute
        qui nous valut pareil Rédempteur !`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Car le pouvoir sanctifiant de cette nuit
        chasse les crimes et lave les fautes,
        rend l’innocence aux coupables et l’allégresse aux affligés.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Ô nuit de vrai bonheur,
        nuit où le ciel s’unit à la terre,
        où l’homme rencontre Dieu.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Dans la grâce de cette nuit,
        accueille, Père saint, en sacrifice du soir
        (la flamme montant de) cette colonne de cire (oeuvre des abeilles)
        que la sainte Église t’offre par nos mains.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Aussi nous t’en prions, Seigneur\u00A0:`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `permets que ce cierge consacré en l’honneur de ton nom
        brûle sans déclin pour dissiper les ténèbres de cette nuit.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Qu’il te soit d’un parfum agréable
        et joigne sa clarté à celle des étoiles.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Qu’il brûle encore quand se lèvera l’astre du matin,
        cet astre sans pareil qui ne connaît pas de couchant,`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `le Christ, ton Fils, revenu du séjour des morts,
        qui répand sur le genre humain sa lumière et sa paix,`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {exultet:"2"} },
        {class: "indent1all", texte: `Amen.`, type: "dialogueR", conditions: {exultet:"2"} },
        { texte: `<b>Le thuriféraire</b> retourne à sa place`, type:"servants", conditions: {incense:true}},
//Liturgie de la parole
        {class: "", texte: `LITURGIE DE LA PAROLE`, type: "h1", conditions: {} },
        {class: "", texte: `En cette Vigile qui est « la mère de toutes les Vigiles », sont proposées neuf lectures, à savoir sept de l’Ancien Testament et deux du Nouveau (l’épître et l’évangile). Ces lectures doivent être lues partout où c’est possible, pour que soit conservée la nature de la Vigile qui exige une longue durée.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Cependant, pour de graves raisons d’ordre pastoral, on peut réduire le nombre des lectures de l’Ancien Testament ; mais on respectera toujours la règle selon laquelle la Parole de Dieu constitue un élément fondamental de la Vigile dans la nuit de Pâques. On fera donc au moins trois lectures de l’Ancien Testament, tirées de la Loi et des Prophètes, et l’on chantera leurs psaumes responsoriaux respectifs. On n’omettra jamais le récit du chap. 4 de l’Exode (3e lecture), avec son cantique.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après avoir déposé leurs cierges, tous s’assoient. Avant le commencement des lectures, le prêtre s’adresse au peuple dans les termes suivants ou en d’autres semblables\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "indent1all", texte: `Frères et soeurs bien-aimés,
        nous voici entrés dans la Vigile solennelle :
        écoutons maintenant d’un coeur paisible la Parole de Dieu.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "indent1all", texte: `Méditons, et voyons comment, dans les temps passés,
        Dieu a sauvé son peuple,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `et comment dans ces temps qui sont les derniers,
        il nous a envoyé son Fils comme Rédempteur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "indent1all", texte: `Demandons à notre Dieu
        de conduire jusqu’à son plein achèvement
        cette oeuvre de salut inaugurée dans le mystère de Pâques.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Ensuite commencent les lectures. Un lecteur monte à l’ambon et proclame la première lecture. La lecture achevée, un psalmiste ou un chantre monte à son tour à l’ambon pour chanter un psaume, auquel le peuple s’associe par un répons. Tous se lèvent ensuite, et le prêtre dit : <span style="color: #000;">Prions le Seigneur</span>. Après que tous ont prié quelque temps en silence, il dit l’oraison répondant à la lecture. On peut même remplacer le psaume responsorial par un temps de silence et, dans ce cas, on omet la pause après <span style="color: #000;">Prions le Seigneur</span>.`, type: "rubrique", conditions: {} },
        {class: "", texte: `<span style="font-weight: bold;">Prières après les lectures</span>`, type: "h3", conditions: {} },
//Lecture 1        
        {class: "", texte: `PREMIÈRE LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après le récit de la création (Gn 1, 1–2, 2 ou Gn 1, 1.26-31a) et le psaume (103 ou 32), le prêtre dit au choix l’une des deux prières suivantes. La seconde est dite de préférence après la lecture brève qui ne traite que de la création de l’homme.`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        toi qui es admirable dans la réalisation de toutes tes oeuvres, <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "", texte: `donne à ceux que tu as rachetés`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `de comprendre que le sacrifice du Christ, notre Pâque,
        à la plénitude des temps, <span style="color: #b30000;">/</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `est une oeuvre plus merveilleuse encore
        que la création au commencement du monde.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `ou bien, au sujet de la création de l’homme`, type: "rubriqueinterne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        tu as créé l’être humain d’une manière admirable`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `et tu l’as racheté d’une manière plus admirable encore ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "", texte: `nous t’en prions,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `donne-nous de résister aux attraits du péché
        par un esprit de sagesse, <span style="color: #b30000;">/</span>
        et de parvenir ainsi aux joies éternelles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 2
        {class: "", texte: `DEUXIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après le récit du sacrifice d’Abraham (Gn 22, 1-18 ou Gn 22, 1-2.9a.10-13.15-18) et le psaume (15), le prêtre dit la prière suivante\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Dieu très-haut, Père des croyants,
        en répandant la grâce de l’adoption,`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `tu multiplies sur toute la terre les fils de ta promesse ; <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `par le mystère pascal, tu établis ton serviteur Abraham
        père de toutes les nations,
        comme tu en as fait le serment ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `accorde aux peuples qui t’appartiennent <span style="color: #b30000;">/</span>
        la grâce d’entrer dignement dans cet appel.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 3
        {class: "", texte: `TROISIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après le récit du passage de la mer Rouge, lecture qui doit toujours être faite (Ex 14, 15–15, 1a) et son cantique (Ex 15), le prêtre dit au choix l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Maintenant encore, Seigneur Dieu,
        nous voyons resplendir tes merveilles d’autrefois : <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `alors que jadis, par ta main puissante,
        tu as délivré un seul peuple de la poursuite de Pharaon,
        tu assures désormais le salut de toutes les nations
        en les faisant renaître par les eaux du baptême ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `fais que tous, de par le monde,
        deviennent des fils d’Abraham <span style="color: #b30000;">/</span>
        et accèdent à la dignité des enfants d’Israël.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `ou bien`, type: "rubriqueinterne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        dans la lumière de la Nouvelle Alliance,`, type: "dialogueV", conditions: {} },
        {class: "indent1allp", texte: `tu as donné leur sens
        aux merveilles accomplies autrefois\u00A0:`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `on reconnaît dans la mer Rouge
        l’image de la fontaine baptismale,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `et le peuple délivré de la servitude
        préfigure les sacrements du peuple chrétien ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `fais que toutes les nations, grâce à la foi,
        participent au privilège d’Israël, <span style="color: #b30000;">/</span>
        et soient régénérées en recevant ton Esprit.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 4
        {class: "", texte: `QUATRIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après l’oracle d’Isaïe sur la nouvelle Jérusalem (Is 54, 5-14) et le psaume (29), le prêtre dit la prière suivante, ou celle qui suit la 5e, la 6e ou la 7e lecture, s’il est prévu d’omettre telle de ces lectures.`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        pour l’honneur de ton nom,`, type: "dialogueV", conditions: {} },
        {class: "indent1allp", texte: `multiplie la postérité promise à nos pères
        à cause de leur foi ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `augmente, selon ta promesse,
        le nombre de tes enfants d’adoption, <span style="color: #b30000;">/</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `afin que l’Église reconnaisse à quel point s’accomplit déjà
        ce que les saints patriarches avaient vu d’avance.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 5
        {class: "", texte: `CINQUIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après l’oracle d’Isaïe sur le salut offert à tous gratuitement (Is 55, 1-11) et le cantique (Is 12), le prêtre dit la prière suivante\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant,
        unique espoir du monde, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `toi qui annonçais par la voix des prophètes
        les mystères qui s’accomplissent en ce temps présent, <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `dans ta bonté, fais grandir les désirs de ton peuple, <span style="color: #b30000;">/</span>
        car, sans ton inspiration,
        aucun de tes fidèles ne peut progresser en vertu.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 6
        {class: "", texte: `SIXIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après l’oracle de Baruc sur la source de la sagesse (Ba 3, 9-15.32–4,4) et le psaume (18), le prêtre dit la prière suivante\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        tu ne cesses de faire grandir ton Église`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `en appelant à elle toutes les nations ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `dans ta bonté, nous te le demandons :
        garde sous ta constante protection <span style="color: #b30000;">/</span>
        ceux que tu purifies dans l’eau du baptême.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Lecture 7
        {class: "", texte: `SEPTIÈME LECTURE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après l’oracle d’Ézékiel sur le coeur nouveau et l’esprit nouveau (Ez 36, 16-28) et le psaume 41–42), le prêtre dit l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu,
        puissance inaltérable et lumière sans déclin, <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `regarde avec bonté
        le sacrement que constitue l’Église entière. <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `Comme tu l’as prévu de toute éternité,
        poursuis dans la paix l’oeuvre du salut de l’humanité ;`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `que le monde entier éprouve et reconnaisse la merveille : <span style="color: #b30000;">/</span>
        ce qui était abattu est relevé,
        ce qui avait vieilli est rénové,
        et tout retrouve son intégrité première
        en celui qui est le principe de tout : le Christ.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `ou bien`, type: "rubriqueinterne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        tu veux nous former à célébrer le mystère pascal`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `en nous faisant écouter l’Ancien et le Nouveau Testament ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `ouvre-nous à l’intelligence de ta miséricorde : <span style="color: #b30000;">/</span>
        ainsi la conscience des grâces déjà reçues
        affermira en nous l’espérance des biens à venir.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
//Hymne
        {class: "", texte: `HYMNE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Après la dernière lecture de l’Ancien Testament, son psaume responsorial et son oraison, on allume les cierges de l’autel, le prêtre entonne le Gloria que tous chantent ou disent, tandis que les cloches sonnent, si du moins les conditions locales le permettent.`, type: "rubrique", conditions: {} },
        { id:"gloria", texte: "", type: "rubriqueinterne", conditions: {}},
        { type: "dialogueV", conditions: {glorialatin: false}, class:"grandelettrine",
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

        { type: "dialogueV", conditions: {glorialatin: true} , class:"grandelettrine",
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
        {class: "", texte: `\n`, type: "dialogueV", conditions: {} },
        {class: "", texte: `PRIÈRE`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "grandelettrine", texte: `Seigneur Dieu, <span style="color: #b30000;">+</span>
        tu fais resplendir cette nuit très sainte`, type: "dialogueV", conditions: {} },
        {class: "indent1p", texte: `par la gloire de la résurrection du Seigneur ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `ravive en ton Église l’esprit qui fait de nous des fils,
        afin que, renouvelés dans notre corps et notre âme, <span style="color: #b30000;">/</span>
        nous te rendions le culte véritable.`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `Par Jésus Christ, ton Fils, notre Seigneur, <span style="color: #b30000;">+</span>
        qui vit et règne avec toi dans l’unité du Saint-Esprit, <span style="color: #b30000;">/</span>
        Dieu, pour les siècles des siècles.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `ÉPÎTRE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Le lecteur proclame la lecture de la lettre de saint Paul (Rm 6, 3-11).`, type: "rubrique", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `ALLÉLUIA`, type: "rubrique", conditions: {} },
        {class: "", texte: `Quand la lecture de l’épître est terminée, tous se lèvent, et le prêtre entonne trois fois solennellement l’<span style="color: #000;">Alléluia</span>, en prenant un ton de plus en plus élevé. Tous reprennent. Si c’est nécessaire le psalmiste entonne l’<span style="color: #000;">Alléluia</span> à la place du prêtre.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Alléluia.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Ensuite un psalmiste ou un chantre, à l’ambon, chante le Psaume 117, auquel le peuple répond`, type: "rubrique", conditions: {} },
        {class: "", texte: `Alléluia`, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `ÉVANGILE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Le prêtre, comme d’habitude, impose l’encens et bénit le diacre. Dans la procession de l’Évangile, on ne porte pas les flambeaux, mais seulement l’encens.`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class: "", texte: `Le prêtre, comme d’habitude, impose l’encens. Dans la procession de l’Évangile, on ne porte pas les flambeaux, mais seulement l’encens.`, type: "rubrique", conditions: {presenceDiacre: false} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `HOMÉLIE`, type: "rubrique", conditions: {} },
        {class: "", texte: `Aussitôt après l’évangile, que l’homélie ne soit jamais omise, même si elle est brève.`, type: "rubrique", conditions: {} },
//Liturgie baptismale
                {texte: `LITURGIE BAPTISMALE`, type: "h1", conditions: {} },
        {id: "liturgiebaptismale", texte: ``, type: "h3", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Après l’homélie, on invite les catéchumènes à s’approcher de la fontaine baptismale. Les adultes sont accompagnés par leurs parrains et marraines ; les enfants, par leurs parents, leurs parrains et marraines ; les tout-petits sont portés par leurs parents accompagnés des parrains et marraines, devant l’assemblée.`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `S’il y a une procession vers le baptistère, ou vers les fonts baptismaux, aussitôt on commence la procession. Le ministre avec le cierge pascal précède ; viennent ensuite ceux qui doivent être baptisés accompagnés de leurs parrains et marraines, ensuite les ministres, le diacre et le prêtre.`, type: "rubrique", conditions: {litbap: "A", presenceDiacre: true} },
        {class: "", texte: `S’il y a une procession vers le baptistère, ou vers les fonts baptismaux, aussitôt on commence la procession. Le ministre avec le cierge pascal précède ; viennent ensuite ceux qui doivent être baptisés accompagnés de leurs parrains et marraines, ensuite les ministres et le prêtre.`, type: "rubrique", conditions: {litbap: "A", presenceDiacre: false} },
        {class: "", texte: `S’il y a une procession vers le baptistère, ou vers les fonts baptismaux, aussitôt on commence la procession. Le ministre avec le cierge pascal précède.`, type: "rubrique", conditions: {litbap: "B"} },
        {class: "", texte: `Si la procession pour se rendre aux fonts baptismaux est assez longue, les Litanies sont chantées pendant la procession ; dans ce cas, l’appel des catéchumènes se fait avant la procession.`, type: "rubrique", conditions: {litbap: "A"} },
        {class: "", texte: `Si la procession pour se rendre aux fonts baptismaux est assez longue, les Litanies sont chantées pendant la procession.`, type: "rubrique", conditions: {litbap: "B"} },
        {class: "", texte: `<span style="font-weight: bold;">Monition</span>`, type: "h3", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Le prêtre fait la monition d’introduction en ces termes ou d’autres semblables\u00A0:`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Frères et soeurs bien-aimés,`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "indent1all", texte: `en priant tous ensemble
        pour ceux d’entre nous qui vont être baptisés,
        soutenons leur espérance.`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "indent1all", texte: `Tandis qu’ils s’approchent de la fontaine baptismale
        où ils vont naître à la vie nouvelle,
        demandons au Père tout-puissant
        de les entourer de toute sa miséricorde.`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "", texte: `Frères et soeurs bien-aimés,`, type: "dialogueV", conditions: {litbap: "B"} },
        {class: "indent1all", texte: `supplions Dieu, le Père tout-puissant,
        de sanctifier par sa grâce cette fontaine baptismale,`, type: "dialogueV", conditions: {litbap: "B"} },
        {class: "indent1all", texte: `et de compter au nombre de ses enfants d’adoption dans le Christ
        ceux qui renaîtront par le baptême.`, type: "dialogueV", conditions: {litbap: "B"} },
        {class: "", texte: `<span style="font-weight: bold;">Litanies</span>`, type: "h3", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Les litanies sont chantées par deux chantres. Tous se tiennent debout (en raison du Temps pascal) et répondent aux invocations.`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Dans les litanies, on peut ajouter quelques noms à la liste des saints, notamment ceux du titulaire de l’église et des patrons du lieu et ceux des futurs baptisés.`, type: "rubrique", conditions: {litbap: "A"} },
        {class: "", texte: `Dans les litanies, on peut ajouter quelques noms à la liste des saints, notamment ceux du titulaire de l’église et des patrons du lieu`, type: "rubrique", conditions: {litbap: "B"} },
        { texte: "", type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "rubrique", texte: "ou bien"},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Christe, eléison."},
        { type: "dialogueV", texte: "Ô Christ, prends pitié."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Christe, eléison."},
        { type: "dialogueR", texte: "Ô Christ, prends pitié."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Marie, Mère de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Michel,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saints Anges de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Jean Baptiste,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Joseph,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Pierre et saint Paul,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint André,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Jean,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Marie Madeleine,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Étienne,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Ignace d’Antioche,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Laurent,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Perpétue et sainte Félicité,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Agnès,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Grégoire,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Athanase,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Basile,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Martin,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Benoît,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint François et saint Dominique,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint François et saint Dominique,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint François et saint Dominique,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint François Xavier,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Saint Jean-Marie Vianney,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Catherine de Sienne,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Sainte Thérèse d’Avila,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Vous tous, saints et saintes de Dieu,"},
        { type: "dialogueV", texte: "priez pour nous."}]},
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Montre-toi favorable,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "De tout mal,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "De tout péché,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "De la mort éternelle,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Par ton incarnation,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Par ta mort et ta résurrection,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Par le don de l’Esprit Saint,"},
        { type: "dialogueV", texte: "délivre-nous, Seigneur."}]},
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Nous qui sommes pécheurs,"},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        { conditions: {litbap: ["A"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour qu’il te plaise d’accorder à ceux que tu as choisis`}]},
        { conditions: {litbap: ["A"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `la vie nouvelle par la grâce du baptême,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        { conditions: {litbap: ["B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `Pour qu’il te plaise de sanctifier par ta grâce cette eau`}]},
        { conditions: {litbap: ["B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: `d’où renaîtront pour toi de nouveaux enfants,`},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Jésus, Fils du Dieu vivant,"},
        { type: "dialogueV", texte: "de grâce, écoute-nous."}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Ô Christ écoute-nous,"},
        { type: "dialogueV", texte: "Ô Christ écoute-nous,"}]},
        { conditions: {litbap: ["A", "B"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Ô Christ, exauce-nous,"},
        { type: "dialogueV", texte: "Ô Christ, exauce-nous,"}]},
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `À la fin des litanies, le prêtre, étendant les mains, dit cette oraison\u00A0:`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        viens agir dans les sacrements`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1p", texte: `qui révèlent ta grande tendresse ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "indent1all", texte: `envoie ton Esprit d’adoption
        pour recréer des peuples nouveaux
        qui naissent pour toi de la fontaine baptismale : <span style="color: #b30000;">/</span>`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "indent1all", texte: `rends efficaces par ta puissance
        les gestes de notre humble ministère.`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {litbap: "A"} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {litbap: "A"} },
        {class: "", texte: `<span style="font-weight: bold;">Bénédiction de l’eau baptismale</span>`, type: "h3", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Le prêtre bénit ensuite l’eau baptismale, en disant, les mains étendues, la prière suivante\u00A0:`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "grandelettrine", texte: `Seigneur Dieu,
        par ta puissance invisible,`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1allp", texte: `tu accomplis des merveilles dans tes sacrements,
        et, de bien des manières,
        tu as préparé l’eau, ta créature,
        à devenir un signe de la grâce baptismale.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Aux origines du monde,
        ton Esprit planait sur les eaux
        pour qu’elles reçoivent déjà
        la force qui sanctifie.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Par les flots du déluge,
        tu annonçais le baptême qui fait revivre,
        puisque, dans un seul et même mystère,
        l’eau marquait la fin du péché
        et le commencement de la sainteté.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Aux enfants d’Abraham,
        tu as donné de traverser la mer Rouge à pied sec
        pour que cette multitude, libérée de l’esclavage de Pharaon,
        préfigure le peuple des baptisés.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Ton Fils bien-aimé,
        baptisé par Jean dans les eaux du Jourdain,
        a reçu l’onction du Saint-Esprit ;`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `suspendu à la croix,
        il laissa couler de son côté ouvert du sang et de l’eau ;`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `et quand il fut ressuscité, il donna cet ordre à ses disciples :
        « Allez ! Enseignez toutes les nations :
        baptisez-les au nom du Père, et du Fils, et du Saint-Esprit. »`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Maintenant, Seigneur Dieu,
        regarde le visage de ton Église
        et fais jaillir en elle la source du baptême.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Que cette eau reçoive de l’Esprit Saint,
        la grâce de ton Fils unique,`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `afin que, par le sacrement du baptême,
        l’homme, créé à ton image,
        soit lavé de toutes les souillures de sa condition ancienne
        et renaisse de l’eau et de l’Esprit Saint
        pour la vie nouvelle d’enfant de Dieu.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Le ministre peut, si cela lui paraît opportun, plonger le cierge pascal dans l’eau une fois ou trois fois ; 
        puis il continue\u00A0:`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Nous t’en prions, Seigneur\u00A0:`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `par ton Fils,
        que la puissance de l’Esprit Saint
        descende dans l’eau qui remplit cette fontaine`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `(il peut maintenir le cierge dans l’eau)`, type: "rubriqueinterne", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `afin que, par le baptême,`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `tous ceux qui seront ensevelis dans la mort avec le Christ
        ressuscitent avec lui pour la vie.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "indent1all", texte: `Lui qui vit et règne avec toi dans l’unité du Saint-Esprit,
        Dieu, pour les siècles des siècles.`, type: "dialogueV", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `Le cierge est ensuite retiré de l’eau, tandis que le peuple chante l’acclamation\u00A0:`, type: "rubrique", conditions: {litbap: ["A", "B"]} },
        {class: "indentallg", texte: `Fontaines du Seigneur, bénissez le Seigneur !
        À lui, haute gloire, louange éternelle !`, type: "dialogueR", conditions: {litbap: ["A", "B"]} },
        {class: "", texte: `<span style="font-weight: bold;">Baptême et confirmation</span>`, type: "h3", conditions: {litbap: ["A"]} },
        {class: "", texte: `<span style="font-weight: bold;">Renonciation</span>`, type: "h3", conditions: {litbap: ["A"]} },
        {id:"renonciation2", texte: ``, type: "sautdeligne", conditions: {litbap: ["A"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A"]} },
        {class: "", texte: `La bénédiction de l’eau baptismale achevée, et le peuple ayant chanté l’acclamation, le prêtre, debout, interroge les adultes, ainsi que les parents ou les parrains et marraines des petits enfants, pour la renonciation à Satan, comme cela est prévu dans les parties du Rituel romain correspondantes`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Le prêtre interroge tous les élus ensemble, en choisissant l’une des trois formules suivantes. Si cela convient, le prêtre, informé du nom des futurs baptisés par les parrains ou par les marraines, interroge chacun d’eux.`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Pour vivre dans la liberté des enfants de Dieu, renoncez-vous au péché ?`, type: "dialogueV", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `Pour échapper au pouvoir du péché, renoncez-vous à ce qui conduit au mal ?`, type: "dialogueV", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `Pour suivre Jésus Christ, renoncez-vous à Satan, auteur et instigateur du péché ?`, type: "dialogueV", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "1", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous à Satan ?`, type: "dialogueV", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous à toutes ses oeuvres, c’est-à-dire au péché ?`, type: "dialogueV", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous à toutes ses séductions, qui conduisent au péché ?`, type: "dialogueV", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "2", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous aux séductions du monde,
        elles étouffent la Parole de Dieu semée en vous ?`, type: "dialogueV", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous au péché,
        il empêche la parole de Dieu de porter du fruit ?`, type: "dialogueV", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: `Renoncez-vous à Satan, votre ennemi,
        il sème l’ivraie au milieu du bon grain ?`, type: "dialogueV", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation2: "3", litbap: ["A"]} },
        {class: "", texte: ``, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: `<span style="font-weight: bold;">Profession de foi</span>`, type: "h3", conditions: {litbap: ["A"]} },
        {class: "", texte: `Ensuite, le prêtre interroge chaque adulte sur la foi et, s’il y a des petits enfants, il invite tous les parents, parrains et marraines à faire en même temps la triple profession de foi, comme c’est indiqué dans les Rituels respectifs.`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Le prêtre interroge chacun des futurs baptisés. S’ils sont nombreux, la profession de foi peut être faite soit par tous ensemble, soit par groupes.`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Le prêtre :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "grandelettrine", texte: `N<span style="color: #b30000;">.</span>, croyez-vous en Dieu, le Père tout-puissant, 
        créateur du ciel et de la terre ?`, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: `L’élu :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {litbap: ["A"]} },
        {class: "", texte: `Le prêtre :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "indent1all", texte: `Croyez-vous en Jésus Christ, son Fils unique, notre Seigneur,
        qui est né de la Vierge Marie,
        a souffert la passion, a été enseveli,
        est ressuscité d’entre les morts,
        et qui est assis à la droite du Père ?`, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: `L’élu :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {litbap: ["A"]} },
        {class: "", texte: `Le prêtre :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "indent1all", texte: `Croyez-vous en l’Esprit Saint, à la sainte Église catholique,
        à la communion des saints, au pardon des péchés,
        à la résurrection de la chair, et à la vie éternelle ?`, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: `L’élu :`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {litbap: ["A"]} },
        {class: "", texte: `Si, durant cette nuit, il y a de nombreux baptêmes, le rite peut être ordonné de la manière suivante : aussitôt après la réponse de ceux qui doivent être baptisés et celle des parrains et marraine ainsi que des parents, le célébrant demande et reçoit la rénovation de la profession de foi baptismale de tous ceux qui sont présents.`, type: "rubrique", conditions: {litbap: ["A"]} },
        {class: "", texte: `<span style="font-weight: bold;">Rite de l'eau</span>`, type: "h3", conditions: {litbap: ["A"]} },
        {id:"bapteme", texte: ``, type: "sautdeligne", conditions: {litbap: ["A"]} },
        {class: "", texte: `Après les interrogations, le prêtre baptise les adultes et les petits enfants. Le baptême a lieu immédiatement par l’accomplissement du rite de l’eau et l’invocation de la sainte Trinité, en lui versant l’eau sur la tête (ablution).`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `Après les interrogations, le prêtre baptise les adultes et les petits enfants. Le baptême a lieu immédiatement par l’accomplissement du rite de l’eau et l’invocation de la sainte Trinité, en plongeant le catéchumène (immersion).`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `Lors du baptême par ablution, le prêtre puise de l’eau dans les fonts baptismaux et, en la versant par trois fois sur la tête inclinée de l’élu, il le baptise au nom de la sainte Trinité. Le parrain ou la marraine, ou les deux, posent la main droite sur l’épaule droite de celui que l’on baptise.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "grandelettrine", texte: `<span style = "float : none">N<span style="color: #b30000;">.</span>, JE TE BAPTISE AU NOM DU PERE,</span>`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `il verse de l’eau une première fois,`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "indent1p", texte: `ET DU FILS,`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "indent1g", texte: `il verse de l’eau une deuxième fois,`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "indent1p", texte: `ET DU SAINT-ESPRIT.`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "indent1g", texte: `il verse de l’eau une troisième fois.`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `Après chaque baptême, une brève acclamation du peuple est souhaitable.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `Lors du baptême par immersion, soit le corps entier sera plongé, soit la tête seulement ; on veillera à garder les règles de la décence.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `Le parrain ou la marraine, ou les deux, posent la main sur celui que l’on baptise. Le prêtre lui-même le plonge et le relève trois fois, invoquant à chaque fois la sainte Trinité.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "grandelettrine", texte: `<span style = "float : none">N<span style="color: #b30000;">.</span>, JE TE BAPTISE AU NOM DU PERE,</span>`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `il l’immerge une première fois,`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "indent1p", texte: `ET DU FILS,`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "indent1g", texte: `il l’immerge une deuxième fois,`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "indent1p", texte: `ET DU SAINT-ESPRIT.`, type: "dialogueV", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "indent1g", texte: `il l’immerge une troisième fois.`, type: "rubriqueinterne", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `Après chaque baptême, une brève acclamation du peuple est souhaitable.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `Quand les élus sont nombreux, s’il y a plusieurs prêtres ou diacres, ceux qui doivent être baptisés peuvent être répartis entre les divers ministres qui procèdent à l’infusion ; chacun d’eux prononce la formule du baptême en même temps qu’il accomplit le geste. Pendant l’accomplissement de ce rite, il est souhaitable que le peuple chante. On peut aussi lire des textes appropriés ou rester en silence.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "ablution"} },
        {class: "", texte: `Quand les élus sont nombreux, s’il y a plusieurs prêtres ou diacres, ceux qui doivent être baptisés peuvent être répartis entre les divers ministres qui procèdent à l’immersion ; chacun d’eux prononce la formule du baptême en même temps qu’il accomplit le geste. Pendant l’accomplissement de ce rite, il est souhaitable que le peuple chante. On peut aussi lire des textes appropriés ou rester en silence.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: `Après chaque baptême, une brève acclamation du peuple est souhaitable.`, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {id:"bapteme", texte: ``, type: "sautdeligne", conditions: {litbap: ["A"]} },
        {class: "", texte: ``, type: "rubrique", conditions: {litbap: ["A"], bapteme: "immersion"} },
        {class: "", texte: ``, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: ``, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: ``, type: "dialogueV", conditions: {litbap: ["A"]} },
        {class: "", texte: ``, type: "dialogueV", conditions: {litbap: ["A"]} },
//Rituel baptême et confirmation

        {class: "", texte: `<span style="font-weight: bold;">Bénédiction de l’eau</span>`, type: "h3", conditions: {litbap: "C"} },
        {class: "", texte: `Lorsqu’il n’y a pas lieu de bénir de l’eau baptismale (pas de baptême ni de fonts baptismaux à bénir), le prêtre bénit l’eau dont il aspergera le peuple à la fin de la rénovation de la profession de foi baptismale, en disant\u00A0:`, type: "rubrique", conditions: {litbap: "C"} },
        {class: "grandelettrine", texte: `Frères et soeurs bien-aimés,
        supplions humblement Dieu notre Seigneur`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `de bénir cette eau qu’il a créée ;
        nous allons en être aspergés en souvenir de notre baptême ;`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `que Dieu lui-même nous renouvelle
        afin que nous demeurions fidèles à l’Esprit que nous avons reçu.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `Tous prient quelques instants en silence. Puis le prêtre continue, les mains étendues\u00A0:`, type: "rubrique", conditions: {litbap: "C"} },
        {class: "grandelettrine", texte: `Seigneur notre Dieu,
        sois favorable aux prières de ton peuple`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1p", texte: `qui veille en cette nuit très sainte ;`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `alors que nous célébrons la merveille de notre création
        et la merveille plus grande encore de notre rédemption,
        daigne bénir cette eau.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["C"]} },
        {class: "indent1all", texte: `Tu l’as créée pour féconder la terre
        et donner à nos corps fraîcheur et pureté.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `Tu en as fait aussi l’instrument de ta miséricorde\u00A0:`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `par elle tu as libéré ton peuple de la servitude
        et tu as étanché sa soif dans le désert ;`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `par elle les prophètes ont annoncé la nouvelle Alliance
        que tu voulais sceller avec les hommes ;`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "indent1all", texte: `par elle enfin, eau sanctifiée quand le Christ fut baptisé au Jourdain,
        tu as renouvelé notre nature pécheresse
        dans le bain de la nouvelle naissance.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {litbap: ["C"]} },
        {class: "indent1all", texte: `Que cette eau, maintenant,
        nous rappelle notre baptême,
        et nous fasse participer à la joie de nos frères et soeurs,
        les baptisés de Pâques.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {litbap: "C"} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {litbap: "C"} },
//Renouvellement des promesses du baptême
        {class: "", texte: `<span style="font-weight: bold;">Renouvellement des promesses du baptême</span>`, type: "h3", conditions: {} },
        {class: "grandelettrine", texte: `Frères et soeurs bien-aimés,
        par le mystère pascal`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `nous avons été mis au tombeau avec le Christ dans le baptême,
        afin que nous menions avec lui une vie nouvelle.`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `C’est pourquoi, après avoir terminé l’entraînement du Carême,
        renouvelons les promesses faites au moment de notre baptême,
        quand nous avons renoncé à Satan et à ses oeuvres,
        et promis de servir Dieu dans la sainte Église catholique.`, type: "dialogueV", conditions: {} },
        {texte: `Ainsi donc\u00A0:`, type: "dialogueV", conditions: {} },
        {id:"renonciation", texte: ``, type: "sautdeligne", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Pour vivre dans la liberté des enfants de Dieu, renoncez-vous au péché ?`, type: "dialogueV", conditions: {renonciation: "1"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "1"} },
        {class: "", texte: `Pour échapper au pouvoir du péché, renoncez-vous à ce qui conduit au mal ?`, type: "dialogueV", conditions: {renonciation: "1"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "1"} },
        {class: "", texte: `Pour suivre Jésus Christ, renoncez-vous à Satan, auteur et instigateur du péché ?`, type: "dialogueV", conditions: {renonciation: "1"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "1"} },
        {class: "", texte: `Renoncez-vous à Satan ?`, type: "dialogueV", conditions: {renonciation: "2"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
        {class: "", texte: `Renoncez-vous à toutes ses oeuvres, c’est-à-dire au péché ?`, type: "dialogueV", conditions: {renonciation: "2"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
        {class: "", texte: `Renoncez-vous à toutes ses séductions, qui conduisent au péché ?`, type: "dialogueV", conditions: {renonciation: "2"} },
        {class: "", texte: `J’y renonce.`, type: "dialogueR", conditions: {renonciation: "2"} },
        {class: "", texte: ``, type: "dialogueV", conditions: {} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {} },
        {class: "", texte: `Croyez-vous en Dieu le Père tout-puissant, créateur du ciel et de la terre?`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {} },
        {class: "indent1all", texte: `Croyez-vous en Jésus Christ, son Fils unique, notre Seigneur,
        qui est né de la Vierge Marie,
        a souffert la passion, a été enseveli,
        est ressuscité d’entre les morts,
        et qui est assis à la droite du Père ?`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {} },
        {class: "indent1all", texte: `Croyez-vous en l’Esprit Saint, à la sainte Église catholique,
        à la communion des saints, au pardon des péchés,
        à la résurrection de la chair, et à la vie éternelle ?`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Je crois.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Le prêtre conclut\u00A0:`, type: "rubrique", conditions: {} },
        {class: "grandelettrine", texte: `Que Dieu tout-puissant, Père de notre Seigneur Jésus Christ,
        qui nous a fait renaître par l’eau et l’Esprit Saint,`, type: "dialogueV", conditions: {} },
        {class: "", texte: `et qui nous a accordé le pardon des péchés,`, type: "dialogueV", conditions: {} },
        {class: "indent1all", texte: `nous garde encore par sa grâce
        dans le Christ Jésus notre Seigneur
        pour la vie éternelle.`, type: "dialogueV", conditions: {} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {} },
        {class: "", texte: `Ensuite, le prêtre asperge le peuple d’eau bénite (en circulant dans l’église si c’est utile pour la signification du geste). Pendant ce temps, on chante l’antienne <span style="color: #000;">Vidi aquam</span> (<span style="color: #000;">J’ai vu l’eau vive</span>) ou un autre chant baptismal.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Entre-temps, les nouveaux baptisés sont conduits à leur place parmi les fidèles.`, type: "rubrique", conditions: {litbap: "A"} },
        {class: "", texte: `Après l’aspersion, le prêtre revient au siège. On omet le <span style="color: #000;">Credo</span>.`, type: "rubrique", conditions: {} },
        {class: "", texte: `On fait la Prière universelle, à laquelle les nouveaux baptisés participent pour la première fois.`, type: "rubrique", conditions: {litbap: "A"} },
        {class: "", texte: `On fait la Prière universelle`, type: "rubrique", conditions: {litbap: ["B", "C"]} },
//Liturgie eucharistique
    ],
    avantagneau: [{texte: `Avant <span style="color: #000;">Voici l’Agneau de Dieu</span>, le prêtre peut adresser une brève monition aux nouveaux baptisés sur le sens de la première communion qu’ils vont recevoir et sur la valeur d’un tel mystère, sommet de l’initiation et centre de toute la vie chrétienne.`, type: "rubrique", conditions: {litbap: "A"}}],
    offertoire: [{texte: `Il convient que le pain et le vin soient apportés par les nouveaux baptisés ou, si ce sont des petits enfants, par leurs parents ou parrains et marraines.`, type: "rubrique", conditions: {litbap: "A"}}],
    avantlacommunion: [{texte: `Il convient que les nouveaux baptisés reçoivent la sainte Communion sous les deux espèces, avec les parrains, marraines, parents et époux catholiques, ainsi que les catéchistes laïcs. Il convient également, que, avec le consentement de l’évêque diocésain, et si les circonstances s’y prêtent, tous les fidèles soient admis à la sainte Communion sous les deux espèces.`, type: "rubrique", conditions: {litbap: "A"}}],
},

    "rameaux": {
    titre: "DIMANCHE DES RAMEAUX ET DE LA PASSION DU SEIGNEUR",
    autresrituel: [
        {class: "", texte: `Aujourd’hui, l’Église commémore le jour où le Seigneur entra à Jérusalem pour y accomplir son mystère pascal. C’est pourquoi, à toutes les messes, on fait mémoire de cette entrée du Seigneur : avant la messe principale, par la procession ou par l’entrée solennelle ; à toutes les autres messes, par l’entrée simple. On peut aussi, avant les messes qui sont habituellement célébrées avec un grand concours de peuple, réitérer l’entrée solennelle, mais non la procession.`, type: "rubrique", conditions: {} },
        {class: "", texte: `Là où il n’est pas possible de faire la procession ni l’entrée solennelle, il convient de célébrer la liturgie de la Parole, comprenant l’entrée messianique et la Passion du Seigneur, soit à la messe du samedi soir, soit le dimanche à l’heure qui conviendra le mieux.`, type: "rubrique", conditions: {} },
        {class: "", texte: `COMMÉMORATION DE L’ENTRÉE DU SEIGNEUR À JÉRUSALEM`, type: "h3", conditions: {} },
        {id: "entreerameaux", texte: ``, type: "", conditions: {} },
//Entrée 1 : procession
        {class: "", texte: `À l’heure qui convient, les fidèles se rassemblent dans une église secondaire ou dans un autre lieu convenable, distinct de l’église vers laquelle doit se diriger la procession. Ils tiennent en mains des rameaux.`, type: "rubrique", conditions: {entreerameaux: "1"} },
        {class: "", texte: `Le prêtre et le diacre, portant les vêtements liturgiques de couleur rouge requis pour la messe, se rendent au lieu où le peuple est assemblé. Ils sont accompagnés des autres ministres. Au lieu de la chasuble, le prêtre peut revêtir la chape, qu’il déposera à la fin de la procession pour mettre la chasuble.`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: true} },
        {class: "", texte: `Le prêtre portant les vêtements liturgiques de couleur rouge requis pour la messe, se rend au lieu où le peuple est assemblé. Il est accompagné des autres ministres. Au lieu de la chasuble, le prêtre peut revêtir la chape, qu’il déposera à la fin de la procession pour mettre la chasuble.`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: false} },
        {class: "", texte: `Pendant qu’il se rend au lieu du rassemblement, on chante l’antienne suivante ou un autre chant qui convienne.`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indentallp", texte: `Hosanna au fils de David !
        Béni soit celui qui vient au nom du Seigneur, le Roi d’Israël !
        Hosanna au plus haut des cieux !`, type: "dialogueV", conditions: {entreerameaux: "1"} },
//Entrée 2 : solennelle
        {class: "", texte: `Là où il n’est pas possible de faire la procession en dehors de l’église, c’est à l’intérieur de l’église que l’on célèbre, avant la messe principale, l’entrée du Seigneur par le rite de l’Entrée solennelle.`, type: "rubrique", conditions: {entreerameaux: "2"} },
        {class: "", texte: `Les fidèles se rassemblent devant la porte de l’église ou dans l’église elle-même tenant en main leurs rameaux. Le prêtre et les ministres, ainsi qu’une députation de fidèles, se rendent en un endroit de l’église autre que le sanctuaire mais qui permette à la majeure partie de l’assemblée de suivre la célébration.`, type: "rubrique", conditions: {entreerameaux: "2"} },
        {class: "", texte: `Quand le prêtre est arrivé au lieu prévu, on chante l’antienne <span style="color: #000;">Hosanna</span> ou un autre chant qui convienne.`, type: "rubrique", conditions: {entreerameaux: "2"} }, 
//Entrée 3 : simple
        {class: "", texte: `À toutes les autres messes de ce dimanche dans lesquelles il n’y a pas d’entrée solennelle, on fait mémoire de l’entrée du Seigneur à Jérusalem par une entrée simple.`, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "", texte: `Tandis que le prêtre gagne l’autel, on chante l’antienne d’ouverture avec le psaume ou un autre chant évoquant l’entrée du Seigneur. Quand le prêtre est arrivé à l’autel, il le vénère, puis il se rend à son siège. Après le signe de la croix, il salue le peuple ; et la messe se poursuit comme d’habitude.`, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "", texte: `Aux autres messes où on ne peut pas faire de chant d’entrée, le prêtre gagne aussitôt l’autel et le vénère ; il salue le peuple, lit l’antienne d’ouverture et poursuit la messe comme d’habitude.`, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: "3"} },
        {class: "", texte: `ANTIENNE D’OUVERTURE`, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "indent1all", texte: `Six jours avant la fête de la Pâque,
        lorsque le Seigneur fit son entrée à Jérusalem,
        les enfants allèrent à sa rencontre.`, type: "dialogueV", conditions: {entreerameaux: "3"} },
        {class: "", texte: `Ils tenaient en main des branches de palmier, et criaient à pleine voix\u00A0:`, type: "dialogueV", conditions: {entreerameaux: "3"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: "3"} },
        {class: "indentallp", texte: `<span style="color: #b30000;">R/.</span> Hosanna au plus haut des cieux !
        Sois béni, toi qui viens dans l’abondance de ta miséricorde !`, type: "dialogueV", conditions: {entreerameaux: "3"} },
        {class: "indentallg", texte: `Portes, levez vos frontons
        élevez-vous, portes éternelles :
        qu’il entre, le roi de gloire !
        Qui donc est ce roi de gloire ?
        C’est le Seigneur, Dieu de l’univers ;
        c’est lui, le roi de gloire.`, type: "dialogueV", conditions: {entreerameaux: "3"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: "3"} },
        {class: "indentallp", texte: `<span style="color: #b30000;">R/.</span> Hosanna au plus haut des cieux !
        Sois béni, toi qui viens dans l’abondance de ta miséricorde !`, type: "dialogueV", conditions: {entreerameaux: "3"} },
//Faire la suite
        {class: "", texte: ``, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "", texte: ``, type: "rubrique", conditions: {entreerameaux: "3"} },
        {class: "", texte: ``, type: "rubrique", conditions: {entreerameaux: "3"} },
        
        {class: "", texte: `Alors le prêtre et les fidèles se signent, pendant que le prêtre dit : <span style="color: #000;">Au nom du Père, et du Fils, et du Saint-Esprit</span>. Ensuite il salue le peuple comme d’habitude, et fait une brève monition pour inviter les fidèles à participer à la célébration de ce jour d’une manière active et consciente. Il le fait en ces termes ou en d’autres semblables\u00A0:`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `Frères et soeurs bien-aimés,
        depuis le début du Carême,
        nous avons préparé nos coeurs
        par la pénitence et la pratique de la charité.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `Nous voici rassemblés aujourd’hui
        pour commencer avec toute l’Église
        la célébration du mystère pascal de notre Seigneur,
        celui de sa passion et de sa résurrection.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `En vue d’accomplir ce mystère pascal,
        il a fait son entrée dans sa ville de Jérusalem.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `Mettons toute notre foi et tout notre amour
        à rappeler maintenant le souvenir
        de cette entrée de Jésus notre Sauveur`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `et suivons le Seigneur,
        afin qu’associés par grâce à la croix,
        nous ayons part à la résurrection et à la vie.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Après cette monition, le prêtre, les mains étendues, dit l’une des deux prières suivantes\u00A0:`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Prions le Seigneur.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"]} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        bénis et sanctifie <span style="color: #b30000;">✠</span> ces rameaux, <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `afin qu’en suivant dans l’allégresse le Christ notre Roi, <span style="color: #b30000;">/</span>
        nous puissions parvenir par lui jusqu’à la Jérusalem éternelle.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `ou bien`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "grandelettrine", texte: `Augmente la foi de ceux qui espèrent en toi, Seigneur Dieu,
        exauce en ta bonté les prières de ceux qui te supplient : <span style="color: #b30000;">+</span>`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `aujourd’hui, nous tenons à la main ces rameaux
        pour acclamer le Christ en son triomphe ; <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `puissions-nous, par nos oeuvres bonnes, <span style="color: #b30000;">/</span>
        porter en lui du fruit à ta gloire.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Lui qui vit et règne pour les siècles des siècles.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Puis le prêtre asperge d’eau bénite les rameaux, sans rien dire.`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Alors le diacre proclame selon la forme habituelle l’évangile de l’Entrée du Seigneur d’après l’un des quatre Évangiles. Si cela convient, on peut utiliser l’encens.`, type: "rubrique", conditions: {entreerameaux: ["1", "2"], presenceDiacre: true} },
        {class: "", texte: `Alors le prêtre proclame selon la forme habituelle l’évangile de l’Entrée du Seigneur d’après l’un des quatre Évangiles. Si cela convient, on peut utiliser l’encens.`, type: "rubrique", conditions: {entreerameaux: ["1", "2"], presenceDiacre: false} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `ANNÉE A (Mt 21, 1-10)`, type: "rubrique", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `<span style="color: #b30000;">✠</span> Évangile de Jésus Christ selon saint Matthieu`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `Jésus et ses disciples, approchant de Jérusalem,`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg", texte: `arrivèrent en vue de Bethphagé,
        sur les pentes du mont des Oliviers.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `Alors Jésus envoya deux disciples`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1p", texte: `en leur disant\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all", texte: `« Allez au village qui est en face de vous ;
        vous trouverez aussitôt une ânesse attachée
        et son petit avec elle.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all", texte: `Détachez-les et amenez-les moi.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all", texte: `Et si l’on vous dit quelque chose,
        vous répondrez :
        ‘Le Seigneur en a besoin’.
        Et aussitôt on les laissera partir. »`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `Cela est arrivé pour que soit accomplie la parole prononcée par le prophète\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg italic indent1all", texte: `Dites à la fille de Sion\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all italic", texte: `Voici ton roi qui vient vers toi,
        plein de douceur,`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all italic", texte: `monté sur une ânesse et un petit âne,
        le petit d’une bête de somme.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1all", texte: `Les disciples partirent
        et firent ce que Jésus leur avait ordonné.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1all", texte: `Ils amenèrent l’ânesse et son petit,
        disposèrent sur eux leurs manteaux,`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1p", texte: `et Jésus s’assit dessus.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1all", texte: `Dans la foule, la plupart étendirent leurs manteaux sur le chemin ;
        d’autres coupaient des branches aux arbres
        et en jonchaient la route.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1all", texte: `Les foules qui marchaient devant Jésus et celles qui suivaient
        criaient\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg", texte: `« <span style="font-style: italic;">Hosanna</span> au fils de David !
        <span style="font-style: italic;">Béni soit celui qui vient au nom du Seigneur !
        Hosanna</span> au plus haut des cieux ! »`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1all", texte: `Comme Jésus entrait à Jérusalem,
        toute la ville fut en proie à l’agitation,`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1p", texte: `et disait\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indent1g", texte: `« Qui est cet homme ? »`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "", texte: `Et les foules répondaient\u00A0:`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
        {class: "indentallg indent1all", texte: `« C’est le prophète Jésus,
        de Nazareth en Galilée. »`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "A"} },
//Ajouter évangiles années B et C
        {class: "", texte: `ANNÉE B (Mc 11, 1-10 ou Jn 12, 12-16)`, type: "rubrique", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "B"} },
        {class: "", texte: `<span style="color: #b30000;">✠</span> Évangile de Jésus Christ selon saint Matthieu`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "B"} },
        {class: "", texte: ``, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "B"} },
        {class: "", texte: `ANNÉE C (Lc 19, 28-40)`, type: "rubrique", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "C"} },
        {class: "", texte: `<span style="color: #b30000;">✠</span> Évangile de Jésus Christ selon saint Luc`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "C"} },
        {class: "", texte: ``, type: "dialogueV", conditions: {entreerameaux: ["1", "2"], anneeLiturgique: "C"} },
        
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `– Acclamons la Parole de Dieu.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Après l’évangile, il peut y avoir une brève homélie. Pour donner le signal du départ de la procession, le prêtre ou le diacre ou bien un ministre laïc peut faire une monition en ces termes ou en d’autres semblables\u00A0:`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: true} },
        {class: "", texte: `Après l’évangile, il peut y avoir une brève homélie. Pour donner le signal du départ de la procession, le prêtre ou bien un ministre laïc peut faire une monition en ces termes ou en d’autres semblables\u00A0:`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: false} },
        {class: "", texte: `Après l’évangile, le prêtre, accompagné des ministres et de la députation des fidèles, s’avance à travers l’église vers le sanctuaire, tandis que l’on chante le répons <span style="color: #000;">À l’entrée du Seigneur</span> ou un autre chant adapté.`, type: "rubrique", conditions: {entreerameaux: "2"} },
        {class: "indent1all", texte: `Et maintenant, frères et soeurs bien-aimés,
        imitons les foules de Jérusalem
        heureuses d’acclamer Jésus,
        et avançons dans la paix.`, type: "dialogueV", conditions: {entreerameaux: "1"} },
        {class: "", texte: `ou bien seulement\u00A0:`, type: "rubrique", conditions: {entreerameaux: "1"} },
        {class: "indent1p", texte: `Avançons dans la paix.`, type: "dialogueV", conditions: {entreerameaux: "1"} },
        {class: "", texte: `Dans ce cas, tous répondent\u00A0:`, type: "rubriqueinterne", conditions: {entreerameaux: "1"} },
        {class: "indent1p", texte: `Au nom du Christ. Amen.`, type: "dialogueR", conditions: {entreerameaux: "1"} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: "1"} },
        {class: "", texte: `On part donc, selon l’usage, en procession vers l’église où l’on doit célébrer la messe. En tête, le thuriféraire portant l’encensoir allumé (si l’on fait usage de l’encens), puis un acolyte ou un autre ministre portant la croix, ornée de rameaux, selon la coutume locale, et entouré de deux ministres portant des cierges allumés. Ensuite vient le diacre portant le livre des Évangiles, le prêtre avec les autres ministres, et, après eux, tous les fidèles, rameaux en mains.`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: true} },
        {class: "", texte: `On part donc, selon l’usage, en procession vers l’église où l’on doit célébrer la messe. En tête, le thuriféraire portant l’encensoir allumé (si l’on fait usage de l’encens), puis un acolyte ou un autre ministre portant la croix, ornée de rameaux, selon la coutume locale, et entouré de deux ministres portant des cierges allumés. Ensuite vient le prêtre avec les autres ministres, et, après eux, tous les fidèles, rameaux en mains.`, type: "rubrique", conditions: {entreerameaux: "1", presenceDiacre: false} },
        {class: "", texte: `Tandis que la procession s’avance, la schola et le peuple chantent les chants en l’honneur du Christ Roi.`, type: "rubrique", conditions: {entreerameaux: "1"} },
        {class: "", texte: `À l’entrée de la procession dans l’église, on chante un chant évoquant l’entrée du Seigneur\u00A0:`, type: "rubrique", conditions: {entreerameaux: "1"} },
        {class: "", texte: `Quand le prêtre est arrivé à l’autel, il le vénère et éventuellement l’encense. Ensuite, il se rend à son siège où, s’il l’a utilisée, il dépose la chape pour prendre la chasuble. Il omet les autres rites d’ouverture de la messe et, s’il le juge à propos, le <span style="color: #000;">Kyrie</span>. Il dit alors la Prière d’ouverture de la messe, qui se poursuit comme d’habitude.`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `(`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "rubrique", texte: "ou bien"},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Christe, eléison."},
        { type: "dialogueV", texte: "Ô Christ, prends pitié."}]},
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Christe, eléison."},
        { type: "dialogueR", texte: "Ô Christ, prends pitié."}]},
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueV", texte: "Kýrie, eléison."},
        { type: "dialogueV", texte: "Seigneur, prends pitié."}]},
        { conditions: {entreerameaux: ["1", "2"]},  class: "colonnes2",  items:[
        { type: "dialogueR", texte: "Kýrie, eléison."},
        { type: "dialogueR", texte: "Seigneur, prends pitié."}]},
        {class: "indent1g", texte: `)`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `\n`, type: "sautdeligne", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `PRIÈRE`, type: "rubrique", conditions: {entreerameaux: ["1", "2"]} },
        {class: "grandelettrine", texte: `Dieu éternel et tout-puissant, <span style="color: #b30000;">+</span>
        pour donner au genre humain`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1p", texte: `un exemple d’humilité,`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `tu as voulu que notre Sauveur prenne chair
        et qu’il subisse la croix : <span style="color: #b30000;">*</span>`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `accorde-nous, dans ta bonté,
        d’accueillir le témoignage de sa force dans la souffrance <span style="color: #b30000;">/</span>
        et d’avoir part à sa résurrection.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "indent1all", texte: `Lui qui vit et règne avec toi dans l’unité du Saint-Esprit, <span style="color: #b30000;">/</span>
        Dieu, pour les siècles des siècles.`, type: "dialogueV", conditions: {entreerameaux: ["1", "2"]} },
        {class: "", texte: `Amen.`, type: "dialogueR", conditions: {entreerameaux: ["1", "2"]} },


        { texte: "LITURGIE DE LA PAROLE", type: "h1", conditions: {} },
        { texte: "LECTURES", type: "h2", conditions: {} },
        { texte: "Première lecture", type: "h3", conditions: {} },
        { texte: `À la fin de la lecture, le lecteur proclame ou chante\u00A0:`, type: "rubrique", conditions: {} },
        {class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {} },
        { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {} },
        { texte: "Psaume", type: "h3", conditions: {} },
        { texte: "Deuxième lecture", type: "h3", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
        { texte: `À la fin de la lecture, le lecteur proclame ou chante\u00A0:`, type: "rubrique", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
        {class:"lettrine", texte: `Parole du Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
        { texte: `Nous rendons grâce à Dieu.`, type: "dialogueR", conditions: {celebrationType: ["Dominicale", "Solennité"]} },
        { texte: "Évangile", type: "h3", conditions: {} },
        { texte: `Vient ensuite le chant d’acclamation à l’Évangile`, type: "rubrique", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        { texte: `Pas de <b>thuriféraire</b> pour la lecture de la Passion`, type:"servants", conditions: {incense: true, ceroferaire: false}},
        { texte: `Pas de <b>céroféraire</b> pour la lecture de la Passion`, type:"servants", conditions: {ceroferaire: true, incense: false}},
        { texte: `Pas de <b>thuriféraire</b> ni de <b>céroféraire</b> pour la lecture de la Passion`, type:"servants", conditions: {ceroferaire: true, incense: true}},
        { texte: `La lecture du récit de la Passion se fait sans que les acolytes portent de luminaire ni d’encens, sans salutation ni signation du livre. Elle est lue par le diacre. Elle peut également être lue par des lecteurs, mais le rôle du Christ est réservé, si possible, au prêtre.`, type: "rubrique", conditions: {presenceDiacre: true} },
        { texte: `La lecture du récit de la Passion se fait sans que les acolytes portent de luminaire ni d’encens, sans salutation ni signation du livre. Elle est lue par le prêtre. Elle peut également être lue par des lecteurs, mais le rôle du Christ est réservé, si possible, au prêtre.`, type: "rubrique", conditions: {presenceDiacre: false} },
        { texte: `Avant de chanter la Passion, seuls les diacres, mais non pas les autres, viennent demander la bénédiction du prêtre, comme c’est le cas avant l’Évangile.`, type: "rubrique", conditions: {presenceDiacre: true} },
        { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
        { texte: `Père, bénissez-moi.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true} },
        { texte: `Le prêtre dit à voix basse\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: true, presenceBishop: false} },
        { texte: `L'évêque dit à voix basse\u00A0:`, type: "rubrique", conditions: {secret:true, presenceBishop: true} },
        { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
            pour que vous proclamiez dignement son Évangile : 
            au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
        { texte: `Que le Seigneur soit dans votre coeur et sur vos lèvres 
            pour que vous proclamiez dignement son Évangile : 
            au nom du Père, et du Fils, <span style="color: #b30000;">✠</span> et du Saint-Esprit.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true} },
        { texte: `Le diacre fait le signe de la croix et répond\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: true} },
        { texte: `Le prêtre fait le signe de la croix et répond\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop:true } },
        { texte: `Amen.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: true} },
        { texte: `Amen.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop:true}},
        { texte: `L'évêque dépose la mitre et se lève.`, type:"servants", conditions: {porteinsigne: true, presenceBishop: true}},
        { texte: `Le prêtre, incliné devant l’autel, prie tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceDiacre: false, presenceBishop: false} },
        { texte: `Purifie mon coeur et mes lèvres, 
            Dieu tout-puissant, 
            pour que j’annonce dignement ton saint Évangile.`, type: "voixbasse", conditions: {secret:true, presenceDiacre: false, presenceBishop: false} },
        { texte: `Ensuite, le diacre prend avec respect l'évangéliaire et, sans faire d'inclination devant l'autel, il s'avance jusqu'à l’ambon en portant le livre solennellement.`, type: "rubrique", conditions: {presenceDiacre: true} },
        { texte: `Le prêtre dit\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false} },
        { texte: `Le diacre dit\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class:"lettrine", texte: `La Passion de notre Seigneur Jésus Christ selon saint <span style="color: #b30000;">N.</span>`, type: "dialogueV", conditions: {} },
        { texte: `L'évêque reçoit la crosse`, type:"servants", conditions: {porteinsigne: true}},
        { texte: `Puis le prêtre proclame l’Évangile.`, type: "rubrique", conditions: {incense:false, presenceDiacre: false} },
        { texte: `Puis le diacre proclame l’Évangile.`, type: "rubrique", conditions: {incense:false, presenceDiacre: true} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        { texte: `L’Évangile achevé, le prêtre dit ou chante\u00A0:`, type: "rubrique", conditions: {presenceDiacre: false} },
        { texte: `L’Évangile achevé, le diacre dit ou chante\u00A0:`, type: "rubrique", conditions: {presenceDiacre: true} },
        {class:"lettrine", texte: `Acclamons la Parole de Dieu.`, type: "dialogueV", conditions: {} },
        { texte: `Louange à toi, Seigneur Jésus !`, type: "dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        { texte: `Ensuite, il vénère le livre d’un baiser en disant tout bas\u00A0:`, type: "rubrique", conditions: {secret:true, presenceBishop: false} },
        { texte: `Ensuite, il vénère le livre d’un baiser ou le porte à baiser à l'évêque, qui dit à voix basse\u00A0:`, type: "rubrique", conditions: {secret:true, presenceBishop: true} },
        { texte: `Que cet Évangile efface mes péchés.`, type: "voixbasse", conditions: {secret:true} },
        { texte: `Si l'évêque prêche depuis sa cathèdre, il reçoit la mitre`, type:"servants", conditions: {porteinsigne: true}},
        { texte: `Après la lecture du récit de la Passion, on peut faire une brève homélie si on le juge à propos. On peut aussi observer un moment de silence.`, type: "rubrique", conditions: {} },
        { texte: `L'homélie achevée, l'évêque dépose la mitre et la crosse`, type:"servants", conditions: {porteinsigne: true}},

//Credo
        { id: "Professiondefoi",texte: `PROFESSION DE FOI`, type: "h2", conditions: {hideCredo: false} },
        { texte: "<b>Le porte-missel</b> présente au président le missel pour la profession de foi et pour l'invitation sacerdotale de la prière universelle.", type:"servants", conditions: {portemissel: true}},

        
//Credo de Nicée-Constantinople
        {class: "", texte: `Symbole de Nicée-Constantinople`, type: "h3", conditions: {typeCredo: "NC", hideCredo: false} },
        { conditions: {typeCredo: "NC", hideCredo: false},  class: "tableau",  items:[
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
        {class: "", texte: `Symbole de Nicée-Constantinople`, type: "h3", conditions: {typeCredo: "Lt", hideCredo: false} },
        { conditions: {typeCredo: "Lt", hideCredo: false}, class: "tableau", items:[
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
        {class: "", texte: `Symbole des Apôtres`, type: "h3", conditions: {typeCredo: "AP", hideCredo: false} },
        { conditions: {typeCredo: "AP", hideCredo: false}, class: "tableau",items:[
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
        { texte: `PRIÈRE UNIVERSELLE`, type: "h3", conditions: {} },
        { texte: `Quelques invitations sacerdotales et prières de conclusion sont proposées ici pour la commodité du prêtre et n’excluent pas l’usage d’autres formules.`, type: "rubrique", conditions: {presenceBishop:false} },
        { texte: `Quelques invitations sacerdotales et prières de conclusion sont proposées ici pour la commodité de l'évêque et n’excluent pas l’usage d’autres formules.`, type: "rubrique", conditions: {presenceBishop:true} },
        { id:"InvitS", texte: `INVITATION SACERDOTALE`, type: "h4", conditions: {} },
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
        pour nous-mêmes et pour tous les hommes.`, type: "dialogueV", conditions: {InvitS: "5"} },
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
        et à tous les besoins de nos frères les hommes.`, type: "dialogueV", conditions: {InvitS: "10"} },

        {class:"sautdeligne", texte: `\n`, conditions: {}, type: "dialogueV"},
        { id:"PriereC", texte: `PRIÈRES DE CONCLUSION`, type: "h4", conditions: {} },
        {class:"indent1all lettrine", texte: `À tes fidèles, Seigneur,
        tends une main secourable\u00A0:`, type: "dialogueV", conditions: {PriereC: "1"} },
        {class:"indent1all", texte: `Qu’ils te cherchent de tout coeur,
        et voient exaucées leurs justes demandes.`, type: "dialogueV", conditions: {PriereC: "1"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "1" }},
        {class:"indent1all lettrine", texte: `Regarde avec bonté, Seigneur,
        le peuple qui se confie en ta miséricorde ;`, type: "dialogueV", conditions: {PriereC: "2"} },
        {class:"indent1all", texte: `Et comme il ne peut subsister sans toi,
        soutiens-le maintenant de tes bienfaits
        pour qu’il progresse jusqu’à l’éternité.`, type: "dialogueV", conditions: {PriereC: "2"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "2" }},
        {class:"indent1all lettrine", texte: `Dieu qui sauves tous les hommes
        et ne veux en perdre aucun,`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3"} },
        {class:"indent1all", texte: `Écoute la prière de ton peuple
        et donne-lui la joie d’être exaucé.
        Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {celebrationType: ["Dominicale", "Solennité"], PriereC: "3" }},
        {class:"indent1all lettrine", texte: `Seigneur, viens au secours de ton peuple
        qui espère en ta miséricorde\u00A0:`, type: "dialogueV", conditions: {PriereC: "4"} },
        {class:"indent1all", texte: `Que ta puissance le soutienne en cette vie
        et le conduise aux joies de l’éternité.`, type: "dialogueV", conditions: {PriereC: "4"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "4" }},
        {class:"indent1all lettrine", texte: `Dieu qui sais toutes choses,
        tu vois tous les besoins de notre vie humaine.`, type: "dialogueV", conditions: {PriereC: "5"} },
        {class:"indent1all", texte: `Accueille les prières de ceux qui croient en toi,
        exauce les désirs de ceux qui te supplient.`, type: "dialogueV", conditions: {PriereC: "5"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "5" }},
        {class:"indent1all lettrine", texte: `Seigneur, écoute avec bonté les prières de ton peuple\u00A0:`, type: "dialogueV", conditions: {PriereC: "6"} },
        {class:"indent1all", texte: `Accorde à tous ce qu’ils te demandent
        et à chacun ce qu’il lui faut.`, type: "dialogueV", conditions: {PriereC: "6"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "6" }},
        {class:"indent1all lettrine", texte: `Écoute, Seigneur, les prières
        que tu inspires toi-même à ton Église,`, type: "dialogueV", conditions: {PriereC: "7"} },
        {class:"indent1all", texte: `Et, dans ta bonté, daigne les exaucer.`, type: "dialogueV", conditions: {PriereC: "7"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "7" }},
        {class:"indent1all lettrine", texte: `Aux appels de ton peuple en prière,
        réponds, Seigneur, en ta bonté\u00A0:`, type: "dialogueV", conditions: {PriereC: "8"} },
        {class:"indent1all", texte: `Donne à chacun la claire vision de ce qu’il doit faire
        et la force de l’accomplir.`, type: "dialogueV", conditions: {PriereC: "8"} },
        {class:"", texte: `Par le Christ, notre Seigneur.`, type: "dialogueV", conditions: {PriereC: "8" }},
        {class:"indent1all lettrine", texte: `Seigneur Jésus,
        qui te tiens au milieu des croyants
        rassemblés en ton Nom,`, type: "dialogueV", conditions: {PriereC: "9"} },
        {class:"indent1all", texte: `Écoute les supplications de ta famille
        et daigne répondre à ses appels.`, type: "dialogueV", conditions: {PriereC: "9"} },
        {class:"", texte: `Toi qui vis et règnes pour les siècles des siècles.`, type: "dialogueV", conditions: {PriereC: "9" }},
    ],},
"chrismale": {
    titre: "MESSE CHRISMALE",
    autresrituel: [
        {class:"", texte: `La bénédiction de l’huile des malades, de l’huile des catéchumènes et la consécration du chrême est faite par l’évêque selon le rite fixé dans le Pontifical romain, d’après la coutume, en ce jour, et elle doit être célébrée au cours d’une messe, dans la matinée.`, type: "rubrique", conditions: {}},
        {class:"", texte: `Mais si ce jour-là on ne peut que difficilement réunir le clergé et le peuple autour de l’évêque, il est permis d’anticiper la Messe chrismale à un autre jour, mais qui soit proche de Pâques.`, type: "rubrique", conditions: {}},
        {class:"", texte: `Cette messe concélébrée par l’évêque et son presbytérium doit être comme une manifestation de la communion des prêtres avec leur évêque. C’est pourquoi il convient que tous les prêtres, autant que possible, participent à cette célébration et qu’ils communient sous les deux espèces. Pour signifier l’unité du presbytérium du diocèse, il est souhaitable que les prêtres qui concélèbrent avec l’évêque viennent des diverses régions du diocèse.`, type: "rubrique", conditions: {}},
        {class:"", texte: `Selon l’usage traditionnel, la bénédiction de l’huile des malades se fait avant la conclusion de la Prière eucharistique; la bénédiction de l’huile des catéchumènes et la consécration du chrême, après la communion. Toutefois, pour des motifs pastoraux, il est permis d’accomplir tout le rite de la bénédiction après la liturgie de la Parole.`, type: "rubrique", conditions: {}},
        ],
    avanthomelie: [
        {class:"", texte: `Partant du texte des lectures qui ont été proclamées dans la liturgie de la Parole, l'évêque parle au peuple et à ses prêtres de l’onction reçue lors de l’ordination sacerdotale ; il exhorte les prêtres à garder la fidélité dans leur fonction et les invite à renouveler publiquement leurs promesses sacerdotales.`, type:"rubrique", conditions: {} },
    ],
    apreshomelie: [
        {class: "", texte: `<span style="font-weight: bold;">Rénovation des promesses sacerdotales</span>`, type: "h3", conditions: {} },
        {class:"", texte: `À la fin de son homélie, l’évêque engage le dialogue avec les prêtres, en ces termes ou d’autres semblables\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Fils très chers, en cet anniversaire du jour où le Christ fit participer ses Apôtres et chacun d’entre nous à son sacerdoce, voulez-vous, devant votre évêque et le peuple saint de Dieu, renouveler les engagements que vous avez pris autrefois ?`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Les prêtres répondent ensemble\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Oui, je le veux.`, type:"dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class:"", texte: `Voulez-vous vivre toujours plus unis au Seigneur Jésus et chercher à lui ressembler, en renonçant à vous-mêmes, en étant fidèles aux engagements attachés à la charge ministérielle que vous avez reçue avec joie, par amour du Christ et pour le service de son Église, au jour de votre ordination sacerdotale ?`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Les prêtres\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Oui, je le veux.`, type:"dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class:"", texte: `Voulez-vous être les fidèles intendants des mystères de Dieu par la sainte eucharistie et les autres célébrations liturgiques, et assurer fidèlement la charge sainte de l’enseignement, à la suite du Christ, notre Tête et notre Pasteur, avec désintéressement et souci des âmes ?`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Les prêtres\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Oui, je le veux.`, type:"dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class:"", texte: `Ensuite, tourné vers le peuple, l’évêque poursuit\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Et vous, frères et soeurs bien-aimés, priez pour vos prêtres : que le Seigneur répande sur eux ses dons en abondance, afin qu’ils soient les fidèles ministres du Christ, le Souverain Prêtre, et vous conduisent à lui, la source du salut.`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Le peuple\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Ô Christ, écoute-nous ; ô Christ, exauce-nous.`, type:"dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class:"", texte: `L’évêque\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Priez aussi pour moi, votre évêque : que je sois fidèle à la charge apostolique qui m’a été confiée, malgré ma faiblesse ; que je reflète parmi vous une image vivante et toujours plus parfaite du Christ Prêtre, Bon Pasteur, Maître et Serviteur de tous.`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Le peuple\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Ô Christ, écoute-nous ; ô Christ, exauce-nous.`, type:"dialogueR", conditions: {} },
        {class:"sautdeligne", texte: `\n`, type: "", conditions: {} },
        {class:"", texte: `L’évêque\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Que le Seigneur nous garde les uns et les autres dans son amour ; que lui-même nous conduise, pasteurs et brebis, jusqu’à la vie éternelle.`, type:"dialogueV", conditions: {} },
        {class:"", texte: `Tous\u00A0:`, type:"rubrique", conditions: {} },
        {class:"", texte: `Amen.`, type:"dialogueR", conditions: {} },
    ],
}

//Ajouter messe des cendres + 
}