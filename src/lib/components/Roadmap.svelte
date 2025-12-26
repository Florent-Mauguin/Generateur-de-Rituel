<script>
  export let quarters = [
    {
      icon: "⛄",
      title: "Hiver 2025",
      statusencours: "En cours",
      items: [
        {
          title: "Première génération",
          desc: "Rituel complet pour le quotidien (dimanches et semaine)",
          priority: "Haute",
          color: "red"
        },
        {
          title: "Amélioration UX/UI",
          desc: "Amélioration de l'expérience utilisateur et de l'interface",
          priority: "Basse",
          color: "yellow"
        }
      ]
    },
    {
      icon: "☔",
      title: "Printemps 2026",
      statusplannifié: "Plannifié",
      items: [
        {
          title: "Ready pour Pâques",
          desc: "Génération du rituel des offices de la Semaine Sainte",
          priority: "Haute",
          color: "red"
        },
        {
          title: "Oraisons",
          desc: "Ajout de toutes les oraisons des dimanches et solennités",
          priority: "Basse",
          color: "yellow"
        }
      ]
    },
    {
      icon: "⛺",
      title: "Été 2026",
      statusplannifié: "Plannifié",
      items: [
                {
          title: "Sacrements de l'initiation",
          desc: "Ajout des rituels du baptême, de la confirmation et de la première communion",
          priority: "Haute",
          color: "red"
        },
        {
          title: "Responsive design",
          desc: "L'interface sera optimisée pour une utilisation sur mobile et tablette",
          priority: "Basse",
          color: "yellow"
        }
      ]
    },
    {
      icon: "🚀",
      title: "Q4 2026 - 2027",
      statusplannifié: "Plus\u00A0tard",
      items: [
        {
          title: "Ensemble des sacrements",
          desc: "Ajout des rituels des sacrements restants (mariage, onction des malades, ordination)",
          priority: "Haute",
          color: "red"
        },
        {
          title: "Service de l'autel",
          desc: "Génération de rituels pour servants d'autel et ceremoniaire",
          priority: "Haute",
          color: "red"
        } ,
        {
          title: "Evêque, concelebrant, diacre",
          desc: "Adaptation du rituel en fonction de la présence de différents ministères",
          priority: "Basse",
          color: "yellow"
        },
        {
          title: "Fêtes et mémoires",
          desc: "Ajout des oraisons pour l'ensemble des fêtes et mémoires du calendrier liturgique",
          priority: "Basse",
          color: "yellow"
        },
        {
          title: "Exportation Word",
          desc: "Permettre l'exportation du rituel généré au format .docx pour des modifications manuelles",
          priority: "Basse",
          color: "yellow"
        },
        {
          title: "Intégration des partitions",
          desc: "Permettre d'afficher les partitions musicales associées aux différentes parties du rituel",
          priority: "Basse",
          color: "yellow"
        },
        {
          title: "Amélioration continue",
          desc: "",
          priority: "Basse",
          color: "yellow"
        }
      ]
    }
  ];
</script>

<div class="roadmap">
  {#each quarters as q}
    <div class="quarter">
      <div class="quarter-left">
        <div class="icon">{q.icon}</div>
        <div class="line"></div>
      </div>

      <div class="quarter-content">
        <div class="header">
          <h2>{q.title}</h2>
  {#if q.statusencours}
    <span class="statusencours">{q.statusencours}</span>
  {:else if q.statusplannifié}
    <span class="statusplannifié">{q.statusplannifié}</span>
  {/if}
        </div>

        {#each q.items as item}
          <div class="card {item.color}">
            <div class="card-title">{item.title}</div>
            <div class="card-desc">{item.desc}</div>
            <span class="priority">{item.priority}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
.roadmap {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Layout */
.quarter {
  display: flex;
  gap: 20px;
}

.quarter-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #EEF3FF;
  border: 2px solid #AEC6FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.line {
  flex-grow: 1;
  width: 2px;
  background: #AEC6FF;
  margin-top: 5px;
}

.quarter-content {
  flex: 1;
  background: white;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid #EEE;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.statusencours {
  background: #E8F0FF;
  color: #3366FF;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.statusplannifié {
  background: #F1F5F9;
  color: #45484c;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

/* Cards */
.card {
  position: relative;
  padding: 15px 15px 15px 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  border-left: 6px solid transparent;
}

.card.red {
  background: #FFF4F4;
  border-left-color: #FECACA;
}

.card.yellow {
  background: #FFFBE8;
  border-left-color: #FEF08A;
}

.card-title {
  font-weight: bold;
}

.card-desc {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

/* Priority badge */
.priority {
  position: absolute;
  top: 12px;
  right: 14px;
  background: white;
  padding: 3px 8px;
  border-radius: 8px;
  border: 1px solid #DDD;
  font-size: 11px;
}
</style>
