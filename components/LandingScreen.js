import { store } from '../store/index.js'

export const LandingScreen = Vue.component('landing-screen', {
  name: 'landing-screen',
  template: '#landing-screen-template',
  props: {},
  data() {
    return {
      newGameName: '',
      games: store.getters.games,
    }
  },
  methods: {
    handleSubmit(e) {
      store.dispatch('setNewGame',this.newGameName)
      console.log('handleSubmit, game name', this.newGameName)
     this.newGameName = ''; 
    },
    handleGameClick(gameId) {
      store.dispatch('setActiveGame', gameId)
      this.$router.push('/character')
    },
  },
  computed: {
    // health() {
    //   return this.stats.health
    // },
  },
  mounted() {}
})
