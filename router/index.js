// import Vue from '../.vue/vue.js';
// import Router from '../.vue/vue-router.js';
// import * as components from '../components/index.js';
// console.warn('components', components)
// // Vue.use(Router);

import {
  CharacterScreen,
  LandingScreen,
} from '../components/index.js';

// // const router = new VueRouter({
// export const router = new VueRouter({
// 	routes: [
// 		{ path: '/', component: CardView }
// 		// { path: '/product/:product_id', component: Product, name: 'product' },
// 		// { path: '/add-product', component: AddProduct },
// 		// { path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit' },
// 		// { path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete' }
// 		]
// });


export const routerModule = {
  routes: [
    {
      path: '/',
      component: LandingScreen,
      name: 'landing-screen',
      // props: true
		},
    {
      path: '/character',
      component: CharacterScreen,
      name: 'character-screen',
      // props: true
		}
	]
};

{
  routerModule
}
