<!--
JS
-->

<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { rituel } from '$lib/rituel.js';
    import { Rituelplus } from '$lib/rituel+.js';
    import { Oraisons } from '$lib/oraisons';
    import { preface } from '$lib/prefaces';
    import { benedictions } from '$lib/benedictions';
    import FileSaver from "file-saver";
    import { Document, Indent, Packer, Paragraph, TextRun } from "docx";
    import Roadmap from '$lib/components/Roadmap.svelte';
    import Nouveautes from '$lib/components/Nouveautes.svelte';
    import cierges from '$lib/assets/cierges.svg';
    import encensoir from '$lib/assets/encensoir.svg';
    import missel from '$lib/assets/missel.svg';
    import croixdeprocession from '$lib/assets/croixdeprocession.svg';
    import imginsigne from '$lib/assets/imginsigne.svg';
    import acolytat from '$lib/assets/acolytat.svg';
    import * as romcalModule from 'romcal';
    import { France_Fr } from '@romcal/calendar.france';
    import { liturgyRules } from '$lib/mapping.js';
    import { Sacrements } from '$lib/sacrements';  
    import Affichage from '$lib/affichage.svelte';

// --- Variables d'état ---
  const { Romcal } = romcalModule; 
  const romcal = new Romcal({ localizedCalendar: France_Fr });
  let selectedDate = new Date().toISOString().split('T')[0];
  let availableEvents = []; // Toutes les fêtes du jour
  let selectedEventId = ""; // L'ID choisi par l'utilisateur
  let currentStep = "choice"; 
  let projectType = ""; // 'messe', 'sacrement', ou 'mixte'

// Formulaire
  export let version = "0.5";
  let inputRituelName = "";
  let rituelName = "";
  let celebrationType = "Solennité";
  let CelebrationduJour = "";
  let selectedCommunId = "";
  $: anneeLiturgique = liturgicalContext.anneeLiturgique;
  let fontSizeScale = 1;
  let menuOpen = false;
  function toggleMenu() {menuOpen = !menuOpen;}

  // Options
  let [secret, hideCredo, hideGloria, hidePE, kyriegrec, glorialatin, DoxologieLt, sanctusLt, agnusLt ] = [false, false, false, false, false, false, false, false, false];
  let [Showpreface, Showoraisons] = [true, true];
  let sacrementtype = "";
  let Choixsacrement = "baptême";
  let [Bapteme, BetP, Confirmation, Mariage, Ordination, sacrementDesMalades] = [false,false,false,false,false,false];
  
  // Variantes
  let salutation = "S3";
  let ChoixPenitentiel = "1CP";
  let typeCredo = "NC";
  let InvitS = "5";
  let PriereC = "3";
  let Choixpreface = "";
  let precision = "";
  let RituelduJour = "";
  let ChoixOraison = "";
  let OraisonsDuJour = "";
  let availablePrefaces = [];
  let prefacedujour = "";
  let typePE = "PE1";
  let AcclamationEucharistique = "AE1";
  let Communicantes = "Semaine";
  let NotrePère = "NP1";
  let Apologies = "1";
  let envoi = "1";
  let Messe = "";
  let croix = "1";
  let exultet = "1";
  let litbap = "A";
  let renonciation = "1";
  let renonciation2 = "1";
  let bapteme = "ablution"; 
  let entreerameaux = "1";
  let Conclusion = "1"; // "1"=Standard, "2"=Prière Peuple, "3"=Solennelle
  let Benediction = "";
//Variantes sacrements
  let [accueilmariage, dialoguemariage, collectemariage, consentements, benedictionmariage] = ["1", "1", "1", "1", "1"];
  let [ped, prierecommunebapteme, benbapt, tempspascal, benfbapt, Pbapteme] = ["1", "1", "1", false, "1", false];
//paramètres servants
  let showservants = false;
  let [incense, cruciferaire, ceroferaire, porteinsigne, portemissel, acolytes] = [false, true, true, false, true, true];
//Autres
  let [showAutresParams, hideliturgieeucharistique, hideritesInitiaux, hideLiturgieParole, hideritesdeConclusion, hideautresrituel, MenuSacrements, Servants, showAutresceremonie, MenuBaptême] = [false, false, false, false, false, false, false, false, false, false];
  let [hideRubriques, presenceBishop, presenceDiacre, showcat, aspersion] = [false, false, false, false, false];
  let servants = 0;
  let filteredRituel = [];

// --- Logique Réactive ---
  $: if (selectedDate) { updateCalendarData(selectedDate) }
  async function updateCalendarData(dateStr) {
    if (!romcal) return;
    const year = parseInt(dateStr.split('-')[0]);
    const calendar = await romcal.generateCalendar(year);
    const events = calendar[dateStr] || [];
    availableEvents = events;
    if (events.length > 0) selectedEventId = events[0].id;
    const isOctavePaques = events.some(event => 
      event.id === 'easter_sunday' || event.id === 'easter_monday' || event.id === 'easter_tuesday' ||
      event.id === 'easter_wednesday' || event.id === 'easter_thursday' || event.id === 'easter_friday' ||
      event.id === 'easter_saturday' || event.id === 'holy_saturday' || event.id === 'divine_mercy_sunday'
    );
    if (isOctavePaques) { envoi = "5" } else { envoi = "1"}
    scrollToTop();
  }

  function applyLiturgyMapping(fete) {
    const regles = liturgyRules[fete.id];
    if (!regles) return;

  if (regles.CommunOptions) { selectedCommunId = regles.CommunOptions[0].id }
     else {selectedCommunId = regles.CommunSource || ""}

  if (typeCredo === "NA") {hideCredo = true;} else {hideCredo = false;}

    // 1. Priorité Haute : Mapping direct (Bénédiction Solennelle)
    Benediction = regles.Benediction || "";
    if (Benediction !== "") {Conclusion = "3";}
    // 2. Priorité Moyenne : Automatique si Prière sur le Peuple existe
    else if (Oraisons[regles.ChoixOraison]?.priereSurLePeuple) { Conclusion = "2"; } 
    // 3. Par défaut : Standard
    else { Conclusion = "1"; }

  CelebrationduJour = regles.CelebrationduJour || fete.name;
  ChoixOraison = regles.ChoixOraison || "";
  RituelduJour = regles.RituelduJour || "";
  hideritesdeConclusion = regles.hideritesdeConclusion || false;
  hideLiturgieParole = regles.hideLiturgieParole || false;
  hideliturgieeucharistique = regles.hideliturgieeucharistique || false;
  hideritesInitiaux = regles.hideritesInitiaux || false;
  precision = regles.precision || "";
  
  // Gestion du choix multiple de préfaces
availablePrefaces = []; 

    if (regles.PrefacesOptionnelles) {
        // CAS : Liste d'objets [{id: "...", label: "..."}]
        availablePrefaces = regles.PrefacesOptionnelles;
        Choixpreface = regles.PrefacesOptionnelles[0].id;
    } 
    else if (regles.Choixpreface) {
        if (Array.isArray(regles.Choixpreface)) {
            // CAS : Simple tableau d'IDs ["1NS", "2NS"]
            // On le convertit en format standard pour le HTML si besoin
            availablePrefaces = regles.Choixpreface.map(id => ({ id: id, label: id }));
            Choixpreface = regles.Choixpreface[0];
        } else {
            // CAS : ID unique "1NS"
            Choixpreface = regles.Choixpreface;
            availablePrefaces = [{ id: regles.Choixpreface, label: "Préface propre" }];
        }
    }
  typeCredo = regles.typeCredo || "NC";
  Communicantes = regles.Communicantes || "Semaine";
  celebrationType = regles.celebrationType || "Semaine";
  Showoraisons = true;
  Showpreface = true;
}


  let [showPopup, dontShowAgain, forceOpen] = [false, false, false];
  let currentPage = 0;
  const pages = [
    { title: "Bienvenue sur Ricat !", content: `Je m'appelle <b>Florent Mauguin</b> et suis séminariste pour le diocèse de Versailles et la communauté de l'Emmanuel. 
      <br><br>L'objectif de ce projet est simple : <b>générer en quelques clics un rituel imprimable</b> et adapté à sa paroisse pour la célébration de l'eucharistie et des sacrements.
      <br><br><b>⚠️ L'outil est encore en cours de développement !</b>
      <br>Merci de vérifier, avant toute utilisation, que le rituel généré correspond bien aux livres liturgiques officiels.
      <br><br>
      <p style="font-size: 0.8rem;"><b>Ricat.fr</b> est un outil d'aide à la préparation liturgique basé sur le moteur <b>Romcal</b>.
      <br>Les textes liturgiques sont la propriété exclusive de l'<b>AELF</b>. Ce service n'en est qu'un vecteur technique de mise en forme.
      <br>Avertissement : Ce générateur ne remplace pas les livres liturgiques officiels (Missel, Rituels) dotés de l'Imprimatur. Seule la version imprimée par les autorités ecclésiastiques fait foi.</p>` },
    { title: "Nouveautés", content: "" },
    { title: "Roadmap" }
  ];

onMount(async () => {
    const seenVersion = localStorage.getItem("welcomePopupVersionSeen");
    if (seenVersion !== version) { showPopup = true; }
  });

  // ouverture forcée
  $: if (forceOpen) {
    currentPage = 0; // recommencer à la 1ère page
    showPopup = true;
    forceOpen = false;
  }

function closePopup() {
    localStorage.setItem("welcomePopupVersionSeen", version);
    showPopup = false; }

/*
// Génération du document Word
  async function generateWord() {
    if (!filteredRituel || filteredRituel.length === 0) return;
   
    // Créer un document Word
    const doc = new Document({
    sections: [
      { properties: {
          page: {
            margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 } // marges en twips (~1/20 pt)
          }
        },
        children: filteredRituel.map(step => {
          // Styles par type
          const styleProps = {
            font: "fontFamily",
            size: 24, // taille 12pt (docx = half-points)
            bold: step.type === "ritesInitiaux" || step.type === "dialogueV" || step.type === "titre",
            italics: step.type === "rubrique",
            alignment: "center",
            color: step.type === "rubrique" || step.type === "dialogueR" ? "B30000" : undefined,
            spacing: { before: 120, after: 120 },
          };

       
        let texte = step.texte;
          if (step.type === "dialogueR") texte = "℟ " + texte;


 return new Paragraph({
            children: [new TextRun({ text: texte, ...styleProps })],
            spacing: { before: 120, after: 120 } // espace avant et après le paragraphe
          });
        }),
      },
    ],
  });

    // Générer le blob
    const blob = await Packer.toBlob(doc);
    FileSaver.saveAs(blob, "rituel.docx");
  }
*/

function computeHasGloria(event, ctx) {
  if (!event) return true;
  const { rank, precedence, periods, id } = event;
  const season = ctx.season;
  const isSunday = ctx.isSunday;
// ✅ EXCEPTIONS MAJEURES (AVANT tout)
  if ( id === "thursday_of_the_lords_supper" || id === "holy_thursday") {return true; }
  // ❌ Avent & Carême
  if (season === "ADVENT" || season === "LENT") {
    if (rank === "SOLEMNITY") return true;
    return false; }
  // ✅ Solennités / fêtes / dimanches
  if (rank === "SOLEMNITY" || rank === "FEAST" || isSunday) {
    return true; }
  return false;
}

$: presenceBishop = selectedEvent?.id === "holy_thursday";
//Fonction pour la PE4 et ses contraintes
const liturgyConstraints = {
  PE4: (ctx) => ctx.season === "ORDINARY_TIME" && !ctx.hasProperPreface,};

function getLiturgicalContext(event) {
  if (!event) return {};

  const sundayCycle = event.cycles?.sundayCycle;

  const context = {
    season: event.seasons?.[0],
    rank: event.rank,
    isSunday: event.calendar?.dayOfWeek === 0,
    hasProperPreface: event.hasProperPreface ?? false,
    anneeLiturgique: sundayCycle
      ? sundayCycle.replace("YEAR_", "")
      : ""
  };
    context.hasGloria = computeHasGloria(event, context);
      return context;
  
    }
$: liturgicalContext = getLiturgicalContext(selectedEvent);
$: hideGloria = !liturgicalContext.hasGloria;

function isAllowed(option, context) {
  const rule = liturgyConstraints[option];
  if (!rule) return true;
  return rule(context);
}
$: if (!isAllowed("PE4", liturgicalContext) && typePE === "PE4") {
  typePE = "PE3";
}


 // Construction du rituel complet
$: {
    const feteChoisie = availableEvents.find(e => e.id === selectedEventId);
    if (feteChoisie) { applyLiturgyMapping(feteChoisie)}
}

$: selectedEvent = availableEvents.find(e => e.id === selectedEventId) || availableEvents[0];

// Fonction pour convertir le nom de la couleur Romcal en valeur CSS utilisable
function getCssColor(event) {
  if (!event || !event.colors || event.colors.length === 0) return '#ccc';
  const colorMap = {'white': '#ffffff', 'red': '#B30000', 'green': '#008000', 'violet': '#7f00ff', 'rose': '#ff69b4', 'black': '#000000'};
  const color = event.colors[0];
  return colorMap[color] || color;
}

$: {hideLiturgieParole, selectedEventId, inputRituelName, secret, hideGloria, glorialatin, sanctusLt, agnusLt, Conclusion, hideautresrituel,
    DoxologieLt, hideCredo, Showpreface, hidePE, Showoraisons, hideliturgieeucharistique, kyriegrec, precision, bapteme, Choixsacrement,
    Bapteme, BetP, Confirmation, Mariage, Ordination, celebrationType, selectedCommunId, exultet, projectType, CelebrationduJour,
    sacrementDesMalades, salutation, ChoixPenitentiel, typeCredo, presenceDiacre, RituelduJour, croix, litbap, anneeLiturgique,
    InvitS, PriereC, Choixpreface, typePE, AcclamationEucharistique, aspersion, hideritesdeConclusion, entreerameaux, 
    Communicantes, NotrePère, Apologies, envoi, hideRubriques, showservants, hideritesInitiaux, renonciation, renonciation2, 
    accueilmariage, collectemariage, dialoguemariage, consentements, benedictionmariage,
    ped, prierecommunebapteme, benbapt, tempspascal, benfbapt, Pbapteme,
    presenceBishop, incense, servants, cruciferaire, ceroferaire, porteinsigne, portemissel, acolytes;    
    generateRituel();
}

// Génération du rituel filtré
function generateRituel() {
  let fullRituel = [];

  if (projectType === 'messe') {
    fullRituel = [
      ...(hideautresrituel ? [] : rituel.autresrituel),
      ...(hideritesInitiaux ? [] : rituel.ritesInitiaux),
      ...(hideLiturgieParole ? [] : rituel.liturgiedelaparole),
      ...(hideliturgieeucharistique ? [] : rituel.liturgieeucharistique),
      ...(hideritesdeConclusion ? [] : rituel.ritesdeConclusion),
    ];
  }

  if (projectType === 'sacrement') {
    fullRituel = [
      ...(rituel.sacrements || []),
    ];
  }

console.log(collectemariage);
    rituelName = inputRituelName;

    // 1. Mise à jour des données (Préfaces et Oraisons)
    if (Choixpreface) { prefacedujour = preface[Choixpreface] || null; }
    if (Choixsacrement) { sacrementtype = Sacrements[Choixsacrement] || null; }

    const regles = liturgyRules[selectedEventId];
    const sourceId = selectedCommunId;
    if (sourceId && Oraisons[sourceId]) {
        const base = { ...Oraisons[sourceId] };
        const propre = Oraisons[ChoixOraison] || {};
        OraisonsDuJour = { ...base, ...propre };
    } else if (ChoixOraison) {
        OraisonsDuJour = Oraisons[ChoixOraison] || null;
    }
    if (RituelduJour && Rituelplus[RituelduJour]) {
            const rituelPropre = Rituelplus[RituelduJour];}

    // 2. Préparation du contexte des options
    const options = {
        presenceBishop, kyriegrec, glorialatin, agnusLt, sanctusLt, precision, Conclusion,
        incense, hideliturgieeucharistique, servants, presenceDiacre, croix, bapteme,
        showservants, cruciferaire, ceroferaire, porteinsigne, portemissel, Choixsacrement,
        acolytes, celebrationType, secret, hideRubriques, Apologies, exultet, 
        Communicantes, Messe, aspersion, salutation, ChoixPenitentiel, renonciation, renonciation2, 
        accueilmariage, collectemariage, dialoguemariage, consentements, benedictionmariage,
        ped, prierecommunebapteme, benbapt, tempspascal, benfbapt, Pbapteme,
        hideGloria, OraisonsDuJour, Showoraisons, hideCredo, typeCredo, entreerameaux,
        InvitS, PriereC, preface, hidePE, typePE, AcclamationEucharistique, 
        DoxologieLt, NotrePère, envoi, litbap, anneeLiturgique, projectType,
    };

    // 3. Sous-fonction de filtrage sécurisée
    const checkConditions = (item) => {
        if (!item) return false;
        if (!showservants && item.type === "servants") {
        return false;}
        // Masquage global des rubriques
        if (hideRubriques && (item.type === "rubrique" || item.type === "rubriqueinterne")) return false;
        
        const cond = item.conditions;
        // S'il n'y a pas de conditions, on affiche
        if (!cond || Object.keys(cond).length === 0) return true;

        for (const [key, expected] of Object.entries(cond)) {
            const actual = options[key];
            if (actual === undefined) continue;

            if (Array.isArray(expected)) {
                if (!expected.includes(actual)) return false;
            } else if (actual !== expected) {
                return false;
            }
        }
        return true;
    };

    // 4. Boucle principale
    filteredRituel = [];
    for (const step of fullRituel) {
        // Protection contre les objets sans type
        const sType = step.type || "";

        // Cas particuliers
        if (!showservants && sType === "servants") continue;

        // Gestion des oraisons
          if (sType.startsWith("insert-antienne") || sType.startsWith("insert-priere") || sType.startsWith("insert-collecte")) {
              const key = sType.replace("insert-", "");
              if (Showoraisons && OraisonsDuJour && OraisonsDuJour[key]) {
                  if (sType.includes("antienne") && celebrationType !== "Semaine") continue;
                  filteredRituel.push({ type: "oraison", segments: OraisonsDuJour[key] });
              }
              continue;}
          
          if (sType === "insert-SurLePeuple") {
            if (Conclusion=== "2") filteredRituel.push({ type: "oraison", segments: OraisonsDuJour.priereSurLePeuple });
            continue; }

          if (sType === "insert-benediction") {
            if (Conclusion === "3") {
                filteredRituel.push(benedictions[Benediction]); }
            continue; }
                    
          if (sType.startsWith("insert-") && !sType.includes("antienne") && !sType.includes("priere")) {
            const sectionKey = sType.replace("insert-", "");
    
    if (RituelduJour && Rituelplus[RituelduJour]) {
        const rituelPropre = Rituelplus[RituelduJour];
        const dataSection = rituelPropre[sectionKey];

        if (dataSection && Array.isArray(dataSection)) {
            dataSection.forEach(item => {
              if (checkConditions(item)) {
                filteredRituel.push({
                    ...item,
                    type: item.type || "text" 
                });
              }
            });
            continue; 
        }
    }
}
        // Gestion préface
        if (sType === "titre-preface") {
            if (Showpreface && prefacedujour) filteredRituel.push({ type: "preface-titre", texte: prefacedujour.titre });
            continue; }
        if (sType === "soustitre-preface") {
            if (Showpreface && prefacedujour) filteredRituel.push({ type: "soustitre-preface", texte: prefacedujour.soustitre });
            continue; }
        if (sType === "insert-preface") {
            if (Showpreface && prefacedujour && typePE !== "PE4") filteredRituel.push({ type: "preface", segments: prefacedujour.items });
            continue; }

        //Sacrements
        if (sType === "insert-sacrements") {
            if (sacrementtype) {sacrementtype.forEach(item => {
            if (checkConditions(item)) {
                filteredRituel.push({...item, type: item.type || "text"});} });}
            continue; }

        // --- LOGIQUE DE FILTRAGE ---
        // 1. On vérifie si l'étape elle-même peut être affichée
        if (!checkConditions(step)) continue;

        // 2. Si l'étape a des items, on les filtre
        if (step.items && Array.isArray(step.items)) {
            const filteredItems = step.items.filter(checkConditions);
            // On ajoute l'élément avec ses items filtrés (même si la liste est vide, car l'élément parent peut avoir un type "h3" ou "tableau" important)
            filteredRituel.push({ ...step, items: filteredItems });
        } else {
            // Étape simple sans sous-items
            filteredRituel.push(step);
        }
    }
}

  function handleAspersion(event) {
  aspersion = event.target.checked;
  if (aspersion) {
    ChoixPenitentiel = "4CP"; // Force le choix au rite d'aspersion
  } else {
    ChoixPenitentiel = "1CP"; // Revient au rite par défaut si on décoche
  }
}


let card; // Cette variable sera liée à ton élément HTML
  let showScrollButton = false;

  function scrollFunction() {
    if (!card) return;
    
    // On vérifie le scroll interne du conteneur
    if (card.scrollTop > 100) {
      showScrollButton = true;
    } else {
      showScrollButton = false;
    }
  }

  function scrollToTop() {
    if (card) {
      card.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function toggleLatin() {DoxologieLt = !DoxologieLt;}
  function toggleKyrieGrec() {kyriegrec = !kyriegrec;}
  function toggleGloriaLatin() {glorialatin = !glorialatin;}
  function toggleSanctusLatin() {sanctusLt = !sanctusLt;}
  function toggleAgnusLatin() {agnusLt = !agnusLt;}

$: if (presenceBishop) {porteinsigne = true } else {porteinsigne = false }

</script>


<!--
HTML
-->
{#if showPopup}
<div class="overlay" on:click={closePopup} on:keydown={(e) => {if (e.key === 'Enter' || e.key === ' ') closePopup()}} role="button" tabindex="0"></div>
<div class="modal">
  <button class="btn-close" on:click={closePopup} aria-label="Fermer">×</button>
  <h2>{pages[currentPage].title}</h2>
<div class="modal-body">
  <p>{@html pages[currentPage].content}</p>
 {#if pages[currentPage].title === "Roadmap"}  <Roadmap />{/if}
 {#if pages[currentPage].title === "Nouveautés"}  <Nouveautes />{/if}
 </div>

 <footer>
  <div class="nav">
    <button on:click={() => currentPage--} disabled={currentPage === 0}>← Précédent</button>
    {#if currentPage < pages.length - 1}
      <button on:click={() => currentPage++}>Suivant →</button>
    {/if}
  </div>

  </footer>
</div>
{/if}

{#if currentStep === "choice"}
  <div class="welcome-screen">
    <div class="welcome-card">
      <h1 class="titre-principal" style="color: white; text-align: center;">Que souhaitez-vous générer ?</h1>
      <p style="text-align: center; color: #ccc; margin-bottom: 2rem;">Sélectionnez le type de rituel pour commencer</p>
      
      <div class="choice-grid">
        <button class="choice-btn" on:click={() => { projectType = 'messe'; currentStep = 'generator'; }}>
          <span class="choice-icon">⛪</span>
          <span class="choice-title">Rituel de Messe</span>
          <span class="choice-desc">Missel Quotidien Complet pour la forme ordinaire du rite romain</span>
        </button>

        <button class="choice-btn" on:click={() => { projectType = 'sacrement'; currentStep = 'generator'; }}>
          <span class="choice-icon">🕊️</span>
          <span class="choice-title">Rituel de Sacrement</span>
          <span class="choice-desc">Rituels complets pour la célébration des sacrements</span>
        </button>

        <button class="choice-btn disabled" disabled title="Bientôt disponible">
          <span class="choice-icon">✨</span>
          <span class="choice-title">Messe + Sacrement</span>
          <span class="choice-desc">(Prochainement)</span>
        </button>
      </div>
    </div>
  </div>

{:else}
<!--
-->
<a 
  href="mailto:contact@ricat.fr" 
  class="floating-contact-btn no-print"
  title="Signaler un bug ou me contacter"
>
  <span class="icon">✉</span>
  <span class="text">Contact / Bug</span>
</a>

<button class="hamburger-trigger no-print" on:click={toggleMenu}>
  <span>☰</span>
</button>

{#if menuOpen}
  <button class="menu-overlay no-print" on:click={toggleMenu} type="button" aria-label="Fermer le menu"></button>
{/if}

<div class="container">
  <div class="sidebar no-print">
  <div class="Paramètres no-print" class:open={menuOpen}>
    <button class="close-menu no-print" on:click={toggleMenu}>×</button>
    <button class="brand-chip" on:click={() => currentStep = "choice"} type="button">
      <span class="brand-dot"></span>
      <span>Version 0.5<br></span>
      <span class="brand-icon">☰</span>
    </button>
    <h1 class="titre-principal">Générateur de rituels catholiques</h1>


  
    <div class="prempare">
     <input id="NomRituel" bind:value={inputRituelName} placeholder="Donnez un nom à votre Rituel" type="text">
<!--
    <label>
      Célébration Eucharistique :
      <select bind:value={celebrationType}>
        <option value="Solennité">Solennité</option>
        <option value="Fête">Fète</option>
        <option value="Semaine">de semaine</option>
      </select>
    </label>
  -->
{#if projectType === 'messe'}
  <div id="selectdate">
<p>Sélectionnez une date :
<input type="date"
id="date-input"
name="selected_date" required
bind:value={selectedDate}
class="date-input"
/></p>
</div>
<!--
<button on:click={() => console.log(`Date choisie: ${selectedDate}`)}>
Afficher la date
</button>
-->
{#if availableEvents.length > 1}
  <p style="margin-top: 0">Aujourd'hui nous célébrons :</p>
  {#each availableEvents as event}
    <label 
      class="event-card" 
      class:active={selectedEventId === event.id}
      style="border-left-color: {getCssColor(event)};"
    >
      <input 
        type="radio" 
        bind:group={selectedEventId} 
        value={event.id} 
      />
      <div class="details">
        <span class="name">{event.name}</span>
      </div>
    </label>
  {/each}

{:else if availableEvents.length === 1}
  <p>Aujourd'hui nous célébrons :</p>
  <div 
    class="event-card active" 
    style="border-left-color: {getCssColor(availableEvents[0])}; cursor: default;"
  >
    <div class="details">
      <span class="name"><strong>{availableEvents[0].name}</strong></span>
    </div>
  </div>
{/if}

{#if selectedEvent && liturgyRules[selectedEvent.id]?.CommunOptions?.length >= 2}
  <div class="common-selector no-print">
    <p>Choisir le commun : </p>
    <select bind:value={selectedCommunId}>
      {#each liturgyRules[selectedEvent.id].CommunOptions as option}
        <option value={option.id}>{option.label}</option>
      {/each}
    </select>
  </div>
{/if}
{/if}
    {#if projectType === 'sacrement'}
{/if}
</div>


<div class="prempare" style="margin-bottom: 0.2rem">
{#if projectType === 'messe'}
<details class="panel" bind:open={showAutresceremonie}>
  <summary class="panel-header">
    <span>Eucharistie</span>
    <span class="arrow" class:open={showAutresceremonie}>▶</span>
  </summary>

  <div class="panel-content">
    <label class="toggle-container">
      <span class="label-text">Présence d'un évêque</span>
      <div class="switch">
        <input type="checkbox" bind:checked={presenceBishop} />
        <span class="slider"></span>
      </div>
    </label>
    
    <label class="toggle-container">
      <span class="label-text">Présence d'un diacre</span>
      <div class="switch">
        <input type="checkbox" bind:checked={presenceDiacre} />
        <span class="slider"></span>
      </div>
    </label>
    
    <label class="toggle-container">
      <span class="label-text">Bénédiction et aspersion de l'eau</span>
      <div class="switch">
        <input type="checkbox" bind:checked={aspersion} on:change={handleAspersion} />
        <span class="slider"></span>
      </div>
    </label>
    
    <label class="toggle-container">
      <span class="label-text">Prières secrètes</span>
      <div class="switch">
        <input type="checkbox" bind:checked={secret} />
        <span class="slider"></span>
      </div>
    </label>
    
    <div class="common-selector no-print" style="margin-left: 0rem; justify-content: space-between;">
      <label for="conclusion-select">Bénédiction</label>
      <select id="conclusion-select" bind:value={Conclusion}>
        <option value="1">Forme Standard</option>
        <option value="2">Prière sur le Peuple</option>
        {#if Benediction !== ""}
          <option value="3">Bénédiction Solennelle</option>
        {/if}
      </select>
    </div>
  </div>
</details>

          <!--
    {#if Conclusion === "3"}
        <select class=" toggle-container common-selector no-print" bind:value={Benediction}>
            <option value="">-- Choisir une bénédiction --</option>
            <option value="TO_1">Temps Ordinaire I</option>
            </select>
    {/if}

          <div class="panel" style="padding: 0.2rem">
        <div class="panel-header" role="button" tabindex="0" aria-expanded={showcat}
          on:click={() => showcat = !showcat}
          on:keydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); showcat = !showcat; }}}>
        <span>Afficher / Masquer certains éléments </span>
        <span class="arrow {showcat ? 'open' : ''}">▶</span>
        </div> </div>
    {#if showcat}
<div class="panel-content">
          <label class="toggle-container">
            <span class="label-text">Prières secrètes</span>
            <div class="switch">
              <input type="checkbox" bind:checked={secret} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Masquer la Liturgie de la Parole</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideLiturgieParole} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Masquer la Liturgie Eucharistique</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideliturgieeucharistique} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Masquer le Gloria</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideGloria} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Masquer le Credo</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideCredo} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Afficher les oraisons</span>
            <div class="switch">
              <input type="checkbox" bind:checked={Showoraisons} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Afficher la préface</span>
            <div class="switch">
              <input type="checkbox" bind:checked={Showpreface} />
              <span class="slider"></span>
            </div>
          </label>
          <label class="toggle-container">
            <span class="label-text">Masquer la prière Eucharistique</span>
            <div class="switch">sacrements
              <input type="checkbox" bind:checked={hidePE} />
              <span class="slider"></span>
            </div>
          </label>
</div>
{/if}
 -->
{/if}
    {#if projectType === 'sacrement'}
<!-- Début section sacrements  -->
 <details class="panel" bind:open={MenuSacrements}>
  <summary class="panel-header">
  <span>Sacrements</span>
  <span class="arrow" class:open={MenuSacrements}>▶</span>
  </summary>

{#if MenuSacrements}
        <div class="grid-buttons">
          <label class="servant-option">
            <input type="radio" bind:group={Choixsacrement} value="baptême" name="Baptême">
            <!--<img src={} alt="Baptême"> -->
            <span>Baptême</span>
          </label>
          <label class="servant-option disabled" disabled title="Bientôt disponible">
            <input disabled type="radio" bind:group={Choixsacrement} value="BetP" name="Baptême et Confirmation">
            <span>Baptême et Confirmation</span>
          </label>
          <label class="servant-option">
            <input type="radio" bind:group={Choixsacrement} value="mariage" name="Mariage">
            <span>Mariage</span>
          </label>
          <label class="servant-option disabled" disabled title="Bientôt disponible">
            <input disabled type="radio" bind:group={Choixsacrement} value="sacrementDesMalades" name="Sacrement des malades">
            <span>Sacrement des malades</span>
          </label>
        </div>
      {/if}
</details>
{/if}

<!-- Menu Baptême -->
{#if projectType === 'sacrement' & Choixsacrement === 'baptême'}
<details class="panel" bind:open={MenuBaptême}>
  <summary class="panel-header">
    <span>Paramètres Baptême</span>
    <span class="arrow" class:open={MenuBaptême}>▶</span>
  </summary>

  {#if MenuBaptême}
        <label class="toggle-container">
      <span class="label-text">Plusieurs baptêmes</span>
      <div class="switch">
        <input type="checkbox" bind:checked={Pbapteme} />
        <span class="slider"></span>
      </div>
    </label>
      {/if}
</details>
{/if}

<!-- Début section Servants -->
     {#if projectType === 'messe'}
<details class="panel" bind:open={Servants}>
  <summary class="panel-header">
    <span>Service de l'autel</span>
    <span class="arrow" class:open={Servants}>▶</span>
  </summary>

  <div class="panel-content">
      <label class="toggle-container">
        <span class="label-text">Afficher les commentaires</span>
        <div class="switch">
          <input type="checkbox" bind:checked={showservants} />
          <span class="slider"></span>
        </div>
      </label>

      {#if showservants}
        <div class="servants-grid">
          <label class="servant-option">
            <input type="checkbox" bind:checked={cruciferaire} name="Cruciféraire">
            <img src={croixdeprocession} alt="Cruciféraire">
            <span>Cruciféraire</span>
          </label>

          <label class="servant-option">
            <input type="checkbox" bind:checked={ceroferaire} name="Céroféraires">
            <img src={cierges} alt="Céroféraires">
            <span>Céroféraires</span>
          </label>

          <label class="servant-option">
            <input type="checkbox" bind:checked={acolytes} name="Acolytes">
            <img src={acolytat} alt="Acolytes">
            <span>Acolytes</span>
          </label>

          <label class="servant-option">
            <input type="checkbox" bind:checked={portemissel} name="Porte-missel">
            <img src={missel} alt="Porte-missel">
            <span>Porte-missel</span>
          </label>

          <label class="servant-option">
            <input type="checkbox" bind:checked={incense} name="Thuriféraire et naviculaire">
            <img src={encensoir} alt="Thuriféraire et naviculaire">
            <span>Thuriféraire et naviculaire</span>
          </label>
          
          <label class="servant-option">
            <input type="checkbox" bind:checked={porteinsigne} name="Porte-insignes">
            <img src={imginsigne} alt="Porte-insignes">
            <span>Porte-insignes</span>
          </label>
        </div>
      {/if}
  </div>
</details>
{/if}
<!-- Fin section Servants -->


<!-- ✅ Section AUTRES PARAMÈTRES -->
<div class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={showAutresParams}
  on:click={() => showAutresParams = !showAutresParams}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showAutresParams = !showAutresParams; } }} >
  <span>Autres paramètres</span>
  <span class="arrow {showAutresParams ? 'open' : ''}">▶</span>
</div>

  {#if showAutresParams}
        <label class="toggle-container">
            <span class="label-text">Ne pas afficher les rubriques :</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideRubriques} />
              <span class="slider"></span>
            </div>
        </label>
        <div class="font-size-control">
        <span class="label-text">Taille du texte ({Math.round(fontSizeScale * 100)}%)</span>
        <div class="slider-container">
            <input type="range" min="0.75" max="1.5" step="0.05" 
              bind:value={fontSizeScale}
              class="custom-slider"/>
        </div> </div>
      {/if}
</div>

  <div  class="button-section">
      <button class="onboard-btn no-print" on:click={() => forceOpen = true}>?</button>
      <button title="Choisir ensuite “Enregistrer au format PDF”" class="css-button-sharp--grey" on:click={() => window.print()}>Exporter en PDF</button>
      <!-- <button class="css-button-sharp--grey" on:click={generateWord}>Exporter en Word</button>  -->
  </div>
</div>
</div>


<main>
  <Affichage 
    {filteredRituel}
    {rituelName}
    {projectType}
    {CelebrationduJour}
    {fontSizeScale}
    {availablePrefaces}
    {preface}
    {liturgicalContext}
    
    {prefacedujour} bind:Choixpreface
    bind:salutation
    bind:ChoixPenitentiel
    bind:typeCredo
    bind:InvitS
    bind:PriereC
    bind:typePE
    bind:AcclamationEucharistique
    bind:NotrePère
    bind:Apologies
    bind:envoi
    bind:croix
    bind:exultet
    bind:litbap
    bind:renonciation
    bind:renonciation2
    bind:bapteme
    bind:entreerameaux

    bind:accueilmariage
    bind:collectemariage
    bind:dialoguemariage
    bind:consentements
    bind:benedictionmariage

    bind:ped
    bind:prierecommunebapteme
    bind:benbapt
    bind:tempspascal
    bind:benfbapt
    
    bind:kyriegrec
    bind:glorialatin
    bind:sanctusLt
    bind:DoxologieLt
    bind:agnusLt

    {generateRituel}
    {isAllowed}
    {toggleKyrieGrec}
    {toggleGloriaLatin}
    {toggleSanctusLatin}
    {toggleLatin}
    {toggleAgnusLatin}
  />
</main>

</div>
{/if}

<!-- Ajouter une condition
          {#if celebrationType === "Dominicale"}
  <div class="sub-options">
  {/if}
-->

<!--
CSS
-->


<style>
:root { --brand: #495057; --accent: #b30000 !important; /* rouge liturgique */ --bg: #fff; --card: #ffffff; --muted: #6c757d; --radius: 10px; --pad: 1rem; --gap: 1rem; --font-main: "Times New Roman", Times, serif; }
:global(body, html) { background-color: #3D3D3D; margin: 0; padding: 0; height: 100vh; overflow: hidden; /* Empêche le scroll sur toute la page */ }
.container { background: transparent; display: grid; grid-template-columns: 400px 1fr; height: 100vh; width: 100vw; transition: grid-template-columns 0.3s ease; }
.sidebar { background-color: transparent; color: white; padding: 20px; overflow-y: auto; position: sticky; scrollbar-width: none; }
.sidebar::-webkit-scrollbar { display: none; }
/* --- LA FEUILLE UNIQUE (Blanche) --- */
.brand-chip { display: flex; align-items: center; margin-bottom: 1.5rem; background-color: #4A141C; /* Le rouge bordeaux de la maquette */ color: #ffffff; display: inline-flex; align-items: center; padding: 10px 14px; border-radius: 20px; /* Très arrondi pour l'effet "chipset" */ font-size: 0.85rem; letter-spacing: 1px; }
.prempare { background-color: #50504F; /* Le rouge bordeaux de la maquette */ color: #ffffff; padding: 15px 14px; border-radius: 10px; margin-bottom: 1rem; }
/***************************************************** * BASE TYPO *****************************************************/
p { line-height: 1.3; font-family: var(--font-main); text-align: justify; }
/***************************************************** * TITRES *****************************************************/
h1, h2 { font-family: var(--font-main); display: block; text-align: center; page-break-inside: avoid; }
h1 { font-size: calc(1.8rem * var(--scale, 1)); font-weight: 700; margin:2rem 0 1rem 0; }
h2 { font-size: calc(1.4rem * var(--scale, 1)); font-weight: 700; margin:1.5rem 0 1rem 0;}
h1.titre-principal { text-align: center; margin: 0 0 var(--gap) 0; font-size: calc(2rem * var(--scale, 1)); letter-spacing: 0.2px;}
details::marker {
  content: "✝ ";
  font-size: 1.2em;
}

/***************************************************** * PANELS — (PARAMÈTRES DU GÉNÉRATEUR) *****************************************************/
.panel { margin-bottom: 0.75rem; padding: 0.6rem; border-radius: calc(var(--radius) - 2px); border: 3px solid rgba(23, 24, 24, 0.175); }
.panel + .panel-header { margin-top: 1rem; } /* espace visuel entre blocks */
.panel-header { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.5rem 0.6rem; cursor: pointer; border-radius: calc(var(--radius) - 4px); transition: background 0.12s ease, transform 0.08s ease; border: 2px solid transparent; }
.panel-content { padding: 0.6rem 0.2rem 0.2rem 0.2rem; }
/* arrow */
.arrow{ color:#E2E3E4; transition: transform .18s ease; }
.arrow.open{ transform: rotate(90deg); color:#3D3D3D; }
/***************************************************** * CHAMPS DE FORMULAIRE *****************************************************/
label { display: block; }
label.toggle-container {margin-bottom: 0.5rem;}
input[type="checkbox"] { width: 16px; height: 16px; accent-color: var(--brand); }
input[type="text"], #NomRituel { width: 100%; box-sizing: border-box; padding: 0.5rem; border-radius: 6px; border: 2px solid rgba(0,0,0,0.1); font-size: 1.1rem; }
/***************************************************** * GRILLE SACREMENTS *****************************************************/
.css-button-sharp--grey { min-width: 130px; height: 40px; color: #E2E3E4; padding: 6px 14px; font-weight: 700; cursor: pointer; transition: all 0.18s ease; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center; border: 2px solid #4A141C; background: #4A141C; }
.css-button-sharp--grey:hover { background: #E2E3E4; color: #4A141C; transform: translateY(-2px); }
.button-section { position: sticky; overflow: auto; display: flex; gap: 110px; flex-wrap: wrap; align-items: center; height: 80px; margin-bottom: 40px; }
/***************************************************** * MOBILE — POLICES LÉGÈREMENT RÉDUITES *****************************************************/
@media (max-width: 600px) { 
  h1  { font-size: calc(1.1rem * var(--scale, 1)); margin :1.2rem 0 0.5rem 0; } 
  h2 { font-size: calc(0.9rem * var(--scale, 1)); margin: 1rem 0 0.5rem 0 !important; } 
  p { font-size: calc(0.7rem * var(--scale, 1)); } 
  .modal {width: 300px !important; max-height: 80vh !important; }
 }
/***************************************************** * ONBOARDING MODAL *****************************************************/
.overlay { position: fixed; inset: 0; inset: 0; /* couvre toute la page */ pointer-events: auto; }
.modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 2rem 2rem 1.5rem 2rem; max-height: 70vh; border-radius: 10px; width: 500px; max-width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; z-index: 7; }
.modal-body { flex: 1; padding: 0 0.5rem; overflow-y: auto; /* scroll si contenu trop grand */ margin: 0 0 1rem 0; }
.modal h2 { font-size: 2rem; margin: 0 0 0.5rem; text-align: center; }
.modal p { text-align: justify; font-size: 1.1rem; /* Taille de police standard pour le contenu */ line-height: 1.6; margin-bottom: 1.5rem; color: #444; }
.nav { display: flex; justify-content: space-between; }
.btn-close { position: absolute; top: 4px; right: 12px; background: transparent; border: none; font-size: 40px; color: #999; cursor: pointer; line-height: 1; padding: 5px; transition: color 0.2s; }
.btn-close:hover { color: var(--accent, #b30000); /* Devient rouge au survol */ }
/***************************************************** * BOUTONS MODAL *****************************************************/
button { padding: 0.6rem 1rem; border: none; border-radius: 6px; background: #ddd; cursor: pointer; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
/***************************************************** * BOUTON ONBOARDING FIXE *****************************************************/
.onboard-btn { margin: 0 1.5rem 0 0.5rem; width: 60px; height: 60px; border-radius: 50%; border: none; background: #4A141C; color: #E1E1E1; font-size: 2rem; font-weight: bold; cursor: pointer; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); transition: transform 0.1s ease; display: flex; align-items: center; justify-content: center; }
.onboard-btn:hover { transform: scale(1.12); }
/***************************************************** * Liturgie du jour - Sélecteur d'événements *****************************************************/
.event-card { display: flex; align-items: center; gap: 12px; padding: 10px 10px 10px 10px; background: #E1E1E1; cursor: pointer; margin: 0.5rem 0 0 0; border-left: 12px solid #ccc; border-right: 1px solid rgba(0,0,0,0.08); color: #3D3D3D; font-size: 1rem; border-radius: 0 6px 6px 0; /* Arrondi uniquement à droite */ transition: all 0.2s ease; }
.event-card.active { background: #e9ecef; box-shadow: inset 2px 0 5px rgba(0,0,0,0.1); }
.details { display: flex; flex-direction: column; }
.name { font-weight: bold; }
input[type="radio"] { accent-color: #4A141C; /* Remplace le bleu par votre rouge liturgique */ cursor: pointer; }
input[type="date"], input[type="text"] { padding: 0.38rem 0.5rem; border: 1px solid rgba(0,0,0,0.08); background-color: #E1E1E1; border-radius: 6px; }
#selectdate { display: flex; justify-content: flex-start; align-items: center; }
/***************************************************** * BOUTONS - Retour en haut de page *****************************************************/
@media print {
  @page { size: A4; margin: 1.5cm; }
  :global(body, html) { overflow: visible !important; height: auto !important; margin: 0 !important; padding: 0 !important; background-color: white; }
  .container { display: block !important; width: 100% !important; }
  .sidebar, .no-print { display: none !important; }

  h1, h2 {
    page-break-after: avoid !important;
    page-break-before: avoid !important;
    page-break-inside: avoid !important;
    break-after: avoid !important;
    break-before: avoid !important;
    break-inside: avoid !important;
    orphans: 3;
    widows: 3;
  }

  h1 + *, h2 + * {
    page-break-before: avoid !important;
    break-before: avoid !important;
  }
}
/***************************************************** * BOUTON DE CONTACT *****************************************************/
.floating-contact-btn { position: absolute; top: 28px; right: 8px; z-index: 3; /* Au-dessus de la sidebar et du rituel */ display: flex; align-items: center; gap: 4px; background-color: #4A141C; color: #E1E1E1; text-decoration: none; padding: 4px 10px; cursor: pointer; border-radius: 10px; border: 1px solid #4A141C;; font-family: sans-serif; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s ease; }
.floating-contact-btn:hover { background: #E1E1E1; color: #4A141C; transform: translateY(-2px); }
.floating-contact-btn .icon { font-size: 1.1rem; }
/***************************************************** * BOUTONS TOGGLE *****************************************************/
.toggle-container { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; cursor: pointer; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.switch { position: relative; display: inline-block; width: 40px; height: 20px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #777; transition: .4s; border-radius: 20px; }
.slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: #4A141C; }
input:checked + .slider:before { transform: translateX(20px); }

.servants-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(12px, 1fr));
  gap: 12px;
}

.servant-option {
  background: #3D3D3D;
  border: 2px solid #555;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.servant-option img {
  width: auto;
  height: 70px;
  margin-bottom: 4px;
  filter: grayscale(100%);
}

.servant-option span {
  color: #E0E0E0;
  font-size: 0.9rem;
}

/* cacher la checkbox */
.servant-option input {
  display: none;
}

/* état sélectionné */
.servant-option input:checked + img {
  filter: none;
}

.servant-option input:checked ~ * {
  border-color: #4A141C;
}

.servant-option:has(input:checked) {
  border-color: #4A141C;
  box-shadow: 0 0 6px rgba(74, 20, 28, 0.6);
}
.welcome-screen {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3D3D3D;
}

.welcome-card {
    max-width: 900px;
    width: 95%;
}

.choice-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.choice-btn {
    background: #50504F;
    border: 1px solid #444;
    padding: 30px;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.choice-btn:hover {
    background: #333;
    border-color: #666;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.choice-icon { font-size: 3rem; margin-bottom: 1rem; }
.choice-title { font-size: 1.2rem; font-weight: bold; display: block; margin-bottom: 0.5rem; }
.choice-desc { font-size: 0.9rem; color: #888; }

.choice-btn.disabled {
    opacity: 0.5;
    cursor: default;
    filter: grayscale(1); /* Met le bouton en noir et blanc */
    border-style: dashed; /* Bordure en pointillés pour l'aspect "en construction" */
}

.servant-option.disabled {
    opacity: 0.5;
    cursor: default;
    filter: grayscale(1); /* Met le bouton en noir et blanc */
    border-style: dashed; /* Bordure en pointillés pour l'aspect "en construction" */
}

.choice-btn.disabled:hover {
    transform: none; /* Désactive l'animation de survol */
    box-shadow: none;
    background: #2a2a2a;
}

.servant-option.disabled:hover {
    transform: none; /* Désactive l'animation de survol */
    box-shadow: none;
    background: #2a2a2a;
}
.grid-buttons {
  display: grid;
  gap: 5px;
} 

.common-selector {
      display: flex;
      align-items: center;
      margin-left: 1rem;
}

.common-selector select {
  margin-left: 0.5rem;
  width: 160px;
	padding: 0.4rem;
	border: 1px solid rgba(0,0,0,0.08);
	border-radius: 10px;
	background-color: #E9ECEF;
  color: #414141;
}

/* --- MEDIA QUERIES (RESPONSIVE DESIGN) --- */

/* TABLETTES & PETITS ÉCRANS (jusqu'à 1024px) */
@media (max-width: 1024px) { 
  .container { 
    grid-template-columns: 300px 1fr; /* Réduit la largeur de la sidebar */
  }
  .button-section {
    gap: 20px;
    justify-content: center;
  }
}

/* MOBILES (jusqu'à 768px) */
@media (max-width: 768px) {
  /* On redonne le scroll naturel à la page sur mobile */
  :global(body, html) {
    height: auto !important;
    overflow: auto !important; 
  }

  /* La grille devient une simple colonne (empilement) */
  .container { 
    display: flex;
    flex-direction: column;
    height: auto; 
  }

  /* La barre latérale prend toute la largeur et n'est plus "sticky" */
  .sidebar { 
    width: 100%;
    position: relative; 
    max-height: none; 
    box-sizing: border-box;
    padding: 0rem;
  }

  .welcome-card {width: 80% }
.choice-btn { padding: 20px; }

  /* Boutons d'export en bas */
  .button-section { 
    position: relative; 
    display: flex; 
    flex-wrap: wrap;
    gap: 15px; 
    justify-content: center; 
    padding: 1rem 0;
    height: auto;
    margin-bottom: 0px;
  }
  
  .floating-contact-btn { 
    top: 15px; 
    right: 15px; 
    padding: 8px 12px; 
    border-radius: 50%; 
  }
  .floating-contact-btn .text { 
    display: none; 
  }
  
  .onboard-btn { 
    margin: 0; 
    width: 50px; 
    height: 50px; 
    font-size: 1.5rem; 
  }
}
.font-size-control {
  width: 100%;
  display: flex;
  flex-direction: column; /* Label au dessus du slider */
  gap: 5px;
  padding: 5px 0;
}

.slider-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.custom-slider {
  width: 100%;
  cursor: pointer;
  accent-color: #710000; /* La couleur rouge sombre de votre charte si souhaité */
}

 /* --- Gestion du menu sur mobile --- */
.hamburger-trigger, .close-menu, .menu-overlay {
  display: none; }

.Paramètres {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
}

/* --- 2. CONFIGURATION MOBILE (En dessous de 1024px) --- */
@media (max-width: 1024px) {
  .hamburger-trigger {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 5;
    background: #4A141C;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 1.2rem;
  }
  .close-menu {
    display: block;
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    z-index: 5;

  }
  .menu-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 5;
  }

  .Paramètres {
    position: fixed;
    top: 0;
    left: -400px; /* Caché à gauche */
    width: 320px;
    height: 100vh;
    background: #3D3D3D;
    z-index: 6;
    transition: left 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.5);
    overflow-y: auto;
    padding: 1rem;
  }


  .Paramètres.open {

    left: 0;

  }

} 

</style>
