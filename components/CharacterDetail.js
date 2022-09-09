import { store } from '../store/index.js'

export const CharacterDetail = {
  name: 'character-detail',
  template: '#character-detail-template',
  props: {},
  data() {
    return {
      stats: store.getters.stats,
    }
  },
  methods: {},
  computed: {
    health() {
      console.log('health in detail' , this.stats.health);
      return this.stats.health
    },
    damage() { return this.stats.damage },
    defense() { return this.stats.defense },
  },
  mounted() {
    console.log('CharacterDetail mounted, this.stats', this.stats);
  }
}
