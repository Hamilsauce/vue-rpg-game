import { store } from '../store/index.js'

export const EditableProperty = {
  name: 'editable-property',
  template: '#editable-property-template',
  props: {
    name: String,
  },
  data() {
    return {
      value: null,
    }
  },
  methods: {
    handleClick() {
      this.$emit('editableproperty:change', {
        name: this.name,
        value: this.value,
      })
    }
  },
  computed: {
    // currentItem() {
    //   return store.getters.inventoryItems.find(_ => _.id === this.currentItemId)
    // }
  },
  mounted() {}
}
