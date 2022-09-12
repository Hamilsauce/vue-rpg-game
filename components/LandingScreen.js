import { store } from '../store/index.js'

export const LandingScreen = Vue.component('landing-screen', {
  name: 'landing-screen',
  template: '#landing-screen-template',
  props: {},
  data() {
    return {
      newGameName: '',
      stats: store.getters.stats,
    }
  },
  methods: {
    handleSubmit(e) {
      
      console.log('handleSubmit, game name', this.newGameName)
     this.newGameName = ''; 
    }
  },
  computed: {
    health() {
      return this.stats.health
    },
    damage() { return this.stats.damage },
    defense() { return this.stats.defense },
  },
  mounted() {}
})
