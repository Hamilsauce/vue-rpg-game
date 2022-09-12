import { store } from '../store/index.js'

export const LandingScreen = Vue.component('landing-screen', {
  name: 'landing-screen',
  template: '#landing-screen-template',
  props: {},
  data() {
    return {
      stats: store.getters.stats,
    }
  },
  methods: {},
  computed: {
    health() {
      return this.stats.health
    },
    damage() { return this.stats.damage },
    defense() { return this.stats.defense },
  },
  mounted() {}
})
