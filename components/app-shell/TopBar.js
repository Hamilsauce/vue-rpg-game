import { store } from '../../store/index.js'

export const TopBar = Vue.component('top-bar', {
  name: 'top-bar',
  template: '#top-bar-template',
  props: {
    title: String,
  },
  data() {
    return {}
  },
  methods: {
  },
  computed: {},
  mounted() {}
})
