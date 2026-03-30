<script lang="ts">
  type Release = {
    version: string;
    date: string;
    summary: string;
    items: { icon: string; label: string }[];
  };

  const releases: Release[] = [
    /*    */
{
      version: 'v0.5',
      date: 'mars 2026',
      summary: 'Prêt pour la semaine sainte !',
      items: [
        { icon: '🌐', label: "Nouvelle adresse du générateur : Ricat.fr" },
        { icon: '🗺️', label: "Suite et fin du mapping : tel jour -> telle préface, oraison, etc." },
        { icon: '✝️', label: "Intégration des bénédictions solennelles et prières sur le peuple" },
        { icon: '🛁', label: "Ajout de rituels spécifiques : Rameaux, messe chrismale, Jeudi saint, Vendredi saint et Vigile pascale" },
      ]
   },
{
      version: 'v0.4',
      date: 'fevrier 2026',
      summary: 'Oraisons et service de l\'autel',
      items: [
        { icon: '📝', label: "Suite et fin de l'integration des oraisons : 100% (476/476). Soit plus de 15 000 lignes de code..." },
        { icon: '🙏', label: "Ajout d'indications pour le service de l'autel" },
      ]
   },
    {
      version: 'v0.3',
      date: 'janvier 2026',
      summary: 'Refonte graphique et suite du mapping',
      items: [
        { icon: '🖌️', label: 'Refonte graphique du site pour une meilleure prise en main !' },
        { icon: '🌊', label: "Ajout des textes de la bénédiction de l'eau" },
        { icon: '☎️', label: "Ajout d'un bouton de contact" },
        { icon: '📝', label: "Suite de l'integration des oraisons : 26,3% (125/476)" },
      ]
   },
   {
      version: 'v0.2',
      date: 'décembre 2025',
      summary: '1ère version alpha du générateur',
      items: [
        { icon: '⛪', label: 'Rituel complet pour une messe du Temps Ordinaire' },
        { icon: '⏹️', label: 'Boutons de choix pour les différentes variantes' },
        { icon: '📋', label: "Intégration de l'ensemble des préfaces (seulement 78...)" },
        { icon: '📚', label: "Ajout de la librairie Romcal pour acceder au calendrier liturgique" },
        { icon: '📝', label: "Début de l'integration des oraisons : 4,2% (20/476)" },
        { icon: '🗺️', label: "Début du mapping : tel jour -> telle préface, oraison, etc. : 8% (50/622)" }
      ]
   },
    {
      version: 'v0.1',
      date: 'novembre 2025',
      summary: 'Création du générateur, mise en place du projet',
      items: [
        { icon: '🧑‍💻', label: 'Partie paramétrage du générateur' },
        { icon: '⚡', label: 'Génération autonome du rituel' },
        { icon: '🔔', label: "Mise en place du modal à l'ouverture de la page" },
        { icon: '🎨', label: "Système d'exportation PDF" }
      ]
    },
 
    /*  ⏺️🔘📄📄📃🗾🗂️💥⭐🌟✨⚡💫🔥🎉🎊❤️‍🔥🫆🦴👇✍️🙏🤝❄️☃️⛄🧭🚦🚥⚓🚀🎈🎂🎯🧩🖼️🎨🖌️🎹🪫🔋🧹🧼⚗️🧪🪜⛓️‍💥⚙️🔗⛓️📎📋🗄️📖🗃️📊📈📌📍🏷️⏳⌛🗓️📜🆕✝️🎼🎵🎶🏁🇻🇦
    */
  ];

</script>

<style>
  :global(:root) {
    --bg: #0f1115;
    --card: #151922;
    --text: #e8ecf1;
    --muted: #a9b1bc;
    --border: #2a2f3a;
    --accent: #5b8def;
    --green: #2ecc71;
    --yellow: #f1c40f;
  }

  .light {
    --bg: #f7f8fb;
    --card: #ffffff;
    --text: #1f2430;
    --muted: #5b6677;
    --border: #e6e9ef;
    --accent: #3b6bdc;
    --green: #2dbd6e;
    --yellow: #e6b10f;
  }

  .page {
    color: var(--text);
  }


  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }


  .subtitle {
    color: var(--muted);
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .release {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px;
    margin-top: 16px;
  }

  .release-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
  }

  .version {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .version h2 {
    font-size: 20px;
    margin: 0;
  }

  .date {
    font-size: 13px;
    color: var(--muted);
  }

  .summary {
    font-size: 14px;
    color: var(--text);
    margin: 6px 0 12px;
  }

  .items {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }

  @media (min-width: 640px) {
    .items {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .item {
    display: flex;
    gap: 10px;
    align-items: center;
    background: transparent;
    border: 1px dashed var(--border);
    border-radius: 10px;
    padding: 10px 12px;
  }

  .icon {
    font-size: 18px;
    line-height: 1;
  }

  .label {
    font-size: 14px;
  }

</style>

<div class="page light">
    <header>
      <div>
        <div class="subtitle">Journal des versions et améliorations récentes</div>
      </div>
    </header>

    {#each releases as r}
      <section class="release" aria-label={`Version ${r.version}`}>
        <div class="release-header">
          <div class="version">
            <h2>{r.version}</h2>
          </div>
          <div class="date">{r.date}</div>
        </div>

        <p class="summary">{r.summary}</p>

        <div class="items">
          {#each r.items as it}
            <div class="item">
              <span class="icon">{it.icon}</span>
              <span class="label">{it.label}</span>
            </div>
          {/each}
        </div>
      </section>
    {/each}

</div>
