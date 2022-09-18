import { SelectedItemStack } from './selected-items.stack.js';
import { DEFAULT_STATE, DEFAULT_STATS, DEFAULT_NEW_GAME, INIT_GAME_STATE } from './default.state.js';

const LOCAL_STORE_KEY = 'game-char-state'

const loadState = (localStorageKey = LOCAL_STORE_KEY) => {
  const state = JSON.parse(localStorage.getItem(localStorageKey)) || INIT_GAME_STATE();

  // state.itemSelectionStack = state.itemSelectionStack && state.itemSelectionStack.selectedItems !== null ?
  //   SelectedItemStack.create(6, state.itemSelectionStack.selectedItemIds) :
  //   SelectedItemStack.create(6);

  return state;
}

const startGameTime = (state, interval = 1000) => {
  // state.playTime = (+state.playTime ? state.playTime : 0) + interval;
  state.playTime = +state.playTime || interval
  state.playTime = state.playTime + interval

  return state;
}

const storeObj = {
  state: loadState(LOCAL_STORE_KEY),
  mutations: {
    updateEquipmentSlot(state, { id, updates }) {
      const slot = state.games[state.activeGameId].character.equipmentSlots.find((slot, i) => slot.id === id);
      const currId = updates.currentItem;

      for (var prop in updates) {
        slot[prop] = updates[prop]
      }
    },

    updateInventorySlot(state, { id, updates }) {
      const slot = state.games[state.activeGameId].character.inventory.slots.find((slot, i) => slot.id === id);

      for (var prop in updates) {
        slot[prop] = updates[prop];
      }
    },

    updateSelectedItemId(state, { id }) {
      state.games[state.activeGameId].selectedItemId = id;
    },

    updateStats(state) {
      const newStats = DEFAULT_STATS();

      const equippedItems = state.games[state.activeGameId].character.inventory.items.filter(item => state.games[state.activeGameId].character.equipmentSlots.some(_ => _.currentItem === item.id));

      equippedItems.forEach((item, i) => {
        const [key, value] = Object.entries(item.modifier)[0];

        newStats[key] = newStats[key] + value;
      });

      Object.assign(state.games[state.activeGameId].character.stats, newStats);
    },

    updateCharacterName(state, data) {
      state.games[state.activeGameId].character.name = data;
    },

    createGame(state, game) {
      state.games[game.gameId] = game;
    },

    deleteGame(state, gameId) {
      console.log('STORE DELETE GAME MUTATION', { gameId });
      delete state.games[gameId];
      console.log('STORE DELETE GAME state.games[gameId];', state.games[gameId]);
    },

    updateStartTime(state, ms) {
      state.startTime = ms;
    },

    updateActiveGameId(state, id) {

      state.activeGameId = id;
      state.games[state.activeGameId].lastPlayed = Date.now();
    },

    updatePlayTime(state, ms) {
      state.playTime = ms;
    },

    updateActiveRoute(state, data) {
      state.activeRoute = data;
    },
  },

  actions: {
    initialize({ dispatch, state, commit, getters }) {
      commit('updateStartTime', Date.now())
      console.log('state.playTime', state.playTime);
    },
    deleteGame({ dispatch, state, commit, getters }, { gameId }) {
      commit('deleteGame', gameId)
      dispatch('saveToLocalStorage');
    },

    recordGameTime({ dispatch, state, commit, getters }) {
      // const start = () => startGameTime(state, interval)

      const gameTime = Date.now() - state.startTime;
      const playTime = (+state.playTime || 0) + gameTime;
      commit('updatePlayTime', playTime)
      // state.startTime = null;
      commit('updateStartTime', null)
      dispatch('saveToLocalStorage');

    },

    setEquipmentSlotItem({ dispatch, commit, state, getters }, { slotId }) {
      const slot = getters.activeGame.character.equipmentSlots.find(_ => _.id === slotId);

      if (getters.activeGame.selectedItemId !== null && slot.currentItem === null) {
        commit('updateEquipmentSlot', { id: slotId, updates: { currentItem: getters.activeGame.selectedItemId } });
        commit('updateSelectedItemId', { id: null });
      }

      else if (getters.activeGame.selectedItemId === null && slot.currentItem !== null) {
        commit('updateSelectedItemId', { id: slot.currentItem });
        commit('updateEquipmentSlot', { id: slotId, updates: { currentItem: null } });
      }

      commit('updateStats');

      dispatch('saveToLocalStorage');
    },

    setInventorySlotItem({ dispatch, commit, state, getters }, { slotId }) {
      const slot = state.games[state.activeGameId].character.inventory.slots.find(_ => _.id === slotId);

      if (getters.activeGame.selectedItemId !== null && slot.currentItem === null) {
        commit('updateInventorySlot', { id: slotId, updates: { currentItem: getters.activeGame.selectedItemId } });
        commit('updateSelectedItemId', { id: null });
      }

      else if (getters.activeGame.selectedItemId === null && slot.currentItem !== null) {
        commit('updateSelectedItemId', { id: slot.currentItem });
        commit('updateInventorySlot', { id: slotId, updates: { currentItem: null } });
      }

      commit('updateStats');

      dispatch('saveToLocalStorage');
    },

    initializeInventory({ getters, state }) {
      if (!getters.activeGame.isDefaultInventory) return;

      getters.unequippedItems.forEach((item, i) => {
        const slot = state.games[state.activeGameId].character.inventory.slots[i]

        if (item.id === getters.activeGame.selectedItemId || +slot.currentItem) return;

        state.games[state.activeGameId].character.inventory.slots[i].currentItem = item.id;
      });

      getters.activeGame.isDefaultInventory = false;
    },

    saveToLocalStorage({ state }) {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(state));
      Object.assign(state, loadState(LOCAL_STORE_KEY));
      console.log('state', state)

    },

    setCharacterName({ commit, dispatch }, changes) {
      commit('updateCharacterName', changes)
      dispatch('saveToLocalStorage');
    },

    setActiveGameId({ commit, dispatch }, gameName) {
      commit('updateActiveGameId', changes)
      dispatch('saveToLocalStorage');
    },

    setNewGame({ commit, dispatch }, characterName) {
      const newGame = DEFAULT_NEW_GAME(characterName || 'Unnamed Game')
      commit('createGame', newGame)
      dispatch('setActiveGame', newGame.gameId);
      dispatch('saveToLocalStorage');
    },

    setActiveGame({ commit, dispatch }, gameId) {
      commit('updateActiveGameId', gameId)
      dispatch('saveToLocalStorage');
    },
  },

  getters: {
    inventorySlots(state, getters) { return state.games[state.activeGameId].character.inventory.slots; },

    json(state, getters) {

      download('game-state1.json', JSON.stringify(state, null, 2))
      return state.games[state.activeGameId].character.inventory.slots;
    },

    equipmentSlots(state, getters) { return state.games[state.activeGameId].character.equipmentSlots; },

    inventoryItems(state, getters) { return state.games[state.activeGameId].character.inventory.items; },

    equippedItems(state, getters) {
      const game = getters.activeGame;
      return game.character.inventory.items
        .filter(item =>
          game.character.equipmentSlots.some(_ => _.currentItem === item.id) &&
          item.id !== game.selectedItemId
        );
    },

    unequippedItems(state, getters) {
      const game = getters.activeGame;

      const unequippedItems = game.character.inventory.items.filter(
        item => game.character.equipmentSlots.every(_ => _.currentItem !== item.id) &&
        item.id !== game.selectedItemId);

      return unequippedItems
    },

    selectedItem(state, getters) {
      return getters.activeGame.character.inventory.items.find(_ => _.id === getters.activeGame.selectedItemId);
    },
    gold(state, getters) {
      return getters.activeGame.character.gold || 0;
    },

    activeGame(state, getters) {
      return state.games[state.activeGameId] || null;
    },

    games(state, getters) {
      const games = state.games
      return games;
      return (Object.values(games) || []) .sort((a, b) => b.lastPlayed - a.lastPlayed);
    },

    gameKeys(state, getters) {
      return Object.keys(state.games) || [];
    },

    // selectedItemId(state,getters) {
    //   return state.itemSelectionStack.peek();
    // },

    stats(state, getters) {
      return getters.activeGame.character.stats;
    },

    characterName(state, getters) {
      return getters.activeGame.character.name;
    }
  }
};

export const store = new Vuex.Store(storeObj);
