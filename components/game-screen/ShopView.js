import { store } from '../../store/index.js'


export const ShopView = Vue.component('shop-view', {
  name: 'shop-view',
  template: '#shop-view-template',
  data() {
    return {
      title: 'Toms Dope Gear n More',
    }
  },
  mounted() {
    console.warn('shop view')
  }
  // methods: {
  //   handleGameSelected({ gameId }) {
  //     store.dispatch('setActiveGame', gameId);
  //     this.$router.push('/character');
  //   },
  //   handleGameLongPress({ gameId }) {
  //     store.dispatch('deleteGame', { gameId });
  //   },
  // },
  // computed: {
  //   games() {
  //     return (Object.values(store.getters.games) || []).sort((a, b) => b.lastPlayed - a.lastPlayed);
  //   }
  // }
})
