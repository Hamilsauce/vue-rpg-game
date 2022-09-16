import { store } from '../store/index.js'

export const LandingScreen = Vue.component('landing-screen', {
  name: 'landing-screen',
  template: '#landing-screen-template',
  props: {
    gameTitle: String
  },
  data() {
    return {
      newCharacterName: '',
      games: store.getters.games,
    }
  },
  methods: {
    handleSubmit(e) {
      store.dispatch('setNewGame', this.newCharacterName)
      console.log('handleSubmit, game name', this.newCharacterName)
      this.newCharacterName = '';
    },
    handleGameClick(gameId) {
      store.dispatch('setActiveGame', gameId);
      // store.dispatch('initializeInventory');

      this.$router.push('/character');
    },
  },
  computed: {
    games() {
      return Object.values(store.getters.games);
    },
  },
  mounted() {
    this.$emit('screen:load', {title: 'Landing'})
  }
})
