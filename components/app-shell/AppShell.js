import { store } from '../../store/index.js'



const gameTitle = 'Mega Deluxe RPG';

const screenTitleMap = new Map([
  ['landing-screen', gameTitle],
  ['character-screen', 'Character'],
]);


export const AppShell = Vue.component('app-shell', {
  name: 'app-shell',
  template: '#app-shell-template',
  props: {},
  data() {
    return {
      screenTitle: gameTitle,
    }
  },
  watch: {
    $route(to, from) {
      this.screenTitle = screenTitleMap.get(to.name) || gameTitle
      // console.log({ to });
      // console.log({ from });
      store.dispatch('initializeInventory');
      
      console.log('this.screenTitle', this.screenTitle)
    }
  },
  methods: {},
  computed: {},
  mounted() {
  },
});
