import { store } from '../store/index.js'

export const SelectedItem = Vue.component('selected-item', {
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
  mounted() {}
});
