import {store} from '../store/index.js'

export const CharacterScreen = Vue.component('character-screen',{
  name: 'character-screen',
  template: '#character-screen-template',
  props: {
    // equipmentSlots: Array,
  },
  data() {
    return {
      searchInput: '',
      editCardId: -1,
      deleteIdArray: [],
    }
  },
  methods: {},
  computed: {
    equipmentSlots(){
      console.log('this.$store.getters.equipmentSlots', this.$store.getters.equipmentSlots)
      return this.$store.state.equipmentSlots
    }

  },
  mounted() {
  }
}
)
