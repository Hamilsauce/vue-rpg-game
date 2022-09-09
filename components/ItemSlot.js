import { store } from '../store/index.js'

export const ItemSlot = {
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
      setTimeout(() => {
        console.log('handleClick hasItem ', this.hasItem, this.slot);
      }, 0)
    }
  },
  computed: {
    id() { return this.slot.id },
    currentItemId() { return this.slot.currentItem },
    hasItem() {
      console.log('hasItem', this.slot.currentItem !== null)
      return this.slot.currentItem !== null
    },
    currentItem() {
      return store.getters.inventoryItems
        .find(_ => _.id === this.currentItemId)
    }
  },
  mounted() {
    // console.log('item-slot mounted', this);
  }
}
