<!--
JS
-->

<script>
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
    const { Romcal } = romcalModule; 
    import { France_Fr } from '@romcal/calendar.france';
    import { liturgyRules } from '$lib/mapping.js';
const romcal = new Romcal({ localizedCalendar: France_Fr });

// --- Variables d'état ---
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
  let [Bapteme, PremiereCommunion, Confirmation, Mariage, Ordination, sacrementDesMalades] = [false,false,false,false,false,false];
  
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

//paramètres servants
  let showservants = false;
  let [incense, cruciferaire, ceroferaire, porteinsigne, portemissel, acolytes] = [false, true, true, false, true, true];
  let [showAutresParams, hideliturgieeucharistique, hideritesInitiaux, hideLiturgieParole, hideritesdeConclusion, Sacrements, Servants, showAutresceremonie] = [false, false, false, false, false, false, false, false];
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

$: {hideLiturgieParole, selectedEventId, inputRituelName, secret, hideGloria, glorialatin, sanctusLt, agnusLt, Conclusion,
    DoxologieLt, hideCredo, Showpreface, hidePE, Showoraisons, hideliturgieeucharistique, kyriegrec, precision, bapteme,
    Bapteme, PremiereCommunion, Confirmation, Mariage, Ordination, celebrationType, selectedCommunId, exultet,
    sacrementDesMalades, salutation, ChoixPenitentiel, typeCredo, presenceDiacre, RituelduJour, croix, litbap, anneeLiturgique,
    InvitS, PriereC, Choixpreface, typePE, AcclamationEucharistique, aspersion, hideritesdeConclusion, entreerameaux,
    Communicantes, NotrePère, Apologies, envoi, hideRubriques, showservants, hideritesInitiaux, renonciation, renonciation2,
    presenceBishop, incense, servants, cruciferaire, ceroferaire, porteinsigne, portemissel, acolytes;    
    generateRituel();
}

// Génération du rituel filtré
function generateRituel() {
  const fullRituel = [
...(rituel.autresrituel || []),
...(hideritesInitiaux ? [] : rituel.ritesInitiaux),
...(hideLiturgieParole ? [] : rituel.liturgiedelaparole),
...(hideliturgieeucharistique ? [] : rituel.liturgieeucharistique),
...(hideritesdeConclusion ? [] : rituel.ritesdeConclusion),
];

console.log(typeCredo);
    rituelName = inputRituelName;

    // 1. Mise à jour des données (Préfaces et Oraisons)
    if (Choixpreface) { prefacedujour = preface[Choixpreface] || null; }

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
        showservants, cruciferaire, ceroferaire, porteinsigne, portemissel, 
        acolytes, celebrationType, secret, hideRubriques, Apologies, exultet,
        Communicantes, Messe, aspersion, salutation, ChoixPenitentiel, renonciation, renonciation2,
        hideGloria, OraisonsDuJour, Showoraisons, hideCredo, typeCredo, entreerameaux,
        InvitS, PriereC, preface, hidePE, typePE, AcclamationEucharistique, 
        DoxologieLt, NotrePère, envoi, litbap, anneeLiturgique
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

<button class="choice-btn disabled" disabled title="Bientôt disponible">
    <span class="choice-icon">🕊️</span>
    <span class="choice-title">Rituel de Sacrement</span>
    <span class="choice-desc">(Prochainement)</span>
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
  <div class="menu-overlay no-print" on:click={toggleMenu}></div>
{/if}

<div class="container">
<div class="Paramètres" class:open={menuOpen}>
    <button class="close-menu no-print" on:click={toggleMenu}>×</button>
  <div class="sidebar no-print">
    <div class="brand-chip">
      <span class="brand-dot"></span>
      <span>Version 0.5<br></span>
      <span class="brand-icon">☰</span>
    </div>
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
</div>


<div class="prempare" style="margin-bottom: 0.2rem">
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
      <p>Bénédiction</p>
      <select bind:value={Conclusion}>
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
            <div class="switch">
              <input type="checkbox" bind:checked={hidePE} />
              <span class="slider"></span>
            </div>
          </label>
</div>
{/if}
 -->


<!-- Début section sacrements 
<div class="panel">
<div class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={Sacrements}
  on:click={() => Sacrements = !Sacrements}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); Sacrements = !Sacrements; }
  }}
>
  <span>Sacrements</span>
  <span class="arrow {Sacrements ? 'open' : ''}">▶</span>
</div>

{#if Sacrements}
        <div class="grid-buttons">
          <label><input type="checkbox" bind:checked={Bapteme} /> Baptême</label>
          <label><input type="checkbox" bind:checked={PremiereCommunion} /> Première Communion</label>
          <label><input type="checkbox" bind:checked={Confirmation} /> Confirmation</label>
          <label><input type="checkbox" bind:checked={Mariage} /> Mariage</label>
          <label><input type="checkbox" bind:checked={Ordination} /> Ordination</label>
          <label><input type="checkbox" bind:checked={sacrementDesMalades} /> Sacrement des malades</label>
        </div>
      {/if}
</div>
 -->
<!-- Début section Servants -->
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
</div>

  <div  class="button-section">
      <button class="onboard-btn no-print" on:click={() => forceOpen = true}>?</button>
      <button title="Choisir ensuite “Enregistrer au format PDF”" class="css-button-sharp--grey" on:click={() => window.print()}>Exporter en PDF</button>
      <!-- <button class="css-button-sharp--grey" on:click={generateWord}>Exporter en Word</button>  -->
  </div>
</div>


  <!-- Affichage du rituel généré -->
     <div class="card-wrap">
    <div class="card" bind:this={card} 
    on:scroll={scrollFunction}
    style="--scale: {fontSizeScale}">
{#if filteredRituel.length > 0}
      {#if rituelName}
        <h2 class=" nomdurituel">{rituelName}</h2>
      {/if}
      <h2 class="premiergénéré">{CelebrationduJour}</h2>

  {#each filteredRituel as step}

  {#if step.type === "servants"}
  <div class="servants-container no-print-break">
    {#if step.items}
      {#each step.items as item}
        <span class="servants-line">{@html item.texte}</span>
      {/each}
    {:else}
      <span class="servants-line">{@html step.texte}</span>
    {/if}
  </div>


      {:else if step.type === "oraison"}
        <div class="oraison-texte">
    {#each (Array.isArray(step.segments) ? step.segments : [{ texte: step.segments }]) as seg}
      <p class={seg.class || ""} style="white-space: pre-line;">
        {@html seg.texte}
      </p>
    {/each}
        </div>

      {:else if step.type === "preface"}
        <div class="preface-texte">
    {#each (Array.isArray(step.segments) ? step.segments : [{ texte: step.segments }]) as seg}
            <p class={seg.class || ""} style="white-space: pre-line;">
              {@html seg.texte}
            </p>
          {/each}
        </div>

{:else if step.type === "preface-titre"}
  <div class="variant-header">
    <h3 class="h3">{step.texte}</h3>
    
    {#if availablePrefaces && availablePrefaces.length > 1}
      <div class="variant-buttons boutons4 no-print">
        {#each availablePrefaces as pref, i}
          <button 
            class:selected={Choixpreface === pref.id} 
            on:click={() => { 
                Choixpreface = pref.id; 
                // On recharge les données de la préface choisie
                prefacedujour = preface[Choixpreface]; 
                // On relance la génération du rituel
                generateRituel(); 
            }}
          >
            {pref.label || (i + 1)}
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else if step.type === "soustitre-preface"}
  <p class="rubrique" style="text-align: right; margin-bottom: 0.5rem;">{step.texte}</p>

{:else if step.id === "Salutation"}
  <div class="variant-header">
    <h2>{@html step.texte}</h2>
    <div class="variant-buttons no-print">
      <button class:selected={salutation === "S1"} 
        on:click={() => { salutation = "S1";  }}>1 </button>
      <button class:selected={salutation === "S2"} 
        on:click={() => { salutation = "S2";  }}>2 </button>
      <button class:selected={salutation === "S3"} 
        on:click={() => { salutation = "S3";  }}>3 </button>
    </div>
  </div>

  {:else if step.id === "ActePenitentiel"}
  <div class="variant-header">
    <h2>{@html step.texte}</h2>
    <div class="variant-buttons no-print">
      <button class:selected={ChoixPenitentiel === "1CP"} 
        on:click={() => { ChoixPenitentiel = "1CP";  }}>1 </button>
      <button class:selected={ChoixPenitentiel === "2CP"} 
        on:click={() => { ChoixPenitentiel = "2CP";  }}>2 </button>
      <button class:selected={ChoixPenitentiel === "3CP"} 
        on:click={() => { ChoixPenitentiel = "3CP";  }}>3 </button>
    </div>

  </div>  {:else if step.id === "aspersion"}
  <div class="variant-header">
    <p class="rubrique">{@html step.texte}</p>
    <div class="variant-buttons no-print">
      <button class:selected={ChoixPenitentiel === "4CP"} 
        on:click={() => { ChoixPenitentiel = "4CP";  }}>1 </button>
      <button class:selected={ChoixPenitentiel === "5CP"} 
        on:click={() => { ChoixPenitentiel = "5CP";  }}>2 </button>
    </div>
  </div>

  {:else if step.id === "kyrie"}
 <div class="variant-header">
    <h2>{@html step.texte}</h2>
    <div class="no-print">
      <button 
    class="btn-toggle-latin" 
    class:active={kyriegrec} 
    on:click={toggleKyrieGrec}
  >En Grec</button>
    </div>
  </div>

  {:else if step.id === "gloria"}
 <div class="variant-header">
    <h2>{@html step.texte}</h2>
    <div class="no-print">
      <button 
    class="btn-toggle-latin" 
    class:active={glorialatin} 
    on:click={toggleGloriaLatin}
  >En Latin</button>
    </div>
  </div>

  {:else if step.id === "Professiondefoi"}
  <div class="variant-header2">
        <h2 style="text-align: center;">{@html step.texte}</h2>
    <div class="variant-buttons2 no-print" style="margin-top: 0">
      <button class:selected={typeCredo === "NC"} 
        on:click={() => { typeCredo = "NC"; }}>Symbole de Nicée-Constantinople</button>
      <button class:selected={typeCredo === "AP"} 
        on:click={() => { typeCredo = "AP"; }}>Symbole des apôtres</button>
      <button class:selected={typeCredo === "Lt"} 
        on:click={() => { typeCredo = "Lt";  }}>Symbole de N-C en Latin</button>
    </div>
  </div>


{:else if step.id === "InvitS"}
  <div class="variant-header">
    <h4>{@html step.texte}</h4>
    <div class="variant-buttons no-print">
      {#each Array(6) as _, i}
        {@const val = (i + 1).toString()}
        <button 
          class:selected={InvitS === val} 
          on:click={() => { InvitS = val;  }}
        >
          {val}
        </button>
      {/each}
    </div>
  </div>

{:else if step.id === "PriereC"}
  <div class="variant-header">
    <h4>{@html step.texte}</h4>
    <div class="variant-buttons boutons5 no-print">
      {#each Array(9) as _, i}
        {@const val = (i + 1).toString()}
        <button 
          class:selected={PriereC === val} 
          on:click={() => { PriereC = val;  }}
        >
          {val}
        </button>
      {/each}
    </div>
  </div>

  {:else if step.id === "sanctus"}
 <div class="variant-header">
    <p class="rubrique">{@html step.texte}</p>
    <div class="no-print">
      <button 
    class="btn-toggle-latin" 
    class:active={sanctusLt} 
    on:click={toggleSanctusLatin}
  >En Latin</button>
    </div>
  </div>

  {:else if ["PE1", "PE2", "PE3", "PE4"].includes(step.id)}
  <div class="variant-header2">
    <div class="variant-buttons2 no-print no-wrap">
      <button class:selected={typePE === "PE1"} 
        on:click={() => { typePE = "PE1";  }}>Prière Eucharistique 1</button>
      <button class:selected={typePE === "PE2"} 
        on:click={() => { typePE = "PE2";  }}>Prière Eucharistique 2</button>
      <button class:selected={typePE === "PE3"} 
        on:click={() => { typePE = "PE3";  }}>Prière Eucharistique 3</button>
      <button class:selected={typePE === "PE4"} 
        disabled={!isAllowed("PE4", liturgicalContext)}
        on:click={() => { typePE = "PE4";  }}>Prière Eucharistique 4</button>
    </div>
        <h3 class="h3">{@html step.texte}</h3>
  </div>

{:else if step.id === "Anamnèse"}
 <div class="variant-header">
    <p class="rubrique">{@html step.texte}</p>
    <div class="variant-buttons no-print no-wrap">
      <button class:selected={AcclamationEucharistique === "AE1"} 
        on:click={() => { AcclamationEucharistique = "AE1";  }}>1 </button>
      <button class:selected={AcclamationEucharistique === "AE2"} 
        on:click={() => { AcclamationEucharistique = "AE2";  }}>2 </button>
      <button class:selected={AcclamationEucharistique === "AE3"} 
        on:click={() => { AcclamationEucharistique = "AE3";  }}>3 </button>
      <button class:selected={AcclamationEucharistique === "AE4"} 
        on:click={() => { AcclamationEucharistique = "AE4";  }}>4 </button>
    </div>
  </div>
  
{:else if step.id === "Doxologie"}
 <div class="variant-header">
    <p class="rubrique">{@html step.texte}</p>
    <div class="no-print">
      <button 
    class="btn-toggle-latin" 
    class:active={DoxologieLt} 
    on:click={toggleLatin}
  >En Latin</button>
    </div>
  </div>

  {:else if step.id === "NotrePère"}
 <div class="variant-header">
    <h3 class="h3 no-print">{@html step.texte}</h3>
    <div class="variant-buttons no-print">
      <button class:selected={NotrePère === "NP1"} 
        on:click={() => { NotrePère = "NP1";  }}>1 </button>
      <button class:selected={NotrePère === "NP2"} 
        on:click={() => { NotrePère = "NP2";  }}>2 </button>
      <button class:selected={NotrePère === "NP3"} 
        on:click={() => { NotrePère = "NP3";  }}>3 </button>
    </div>
  </div>

    {:else if step.id === "Apologies"}
 <div class="variant-header">
    <h3 class="h3 no-print">{@html step.texte}</h3>
    <div class="variant-buttons boutons2 no-print">
      <button class:selected={Apologies === "1"} 
        on:click={() => { Apologies = "1";  }}>1 </button>
      <button class:selected={Apologies === "2"} 
        on:click={() => { Apologies = "2";  }}>2 </button>
    </div>
  </div>

    {:else if step.id === "agnus"}
 <div class="variant-header">
    <p class="rubrique">{@html step.texte}</p>
    <div class="no-print">
      <button 
    class="btn-toggle-latin" 
    class:active={agnusLt} 
    on:click={toggleAgnusLatin}
  >En Latin</button>
    </div>
  </div>

    {:else if step.id === "envoi" && envoi !== "5"}
 <div class="variant-header">
    <h3 class="h3 no-print no-wrap">{@html step.texte}</h3>
    <div class="variant-buttons no-print no-wrap">
      <button class:selected={envoi === "1"} 
        on:click={() => { envoi = "1";  }}>1 </button>
      <button class:selected={envoi === "2"} 
        on:click={() => { envoi = "2";  }}>2 </button>
      <button class:selected={envoi === "3"} 
        on:click={() => { envoi = "3";  }}>3 </button>
      <button class:selected={envoi === "4"} 
        on:click={() => { envoi = "4";  }}>4 </button>
    </div>
  </div>

  {:else if step.id === "Croix"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="variant-buttons no-print">
      <button class:selected={croix === "1"} 
        on:click={() => { croix = "1";  }}>1 </button>
      <button class:selected={croix === "2"} 
        on:click={() => { croix = "2";  }}>2 </button>
    </div>
  </div>

{:else if step.items}
  <div class={step.class}>
    {#each step.items as item}
      {#if item.type === "servants"}
        <div class="servants-container no-print-break">
          <span class="servants-line">{@html item.texte}</span>
        </div>
      {:else}
        <p class="{item.type} {item.class || ''}">{@html item.texte}</p>
      {/if}
    {/each}
  </div>

  {:else if step.id === "exultet"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="vb2 no-print">
      <button class:selected={exultet === "1"} 
        on:click={() => { exultet = "1";  }}>forme longue</button>
      <button class:selected={exultet === "2"} 
        on:click={() => { exultet = "2";  }}>forme brève</button>
    </div>
  </div>

  {:else if step.id === "liturgiebaptismale"}
  <div class="">
    <h3>{@html step.texte}</h3>
    <div class="variant-buttons2 no-print no-wrap" style="margin-top: 0;">
      <button class:selected={litbap === "A"} 
        on:click={() => { litbap = "A";  }}>Bénédiction de l’eau baptismale et baptême</button>
      <button class:selected={litbap === "B"} 
        on:click={() => { litbap = "B";  }}>Bénédiction de l’eau baptismale</button>
      <button class:selected={litbap === "C"} 
        on:click={() => { litbap = "C";  }}>Bénédiction de l’eau</button>
    </div>
  </div>

  {:else if step.id === "renonciation"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="vb2 no-wrap no-print">
      <button class:selected={renonciation === "1"} 
        on:click={() => { renonciation = "1";  }}>Formule 1</button>
      <button class:selected={renonciation === "2"} 
        on:click={() => { renonciation = "2";  }}>Formule 2</button>
    </div>
  </div>

  {:else if step.id === "renonciation2"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="vb2 no-wrap no-print">
      <button class:selected={renonciation2 === "1"} 
        on:click={() => { renonciation2 = "1";  }}>Formule 1</button>
      <button class:selected={renonciation2 === "2"} 
        on:click={() => { renonciation2 = "2";  }}>Formule 2</button>
      <button class:selected={renonciation2 === "3"} 
        on:click={() => { renonciation2 = "3";  }}>Formule 3</button>
    </div>
  </div>

  {:else if step.id === "bapteme"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="vb2 no-wrap no-print">
      <button class:selected={bapteme === "ablution"} 
        on:click={() => { bapteme = "ablution";  }}>Baptême par ablution</button>
      <button class:selected={bapteme === "immersion"} 
        on:click={() => { bapteme = "immersion";  }}>Baptême par immersion</button>
    </div>
  </div>

  {:else if step.id === "entreerameaux"}
  <div class="variant-header">
    <h3>{@html step.texte}</h3>
    <div class="variant-buttons2 no-print no-wrap" style="margin-top: 0;">
      <button class:selected={entreerameaux === "1"} 
        on:click={() => { entreerameaux = "1";  }}>Procession</button>
      <button class:selected={entreerameaux === "2"} 
        on:click={() => { entreerameaux = "2";  }}>Entrée solennelle</button>
      <button class:selected={entreerameaux === "3"} 
        on:click={() => { entreerameaux = "3";  }}>Entrée simple</button>
    </div>
  </div>

{:else}
  <p class="{step.type} texte {step.class || ''}">{@html step.texte}</p>
{/if}
  {/each}
  {#if showScrollButton}
      <button 
        id="scrollToTopButton" 
        on:click={scrollToTop}
        class="scrollToTopButton no-print"
        title="Haut de page"
      >
        ⭱
      </button>
    {/if}
  {/if}
</div>
</div>

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
.card-wrap { background: #E2E3E4; --r: 20px; border-radius: 10px; padding: 2.5rem 8rem 0rem 8rem; margin: 20px auto; display: flex; justify-content: center; width: 100%; box-sizing: border-box; }
/* --- LA FEUILLE UNIQUE (Blanche) --- */
.card { background: #fff; padding: 40px 80px; box-shadow:0px 0px 2px #C6C6C6; width: 100%; max-width: 850px; min-height: 180mm; box-sizing: border-box; position: sticky; top: 20px; height: calc(100vh - 40px); overflow-y: auto; }
.brand-chip { display: flex; align-items: center; margin-bottom: 1.5rem; background-color: #4A141C; /* Le rouge bordeaux de la maquette */ color: #ffffff; display: inline-flex; align-items: center; padding: 10px 14px; border-radius: 20px; /* Très arrondi pour l'effet "chipset" */ font-size: 0.85rem; letter-spacing: 1px; }
.prempare { background-color: #50504F; /* Le rouge bordeaux de la maquette */ color: #ffffff; padding: 15px 14px; border-radius: 10px; margin-bottom: 1rem; }
/***************************************************** * BASE TYPO *****************************************************/
.texte{ white-space: pre-line; margin:0.01rem 0; }
.tableau p { margin: 0; /* Supprime les marges */ white-space: pre-line; text-align: left; }
p { line-height: 1.3; font-family: var(--font-main); text-align: justify; }
/***************************************************** * TITRES *****************************************************/
.h1, .h2, .h3, .h4 { font-family: var(--font-main); display: block; text-align: center; page-break-inside: avoid; }
.nomdurituel {text-align: right; font-size: calc(1.2rem * var(--scale, 1)); margin:0 0 2rem 0; font-weight: 600 }
h1, p.h1 { font-size: calc(1.8rem * var(--scale, 1)); font-weight: 700; margin:2rem 0 1rem 0; }
h2, p.h2 { font-size: calc(1.4rem * var(--scale, 1)); font-weight: 700; margin:1.5rem 0 1rem 0;}
h3, p.h3 { font-size: calc(1.1rem * var(--scale, 1)); color: var(--accent); font-weight: 700; margin:1.5rem 0 1rem 0;}
h4, p.h4 { font-size: calc(1rem * var(--scale, 1)); font-weight: 300; margin:1rem 0 0.5rem 0; }
h1.titre-principal { text-align: center; margin: 0 0 var(--gap) 0; font-size: calc(2rem * var(--scale, 1)); letter-spacing: 0.2px;}
.premiergénéré { text-align: center; font-size: calc(2rem * var(--scale, 1)); margin:0.5rem 0 1rem 0; color: #b30000; font-family: garamond }
.sansmarge { margin:0 0 1rem 0; }
details::marker {
  content: "✝ ";
  font-size: 1.2em;
}
/***************************************************** * DIALOGUES (V / ℟) *****************************************************/
.dialogueV { font-weight: 600; font-size: calc(1.2rem * var(--scale, 1)); line-height:1.2; margin: 0; }
.dialogueR { margin-top: 0rem; font-size: calc(1.2rem * var(--scale, 1)); margin-bottom: 0.5rem; line-height:1.2; }
.dialogueR::before { content: "℟. "; color: var(--accent); }
.tableau .rubrique { margin: 0.5rem 0; }
.colonnes2 {display: flex; justify-content: space-between; }
.colonnes2 .dialogueV {margin: 0!important;}
.colonnes2 .rubrique {margin: 0!important;}
.colonnes2 .dialogueR {margin: 0!important;}
/***************************************************** * ORAISON *****************************************************/
.oraison-texte p { margin: 0; font-weight: bold; font-size: calc(1.2rem * var(--scale, 1)); line-height: 1.2; }
.oraison-row{ display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap; }
.preface-texte p { margin: 0; font-weight: bold; font-size: calc(1.2rem * var(--scale, 1)); line-height: 1.1; }
/***************************************************** * INDENTATIONS ET RUBRIQUES *****************************************************/
.rubrique { color: var(--accent); margin:0.3rem 0; font-weight: normal; font-size: calc(1rem * var(--scale, 1)); }
.rubriqueinterne { color: var(--accent); margin:0; font-size: calc(1rem * var(--scale, 1));}
/* Le conteneur global */
.servants-container {
    border-left: 5px solid #2F5D8A;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    color: #2F5D8A;
    margin: 0.5rem 0 0.5rem 0.5rem;
}
.servants-container + .servants-container {margin-top: 0rem; margin-bottom: 0; }
.servants-line {
    margin: 0.3rem 0; /* Espace entre les lignes de texte */
    display: block; }
.servants-container:first-of-type {
    margin-bottom: 0rem;
}
.servants-line:first-child { margin-top: 0; }
.servants-line:last-child { margin-bottom: 0; }
.paragraph.servants + .paragraph.servants { margin-top: 0; }
.indent1all { text-indent: -20px; padding-left: 20px; } 
.indent1p { text-indent: 20px; }
.indent1g { text-indent: 50px; }
.indent1allg { text-indent: -20px; padding-left: 70px; }
.indent1gg { text-indent: 70px; }
.indentallg { padding-left: 50px; }
.indentallp { padding-left: 20px; }
.italic { font-style: italic; }
p.centre { text-align: center; line-height: 1; font-weight: 400; font-size: calc(1.6rem * var(--scale, 1));}
.lettrine::first-letter { color: var(--accent); font-weight: bold }
.sautdeligne {line-height: 0.6;}
.preface-texte .sautdeligne { line-height: 0.6; }
.voixbasse { font-style: italic; font-size: calc(1.2rem * var(--scale, 1)); line-height:1.1; }
.grandelettrine::first-letter { color: var(--accent); font-size: calc(52px * var(--scale, 1)); font-weight: 700; float: left; line-height: 0.85; padding-top: 0.3rem; }
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
.sub-options-inline{ display:inline-flex; gap:0.6rem; align-items:center; }
/***************************************************** * GRILLE SACREMENTS *****************************************************/
.sacrements-grid{ display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 0.5rem 1rem; align-items:start; }
/***************************************************** * BOUTONS *****************************************************/
.css-button-sharp--grey { min-width: 130px; height: 40px; color: #E2E3E4; padding: 6px 14px; font-weight: 700; cursor: pointer; transition: all 0.18s ease; border-radius: 8px; display: inline-flex; align-items: center; gap: 0.5rem; justify-content: center; border: 2px solid #4A141C; background: #4A141C; }
.css-button-sharp--grey:hover { background: #E2E3E4; color: #4A141C; transform: translateY(-2px); }
.css-button-ghost { background: transparent; color: var(--brand); border: 2px dashed rgba(73,80,87,0.12); }
.button-section { position: sticky; overflow: auto; display: flex; gap: 110px; flex-wrap: wrap; align-items: center; height: 80px; margin-bottom: 40px; }
.variant-buttons.no-wrap { display:flex; flex-wrap: nowrap; }
.button-section + .card { margin-top: 1rem; }
/***************************************************** * BOUTONS POUR VARIANTES *****************************************************/
.variant-header { display: flex; justify-content: space-between; /* Espace entre le titre et les boutons */ align-items: baseline; align-content : center; }
.variant-header2 { display: flex; flex-direction: column; }
.variant-buttons2 { margin-top: 2rem; display: flex; justify-content: space-between; }
.variant-header h2 { flex: 1; /* Permet au titre de prendre tout l'espace disponible */ text-align: center; /* Centre le texte du titre */ margin: 1rem 0rem; /* Supprime les marges par défaut */ }
.variant-header h3 { flex: 1; /* Permet au titre de prendre tout l'espace disponible */ text-align: center; /* Centre le texte du titre */ margin: 1rem 0rem 0.5rem 0rem; /* Supprime les marges par défaut */ }
.variant-header h4 { flex: 1; /* Permet au titre de prendre tout l'espace disponible */ text-align: center; /* Centre le texte du titre */ margin: 1rem 0rem; /* Supprime les marges par défaut */ font-weight: normal; }
.variant-buttons { display: flex; gap: 8px; max-width: 120px; flex-wrap: wrap; /* Ajustez selon la largeur souhaitée pour l'ensemble */ }
.boutons2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; max-width: 300px; }
.boutons4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; max-width: 300px; }
.boutons5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; max-width: 300px; }
.variant-buttons button { margin-left: 0.3rem; padding: 4px 8px; border: 1px solid #555; border-radius: 5px; background: white; cursor: pointer; }
.variant-buttons button.selected { background: #652430; color: white; font-weight: bold; }
.variant-buttons2 button { max-width: 20rem; margin-left: 0.3rem; padding: 12px 8px; border: 1px solid #b1b1b1; border-radius: 5px; background: #E9ECEF; cursor: pointer; font-weight: bold; }
.variant-buttons2 button.selected { background: #652430; color: white; font-weight: bold; }
.btn-toggle-latin { padding: 10px; width: 100%; border: 2px solid #652430; background: white; color: #652430; cursor: pointer; font-weight: bold; transition: all 0.3s; }
.btn-toggle-latin.active { background: #652430; color: white; }
.vb2 {display:flex; flex-wrap: nowrap;}
.vb2 button { margin-left: 0.3rem; padding: 4px 8px; border: 1px solid #555; border-radius: 5px; background: white; cursor: pointer; }
.vb2 button.selected { background: #652430; color: white; font-weight: bold; }
/***************************************************** * SAUTS DE PAGE (PDF/WORD) *****************************************************/
.page-break { display: block; height: 0; margin: 0; padding: 0; break-after: page; }
.card .oraison-texte, .card p, .card .h1, .card .h2 { break-inside: avoid; }
/***************************************************** * MOBILE — POLICES LÉGÈREMENT RÉDUITES *****************************************************/
@media (max-width: 600px) { 
  .h1, p.h1 { font-size: calc(1.3rem * var(--scale, 1)); margin :1.2rem 0 0.5rem 0; } 
  .premiergénéré { margin :0.5rem 0 1rem 0; } 
  h2, p.h2 { font-size: calc(1.1rem * var(--scale, 1)); margin: 1rem 0 0.5rem 0 !important; } 
  h3, p.h3 { font-size: calc(0.7rem * var(--scale, 1)); } 
  .rubrique, .rubriqueinterne { font-size: calc(0.8rem * var(--scale, 1)); } 
  p { font-size: calc(0.7rem * var(--scale, 1)); } p.centre { font-size: calc(1rem * var(--scale, 1)); } 
  .oraison-texte p, .preface-texte p, .dialogueR, .dialogueV, .servants-line{ font-size: calc(0.8rem * var(--scale, 1)); } 
  .indent1g { text-indent: calc(15px * var(--scale, 1)); } 
  .indentallg { padding-left: calc(30px * var(--scale, 1)); } 
  .modal {width: 300px !important; max-height: 80vh !important;}
  .grandelettrine::first-letter { font-size: calc(36px * var(--scale, 1)); } 
  .variant-buttons button { padding: calc(2px * var(--scale, 1)) calc(4px * var(--scale, 1)); margin-left: 0; } }
/***************************************************** * ONBOARDING MODAL *****************************************************/
.overlay { position: fixed; inset: 0; inset: 0; /* couvre toute la page */ pointer-events: auto; }
.modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 2rem 2rem 1.5rem 2rem; max-height: 70vh; border-radius: 10px; width: 500px; max-width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; z-index: 100; }
.modal-body { flex: 1; padding: 0 0.5rem; overflow-y: auto; /* scroll si contenu trop grand */ margin: 0 0 1rem 0; }
.modal h2 { font-size: 2rem; margin: 0 0 0.5rem; text-align: center; }
.modal p { text-align: justify; font-size: 1.1rem; /* Taille de police standard pour le contenu */ line-height: 1.6; margin-bottom: 1.5rem; color: #444; }
.nav { display: flex; justify-content: space-between; }
.btn-close { position: absolute; top: 4px; right: 12px; background: transparent; border: none; font-size: 40px; color: #999; cursor: pointer; line-height: 1; padding: 5px; transition: color 0.2s; }
.btn-close:hover { color: var(--accent, #b30000); /* Devient rouge au survol */ }
/***************************************************** * BOUTONS MODAL *****************************************************/
button { padding: 0.6rem 1rem; border: none; border-radius: 6px; background: #ddd; cursor: pointer; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
.dontshow { margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem; }
/***************************************************** * BOUTON ONBOARDING FIXE *****************************************************/
.onboard-btn { margin: 0 1.5rem 0 0.5rem; width: 60px; height: 60px; border-radius: 50%; border: none; background: #4A141C; color: #E1E1E1; font-size: 2rem; font-weight: bold; cursor: pointer; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); transition: transform 0.1s ease; display: flex; align-items: center; justify-content: center; }
.onboard-btn:hover { transform: scale(1.12); }
/***************************************************** * Liturgie du jour - Sélecteur d'événements *****************************************************/
.event-card { display: flex; align-items: center; gap: 12px; padding: 10px 10px 10px 10px; background: #E1E1E1; cursor: pointer; margin: 0.5rem 0 0 0; border-left: 12px solid #ccc; border-right: 1px solid rgba(0,0,0,0.08); color: #3D3D3D; font-size: 1rem; border-radius: 0 6px 6px 0; /* Arrondi uniquement à droite */ transition: all 0.2s ease; }
.event-card.active { background: #e9ecef; box-shadow: inset 2px 0 5px rgba(0,0,0,0.1); }
.details { display: flex; flex-direction: column; }
.name { font-weight: bold; }
.rank { font-size: 0.8rem; color: #666; text-transform: uppercase; }
input[type="radio"] { accent-color: #4A141C; /* Remplace le bleu par votre rouge liturgique */ cursor: pointer; }
.single-event { display: block; padding: 10px; background: #E1E1E1; border-radius: 0 6px 6px 0; margin: 0.5rem 0 0 0;}
.hint { font-size: 0.8rem; margin-top: 4px; }
input[type="date"], input[type="text"] { padding: 0.38rem 0.5rem; border: 1px solid rgba(0,0,0,0.08); background-color: #E1E1E1; border-radius: 6px; }
#selectdate { display: flex; justify-content: flex-start; align-items: center; }
/***************************************************** * BOUTONS - Retour en haut de page *****************************************************/
.scrollToTopButton { z-index: 100; transition: background-color 0.3s, opacity 0.5s, visibility 0.5s; position: fixed; bottom: 20px; margin-left: 800px; /* Positionné à droite */ border: 2px solid var(--brand); border-radius: 50%; /* Bouton rond */ background-color: #3D3D3D; /* Couleur de fond */ color: white; /* Couleur de la flèche */ font-size: 2rem; /* Taille de la flèche */ font-weight: bold; outline: none; width: 50px; /* Largeur du bouton */ height: 50px; /* Hauteur du bouton */ padding: 0; /* Supprime les marges internes */ cursor: pointer; display: flex; justify-content: center; }
.scrollToTopButton:hover, .scrollToTopButton:focus, .scrollToTopButton:focus-within { cursor: pointer; transform: scale(1.12); background: #fff; color: var(--brand); }
/***************************************************** * Règles d'impression *****************************************************/
@media print { @page { size: A4; margin: 1.5cm; }
:global(body, html) { overflow: visible !important; height: auto !important; margin: 0 !important; padding: 0 !important; background-color: white; }
.container { display: block !important; width: 100% !important; }
.sidebar, .no-print, #scrollToTopButton { display: none !important; }
.card { max-width: none !important; width: 100% !important; margin: 0 !important; box-shadow: none !important; border: none !important; background: white !important; overflow: visible !important; height: auto !important; }
.card-wrap { padding: 0 !important; margin: 0; }
/* Évite les coupures moches */
.card p, .card .oraison-texte, .card .preface-texte, .card h2, .card h3 { break-inside: avoid; orphans: 3;  widows: 3; } 
h1, h2, h3, h4, .titre-oraison, .titre-rubrique { break-after: avoid; page-break-after: avoid;}}
/***************************************************** * BOUTON DE CONTACT *****************************************************/
.floating-contact-btn { position: absolute; top: 28px; right: 8px; z-index: 2000; /* Au-dessus de la sidebar et du rituel */ display: flex; align-items: center; gap: 4px; background-color: #4A141C; color: #E1E1E1; text-decoration: none; padding: 4px 10px; cursor: pointer; border-radius: 10px; border: 1px solid #4A141C;; font-family: sans-serif; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s ease; }
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

.btn-back {
    position: absolute;
    top: 10px;
    left: 10px;
    background: none;
    border: none;
    color: #4A141C;
    cursor: pointer;
}
.choice-btn.disabled {
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
  .card-wrap { 
    padding: 1.5rem; /* Marges réduites autour de la feuille */
  }
  .card { 
    padding: 2rem 3rem; /* Marges internes de la feuille réduites */
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
    padding: 1rem; 
    max-height: none; 
    box-sizing: border-box;
  }

  /* Ajustement de la zone du rituel */
  .card-wrap { 
    padding: 1rem; 
    margin: 0; 
    border-radius: 0px; 
  }
  .card { 
    padding: 1.5rem 1rem; 
    border-radius: 8px; 
    max-width: 100%; 
    min-height: auto;
    height: auto;
    position: relative;
    top: 0;
  }

  .variant-buttons, .variant-buttons2, .boutons2, .boutons4, .boutons5, .vb2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    gap: 8px;
  }

  .variant-buttons.no-wrap { display:flex; flex-wrap: nowrap;   margin-left: 1rem;}

  .btn-toggle-latin {
    width: max-content;
    padding: 8px;
    margin-bottom: 0.5rem;
    margin-left: 1.5rem;
  }
  
  .variant-buttons button, .variant-buttons2 button, .vb2 button {
    max-width: none; /* Annule le max-width: 20rem qui posait problème */
    flex: 1 1 auto;
    margin: 0;
    padding: 0.2rem 0.5rem;
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

  /* Ajustements typographiques mineurs */
  .premiergénéré { 
    font-size: calc(1.5rem * var(--scale, 1)) !important; 
  }
  
  /* Boutons flottants */
  .scrollToTopButton { 
    display: flex; 
    right: 20px; 
    bottom: 20px; 
    margin-left: 0; 
    width: 44px; 
    height: 44px; 
    font-size: 1.6rem; 
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
}

/* --- 2. CONFIGURATION MOBILE (En dessous de 1024px) --- */
@media (max-width: 1024px) {
  .hamburger-trigger {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1001;
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
    z-index: 10000;

  }

  .menu-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
  }

  .Paramètres {
    position: fixed;
    top: 0;
    left: -400px; /* Caché à gauche */
    width: 320px;
    height: 100vh;
    background: #3D3D3D;
    z-index: 1002;
    transition: left 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.5);
    overflow-y: auto;
  }

  .Paramètres.open {
    left: 0;
  }
}

</style>
