import { store } from '../../store/index.js'

/*
  NEED
  
  - Battle model
    - ID,
    - index,
    - timestamp,
    - scene,
    - Combatants,
    - Turns
      - duration,
      - limit,
      - current,
      - count,
      - Turn[]
        - actions,
        - victoryConditionMet,
    - Log,
    - hasResolved,
    - resolution: 'Victory, Defeat, Tie, Flee'
    
  - Combatant models
    - Stats
    - Actions: Attacks, Defensive,
    - 
*/


export const BattleView = Vue.component('battle-view', {
  name: 'battle-view',
  template: '#battle-view-template',
  data() {
    return {
      title: 'Battle View'
    }
  },
  mounted() {
    console.warn('battle view')
  }
  // methods: {
  //   handleGameSelected({ gameId }) {
  //     store.dispatch('setActiveGame', gameId);
  //     this.$router.push('/character');
  //   },
  //   handleGameLongPress({ gameId }) {
  //     store.dispatch('deleteGame', { gameId });
  //   },
  // },
  // computed: {
  //   games() {
  //     return (Object.values(store.getters.games) || []).sort((a, b) => b.lastPlayed - a.lastPlayed);
  //   }
  // }
})
