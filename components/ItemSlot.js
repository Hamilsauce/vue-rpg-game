import { store } from '../store/index.js'

export const ItemSlot = Vue.component('item-slot', {
  name: 'item-slot',
  template: '#item-slot-template',
  props: {
    slot: Object
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('itemslot:click', { slotType: this.slot.itemType, id: this.id, currentItemId: this.slot.currentItem })
    }
  },
  computed: {
    id() { return this.slot.id },
    
    currentItemId() { return this.slot.currentItem },
 
    hasItem() {
      return this.slot.currentItem !== null
    },
    currentItem() {
      return store.getters.inventoryItems
        .find(_ => _.id === this.currentItemId)
    }
  },
  mounted() {}
});