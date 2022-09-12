import { store } from '../store/index.js'

export const CharacterInventory = Vue.component('character-inventory',{
  name: 'character-inventory',
  template: '#character-inventory-template',
  props: {},
  data() {
    return {}
  },
  methods: {
    handleSlotClick(event) {
      const selectedItem = store.getters.selectedItem
      // const selectedItem = store.getters.selectedItem

      store.dispatch('setInventorySlotItem', { slotId: event.id })
      if (selectedItem !== null && !event.currentItemId) {

      }
    }
  },
  computed: {

    inventorySlots() {
      return store.getters.inventorySlots
    },

    unequippedItems() {
      return store.getters.unequippedItems
    }
  },
  mounted() {
    store.dispatch('initializeInventory');
  }
});
