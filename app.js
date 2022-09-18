import { store } from './store/index.js';
import { routerModule } from './router/index.js';
// import eventBus from './services/EventBus.js';
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { download, array, utils, text } = ham;

// import {
//   LandingScreen,
//   CharacterScreen,
//   CharacterInventory,
//   CharacterEquipment,
//   CharacterDetail,
//   InventoryItem,
//   SelectedItem,
//   GameListItem,
//   GameList,
//   ItemSlot,
//   AppShell,
//   TopBar,
//   BottomBar,
//   EditableProperty,
// } from './components/index.js';

const vkb = navigator.virtualKeyboard;
vkb.overlaysContent = true;


const router = new VueRouter(routerModule);


const app = new Vue({
  router: router,
  data() {
    return {
    }
  },
  computed: {},
  methods: {

    beforeUnload() {
      store.dispatch('recordGameTime')

    }
  },
  created() {
    window.addEventListener('beforeunload', this.beforeUnload);
  },
  mounted() {
    store.dispatch('initialize');
  },
}).$mount('#app')
// app.use(store)
