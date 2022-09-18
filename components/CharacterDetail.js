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
    gold() { return store.getters.gold },
    health() { return store.getters.stats.health },
    damage() { return store.getters.stats.damage },
    defense() { return store.getters.stats.defense },
  },
  mounted() {}
})
