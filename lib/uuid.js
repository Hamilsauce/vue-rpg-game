import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { utils } = ham;

const entityTypePrefixMap = new Map([
  ['game', 'gm'],
  ['character', 'ch'],
  ['item', 'itm'],
  ['enemy', 'enm'],
  ['gear', 'gr'],
  ['weapon', 'wpn'],
])

export const uuid = (entityType='') => `${entityTypePrefixMap.get(entityType.toLowerCase())}-${utils.uuid}`;
