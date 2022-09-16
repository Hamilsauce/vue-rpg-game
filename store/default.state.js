// import { SelectedItemStack } from './selected-items.stack.js';
// const LOCAL_STORE_KEY = 'game-char-state'
import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { date, array, utils, text } = ham;

// console.log('utils', utils)
export const DEFAULT_STATS = () => ({
  health: 10,
  defense: 0,
  damage: 0,
});

export const DEFAULT_STATE = () => ({
  // itemSelectionStack: SelectedItemStack.create(6),
  isDefaultInventory: true,
  startTime: null,
  playTime: 0,
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

export const INIT_GAME_STATE = () => ({
  activeGameId: 'gl1708wrzdmg3ffoyha2',
  games: {
    "gl1708wrzdmg3ffoyha2": {
      gameId: "gl1708wrzdmg3ffoyha2",
      gameLabel: "Jakes First Game",
      isDefaultInventory: false,
      startTime: 1663089978326,
      playTime: 60000,
      selectedItemId: null,
      character: {
        name: "Poop Dog5",
        stats: {
          health: 10,
          defense: 0,
          damage: 0
        },
        inventory: {
          slots: [
            {
              id: 0,
              label: "slot 1",
              itemType: null,
              currentItem: 0
          }, {
              id: 1,
              label: "slot 2",
              itemType: null,
              currentItem: 1
          }, {
              id: 2,
              label: "slot 3",
              itemType: null,
              currentItem: 3
          }, {
              id: 3,
              label: "slot 4",
              itemType: null,
              currentItem: 4
          }, {
              id: 4,
              label: "slot 5",
              itemType: null,
              currentItem: 5
          }, {
              id: 5,
              label: "slot 6",
              itemType: null,
              currentItem: 6
          }, {
              id: 6,
              label: "slot 7",
              itemType: null,
              currentItem: 7
          }, {
              id: 7,
              label: "slot 8",
              itemType: null,
              currentItem: null
          }, {
              id: 8,
              label: "slot 9",
              itemType: null,
              currentItem: null
          }
        ],
          items: [
            {
              id: 0,
              name: "Health Necklace",
              itemType: "gear-head",
              modifier: { health: 2 }
          }, {
              id: 1,
              name: "Helm of N00b",
              itemType: "armor-head",
              modifier: { defense: 1 }
          }, {
              id: 3,
              name: "Cool Shield",
              itemType: "shield",
              modifier: { defense: 1 }
          }, {
              id: 4,
              name: "Breast Plate",
              itemType: "armor-chest",
              modifier: { defense: 3 }
          }, {
              id: 5,
              name: "Battle Axe",
              itemType: "weapon",
              modifier: { damage: 5, type: "melee" }
          }, {
              id: 6,
              name: "Lucky Charm",
              itemType: "gear",
              modifier: { health: 3 }
          }, {
              id: 7,
              name: "Boots",
              itemType: "armor-feet",
              modifier: { defense: 3 }
          }
        ]
        },
        equipmentSlots: [
          {
            id: 0,
            label: "Head 1",
            itemType: "gear-head",
            currentItem: null
        }, {
            id: 1,
            label: "Helmut",
            itemType: "armor-head",
            currentItem: null
        }, {
            id: 2,
            label: "Head 2",
            itemType: "gear-head",
            currentItem: null
        }, {
            id: 3,
            label: "Shield",
            itemType: "shield",
            currentItem: null
        }, {
            id: 4,
            label: "Armor",
            itemType: "armor-chest",
            currentItem: null
        }, {
            id: 5,
            label: "Weapon",
            itemType: "weapon",
            currentItem: null
        }, {
            id: 6,
            label: "Aux 1",
            itemType: "gear",
            currentItem: null
        }, {
            id: 7,
            label: "Boots",
            itemType: "armor-feet",
            currentItem: null
        }, {
            id: 8,
            label: "Aux 2",
            itemType: "gear",
            currentItem: null
          }
        ]
      }
    }
  }
});

export const DEFAULT_NEW_GAME = (characterName) => ({
  // itemSelectionStack: SelectedItemStack.create(6),
  gameId: utils.uuid(),
  gameLabel: 'New Game',
  isDefaultInventory: true,
  startTime: null,
  playTime: 0,
  lastPlayed: Date.now(),
  selectedItemId: null,
  character: {
    name: characterName || 'Poop Dog',
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
