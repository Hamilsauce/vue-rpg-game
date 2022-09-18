import { store } from '../../store/index.js'

export const WorldView = Vue.component('world-view', {
  name: 'world-view',
  template: '#world-view-template',
  data() {
    return {
      title: 'World View'
    }
  },
  mounted() {
    console.warn('world view')
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