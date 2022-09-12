// import {store} from '../store/index.js'

export const CharacterScreen = Vue.component('character-screen',{
  name: 'character-screen',
  template: '#character-screen-template',
  props: {
    equipmentSlots: Array,
    showYear: String
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

  },
  mounted() {}
}
)