import { store } from './store/index.js';
// import eventBus from './services/EventBus.js';

import {
  CharacterScreen,
  CharacterInventory,
  CharacterEquipment,
  CharacterDetail,
  InventoryItem,
  SelectedItem,
  ItemSlot
} from './components/index.js';

const characterScreen = Vue.component('character-screen', CharacterScreen);
const characterInventory = Vue.component('character-inventory', CharacterInventory);
const characterEquipment = Vue.component('character-equipment', CharacterEquipment);
const characterDetail = Vue.component('character-detail', CharacterDetail);
const inventoryItem = Vue.component('inventory-item', InventoryItem);
const selectedItem = Vue.component('selected-item', SelectedItem);
const itemSlot = Vue.component('item-slot', ItemSlot);


const app = new Vue({
  data() {
    return {
      // equipmentSlots: [
      //   { id: 0, label: 'Head 1', type: 'gear', currentItem: null },
      //   { id: 1, label: 'Helmut', type: 'armor', currentItem: null },
      //   { id: 3, label: 'Head 2', type: 'gear', currentItem: null },
      //   { id: 3, label: 'Shield', type: 'armor', currentItem: null },
      //   { id: 4, label: 'Armor', type: 'armor', currentItem: null },
      //   { id: 5, label: 'Weapon', type: 'weapon', currentItem: null },
      //   { id: 6, label: 'Aux 1', type: 'gear', currentItem: null },
      //   { id: 7, label: 'Boots', type: 'armor', currentItem: null },
      //   { id: 8, label: 'Aux 2', type: 'gear', currentItem: null },
      // ],
    }
  },
  computed: {
    // equipmentSlots() { return; },
    // db() { return store.getters.db; },
    // currentShow() { return store.getters.currentShow; }
  },
  created() {
    // store.dispatch('connectToDb')
    // console.log('app mounted', this);
  },
  mounted() {
    setTimeout(() => {
      // store.dispatch('selectShowByDate', { date: '2004-12-31' })

    }, 1000)
    // console.log('app mounted', this);
  }

}).$mount('#app')

// const router = new VueRouter({
// 	routes: [{
// 			path: '/',
// 			component: CardView,
// 			name: 'card-view',
// 			props: true
//     },
// 		{
// 			path: '/add-shift-view',
// 			component: AddShiftView,
// 			name: 'add-shift-view',
// 			props: true
//     },
//   ]
// });

// const addSeries = async () => {
//   const response = await fetch("http://localhost:3000/",
//   {
//     method: 'POST',
//     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//     body: `{ "Id": 78912, "Customer": "Jason Sweet", "Quantity": 1, "Price": 18.00 }`,
//   });
//   response.json().then(data => { console.log(data); });
// };
// // addSeries()
// const app = new Vue({
//   // router: router,
//   data() {
//     return {
//       seriesDataUrl: './data/app-data.json',
//       characterDataUrl: './data/character-data.json',
//       seriesList: null,
//       characterData: null,
//       showAddGameModal: false,
//       // showAddGameModal: false,
//       selectedSeries: null,
//       title: 'SMPGUY'
//     }
//   },
//   computed: {
//     series() { return this.seriesList },
//     charData() {},
//     showNav() {
//       // return store.getters.showNav
//     },
//     showDeleteModal() {
//       // return store.getters.showDeleteModal
//     }
//   },
//   methods: {
//     async init() {
//       const appData = await SeriesService.fetchSeriesJson(this.seriesDataUrl);
//       console.log('appData', appData);
//       this.seriesList = appData.series;
//       this.characterData = appData.series;
//     },

//     handleDeleteSeries(seriesId) {
//       this.seriesList = this.seriesList.filter(_ => _.id != seriesId)
//     },

//     handleAddGame(seriesId) {
//       this.selectedSeries = this.serieList.find(_ => _.id === seriesId)
//       this.showAddGameModal = true;
//     },

//     toggleAddGameModal(seriesId) {
//       this.showAddGameModal = !this.showAddGameModal;
//       this.selectedSeries = this.seriesList.find(_ => _.id === seriesId)
//     },

//     addNewGame({seriesId, game}) {
//       this.showAddGameModal = !this.showAddGameModal;
//       this.selectedSeries.games.push(game)
//     },

//     handleMenuBlur(e) {
//       if (e.target.classList.contains('series-menu-button')) return;
//       else eventBus.$emit('blur-menu');
//     },
//   },
//   created() {
//     this.init()
//     Ham.help()
//     // console.log('this', this);
//   }
