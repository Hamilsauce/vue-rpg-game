// import {store} from '../store/index.js'

export const InventoryItem = Vue.component('inventory-item',{
  name: 'inventory-item',
  template: '#inventory-item-template',
  props: {
    item: Object,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    name() { return this.item.name || 'poop' }
  },
  mounted() {}
})