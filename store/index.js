import { SelectedItemStack } from './selected-items.stack.js';
const LOCAL_STORE_KEY = 'game-char-state'

const DEFAULT_STATS = () => ({
  health: 10,
  defense: 0,
  damage: 0,
});

const DEFAULT_STATE = () => ({
  // itemSelectionStack: SelectedItemStack.create(6),
  isDefaultInventory: true,
  selectedItemId: null,
  character: {
    name: 'Poop Dog',
    stats: DEFAULT_STATS(),
    inventory: {
      slots: [
        { id: 0, label: 'slot 1', itemType: null, currentItem: null },
        { id: 1, label: 'slot 2', itemType: null, currentItem: null },
        { id: 2, label: 'slot 3', itemType: null, currentItem: null },
        { id: 3, label: 'slot 4', itemType: null, currentItem: null },
        { id: 4, label: 'slot 5', itemType: null, currentItem: null },
        { id: 5, label: 'slot 6', itemType: null, currentItem: null },
        { id: 6, label: 'slot 7', itemType: null, currentItem: null },
        { id: 7, label: 'slot 8', itemType: null, currentItem: null },
        { id: 8, label: 'slot 9', itemType: null, currentItem: null },
      ],
      items: [
        { id: 0, name: 'Health Necklace', itemType: 'gear-head', modifier: { health: 2 } },
        { id: 1, name: 'Helm of N00b', itemType: 'armor-head', modifier: { defense: 1 } },
        { id: 3, name: 'Cool Shield', itemType: 'shield', modifier: { defense: 1 } },
        { id: 4, name: 'Breast Plate', itemType: 'armor-chest', modifier: { defense: 3 } },
        { id: 5, name: 'Battle Axe', itemType: 'weapon', modifier: { damage: 5, type: 'melee' } },
        { id: 6, name: 'Lucky Charm', itemType: 'gear', modifier: { health: 3 } },
        { id: 7, name: 'Boots', itemType: 'armor-feet', modifier: { defense: 3 } },
      ],
    },
    equipmentSlots: [
      { id: 0, label: 'Head 1', itemType: 'gear-head', currentItem: null },
      { id: 1, label: 'Helmut', itemType: 'armor-head', currentItem: null },
      { id: 2, label: 'Head 2', itemType: 'gear-head', currentItem: null },
      { id: 3, label: 'Shield', itemType: 'shield', currentItem: null },
      { id: 4, label: 'Armor', itemType: 'armor-chest', currentItem: null },
      { id: 5, label: 'Weapon', itemType: 'weapon', currentItem: null },
      { id: 6, label: 'Aux 1', itemType: 'gear', currentItem: null },
      { id: 7, label: 'Boots', itemType: 'armor-feet', currentItem: null },
      { id: 8, label: 'Aux 2', itemType: 'gear', currentItem: null },
    ],
  }
});

const loadState = (localStorageKey = LOCAL_STORE_KEY) => {
  const state = JSON.parse(localStorage.getItem(localStorageKey)) || DEFAULT_STATE();

  // state.itemSelectionStack = state.itemSelectionStack && state.itemSelectionStack.selectedItems !== null ?
  //   SelectedItemStack.create(6, state.itemSelectionStack.selectedItemIds) :
  //   SelectedItemStack.create(6);

  return state;
}

const storeObj = {
  state: loadState(LOCAL_STORE_KEY),
  // state: ...JSON.parse(localStorage.getItem(LOCAL_STORE_KEY)) || DEFAULT_STATE(),
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
      // const newStats = {
      //   health: 10,
      //   damage: 0,
      //   defense: 0,
      // };
      const newStats = DEFAULT_STATS()

      const equippedItems = state.character.inventory.items.filter(item => state.character.equipmentSlots.some(_ => _.currentItem === item.id));

      equippedItems.forEach((item, i) => {
        const [key, value] = Object.entries(item.modifier)[0];

        newStats[key] = newStats[key] + value;
      });

      Object.assign(state.character.stats, newStats);
    },

    updateActiveRoute(state, data) {
      state.activeRoute = data;
    }
  },

  actions: {
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

    saveToLocalStorage({ state }) { localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(state)); }
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
