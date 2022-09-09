import {store} from '../store/index.js'

export const SelectedItem = {
  name: 'selected-item',
  template: '#selected-item-template',
  props: {
    // item: Object,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
  selectedItem() { return store.getters.selectedItem }
  },
  mounted() {
    console.log('selected-item mounted', this);
  }
}
