import { store } from '../../store/index.js'

export const GameScreen = Vue.component('game-screen', {
  name: 'game-screen',
  template: '#game-screen-template',
  data() {
    return {
      title: 'saved games'
    }
  },
  mounted(){
    console.warn('game screen')
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
