import { store } from '../store/index.js'

export const CharacterEquipment = Vue.component('character-equipment', {
  name: 'character-equipment',
  template: '#character-equipment-template',
  props: {},
  data() {
    return {}
  },
  methods: {
    handleSlotClick(event) {
      const selectedItem = store.getters.selectedItem
      if (selectedItem && event.slotType !== selectedItem.itemType) return

      store.dispatch('setEquipmentSlotItem', { slotId: event.id })
      // if (selectedItem !== null && !event.currentItemId) {

      // }
    }
  },
  computed: {
    equipmentSlots() {
      return store.getters.equipmentSlots
    }
  },
  mounted() {}
})
