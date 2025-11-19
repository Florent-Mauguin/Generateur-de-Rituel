<!--
JS
-->

<script>
//import { onMount } from 'svelte';
    import { ritual } from '$lib/ritual.js';
    import { OraisonsDominicales } from '$lib/oraisons';
    import FileSaver from "file-saver";
    import { Document, Packer, Paragraph, TextRun } from "docx";
    

  let ritualRef;

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


  // Parametres à l'ouverture
  let celebrationType = "Dominicale";
  let Oraisons = false;
  let Dateliturgique = ""
  let oraison = "";
  let salutation = "S3";
  let ChoixPenitentiel = "1CP";
  let [hideGloria, gloriaLatin] = [false, false];
  let showAutresParams = false;
  let Sacrements = false;
  let [Bapteme,PremiereCommunion,Confirmation,Mariage,Ordination,sacrementDesMalades] = [false,false,false,false,false,false];
  let Servants = false;
  let showAutresceremonie = false;
  let hideRubriques = false;
  let presenceBishop = false;
  let incense = false;
  let servants = 0;
  
  let filteredRitual = [];
  let rituelName = "";

  //Met l’oraison du jour dès que l’utilisateur coche “Oraisons” et choisit une date liturgique, afin que le générateur puisse inserer les oraisons au bon endroit dans le rituel.
  $: if (Oraisons && Dateliturgique) {
  oraison = OraisonsDominicales[Dateliturgique] || null;
}

 // Construction du rituel complet
const fullRitual = [
  ...ritual.ritesInitiaux,
  ...ritual.liturgiedelaparole,
  ...ritual.servants,
  ...ritual.eucharistie
];

// Génération du rituel filtré
function generateRitual() {
  const options = {
    presenceBishop,
    incense,
    servants,
    celebrationType,
    salutation, ChoixPenitentiel, hideGloria, gloriaLatin, oraisons: Oraisons,
  };





  filteredRitual = [];
  for (const step of fullRitual) {

    // ---- INSERTIONS Oraisons ----
    if (step.type === "insert-collecte") {
      if (Oraisons && oraison) {
        filteredRitual.push(
          { type: "oraison", segments: oraison.collecte }
        );
      }
      continue;
    }

    // ✅ ✅ ✅ MASQUAGE DES RUBRIQUES
    if (hideRubriques && step.type === "rubrique") {
      continue;
    }

    // ---- Conditions normales ----
    const cond = step.conditions;

    if (!cond) {
      filteredRitual.push(step);
     if (step.pageBreak === true) filteredRitual.push({ type: "pageBreak" });
      continue;
    }

    let display = true;

    for (const key in cond) {
      const expected = cond[key];
      const actual = options[key];

      if (typeof expected === "boolean" && expected !== actual) {
        display = false;
        break;
      }

      // Si la condition est un tableau, vérifier si `actual` est inclus dans le tableau
      if (Array.isArray(expected)) {
        if (!expected.includes(actual)) {
          display = false;
          break;
        }
      }
      // Sinon, vérifier une égalité simple
      else if (expected !== actual) {
        display = false;
        break;
      }
      
    }

    if (display) filteredRitual.push(step);
  }
}

</script>


<!--
HTML
-->

<div class="container">
  <div class="no-print">
  <h1 class="titre-principal">Générateur de rituel de messe</h1>


  <div class="card">

     <input id="NomRituel" bind:value={rituelName} placeholder="Donnez un nom à votre Rituel" type="text">

    <label>
      Célébration Eucharistique :
      <select bind:value={celebrationType}>
        <option value="Dominicale">du Dimanche</option>
        <option value="Semaine">de semaine</option>
      </select>
    </label>

 <div class="oraison-row">
  <label class="oraison-label">
    Oraisons :
    <input type="checkbox" bind:checked={Oraisons} />
  </label>

  {#if Oraisons}
    <div class="sub-options-inline">
      <label>
        Calendrier :
        <select bind:value={Dateliturgique}>
          <option value="1TO">1er dimanche du Temps Ordinaire</option>
          <option value="2TO">2ème dimanche du Temps Ordinaire</option>
          <option value="3TO">3ème dimanche du Temps Ordinaire</option>
          <option value="4TO">4ème dimanche du Temps Ordinaire</option>
          <option value="5TO">5ème dimanche du Temps Ordinaire</option>
          <option value="6TO">6ème dimanche du Temps Ordinaire</option>
          <option value="7TO">7ème dimanche du Temps Ordinaire</option>
          <option value="8TO">8ème dimanche du Temps Ordinaire</option>
          <option value="9TO">9ème dimanche du Temps Ordinaire</option>
          <option value="10TO">10ème dimanche du Temps Ordinaire</option>
          <option value="11TO">11ème dimanche du Temps Ordinaire</option>
          <option value="12TO">12ème dimanche du Temps Ordinaire</option>
          <option value="13TO">13ème dimanche du Temps Ordinaire</option>
          <option value="14TO">14ème dimanche du Temps Ordinaire</option>
          <option value="15TO">15ème dimanche du Temps Ordinaire</option>
          <option value="16TO">16ème dimanche du Temps Ordinaire</option>
          <option value="17TO">17ème dimanche du Temps Ordinaire</option>
          <option value="18TO">18ème dimanche du Temps Ordinaire</option>
          <option value="19TO">19ème dimanche du Temps Ordinaire</option>
          <option value="20TO">20ème dimanche du Temps Ordinaire</option>
          <option value="21TO">21ème dimanche du Temps Ordinaire</option>
          <option value="22TO">22ème dimanche du Temps Ordinaire</option>
          <option value="23TO">23ème dimanche du Temps Ordinaire</option>
          <option value="24TO">24ème dimanche du Temps Ordinaire</option>
          <option value="25TO">25ème dimanche du Temps Ordinaire</option>
          <option value="26TO">26ème dimanche du Temps Ordinaire</option>
          <option value="27TO">27ème dimanche du Temps Ordinaire</option>
          <option value="28TO">28ème dimanche du Temps Ordinaire</option>
          <option value="29TO">29ème dimanche du Temps Ordinaire</option>
          <option value="30TO">30ème dimanche du Temps Ordinaire</option>
          <option value="31TO">31ème dimanche du Temps Ordinaire</option>
          <option value="32TO">32ème dimanche du Temps Ordinaire</option>
          <option value="33TO">33ème dimanche du Temps Ordinaire</option>
        </select>
      </label>
    </div>
  {/if}
</div>

    <div class="panel">
<!-- Option autres pour Cérémonie -->
<div
  class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={showAutresceremonie}
  on:click={() => showAutresceremonie = !showAutresceremonie}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showAutresceremonie = !showAutresceremonie;
    }
  }}
>
  <span>Plus de paramètres</span>
  <span class="arrow {showAutresceremonie ? 'open' : ''}">▶</span>
</div>

<!-- Lors de l'ouverture -->
{#if showAutresceremonie}
    <div class="panel-content">
<div class="sub-options-inline">
            <!-- ✅ Paramètre : Choix de la salutation -->
<label>
        Salutation :
        <select bind:value={salutation}>
          <option value="S1">Type 1</option>
          <option value="S2">Type 2</option>
          <option value="S3">Type 3</option>
    </select>
  </label>

      <!-- ✅ Paramètre : Choix de l'acte pénitentiel -->
<label>
        Acte pénitentiel :
        <select bind:value={ChoixPenitentiel}>
          <option value="1CP">Type 1</option>
          <option value="2CP">Type 2</option>
          <option value="3CP">Type 3</option>
    </select>
  </label>
</div>
    
<div class="sub-options-inline">
  <!-- ✅ Paramètre : Ne pas afficher le Gloria -->
      <label>
        Sans Gloria
        <input type="checkbox" bind:checked={hideGloria} />
      </label>

        {#if !hideGloria}
      <!-- ✅ Paramètre : Gloria en latin -->
      <label>
        Gloria en Latin :
        <input type="checkbox" bind:checked={gloriaLatin} />
      </label>
      {/if}
    </div>

      <!-- ✅ Paramètre : Présence d'un évêque -->
    <label>
      Présence de l'évêque :
      <input type="checkbox" bind:checked={presenceBishop} />
    </label>
    </div>
  {/if}
</div>
<!--
Fin div panel cérémonie
--> 

<!--
Début section sacrements 
--> 
<div class="panel">
<div
  class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={Sacrements}
  on:click={() => Sacrements = !Sacrements}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      Sacrements = !Sacrements;
    }
  }}
>
  <span>Sacrements</span>
  <span class="arrow {Sacrements ? 'open' : ''}">▶</span>
</div>

{#if Sacrements}
<div class="sacrements-grid">
      <!-- ✅ Paramètre : Baptême -->
      <label>
        <input type="checkbox" bind:checked={Bapteme} />
        Baptême
      </label>

      <!-- ✅ Paramètre : Premièrecommunion -->
      <label>
        <input type="checkbox" bind:checked={PremiereCommunion} />
        Première Communion
      </label>

      <!-- ✅ Paramètre : Confirmation -->
      <label>
        <input type="checkbox" bind:checked={Confirmation} />
        Confirmation
      </label>

            <!-- ✅ Paramètre : Mariage -->
      <label>
        <input type="checkbox" bind:checked={Mariage} />
        Mariage
      </label>

            <!-- ✅ Paramètre : Ordination -->
      <label>
        <input type="checkbox" bind:checked={Ordination} />
        Ordination
      </label>

            <!-- ✅ Paramètre : Sacrement des malades -->
      <label>
        <input type="checkbox" bind:checked={sacrementDesMalades} />
        Sacrement des malades
      </label>
  </div>
  {/if}
</div>

<!-- Début section Servants -->
<div class="panel">
<div
  class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={Servants}
  on:click={() => Servants = !Servants}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      Servants = !Servants;
    }
  }}
>
  <span>Service de l'autel</span>
  <span class="arrow {Servants ? 'open' : ''}">▶</span>
</div>

{#if Servants}
    <label>
      Encensement :
      <input type="checkbox" bind:checked={incense} />
    </label>

    <label>
      Nombre de servants :
      <input type="number" min="0" bind:value={servants} />
    </label>
{/if}
</div>
<!-- Fin section Servants -->


    <!-- ✅ Section AUTRES PARAMÈTRES -->
     <div
  class="panel-header"
  role="button"
  tabindex="0"
  aria-expanded={showAutresParams}
  on:click={() => showAutresParams = !showAutresParams}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showAutresParams = !showAutresParams;
    }
  }}
>
  <span>Autres paramètres</span>
  <span class="arrow {showAutresParams ? 'open' : ''}">▶</span>
</div>


  {#if showAutresParams}
    <div class="panel-content">

      <!-- ✅ Paramètre : Ne pas afficher les rubriques -->
      <label>
        <input type="checkbox" bind:checked={hideRubriques} />
        Ne pas afficher les rubriques
      </label>
    </div>
  {/if}
</div>

  <div  class="button-section">
    <button class="css-button-sharp--grey" on:click={generateRitual}>Générer le rituel</button>
      <button class="css-button-sharp--grey" on:click={() => window.print()}>Exporter en PDF</button>
      <button class="css-button-sharp--grey" on:click={generateWord}>Exporter en Word</button>
  </div>
</div>

  {#if filteredRitual.length > 0}
    <div class="card" bind:this={ritualRef}>
      {#if rituelName}
        <h2 class="H1">{rituelName}</h2>
      {/if}

  {#each filteredRitual as step}
    {#if step.type === "pageBreak"}
      <div class="page-break" aria-hidden="true"></div>

      
      {:else if step.type === "kyrie"}

        <div class="kyrie-trois-colonnes">
          <div class="colonne gauche">
            {#each step.left as seg}
              <p class="{seg.type} {seg.class || ''}" style="white-space: pre-line;">
                {seg.texte}
              </p>
            {/each}
          </div>

          <div class="middle">
            {#each step.middle as seg}
              <p class="{seg.type} {seg.class || ''}" style="white-space: pre-line;">
                {seg.texte}
              </p>
            {/each}
          </div>

          <div class="colonne droite">
            {#each step.right as seg}
              <p class="{seg.type} {seg.class || ''}" style="white-space: pre-line;">
                {seg.texte}
              </p>
            {/each}
          </div>
        </div>

      {:else if step.type === "oraison"}
        <div class="oraison-texte">
          {#each step.segments as seg}
            <p class={seg.class || ""} style="white-space: pre-line;">
              {seg.texte}
            </p>
          {/each}
        </div>

      {:else if step.items}
        {#each step.items as item}
          <p class="{item.type} {item.class || ''}">{item.texte}</p>
    {/each}

      {:else}
          <p class="{step.type} texte {step.class || ''}">{step.texte}</p>
    {/if}
  {/each}
</div>
  {/if}
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
/*****************************************************
 * VARIABLES
 *****************************************************/
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

/*****************************************************
 * BASE TYPO
 *****************************************************/
.texte{ white-space: pre-line; margin:0.01rem 0; }

p {
  line-height: 1.3;
  font-family: var(--font-main);
  text-align: justify;
}

/*****************************************************
 * TITRES
 *****************************************************/
.H1, .H2, .H3 {
  font-family: var(--font-main);
  display: block;
  text-align: center;
  page-break-inside: avoid;
}

.H1 { font-size: 1.8rem; font-weight: 700; margin:1rem 0 1rem 0; }
.H2 { font-size: 1.4rem; font-weight: 700; margin:1.5rem 0 1rem 0;}
.H3 { font-size: 1.1rem; color: var(--accent); font-weight: 700; margin:1.5rem 0 1rem 0;}
h1.titre-principal { text-align: center; margin: 0 0 var(--gap) 0; font-size: 2rem; letter-spacing: 0.2px;}

/*****************************************************
 * DIALOGUES (V / ℟)
 *****************************************************/
.dialogueV {
  font-weight: bold;
  font-size: 1.3rem;
  line-height:1.1;
}

.dialogueR {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
.dialogueR::before {
  content: "℟ ";
  color: var(--accent);
}

/*****************************************************
 * INDENTATIONS ET RUBRIQUES
 *****************************************************/
.rubrique { color: var(--accent); margin:0.3rem 0;}
.allindentation { text-indent: -1em; padding-left: 1em; }
.premiereindentation { text-indent: 0.9em; }
.grandeindentation { text-indent: 2em; }
.lettrine::first-letter { color: var(--accent); font-weight: bold }
.sautdeligne {line-height: 0.6;}
.voixbasse { font-style: italic; font-size: 1.3rem;   line-height:1.1; }

.grandelettrine::first-letter {
  color: var(--accent);
  font-size: 3rem;
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
  font-size: 1.3rem;
  line-height: 1.1;
}
  
.oraison-row{ display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap; }

/*****************************************************
 * KYRIE — TROIS COLONNES
 *****************************************************/
.kyrie-trois-colonnes {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.kyrie-trois-colonnes p {
  margin: 0;
}

@media (max-width: 600px) {
  .kyrie-trois-colonnes {
    flex-direction: column;
  }
}

/*****************************************************
 * CONTENEUR PRINCIPAL
 *****************************************************/
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: calc(var(--pad) * 0.7);
  background: transparent;
}

/*****************************************************
 * CARD
 *****************************************************/
.card {
  border-radius: var(--radius);
  padding: calc(var(--pad) + 0.25rem);
  margin-bottom: var(--gap);
  border: 2px solid rgba(73, 80, 87, 0.06);
}

/*****************************************************
 * PANELS — (PARAMÈTRES DU GÉNÉRATEUR)
 *****************************************************/
.panel {
  margin-top: 0.75rem;
  padding: 0.6rem;
  border-radius: calc(var(--radius) - 2px);
  border: 2px solid rgba(73, 80, 87, 0.05);
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
.arrow{ color:var(--muted); transition: transform .18s ease; }
.arrow.open{ transform: rotate(90deg); color:var(--brand); }


/*****************************************************
 * CHAMPS DE FORMULAIRE
 *****************************************************/
label {
  display: block;
  color: #222;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--brand);
}

input[type="number"],
input[type="text"],
select {
  padding: 0.38rem 0.5rem;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.08);
  background: #fff;
}

#NomRituel {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 6px;
  border: 2px solid rgba(0,0,0,0.1);
  margin-bottom: 0.75rem;
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
  @media (max-width:880px){ .container{ padding:0.6rem } .sacrements-grid{ grid-template-columns:repeat(2,1fr);} }
  @media (max-width:480px){ .sacrements-grid{ grid-template-columns:1fr;} .card{ padding:0.8rem } }

/*****************************************************
 * BOUTONS
 *****************************************************/
.css-button-sharp--grey {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 6px 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border: 2px solid var(--brand);
  background: var(--brand);
}

.css-button-sharp--grey:hover {
  background: #fff;
  color: var(--brand);
  transform: translateY(-2px);
}

.css-button-ghost {
  background: transparent;
  color: var(--brand);
  border: 2px dashed rgba(73,80,87,0.12);
}

.button-section {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: var(--gap);
}

.button-section + .card {     margin-top: 1rem;  }


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
  .H1 { font-size: 1.5rem; }
  .H2 { font-size: 1.2rem; }
  .H3 { font-size: 1rem; }
  p { font-size: 0.95rem; }
}

/*****************************************************
 * REGLES POUR L'IMPRESSION PDF
 *****************************************************/
@media print {
  .no-print {display: none !important;}
  .card {border: none; box-shadow: none;  margin: 0; padding: 0.5rem; }
  .page-break {
    display: block;
    break-after: page; /* Forcer un saut de page après cet élément */
  }
  .card,  .card .H1,  .card .H2,  .card .H3,  .card p {
    break-inside: avoid; /* Éviter les coupures dans les sections */
    page-break-inside: avoid; /* Compatibilité avec d'autres navigateurs */
  }
}

</style>
