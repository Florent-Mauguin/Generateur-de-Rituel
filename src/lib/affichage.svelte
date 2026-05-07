<script>
// @ts-nocheck
  // Variables de données
  export let filteredRituel = [];
  export let rituelName = "";
  export let projectType = "";
  export let CelebrationduJour = "";
  export let fontSizeScale = 1;
  export let availablePrefaces = [];
  export let preface = {};
  export let prefacedujour = {};
  export let liturgicalContext = {};

  // Variables de choix (à utiliser avec bind: dans ton parent)
  export let Choixpreface = "";
  export let salutation = "S1";
  export let ChoixPenitentiel = "1CP";
  export let typeCredo = "NC";
  export let InvitS = "1";
  export let PriereC = "1";
  export let typePE = "PE1";
  export let AcclamationEucharistique = "AE1";
  export let NotrePère = "NP1";
  export let Apologies = "1";
  export let envoi = "1";
  export let croix = "1";
  export let exultet = "1";
  export let litbap = "A";
  export let renonciation = "1";
  export let renonciation2 = "1";
  export let bapteme = "ablution";
  export let entreerameaux = "1";
//Sacrement mariage
  export let accueilmariage = "1";
  export let collectemariage = "1";
  export let dialoguemariage = "1";
  export let consentements = "1";
  export let benedictionmariage = "1";
//Sacrement baptême
  export let ped = "1";
  export let prierecommunebapteme = "1";
  export let benbapt = "1";
  export let tempspascal = false;
  export let benfbapt = "1";

  // Variables de langues
  export let kyriegrec = false;
  export let glorialatin = false;
  export let sanctusLt = false;
  export let DoxologieLt = false;
  export let agnusLt = false;

  // Fonctions externes passées par le parent
  export let generateRituel = () => {};
  export let isAllowed = (id, context) => true;
  export let toggleKyrieGrec = () => kyriegrec = !kyriegrec;
  export let toggleGloriaLatin = () => glorialatin = !glorialatin;
  export let toggleSanctusLatin = () => sanctusLt = !sanctusLt;
  export let toggleLatin = () => DoxologieLt = !DoxologieLt;
  export let toggleAgnusLatin = () => agnusLt = !agnusLt;
  export let toggletempspascal = () => tempspascal = !tempspascal;

  // Variables et fonctions internes au composant
  let card;
  let showScrollButton = false;

  function scrollFunction() {
    if (card) {
      showScrollButton = card.scrollTop > 300;
    }
  }

  function scrollToTop() {
    if (card) {
      card.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>

<div class="card-wrap">
  <div class="card" bind:this={card} on:scroll={scrollFunction} style="--scale: {fontSizeScale}">
    {#if filteredRituel.length > 0}
      
      {#if rituelName}
        <h2 class="nomdurituel">{rituelName}</h2>
      {/if}
      
      {#if projectType === 'messe'}
        <h2 class="premiergénéré">{CelebrationduJour}</h2>
      {/if}

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
                        prefacedujour = preface[Choixpreface]; 
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
              <button class:selected={salutation === "S1"} on:click={() => { salutation = "S1"; }}>1 </button>
              <button class:selected={salutation === "S2"} on:click={() => { salutation = "S2"; }}>2 </button>
              <button class:selected={salutation === "S3"} on:click={() => { salutation = "S3"; }}>3 </button>
            </div>
          </div>

        {:else if step.id === "ActePenitentiel"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="variant-buttons no-print">
              <button class:selected={ChoixPenitentiel === "1CP"} on:click={() => { ChoixPenitentiel = "1CP"; }}>1 </button>
              <button class:selected={ChoixPenitentiel === "2CP"} on:click={() => { ChoixPenitentiel = "2CP"; }}>2 </button>
              <button class:selected={ChoixPenitentiel === "3CP"} on:click={() => { ChoixPenitentiel = "3CP"; }}>3 </button>
            </div>
          </div> 
          
        {:else if step.id === "aspersion"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="variant-buttons no-print">
              <button class:selected={ChoixPenitentiel === "4CP"} on:click={() => { ChoixPenitentiel = "4CP"; }}>1 </button>
              <button class:selected={ChoixPenitentiel === "5CP"} on:click={() => { ChoixPenitentiel = "5CP"; }}>2 </button>
            </div>
          </div>

        {:else if step.id === "kyrie"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={kyriegrec} on:click={toggleKyrieGrec}>En Grec</button>
            </div>
          </div>

        {:else if step.id === "gloria"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={glorialatin} on:click={toggleGloriaLatin}>En Latin</button>
            </div>
          </div>

        {:else if step.id === "Professiondefoi"}
          <div class="variant-header2">
            <h2 style="text-align: center;">{@html step.texte}</h2>
            <div class="variant-buttons2 no-print" style="margin-top: 0">
              <button class:selected={typeCredo === "NC"} on:click={() => { typeCredo = "NC"; }}>Symbole de Nicée-Constantinople</button>
              <button class:selected={typeCredo === "AP"} on:click={() => { typeCredo = "AP"; }}>Symbole des apôtres</button>
              <button class:selected={typeCredo === "Lt"} on:click={() => { typeCredo = "Lt"; }}>Symbole de N-C en Latin</button>
            </div>
          </div>

        {:else if step.id === "InvitS"}
          <div class="variant-header">
            <h4>{@html step.texte}</h4>
            <div class="variant-buttons no-print">
              {#each Array(6) as _, i}
                {@const val = (i + 1).toString()}
                <button class:selected={InvitS === val} on:click={() => { InvitS = val; }}>{val}</button>
              {/each}
            </div>
          </div>

        {:else if step.id === "PriereC"}
          <div class="variant-header">
            <h4>{@html step.texte}</h4>
            <div class="variant-buttons boutons5 no-print">
              {#each Array(9) as _, i}
                {@const val = (i + 1).toString()}
                <button class:selected={PriereC === val} on:click={() => { PriereC = val; }}>{val}</button>
              {/each}
            </div>
          </div>

        {:else if step.id === "sanctus"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={sanctusLt} on:click={toggleSanctusLatin}>En Latin</button>
            </div>
          </div>

        {:else if ["PE1", "PE2", "PE3", "PE4"].includes(step.id)}
          <div class="variant-header2">
            <div class="variant-buttons2 no-print no-wrap">
              <button class:selected={typePE === "PE1"} on:click={() => { typePE = "PE1"; }}>Prière Eucharistique 1</button>
              <button class:selected={typePE === "PE2"} on:click={() => { typePE = "PE2"; }}>Prière Eucharistique 2</button>
              <button class:selected={typePE === "PE3"} on:click={() => { typePE = "PE3"; }}>Prière Eucharistique 3</button>
              <button class:selected={typePE === "PE4"} disabled={!isAllowed("PE4", liturgicalContext)} on:click={() => { typePE = "PE4"; }}>Prière Eucharistique 4</button>
            </div>
            <h3 class="h3">{@html step.texte}</h3>
          </div>

        {:else if step.id === "Anamnèse"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="variant-buttons no-print no-wrap">
              <button class:selected={AcclamationEucharistique === "AE1"} on:click={() => { AcclamationEucharistique = "AE1"; }}>1 </button>
              <button class:selected={AcclamationEucharistique === "AE2"} on:click={() => { AcclamationEucharistique = "AE2"; }}>2 </button>
              <button class:selected={AcclamationEucharistique === "AE3"} on:click={() => { AcclamationEucharistique = "AE3"; }}>3 </button>
              <button class:selected={AcclamationEucharistique === "AE4"} on:click={() => { AcclamationEucharistique = "AE4"; }}>4 </button>
            </div>
          </div>
          
        {:else if step.id === "Doxologie"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={DoxologieLt} on:click={toggleLatin}>En Latin</button>
            </div>
          </div>

        {:else if step.id === "NotrePère"}
          <div class="variant-header">
            <h3 class="h3 no-print">{@html step.texte}</h3>
            <div class="variant-buttons no-print">
              <button class:selected={NotrePère === "NP1"} on:click={() => { NotrePère = "NP1"; }}>1 </button>
              <button class:selected={NotrePère === "NP2"} on:click={() => { NotrePère = "NP2"; }}>2 </button>
              <button class:selected={NotrePère === "NP3"} on:click={() => { NotrePère = "NP3"; }}>3 </button>
            </div>
          </div>

        {:else if step.id === "Apologies"}
          <div class="variant-header">
            <h3 class="h3 no-print">{@html step.texte}</h3>
            <div class="variant-buttons boutons2 no-print">
              <button class:selected={Apologies === "1"} on:click={() => { Apologies = "1"; }}>1 </button>
              <button class:selected={Apologies === "2"} on:click={() => { Apologies = "2"; }}>2 </button>
            </div>
          </div>

        {:else if step.id === "agnus"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={agnusLt} on:click={toggleAgnusLatin}>En Latin</button>
            </div>
          </div>

        {:else if step.id === "envoi" && envoi !== "5"}
          <div class="variant-header">
            <h3 class="h3 no-print no-wrap">{@html step.texte}</h3>
            <div class="variant-buttons no-print no-wrap">
              <button class:selected={envoi === "1"} on:click={() => { envoi = "1"; }}>1 </button>
              <button class:selected={envoi === "2"} on:click={() => { envoi = "2"; }}>2 </button>
              <button class:selected={envoi === "3"} on:click={() => { envoi = "3"; }}>3 </button>
              <button class:selected={envoi === "4"} on:click={() => { envoi = "4"; }}>4 </button>
            </div>
          </div>

        {:else if step.id === "Croix"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="variant-buttons no-print">
              <button class:selected={croix === "1"} on:click={() => { croix = "1"; }}>1 </button>
              <button class:selected={croix === "2"} on:click={() => { croix = "2"; }}>2 </button>
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
              <button class:selected={exultet === "1"} on:click={() => { exultet = "1"; }}>forme longue</button>
              <button class:selected={exultet === "2"} on:click={() => { exultet = "2"; }}>forme brève</button>
            </div>
          </div>

        {:else if step.id === "liturgiebaptismale"}
          <div class="">
            <h3>{@html step.texte}</h3>
            <div class="variant-buttons2 no-print no-wrap" style="margin-top: 0;">
              <button class:selected={litbap === "A"} on:click={() => { litbap = "A"; }}>Bénédiction de l’eau baptismale et baptême</button>
              <button class:selected={litbap === "B"} on:click={() => { litbap = "B"; }}>Bénédiction de l’eau baptismale</button>
              <button class:selected={litbap === "C"} on:click={() => { litbap = "C"; }}>Bénédiction de l’eau</button>
            </div>
          </div>

        {:else if step.id === "renonciation"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="vb2 no-wrap no-print">
              <button class:selected={renonciation === "1"} on:click={() => { renonciation = "1"; }}>Formule 1</button>
              <button class:selected={renonciation === "2"} on:click={() => { renonciation = "2"; }}>Formule 2</button>
            </div>
          </div>

        {:else if step.id === "renonciation2"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="vb2 no-wrap no-print">
              <button class:selected={renonciation2 === "1"} on:click={() => { renonciation2 = "1"; }}>Formule 1</button>
              <button class:selected={renonciation2 === "2"} on:click={() => { renonciation2 = "2"; }}>Formule 2</button>
              <button class:selected={renonciation2 === "3"} on:click={() => { renonciation2 = "3"; }}>Formule 3</button>
            </div>
          </div>

        {:else if step.id === "bapteme"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="vb2 no-wrap no-print">
              <button class:selected={bapteme === "ablution"} on:click={() => { bapteme = "ablution"; }}>Baptême par ablution</button>
              <button class:selected={bapteme === "immersion"} on:click={() => { bapteme = "immersion"; }}>Baptême par immersion</button>
            </div>
          </div>

        {:else if step.id === "entreerameaux"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="variant-buttons2 no-print no-wrap" style="margin-top: 0;">
              <button class:selected={entreerameaux === "1"} on:click={() => { entreerameaux = "1"; }}>Procession</button>
              <button class:selected={entreerameaux === "2"} on:click={() => { entreerameaux = "2"; }}>Entrée solennelle</button>
              <button class:selected={entreerameaux === "3"} on:click={() => { entreerameaux = "3"; }}>Entrée simple</button>
            </div>
          </div>

        {:else if step.id === "accueilmariage"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="vb2 no-wrap no-print">
              <button class:selected={accueilmariage === "1"} on:click={() => { accueilmariage = "1"; }}>Première forme</button>
              <button class:selected={accueilmariage === "2"} on:click={() => { accueilmariage = "2"; }}>Deuxième forme</button>
            </div>
          </div>

          {:else if step.id === "collectemariage"}
          <div class="variant-header">
            <h2 class="italic">{@html step.texte}</h2>
            <div class="variant-buttons boutons5 no-print">
              {#each Array(9) as _, i}
                {@const val = (i + 1).toString()}
                <button class:selected={collectemariage === val} on:click={() => { collectemariage = val; }}>{val}</button>
              {/each}
            </div>
          </div>

          {:else if step.id === "dialoguemariage"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="vb2 no-wrap no-print">
              <button class:selected={dialoguemariage === "1"} on:click={() => { dialoguemariage = "1"; }}>Première forme</button>
              <button class:selected={dialoguemariage === "2"} on:click={() => { dialoguemariage = "2"; }}>Deuxième forme</button>
            </div>
          </div>

          {:else if step.id === "consentements"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="vb2 no-wrap no-print">
              <button class:selected={consentements === "1"} on:click={() => { consentements = "1"; }}>1</button>
              <button class:selected={consentements === "2"} on:click={() => { consentements = "2"; }}>2</button>
              <button class:selected={consentements === "3"} on:click={() => { consentements = "3"; }}>3</button>
              <button class:selected={consentements === "4"} on:click={() => { consentements = "4"; }}>4</button>
            </div>
          </div>

          {:else if step.id === "benedictionmariage"}
          <div class="variant-header">
            <h2 class="italic">{@html step.texte}</h2>
            <div class="variant-buttons no-print">
              {#each Array(6) as _, i}
                {@const val = (i + 1).toString()}
                <button class:selected={benedictionmariage === val} on:click={() => { benedictionmariage = val; }}>{val}</button>
              {/each}
            </div>
          </div>

          {:else if step.id === "prierecommunebapteme"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="vb2 no-wrap no-print">
              <button class:selected={prierecommunebapteme === "1"} on:click={() => { prierecommunebapteme = "1"; }}>Première formule</button>
              <button class:selected={prierecommunebapteme === "2"} on:click={() => { prierecommunebapteme = "2"; }}>Deuxième formule</button>
            </div>
          </div>

          {:else if step.id === "ped"}
          <div class="variant-header">
            <h2>{@html step.texte}</h2>
            <div class="vb2 no-wrap no-print">
              <button class:selected={ped === "1"} on:click={() => { ped = "1"; }}>Onction d'huile</button>
              <button class:selected={ped === "2"} on:click={() => { ped = "2"; }}>Imposition de la main</button>
            </div>
          </div>

          {:else if step.id === "benbapt"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="vb2 no-wrap no-print">
              <button class:selected={benbapt === "1"} on:click={() => { benbapt = "1"; }}>Formule 1</button>
              <button class:selected={benbapt === "2"} on:click={() => { benbapt = "2"; }}>Formule 2</button>
              <button class:selected={benbapt === "3"} on:click={() => { benbapt = "3"; }}>Formule 3</button>
            </div>
          </div>

          {:else if step.id === "tempspascal"}
          <div class="variant-header">
            <p class="rubrique">{@html step.texte}</p>
            <div class="no-print">
              <button class="btn-toggle-latin" class:active={tempspascal} on:click={toggletempspascal}>Au temps pascal</button>
            </div>
          </div>

          {:else if step.id === "benfbapt"}
          <div class="variant-header">
            <h3>{@html step.texte}</h3>
            <div class="vb2 no-wrap no-print">
              <button class:selected={benfbapt === "1"} on:click={() => { benfbapt = "1"; }}>Formule 1</button>
              <button class:selected={benfbapt === "2"} on:click={() => { benfbapt = "2"; }}>Formule 2</button>
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
h2, h3, h4, p.h1, p.h2, p.h3, p.h4 { font-family: var(--font-main); display: block; text-align: center; page-break-inside: avoid; }
.nomdurituel {text-align: right; font-size: calc(1.2rem * var(--scale, 1)); margin:0 0 2rem 0; font-weight: 600 }
p.h1 { font-size: calc(1.8rem * var(--scale, 1)); font-weight: 700; margin:2rem 0 1rem 0; }
h2, p.h2 { font-size: calc(1.4rem * var(--scale, 1)); font-weight: 700; margin:1.5rem 0 1rem 0;}
h3, p.h3 { font-size: calc(1.1rem * var(--scale, 1)); color: var(--accent); font-weight: 700; margin:1.5rem 0 1rem 0;}
h4, p.h4 { font-size: calc(1rem * var(--scale, 1)); font-weight: 300; margin:1rem 0 0.5rem 0; }
.premiergénéré { text-align: center; font-size: calc(2rem * var(--scale, 1)); margin:0.5rem 0 1rem 0; color: #b30000; font-family: garamond }
.sansmarge { margin:0 0 1rem 0; }
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
  p.h1 { font-size: calc(1.1rem * var(--scale, 1)); margin :1.2rem 0 0.5rem 0; } 
  .premiergénéré { margin :0.5rem 0 1rem 0; } 
  h2, p.h2 { font-size: calc(0.9rem * var(--scale, 1)); margin: 1rem 0 0.5rem 0 !important; } 
  h3, p.h3 { font-size: calc(0.7rem * var(--scale, 1)); } 
  .rubrique, .rubriqueinterne { font-size: calc(0.7rem * var(--scale, 1)); } 
  p { font-size: calc(0.7rem * var(--scale, 1)); } p.centre { font-size: calc(1rem * var(--scale, 1)); } 
  .oraison-texte p, .preface-texte p, .dialogueR, .dialogueV, .servants-line{ font-size: calc(0.8rem * var(--scale, 1)); } 
  .indent1g { text-indent: calc(15px * var(--scale, 1)); } 
  .indentallg { padding-left: calc(30px * var(--scale, 1)); } 
  .modal {width: 300px !important; max-height: 80vh !important; }
  .grandelettrine::first-letter { font-size: calc(36px * var(--scale, 1)); } 
  .variant-buttons button { padding: calc(2px * var(--scale, 1)) calc(4px * var(--scale, 1)); margin-left: 0; } }
/***************************************************** * ONBOARDING MODAL *****************************************************/
.overlay { position: fixed; inset: 0; inset: 0; /* couvre toute la page */ pointer-events: auto; }
.modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; padding: 2rem 2rem 1.5rem 2rem; max-height: 70vh; border-radius: 10px; width: 500px; max-width: 90%; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; z-index: 7; }
.modal-body { flex: 1; padding: 0 0.5rem; overflow-y: auto; /* scroll si contenu trop grand */ margin: 0 0 1rem 0; }
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
.single-event { display: block; padding: 10px; background: #E1E1E1; border-radius: 0 6px 6px 0; margin: 0.5rem 0 0 0;}
.hint { font-size: 0.8rem; margin-top: 4px; }
/***************************************************** * BOUTONS - Retour en haut de page *****************************************************/
.scrollToTopButton { z-index: 2; transition: background-color 0.3s, opacity 0.5s, visibility 0.5s; position: fixed; bottom: 20px; margin-left: 800px; /* Positionné à droite */ border: 2px solid var(--brand); border-radius: 50%; /* Bouton rond */ background-color: #3D3D3D; /* Couleur de fond */ color: white; /* Couleur de la flèche */ font-size: 2rem; /* Taille de la flèche */ font-weight: bold; outline: none; width: 50px; /* Largeur du bouton */ height: 50px; /* Hauteur du bouton */ padding: 0; /* Supprime les marges internes */ cursor: pointer; display: flex; justify-content: center; }
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
  h2, h3, h4, .titre-oraison, .titre-rubrique  {
    break-after: avoid;
    page-break-after: avoid;

    break-inside: avoid;
    page-break-inside: avoid;

    break-before: avoid;
    page-break-before: avoid;
  }

h2 + *, h3 + * {
  page-break-before: avoid;
}}
/***************************************************** * BOUTON DE CONTACT *****************************************************/
.floating-contact-btn { position: absolute; top: 28px; right: 8px; z-index: 3; /* Au-dessus de la sidebar et du rituel */ display: flex; align-items: center; gap: 4px; background-color: #4A141C; color: #E1E1E1; text-decoration: none; padding: 4px 10px; cursor: pointer; border-radius: 10px; border: 1px solid #4A141C;; font-family: sans-serif; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s ease; }
.floating-contact-btn:hover { background: #E1E1E1; color: #4A141C; transform: translateY(-2px); }
.floating-contact-btn .icon { font-size: 1.1rem; }
/***************************************************** * BOUTONS TOGGLE *****************************************************/
.toggle-container { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; cursor: pointer; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
.switch { position: relative; display: inline-block; width: 40px; height: 20px; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #777; transition: .4s; border-radius: 20px; }
.slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }

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

.servant-option span {
  color: #E0E0E0;
  font-size: 0.9rem;
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
    max-height: none; 
    box-sizing: border-box;
    padding: 0rem;
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
