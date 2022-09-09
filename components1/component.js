import { EventEmitter } from '../lib/event-emitter.js';
// import { template } from './lib/templater.js';

const templates = new Map([
  ['cell', document.querySelector(`#cell-template`)],
  ['sheet', document.querySelector(`#sheet-template`)],
])

export class Component extends EventEmitter {
  name;
  #type;
  #self;

  constructor(type) {
    super();

    this.#type = type;
    
    this.#self = this.#template(type);
  }

  render() { return this.self }

  #template(name = '') {
     return document.querySelector(`#${name}-template`)
       .content.firstElementChild
       .cloneNode(true);
  };

  get self() { return this.#self }

  get type() { return this.#type }

}
