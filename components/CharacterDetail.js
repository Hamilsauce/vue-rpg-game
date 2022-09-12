import { store } from '../store/index.js'

export const CharacterDetail = Vue.component('character-detail', {
  name: 'character-detail',
  template: '#character-detail-template',
  props: {},
  data() {
    return {
      stats: store.getters.stats,
    }
  },
  methods: {
    handlePropChange(e) {
      store.dispatch('setCharacterName', e.value)
    }
  },
  computed: {
    name() { return store.getters.characterName },
    health() { return this.stats.health },
    damage() { return this.stats.damage },
    defense() { return this.stats.defense },
  },
  mounted() {}
})
