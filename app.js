import { store } from './store/index.js';
import { routerModule } from './router/index.js';
// import eventBus from './services/EventBus.js';

import {
  LandingScreen,
  CharacterScreen,
  CharacterInventory,
  CharacterEquipment,
  CharacterDetail,
  InventoryItem,
  SelectedItem,
  ItemSlot,
  AppShell,
  BottomBar,
  EditableProperty,
} from './components/index.js';


const router = new VueRouter(routerModule)

const app = new Vue({
  router: router,
  data() {
    return {
    
    }
  },
  computed: {},
  methods: {
    beforeUnload(){
    store.dispatch('recordGameTime')
      
    }
  },
  created() {
    window.addEventListener('beforeunload', this.beforeUnload);
  },
  mounted() {
    store.dispatch('initialize')
  }
}).$mount('#app');
