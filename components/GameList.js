import { store } from '../../store/index.js'

export const GameList = Vue.component('game-list', {
  name: 'game-list',
  template: '#game-list-template',
  data() {
    return {
      title: 'saved games'
    }
  },
  methods: {
    handleGameSelected({ gameId }) {
      store.dispatch('setActiveGame', gameId);
      this.$router.push('/character');
    },
    handleGameLongPress({ gameId }) {
      store.dispatch('deleteGame', { gameId });
    },
  },
  computed: {
    games() {
      return (Object.values(store.getters.games) || []).sort((a, b) => b.lastPlayed - a.lastPlayed);
    }
  }
})