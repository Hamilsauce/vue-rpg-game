export class Character {
  constructor(name) {
    this.name = name || 'Unnamed';
    this.health = 10;
    this.armor = 0;
    this.damage = 0;
    this.weapons = new Map();
    this.inventory = [];
    
  }

  get prop() { return this._prop };
  set prop(newValue) { this._prop = newValue };
}
