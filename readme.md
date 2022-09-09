# IDEA
A system/graph of Baskets that can contain
Blocks and the user can move Blocks between
connected Baskets

# Object Model ----

## EVENTEMITTER - EXTENDS EVENTTARGET

## BaseModel - EXTENDS EVENTEMITTER
- Root Model
*PROPS*: blockType, id/name

*OVERRIDE Methods*: create() and init()


## Basket - *EXTENDS BASEMODEL*
- Holds/stores Blocks
- maintains an Adjacency list to other Baskets

### *Basket PROPERTIES*:
- blockType
- name/id
- connections: adjacencyList
- get/set blocks
- get/set blockCount
- get/set hasSelectedBlock
- get/set isEmpty
- get/set isFull
- get/set capacity
- get/set selectionState

### *Basket METHODS*:
- addConnection/connect: addAdjacency/edge
- removeConnection/disconnect: removeAdjacency/edge
- dump: removeAllBlocks
- findBlock: removeAllBlocks
- hasBlock


## Block - *EXTENDS BASEMODEL*
- Generic object able to be manipulated by user
- ...


### Block PROPERTIES:
- get/set parent/currentBasket
- get/set attributes: {}
- get/set value
- get/set selectionState
- blockType
- name/id

## Edge EXTENDS BASEMODEL
- .
- .
- .



### Edge PROPERTIES:
- get/set parent/currentBasket
- get/set attributes: {}
- get/set value
- get/set selectionState
- direction
- baskets: [a,b]
