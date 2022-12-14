import { store } from '../store/index.js'

export const EditableProperty = Vue.component('editable-property', {
  name: 'editable-property',
  template: '#editable-property-template',
  props: {
    name: String,
    value: null,
    label: String,
  },
  data() {
    return {
      prop: this.value,
      editable: false,
    }
  },
  methods: {
    handleClick(e) {
      const targ = e.target;

      if (!this.editable) {
        this.editable = true;

        setTimeout(() => targ.focus(), 0)
      }
    
      if (this.editable && targ.classList.contains('editable-property-confirm')) {
        this.editable = false;

        this.$emit('editable-property-change', {
          name: this.name,
          value: this.prop,
        })
      };
    },

    handleInput() {
      this.$emit('editable-property-change', {
        name: this.name,
        value: this.prop,
      })
    }
  },
  computed: {
    isEditable() {
      return this.editable
    }

  },
  mounted() {
    this.editable = false;
  }
})
