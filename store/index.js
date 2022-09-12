import { SelectedItemStack } from './selected-items.stack.js';
import { DEFAULT_STATE, DEFAULT_STATS } from './default.state.js';

const LOCAL_STORE_KEY = 'game-char-state'

const loadState = (localStorageKey = LOCAL_STORE_KEY) => {
  const state = JSON.parse(localStorage.getItem(localStorageKey)) || DEFAULT_STATE();

  // state.itemSelectionStack = state.itemSelectionStack && state.itemSelectionStack.selectedItems !== null ?
  //   SelectedItemStack.create(6, state.itemSelectionStack.selectedItemIds) :
  //   SelectedItemStack.create(6);

  return state;
}

const startGameTime = (state, interval = 1000) => {
  // state.playTime = (+state.playTime ? state.playTime : 0) + interval;
  console.log('interval', state)
  state.playTime = +state.playTime || interval
  state.playTime = state.playTime + interval

  return state;
}

const storeObj = {
  state: loadState(LOCAL_STORE_KEY),
  mutations: {
    updateEquipmentSlot(state, { id, updates }) {
      const slot = state.character.equipmentSlots.find((slot, i) => slot.id === id);
      const currId = updates.currentItem;

      for (var prop in updates) {
        slot[prop] = updates[prop]
      }
    },

    updateInventorySlot(state, { id, updates }) {
      const slot = state.character.inventory.slots.find((slot, i) => slot.id === id);

      for (var prop in updates) {
        slot[prop] = updates[prop];
      }
    },

    updateSelectedItemId(state, { id }) {
      state.selectedItemId = id;
      // if (id !== null) state.itemSelectionStack.push(id)
      // else state.itemSelectionStack.pop()
    },

    updateStats(state) {
      const newStats = DEFAULT_STATS();

      const equippedItems = state.character.inventory.items.filter(item => state.character.equipmentSlots.some(_ => _.currentItem === item.id));

      equippedItems.forEach((item, i) => {
        const [key, value] = Object.entries(item.modifier)[0];

        newStats[key] = newStats[key] + value;
      });

      Object.assign(state.character.stats, newStats);
    },

    updateCharacterName(state, data) {
      state.character.name = data;
    },

    updateStartTime(state, ms) {
      state.startTime = ms;
    },
    
    updatePlayTime(state, ms) {
      state.playTime = ms;
    },
    
    updateActiveRoute(state, data) {
      state.activeRoute = data;
    },
  },

  actions: {
    initialize({ state, commit }) {
      // const start = () => startGameTime(state, interval)
      // state.startTime = Date.now();
      commit('updateStartTime', Date.now())
      console.log('state.playTime', state.playTime);
    },
    
    recordGameTime({ state, commit }) {
      // const start = () => startGameTime(state, interval)

      const gameTime = Date.now() - state.startTime;
      const playTime = (+state.playTime || 0) + gameTime;
      commit('updatePlayTime', playTime)
      // state.startTime = null;
      commit('updateStartTime', null)
      
    },

    setEquipmentSlotItem({ dispatch, commit, state, }, { slotId }) {
      const slot = state.character.equipmentSlots.find(_ => _.id === slotId);

      if (state.selectedItemId !== null && slot.currentItem === null) {
        commit('updateEquipmentSlot', { id: slotId, updates: { currentItem: state.selectedItemId } });
        commit('updateSelectedItemId', { id: null });
      }

      else if (state.selectedItemId === null && slot.currentItem !== null) {
        commit('updateSelectedItemId', { id: slot.currentItem });
        commit('updateEquipmentSlot', { id: slotId, updates: { currentItem: null } });
      }

      commit('updateStats');

      dispatch('saveToLocalStorage');
    },

    setInventorySlotItem({ dispatch, commit, state, }, { slotId }) {
      const slot = state.character.inventory.slots.find(_ => _.id === slotId);

      if (state.selectedItemId !== null && slot.currentItem === null) {
        commit('updateInventorySlot', { id: slotId, updates: { currentItem: state.selectedItemId } });
        commit('updateSelectedItemId', { id: null });
      }

      else if (state.selectedItemId === null && slot.currentItem !== null) {
        commit('updateSelectedItemId', { id: slot.currentItem });
        commit('updateInventorySlot', { id: slotId, updates: { currentItem: null } });
      }

      commit('updateStats');

      dispatch('saveToLocalStorage');
    },

    initializeInventory({ getters, state }) {
      if (!state.isDefaultInventory) return;

      getters.unequippedItems.forEach((item, i) => {
        const slot = state.character.inventory.slots[i]

        if (item.id === state.selectedItemId || +slot.currentItem) return;

        state.character.inventory.slots[i].currentItem = item.id;
      });

      state.isDefaultInventory = false;
    },

    saveToLocalStorage({ state }) { localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(state)); },

    setCharacterName({ commit, dispatch }, changes) {
      commit('updateCharacterName', changes)
      dispatch('saveToLocalStorage');
    }
  },

  getters: {
    inventorySlots(state) { return state.character.inventory.slots; },

    equipmentSlots(state) { return state.character.equipmentSlots; },

    inventoryItems(state) { return state.character.inventory.items; },

    equippedItems(state) {
      return state.character.inventory.items
        .filter(item =>
          state.character.equipmentSlots.some(_ => _.currentItem === item.id) &&
          item.id !== state.selectedItemId
        );
    },

    unequippedItems(state) {
      const unequippedItems = state.character.inventory.items.filter(
        item => state.character.equipmentSlots.every(_ => _.currentItem !== item.id) &&
        item.id !== state.selectedItemId);

      return unequippedItems
    },

    selectedItem(state, getters) {
      return state.character.inventory.items.find(_ => _.id === state.selectedItemId);
    },

    // selectedItemId(state) {
    //   return state.itemSelectionStack.peek();
    // },

    stats(state) {
      return state.character.stats;
    },

    characterName(state) {
      return state.character.name;
    }
  }
};

export const store = new Vuex.Store(storeObj);
