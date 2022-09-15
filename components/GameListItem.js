import { store } from '../../store/index.js'

export const GameListItem = Vue.component('game-list-item', {
  name: 'game-list-item',
  template: '#game-list-item-template',
  props: {
    game: Object,
  },
  data() {
    return {}
  },
  methods: {
    // routeToCharacterScreen() {
    //   this.$router.push('/character');

    // }
  },
  computed: {},
  mounted() {}
})
