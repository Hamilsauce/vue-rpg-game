// import {store} from '../store/index.js'

export const InventoryItem = {
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
  mounted() {
    console.log('inventory-item mounted', this);
  }
}
