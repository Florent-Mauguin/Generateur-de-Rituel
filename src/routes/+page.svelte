<!--
JS
-->

<script>
    import { onMount } from 'svelte';
    import { ritual } from '$lib/ritual.js';
    import { Oraisons } from '$lib/oraisons';
    import { preface } from '$lib/prefaces';
    import FileSaver from "file-saver";
    import { Document, Indent, Packer, Paragraph, TextRun } from "docx";
    import Roadmap from '$lib/components/Roadmap.svelte';
    import Nouveautes from '$lib/components/Nouveautes.svelte';
    import * as romcalModule from 'romcal';
    const { Romcal } = romcalModule; 
    import { France_Fr } from '@romcal/calendar.france';
    import { liturgyRules } from '$lib/mapping.js';
    
const romcal = new Romcal({ localizedCalendar: France_Fr });

// --- Variables d'état ---
  let selectedDate = new Date().toISOString().split('T')[0];
  let availableEvents = []; // Toutes les fêtes du jour
  let selectedEventId = ""; // L'ID choisi par l'utilisateur
  let lastLoadedEventId = "";

// Formulaire
  export let version = "0.2";
  let inputRituelName = "";
  let rituelName = "";
  let celebrationType = "Solennité";
  let CelebrationduJour = "";
  
  // Options
  let [secret, hideCredo, hideGloria, hidePE, OrdinaireLatin, DoxologieLt] = [false, false, false, false, false, false];
  let [Showpreface, Showoraisons] = [true, true];
  let [Bapteme, PremiereCommunion, Confirmation, Mariage, Ordination, sacrementDesMalades] = [false,false,false,false,false,false];
  
  // Variantes
  let salutation = "S3";
  let ChoixPenitentiel = "1CP";
  let typeCredo = "NC";
  let InvitS = "5";
  let PriereC = "3";
  let Choixpreface = "";
  let ChoixOraison = "";
  let OraisonsDuJour = "";
  let availablePrefaces = [];
  let prefacedujour = "";
  let typePE = "PE1";
  let AcclamationEucharistique = "AE1";
  let Communicantes = "Semaine";
  let NotrePère = "NP1";
  let Apologies = "1";
  let Conclusion = "1";
  let Messe = "";
  
  let [showAutresParams, hideliturgieeucharistique, hideLiturgieParole, Sacrements, Servants, showAutresceremonie] = [false, false, false, false, false, false];
  let [hideRubriques, presenceBishop, presenceDiacre, incense, showcat, aspersion] = [false, false, false, false, false, false];
  let servants = 0;
  let filteredRitual = [];


// --- Logique Réactive ---
  $: if (selectedDate) { updateCalendarData(selectedDate); }

  async function updateCalendarData(dateStr) {
    if (!romcal) return;
    const year = parseInt(dateStr.split('-')[0]);
    const calendar = await romcal.generateCalendar(year);
    const events = calendar[dateStr] || [];
    availableEvents = events;
    if (events.length > 0) selectedEventId = events[0].id;
  }

  function applyLiturgyMapping(fete) {
    const regles = liturgyRules[fete.id];
    if (!regles) return;

  
  CelebrationduJour = regles.CelebrationduJour || fete.name;
  ChoixOraison = regles.ChoixOraison || "";
  
  // Gestion du choix multiple de préfaces
  if (regles.Choixpreface) {
    if (Array.isArray(regles.Choixpreface)) {
      availablePrefaces = regles.Choixpreface;
      Choixpreface = regles.Choixpreface[0]; // On prend la 1ère par défaut
    } else {
      availablePrefaces = [];
      Choixpreface = regles.Choixpreface;
    }
  }

  typeCredo = regles.typeCredo || "NC";
  celebrationType = regles.celebrationType || "Semaine";
  Showoraisons = true;
  Showpreface = true;
}

  

  let [showPopup, dontShowAgain, forceOpen] = [false, false, false];
  let currentPage = 0;
  const pages = [
    { title: "Bienvenue", content: `Je m'appelle <b>Florent Mauguin</b> et suis séminariste pour le diocèse de Versailles et la communauté de l'Emmanuel. 
<br><br>L'objectif de ce projet est simple : <b>générer en quelques clics un rituel imprimable</b> et adapté à sa paroisse pour la célébration de l'eucharistie et des sacrements.
<br><br><b>⚠️ L'outil est encore en cours de développement !</b><br>Il n'est pas tout à fait utilisable en l'état.` },
    { title: "Nouveautés", content: "" },
    { title: "Roadmap" }
  ];

onMount(async () => {
    const seenVersion = localStorage.getItem("welcomePopupVersionSeen");
    if (seenVersion !== version) {
      showPopup = true;
    }
  });

  // ouverture forcée
  $: if (forceOpen) {
    currentPage = 0; // recommencer à la 1ère page
    showPopup = true;
    forceOpen = false;
  }

function closePopup() {
    localStorage.setItem("welcomePopupVersionSeen", version);
    showPopup = false;
}


// Génération du document Word
  async function generateWord() {
    if (!filteredRitual || filteredRitual.length === 0) return;
   
    // Créer un document Word
    const doc = new Document({
    sections: [
      { properties: {
          page: {
            margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 } // marges en twips (~1/20 pt)
          }
        },
        children: filteredRitual.map(step => {
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




 // Construction du rituel complet
$: fullRitual = [
  ...ritual.ritesInitiaux,
...(hideLiturgieParole ? [] : ritual.liturgiedelaparole),
...(hideliturgieeucharistique ? [] : ritual.liturgieeucharistique),
  ...ritual.ritesdeConclusion
];

$: {
    const feteChoisie = availableEvents.find(e => e.id === selectedEventId);
    if (feteChoisie) {
        applyLiturgyMapping(feteChoisie);
    }
}

$: selectedEvent = availableEvents.find(e => e.id === selectedEventId) || availableEvents[0];

// Fonction pour convertir le nom de la couleur Romcal en valeur CSS utilisable
function getCssColor(event) {
  if (!event || !event.colors || event.colors.length === 0) return '#ccc';
  
  const colorMap = {
    'white': '#ffffff',
    'red': '#B30000',
    'green': '#008000',
    'violet': '#7f00ff',
    'rose': '#ff69b4',
    'black': '#000000'
  };

  const color = event.colors[0];
  return colorMap[color] || color;
}

$: {hideLiturgieParole, selectedEventId, inputRituelName, secret, hideGloria, OrdinaireLatin, 
    DoxologieLt, hideCredo, Showpreface, hidePE, Showoraisons, hideliturgieeucharistique,
    Bapteme, PremiereCommunion, Confirmation, Mariage, Ordination, celebrationType,
    sacrementDesMalades, salutation, ChoixPenitentiel, typeCredo, presenceDiacre,
    InvitS, PriereC, Choixpreface, typePE, AcclamationEucharistique, aspersion,
    Communicantes, NotrePère, Apologies, Conclusion, hideRubriques, 
    presenceBishop, incense, servants;
    
    generateRitual();
}
// Génération du rituel filtré
function generateRitual() {
  rituelName = inputRituelName;
  // 2. IMPORTANT : On met à jour l'objet de données de la préface. APRES le mapping pour prendre en compte le bouton sur lequel on a cliqué
  if (Choixpreface) {prefacedujour = preface[Choixpreface] || null;}
  if (ChoixOraison) {OraisonsDuJour = Oraisons[ChoixOraison] || null; }

  const options = {
    presenceBishop,
    incense, hideliturgieeucharistique,
    servants, presenceDiacre,
    celebrationType, secret, hideRubriques, Apologies, Communicantes, Messe, aspersion,
    salutation, ChoixPenitentiel, hideGloria, OrdinaireLatin, OraisonsDuJour, Showoraisons, hideCredo, typeCredo, InvitS, PriereC,
    preface, hidePE, typePE, AcclamationEucharistique, DoxologieLt, NotrePère, Conclusion,
  };

filteredRitual = [];

for (const step of fullRitual) {

  // ---- INSERTIONS Oraisons ----
  if (step.type === "insert-antienne_ouverture" && celebrationType === "Semaine") {
    if (Showoraisons && OraisonsDuJour) {
      filteredRitual.push({ type: "oraison", segments: OraisonsDuJour.antienne_ouverture });
    }
    continue;
  }

  if (step.type === "insert-collecte") {
    if (Showoraisons && OraisonsDuJour) {
      filteredRitual.push({ type: "oraison", segments: OraisonsDuJour.collecte });
    }
    continue;
  }

  if (step.type === "insert-priereSurLesOffrandes") {
    if (Showoraisons && OraisonsDuJour) {
      filteredRitual.push({ type: "oraison", segments: OraisonsDuJour.priereSurLesOffrandes });
    }
    continue;
  }


  if (step.type === "insert-antienne_communion" && celebrationType === "Semaine") {
    if (Showoraisons && OraisonsDuJour) {
      filteredRitual.push({ type: "oraison", segments: OraisonsDuJour.antienne_communion });
    }
    continue;
  }

  if (step.type === "insert-priereApresLaCommunion") {
    if (Showoraisons && OraisonsDuJour) {
      filteredRitual.push({ type: "oraison", segments: OraisonsDuJour.priereApresLaCommunion });
    }
    continue;
  }


  if (step.type === "titre-preface") {
  if (Showpreface && prefacedujour) {
    filteredRitual.push({ type: "preface-titre", texte: prefacedujour.titre });
  }
  continue;
}

  if (step.type === "soustitre-preface") {
    if (Showpreface && prefacedujour) {
      filteredRitual.push({ type: "soustitre-preface", texte: prefacedujour.soustitre });
    }
    continue;
  }

  if (step.type === "insert-preface") {
    if (Showpreface && prefacedujour && typePE !== "PE4") {
        filteredRitual.push({ type: "preface", segments: prefacedujour.items });
    }
    continue;
  }

  
  // ✅ MASQUAGE DES RUBRIQUES
  if (hideRubriques && (step.type === "rubrique" || step.type === "rubriqueinterne")) {
    continue;
  }

  // ---- Conditions normales ----
  const cond = step.conditions;

  if (!cond) {
    filteredRitual.push(step);
    if (step.pageBreak === true) {
      filteredRitual.push({ type: "pageBreak" });
    }
    continue;
  }

  let display = true;

  for (const key in cond) {
    const expected = cond[key];
    const actual = options[key];

    // Si la clé n'existe pas dans options, ignorer cette condition
    if (actual === undefined) continue;

    if (Array.isArray(expected)) {
      if (!expected.includes(actual)) {
        display = false;
        break;
      }
    } else {
      if (expected !== actual) {
        display = false;
        break;
      }
    }
  }

  if (display) {
    // Vérifiez si `items` existe et contient des conditions
    if (step.items && Array.isArray(step.items)) {
      const filteredItems = step.items.filter((item) => {
        if (hideRubriques && (item.type === "rubrique" || item.type === "rubriqueinterne")) {
          return false;
        }
        const itemCond = item.conditions;
        if (!itemCond) return true; // Pas de conditions, afficher l'élément

        let itemDisplay = true;
        for (const key in itemCond) {
          const expected = itemCond[key];
          const actual = options[key];

          if (actual === undefined) continue;

          if (Array.isArray(expected)) {
            if (!expected.includes(actual)) {
              itemDisplay = false;
              break;
            }
          } else {
            if (expected !== actual) {
              itemDisplay = false;
              break;
            }
          }
        }
        return itemDisplay;
      });

      if (filteredItems.length > 0) {
        filteredRitual.push({ ...step, items: filteredItems });
      }
    } else {
      filteredRitual.push(step);
    }
  }
}

// console.log(prefacedujour.titre);
//console.log(Array.isArray(prefacedujour.titre));
console.log(Choixpreface);

}

 function topFunction() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
  }

  // Fonction pour gérer le défilement
  function scrollFunction() {
    const mybutton = document.getElementById("scrollToTopButton");

    // Sécuriser l'accès si l'élément n'existe pas
    if (!mybutton) return;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.opacity = "1";
      mybutton.style.visibility = "visible";
    } else {
      mybutton.style.opacity = "0";
      mybutton.style.visibility = "hidden";
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
/* Code dégeu pour un bouton retour en haut */
  onMount(() => {
window.onscroll = scrollFunction;

    // Nettoyage lors de la destruction du composant
    return () => {
      window.onscroll = null;
    };
  });
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

<!--
-->
<a 
  href="mailto:contact.genrc@gmail.com" 
  class="floating-contact-btn no-print"
  title="Signaler un bug ou me contacter"
>
  <span class="icon">✉</span>
  <span class="text">Contact / Bug</span>
</a>


<div class="container">
  <div class="sidebar no-print">
    <div class="brand-chip">
      <span class="brand-dot"></span>
      <span>Version 0.2<br></span>
      <span class="brand-icon">☰</span>
    </div>
    <h1 class="titre-principal">Générateur de rituels catholiques</h1>


  <div class="Paramètres">
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
</div>

<div class="prempare" style="margin-bottom: 0.2rem">
    <div class="panel">
<!-- Option Eucharistie -->
<div class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={showAutresceremonie}
  on:click={() => showAutresceremonie = !showAutresceremonie}
  on:keydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); showAutresceremonie = !showAutresceremonie; }
  }}
>
  <span>Eucharistie</span>
  <span class="arrow {showAutresceremonie ? 'open' : ''}">▶</span>
</div>

{#if showAutresceremonie}
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
          </label><label class="toggle-container">
            <span class="label-text">Bénédiction et aspersion de l'eau</span>
            <div class="switch">
              <input type="checkbox" bind:checked={aspersion} on:change={handleAspersion} />
              <span class="slider"></span>
            </div>
          </label>

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
    </div>
    {/if}
    </div>
  


<!-- Début section sacrements --> 
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

<!-- Début section Servants -->
<!--
<div class="panel">
<div class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={Servants}
  on:click={() => Servants = !Servants}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); Servants = !Servants; }
  }}
>
  <span>Service de l'autel</span>
  <span class="arrow {Servants ? 'open' : ''}">▶</span>
</div>

{#if Servants}
        <div class="grid-buttons">
          <label><input type="checkbox" bind:checked={incense} /> Encensement :</label>
          <label><input type="number" min="0" bind:value={servants} /> Nombre de servants :</label>
        </div>
   {/if}
</div>  -->
<!-- Fin section Servants -->


<!-- ✅ Section AUTRES PARAMÈTRES -->
<div class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={showAutresParams}
  on:click={() => showAutresParams = !showAutresParams}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showAutresParams = !showAutresParams; }
  }}
>
  <span>Autres paramètres</span>
  <span class="arrow {showAutresParams ? 'open' : ''}">▶</span>
</div>

  {#if showAutresParams}
        <div class="grid-buttons">
          <label class="toggle-container">
            <span class="label-text">Ne pas afficher les rubriques :</span>
            <div class="switch">
              <input type="checkbox" bind:checked={hideRubriques} />
              <span class="slider"></span>
            </div>
          </label>
        </div>

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
    <div class="card">
{#if filteredRitual.length > 0}
      {#if rituelName}
        <h2 class=" nomdurituel">{rituelName}</h2>
      {/if}
      <h2 class="premiergénéré">{CelebrationduJour}</h2>

  {#each filteredRitual as step}
    {#if step.type === "pageBreak"}
      <div class="page-break" aria-hidden="true"></div>


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
    <h3 class="H3">{step.texte}</h3>
    
    {#if availablePrefaces.length > 1}
      <div class="variant-buttons boutons4 no-print">
        {#each availablePrefaces as prefId, i}
          <button 
            class:selected={Choixpreface === prefId} 
            on:click={() => { 
                Choixpreface = prefId; 
                prefacedujour = preface[Choixpreface]; // Mise à jour immédiate
                generateRitual(); 
            }}
          >
            {i + 1}
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

  {:else if step.id === "Professiondefoi"}
  <div class="variant-header">
    <h2>{@html step.texte}</h2>
    <div class="variant-buttons no-print">
      <button class:selected={typeCredo === "NC"} 
        on:click={() => { typeCredo = "NC"; }}>1 </button>
      <button class:selected={typeCredo === "AP"} 
        on:click={() => { typeCredo = "AP"; }}>2 </button>
      <button class:selected={typeCredo === "Lt"} 
        on:click={() => { typeCredo = "Lt";  }}>3 </button>
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

  {:else if ["PE1", "PE2", "PE3", "PE4"].includes(step.id)}
  <div class="variant-header">
    <h3 class="H3">{@html step.texte}</h3>
    <div class="variant-buttons no-print no-wrap">
      <button class:selected={typePE === "PE1"} 
        on:click={() => { typePE = "PE1";  }}>1 </button>
      <button class:selected={typePE === "PE2"} 
        on:click={() => { typePE = "PE2";  }}>2 </button>
      <button class:selected={typePE === "PE3"} 
        on:click={() => { typePE = "PE3";  }}>3 </button>
      <button class:selected={typePE === "PE4"} 
        on:click={() => { typePE = "PE4";  }}>4 </button>
    </div>
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
    <h3 class="H3 no-print">{@html step.texte}</h3>
    <div class="variant-buttons boutons2 no-print">
      <button class:selected={DoxologieLt === false} 
        on:click={() => { DoxologieLt = false;  }}>1 </button>
      <button class:selected={DoxologieLt === true} 
        on:click={() => { DoxologieLt = true;  }}>2 </button>
    </div>
  </div>

  {:else if step.id === "NotrePère"}
 <div class="variant-header">
    <h3 class="H3 no-print">{@html step.texte}</h3>
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
    <h3 class="H3 no-print">{@html step.texte}</h3>
    <div class="variant-buttons boutons2 no-print">
      <button class:selected={Apologies === "1"} 
        on:click={() => { Apologies = "1";  }}>1 </button>
      <button class:selected={Apologies === "2"} 
        on:click={() => { Apologies = "2";  }}>2 </button>
    </div>
  </div>

    {:else if step.id === "Conclusion"}
 <div class="variant-header">
    <h3 class="H3 no-print no-wrap">{@html step.texte}</h3>
    <div class="variant-buttons no-print no-wrap">
      <button class:selected={Conclusion === "1"} 
        on:click={() => { Conclusion = "1";  }}>1 </button>
      <button class:selected={Conclusion === "2"} 
        on:click={() => { Conclusion = "2";  }}>2 </button>
      <button class:selected={Conclusion === "3"} 
        on:click={() => { Conclusion = "3";  }}>3 </button>
      <button class:selected={Conclusion === "4"} 
        on:click={() => { Conclusion = "4";  }}>4 </button>
    </div>
  </div>

{:else if step.items}
  <div class={step.class}>
    {#each step.items as item}
      <p class="{item.type} {item.class || ''}">{@html item.texte}</p>
    {/each}
  </div>
      {:else}
          <p class="{step.type} texte {step.class || ''}">{@html step.texte}</p>
    {/if}
  {/each}
    <button on:click={topFunction} id="scrollToTopButton" class="scrollToTopButton no-print" title="Haut de page">  
    ⭱ </button>

  {/if}
</div>
</div>

</div>

<!-- Ajouter une condition
          {#if celebrationType === "Dominicale"}
  <div class="sub-options">

  {/if}
-->

<!--
CSS
-->


<style>
:root {
  --brand: #495057;
  --accent: #b30000; /* rouge liturgique */
  --bg: #fff;
  --card: #ffffff;
  --muted: #6c757d;
  --radius: 10px;
  --pad: 1rem;
  --gap: 1rem;
  --font-main: "Times New Roman", Times, serif;
}

:global(body, html) {
    background-color: #3D3D3D;
    margin: 0;
}

.container {
  background: transparent;
  display: grid;
  grid-template-columns: 400px 1fr; 
  height: 100vh;
}

.sidebar {
  background-color: transparent;
  color: white;
  padding: 20px;
  overflow-y: auto;
  position: sticky;
}


.card-wrap {
  background: #E1E1E1;
  --r: 20px;
  border-radius: 10px;
  padding: 2.5rem 8rem 0rem 8rem;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}


/* --- LA FEUILLE UNIQUE (Blanche) --- */
.card {
  background: #fff;
  border-radius: 10px;
  padding: 40px 80px;
  box-shadow:0 4px 20px rgba(0,0,0,.15);
  width: 100%;
  max-width: 850px;
  min-height: 180mm; 
  box-sizing: border-box;
}

.brand-chip {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #4A141C; /* Le rouge bordeaux de la maquette */
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 20px; /* Très arrondi pour l'effet "chipset" */
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.prempare {
  background-color: #50504F; /* Le rouge bordeaux de la maquette */
  color: #ffffff;
  padding: 15px 14px;
  border-radius: 10px;
  margin-bottom: 1rem;
}
/*****************************************************
 * BASE TYPO
 *****************************************************/
.texte{ white-space: pre-line; margin:0.01rem 0; }

.tableau p {
    margin: 0; /* Supprime les marges */
    white-space: pre-line;
  text-align: left;
}

p {
  line-height: 1.3;
  font-family: var(--font-main);
  text-align: justify;
}

/*****************************************************
 * TITRES
 *****************************************************/
.H1, .H2, .H3, .H4 {
  font-family: var(--font-main);
  display: block;
  text-align: center;
  page-break-inside: avoid;
}

.nomdurituel {text-align: right; font-size: 1.2rem; margin:0 0 2rem 0; font-weight: 600 }
.H1 { font-size: 1.8rem; font-weight: 700; margin:3rem 0 1rem 0; }
.H2 { font-size: 1.4rem; font-weight: 700; margin:1.5rem 0 1rem 0;}
.H3 { font-size: 1.1rem; color: var(--accent); font-weight: 700; margin:1.5rem 0 1rem 0;}
.H4 { font-size: 1rem; font-weight: 300; margin:1rem 0 0.5rem 0; }
h1.titre-principal { text-align: center; margin: 0 0 var(--gap) 0; font-size: 2rem; letter-spacing: 0.2px;}
.premiergénéré { text-align: center; font-size: 2rem; margin:0.5rem 0 1rem 0; color: #b30000; font-family: garamond  }
.sansmarge { margin:0 0 1rem 0; }

/*****************************************************
 * DIALOGUES (V / ℟)
 *****************************************************/
.dialogueV {
  font-weight: bold;
  font-size: 1.2rem;
  line-height:1.2;
}

.dialogueR {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height:1.2;
}
.dialogueR::before {
  content: "℟. ";
  color: var(--accent);
}

.tableau .rubrique {
  margin: 0.5rem 0;
}
/*****************************************************
 * INDENTATIONS ET RUBRIQUES
 *****************************************************/
.rubrique { color: var(--accent); margin:0.3rem 0;}
.rubriqueinterne { color: var(--accent); margin:0;}
.indent1all { text-indent: -20px; padding-left: 20px; } 
.indent1p { text-indent: 20px; }
.indent1g { text-indent: 50px; }
.indent1allg { text-indent: -20px; padding-left: 70px; } 
.indent1gg { text-indent: 70px; }
.indentallg { padding-left: 50px; }
.indentallp { padding-left: 20px; }
p.centre { text-align: center; line-height: 1; font-weight: 400; font-size: 1.6rem;}
.lettrine::first-letter { color: var(--accent); font-weight: bold }
.sautdeligne {line-height: 0.6;}
.preface-texte .sautdeligne { line-height: 0.6; }
.voixbasse { font-style: italic; font-size: 1.2rem;   line-height:1.1; }

.grandelettrine::first-letter {
  color: var(--accent);
  font-size: 48px;
  font-weight: 700;
  float: left;
  line-height: 0.85;
  padding-top: 0.3rem;
}

/*****************************************************
 * ORAISON
 *****************************************************/
.oraison-texte p {
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2;
}
  
.oraison-row{ display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap; }

.preface-texte p {
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.1;
}


/*****************************************************
 * PANELS — (PARAMÈTRES DU GÉNÉRATEUR)
 *****************************************************/
.panel {
  margin-bottom: 0.75rem;
  padding: 0.6rem;
  border-radius: calc(var(--radius) - 2px);
  border: 3px solid rgba(23, 24, 24, 0.175);
}

.panel + .panel-header { margin-top: 1rem; } /* espace visuel entre blocks */

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  border-radius: calc(var(--radius) - 4px);
  transition: background 0.12s ease, transform 0.08s ease;
  border: 2px solid transparent;
}
 
.panel-content {
  padding: 0.6rem 0.2rem 0.2rem 0.2rem;
}

/* arrow */
.arrow{ color:#E1E1E1; transition: transform .18s ease; }
.arrow.open{ transform: rotate(90deg); color:#3D3D3D; }

/*****************************************************
 * CHAMPS DE FORMULAIRE
 *****************************************************/
label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--brand);
  
}
/*
input[type="number"],*/
input[type="text"],
#NomRituel {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 6px;
  border: 2px solid rgba(0,0,0,0.1);
  font-size: 1.1rem;
}

.sub-options-inline{ display:inline-flex; gap:0.6rem; align-items:center; }

/*****************************************************
 * GRILLE SACREMENTS
 *****************************************************/
.sacrements-grid{
  display:grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 0.5rem 1rem;
  align-items:start;
}
/*****************************************************
 * BOUTONS
 *****************************************************/
.css-button-sharp--grey {
  min-width: 130px;
  height: 40px;
  color: #E1E1E1;
  padding: 6px 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: 2px solid #4A141C;
  background: #4A141C;
}

.css-button-sharp--grey:hover {
  background: #E1E1E1;
  color: #4A141C;
  transform: translateY(-2px);
}

.css-button-ghost {
  background: transparent;
  color: var(--brand);
  border: 2px dashed rgba(73,80,87,0.12);
}

.button-section {
    position: sticky;
  overflow: auto;
  display: flex;
  gap: 110px;
  flex-wrap: wrap;
  align-items: center;
  height: 80px;
}

.variant-buttons.no-wrap {
  display:flex;
    flex-wrap: nowrap;
  }

.button-section + .card {     margin-top: 1rem;  }


/*****************************************************
 * BOUTONS POUR VARIANTES
 *****************************************************/
.variant-header {
  display: flex;
  justify-content: space-between; /* Espace entre le titre et les boutons */
  align-items: baseline;
  align-content : center;
}

.variant-header h2 {
  flex: 1; /* Permet au titre de prendre tout l'espace disponible */
  text-align: center; /* Centre le texte du titre */
  margin: 1rem 0rem; /* Supprime les marges par défaut */
}

.variant-header h3 {
  flex: 1; /* Permet au titre de prendre tout l'espace disponible */
  text-align: center; /* Centre le texte du titre */
  margin: 1rem 0rem 0.5rem 0rem; /* Supprime les marges par défaut */
}

.variant-header h4 {
  flex: 1; /* Permet au titre de prendre tout l'espace disponible */
  text-align: center; /* Centre le texte du titre */
  margin: 1rem 0rem; /* Supprime les marges par défaut */
  font-weight: normal;
}

.variant-buttons {
  display: grid;
    /* Crée exactement 3 colonnes de largeur égale */
    grid-template-columns: repeat(3, 1fr); 
    gap: 8px; /* Espace entre les boutons */
    max-width: 300px; /* Ajustez selon la largeur souhaitée pour l'ensemble */
}

.boutons2 {
  display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 8px; /* Espace entre les boutons */
    max-width: 300px; /* Ajustez selon la largeur souhaitée pour l'ensemble */
}

.boutons4 {
  display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 8px; /* Espace entre les boutons */
    max-width: 300px; /* Ajustez selon la largeur souhaitée pour l'ensemble */
}

.boutons5 {
  display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 8px; /* Espace entre les boutons */
    max-width: 300px; /* Ajustez selon la largeur souhaitée pour l'ensemble */
}
.variant-buttons button {
  margin-left: 0.3rem;
  padding: 4px 8px;
  border: 1px solid #555;
  border-radius: 5px;
  background: white;
  cursor: pointer;
}

.variant-buttons button.selected {
  background: #b30000;
  color: white;
  font-weight: bold;
}

/*****************************************************
 * SAUTS DE PAGE (PDF/WORD)
 *****************************************************/
.page-break {
  display: block;
  height: 0;
  margin: 0;
  padding: 0;
  break-after: page;
}

.card .oraison-texte,
.card p,
.card .H1,
.card .H2 {
  break-inside: avoid;
}

/*****************************************************
 * MOBILE — POLICES LÉGÈREMENT RÉDUITES
 *****************************************************/
@media (max-width: 600px) {
  .H1 { font-size: 1.5rem; margin :1.5rem 0 1rem 0; }
  .premiergénéré { margin :0.5rem 0 1rem 0; }
  .H2 { font-size: 1.2rem; margin: 1rem 0 1rem 0; }
  .H3 { font-size: 1rem; }
  p { font-size: 0.7rem; }
  p.centre { font-size: 1rem; }
  .oraison-texte p { font-size: 0.8rem; }
  .preface-texte p { font-size: 0.8rem; }
  .dialogueR {    font-size: 0.8rem;  }
  .dialogueV {    font-size: 0.8rem;  }
  .indent1g { text-indent: 15px;  }
  .indentallg { padding-left: 30px; }
  .grandelettrine::first-letter { font-size: 36px; }
  .variant-buttons button {
    padding: 2px 4px;
    margin-left: 0; }
}

/*****************************************************
 * ONBOARDING MODAL
 *****************************************************/
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
      inset: 0;                      /* couvre toute la page */
  pointer-events: auto;     
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 2rem 2rem 1.5rem 2rem;
    max-height: 70vh;
    border-radius: 10px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    overflow: hidden; 
    display: flex;
    flex-direction: column;
    z-index: 100;
}
  .modal-body {
  flex: 1;
  padding: 0 0.5rem;
  overflow-y: auto; /* scroll si contenu trop grand */
  margin: 0 0 1rem 0;
}
  .modal h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
    text-align: center;
  }
  .modal p {
    text-align: justify;
    font-size: 1.1rem; /* Taille de police standard pour le contenu */
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #444;
  }
  .nav {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
  .modal {
    width: 80%;            /* prend 80% de la largeur du mobile */
    max-width: 80%;
    border-radius: 12px;
    padding: 1rem;
  }}

  .btn-close {
  position: absolute;
  top: 4px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 40px;
  color: #999;
  cursor: pointer;
  line-height: 1;
  padding: 5px;
  transition: color 0.2s;
}

.btn-close:hover {
  color: var(--accent, #b30000); /* Devient rouge au survol */
}
/*****************************************************
 * BOUTONS MODAL
 *****************************************************/
  button {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 6px;
    background: #ddd;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .dontshow {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

/*****************************************************
 * BOUTON ONBOARDING FIXE
 *****************************************************/
.onboard-btn {
  margin: 0 1.5rem 0 0.5rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: #4A141C;
    color: #E1E1E1;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s ease;

    /* Centrage avec Flexbox */
    display: flex;
    align-items: center;
    justify-content: center;
}

  .onboard-btn:hover {
    transform: scale(1.12);
  }

/*****************************************************
 * Liturgie du jour - Sélecteur d'événements
 *****************************************************/
.event-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 10px 10px 10px;
    background: #E1E1E1;
    cursor: pointer;
    margin: 0.5rem 0 0 0;
    border-left: 12px solid #ccc; /* Épaisseur par défaut */
    color: #3D3D3D;
    font-size: 1rem;
    border-radius: 0 6px 6px 0; /* Arrondi uniquement à droite */
    transition: all 0.2s ease;
}

  .event-card.active {
    background: #e9ecef;
box-shadow: inset 2px 0 5px rgba(0,0,0,0.1);
  }

  .details { display: flex; flex-direction: column; }
  .name { font-weight: bold; }
  .rank { font-size: 0.8rem; color: #666; text-transform: uppercase; }

  input[type="radio"] {
  accent-color: #4A141C; /* Remplace le bleu par votre rouge liturgique */
  cursor: pointer;
}
  
  .single-event {
    display: block;
    padding: 10px;
    background: #E1E1E1;
    border-radius: 0 6px 6px 0;
    margin: 0.5rem 0 0 0;}
  .hint { font-size: 0.8rem; margin-top: 4px; }
  
  input[type="date"], input[type="text"] {
    padding: 0.38rem 0.5rem;
    border: 1px solid rgba(0,0,0,0.08);
    background-color: #E1E1E1;
    border-radius: 6px;
  }

#selectdate {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

/*****************************************************
 * BOUTONS - Retour en haut de page
 *****************************************************/
.scrollToTopButton {
  z-index: 100;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  bottom: 20px;
  margin-left: 800px; /* Positionné à droite */
  border: 2px solid var(--brand);
  border-radius: 50%; /* Bouton rond */
  background-color: #3D3D3D; /* Couleur de fond */
  color: white; /* Couleur de la flèche */
  font-size: 2rem; /* Taille de la flèche */
  font-weight: bold;
  outline: none;
  width: 50px; /* Largeur du bouton */
  height: 50px; /* Hauteur du bouton */
  padding: 0; /* Supprime les marges internes */
    cursor: pointer;

    display: flex;
    justify-content: center;
}


.scrollToTopButton:hover,
.scrollToTopButton:focus,
.scrollToTopButton:focus-within {
  cursor: pointer;
      transform: scale(1.12);
        background: #fff;
  color: var(--brand);
      
}

/*****************************************************
 * Règles d'impression
 *****************************************************/
@media print {
@page {
  size: A4;
  margin: 1cm;
}

:global(body, html) {
    margin: 0 !important;
    padding: 0 !important;
      background-color: white;
  }

  .container {
    display: block !important;
    width: 100% !important;
  }

  .sidebar,
  .no-print,
  #scrollToTopButton {
    display: none !important;
  }

  .card {
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    box-shadow: none !important;
    border: none !important;
    background: white !important;
  }

  .card-wrap {
    padding: 0 !important;
    margin: 0;
  }

  /* Évite les coupures moches */
  .card p,
  .card .oraison-texte,
  .card .preface-texte,
  .card h1,
  .card h2,
  .card h3 {
    break-inside: avoid;
  }
}

/*****************************************************
 * BOUTON DE CONTACT
 *****************************************************/
.floating-contact-btn {
  position: absolute;
  top: 28px;
  right: 8px;
  z-index: 2000; /* Au-dessus de la sidebar et du rituel */
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #4A141C; 
  color: #E1E1E1;
  text-decoration: none;
  padding: 4px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #4A141C;;
  font-family: sans-serif;
  font-size: 0.85rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.floating-contact-btn:hover {
  background: #E1E1E1;
  color: #4A141C;
  transform: translateY(-2px);
}

.floating-contact-btn .icon {
  font-size: 1.1rem;
}


/*****************************************************
 * BOUTONS TOGGLE
 *****************************************************/
.toggle-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #777;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px; width: 14px;
  left: 3px; bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider { background-color: #4A141C; }
input:checked + .slider:before { transform: translateX(20px); }


/* --- MEDIA QUERIES (TABLETTES ET MOBILES) --- */

@media (max-width: 768px) {

  /* ---- STRUCTURE GÉNÉRALE ---- */

  .container {
    grid-template-columns: 1fr;
    height: auto;
  }

  .sidebar {
    position: relative;
    padding: 1rem;
    max-height: none;
  }

  .card-wrap {
    padding: 1rem;
    margin: 0;
    border-radius: 0px;
  }

  .card {
    padding: 1.2rem 1rem;
    border-radius: 8px;
    max-width: 100%;
    min-height: auto;
  }

  .scrollToTopButton {
    display: flex;           /* ✅ réaffiche le bouton */
    right: 25px;             /* position mobile */
    bottom: 10px;
    margin-left: 0;        
    width: 44px;
    height: 44px;
    font-size: 1.6rem;
  }

.onboard-btn {
  margin: 0 1.5rem 0 0.5rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: #4A141C;
    color: #E1E1E1;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s ease;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
}
}
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr; /* On passe sur une seule colonne */
  }

  .sidebar {
    height: auto;
    position: relative;
    padding: 1rem;
  }

  .card-wrap {
    padding: 15px; /* On réduit l'espace autour de la feuille */
  }

  .card {
    padding: 20px; /* On réduit les marges internes du document */
    box-shadow: none; /* Plus léger pour le mobile */
  }

  /* Ajustement des titres pour mobile */
  .premiergénéré {
    font-size: 1.5rem !important;
  }
}

/* --- FIXATIONS POUR L'INTERFACE --- */

/* Bouton flottant de contact - adaptation mobile */
@media (max-width: 600px) {
  .floating-contact-btn {
    top: 15px;
    right: 15px;
    padding: 8px;
    border-radius: 100%; /* Bouton rond */
  }
  .floating-contact-btn .text {
    display: none; /* On ne garde que l'icône sur petit téléphone */
  }
}

/* Zone de boutons (Export) fixe sur mobile pour être toujours accessible */
@media (max-width: 768px) {
  .button-section {
    position: initial;
    background: var(--dark-bg);
    display: flex;
    flex-direction: row-reverse;
    gap: 50px;
    justify-content: right;
    z-index: 999;
  }

  /* On ajoute une marge en bas du rituel pour ne pas cacher le texte sous les boutons fixes */
  .card-wrap {
    padding-bottom: 80px;
  }
}

/* Gestion de l'affichage des cartes d'événements (Romcal) */
.event-card {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: rgba(255,255,255,0.05);
  border-left: 4px solid transparent;
  cursor: pointer;
  transition: 0.2s;
}

</style>
