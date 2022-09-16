import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
import { store } from '../../store/index.js'

const { event } = ham;

export const GameListItem = Vue.component('game-list-item', {
  name: 'game-list-item',
  template: '#game-list-item-template',
  props: {
    game: Object,
  },
  data() {
    return {
      refName: 'gameListItem'
    }
  },
  methods: {
    handleClick() {
      this.$emit('game:selected', { gameId: this.game.gameId })
    },
    handleLongPress(e) {
      this.$emit('gameitem:longpress', { gameId: this.game.gameId })
    },
  },
  computed: {
    itemRef() {
      return this.$refs[this.refName]
    },
  },
  mounted() {
    event.longPress(this.itemRef, 700, this.handleLongPress)
  }
})
