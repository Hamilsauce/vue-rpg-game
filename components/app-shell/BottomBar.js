import { store } from '../../store/index.js'

export const BottomBar = Vue.component('bottom-bar', {
  name: 'bottom-bar',
  template: '#bottom-bar-template',
  props: {
    // bar: Object,
  },
  data() {
    return {}
  },
  methods: {
    routeToHome() {
      this.$router.push('/');
    },
    routeToCharacterScreen() {
      this.$router.push('/character');

    }
  },
  computed: {},
  mounted() {}
})
