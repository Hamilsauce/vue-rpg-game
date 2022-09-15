// import {store} from '../store/index.js'

export const CharacterStat = Vue.component('character-stat', {
  name: 'character-stat',
  template: '#character-stat-template',
  props: {
    label: String,
    value: null,
  },
});
