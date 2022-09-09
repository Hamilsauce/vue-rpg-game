class SelectedItem {
  #value = null;
  #previous = null;

  constructor(value, previous) {
    this.root;

    this.#value = value;
  }

  static create(value, prev = null) {
    if (!value) throw new Error('SelectedItemStack: New Item must have value.');

    return new SelectedItem(value, prev)
  }

  get value() { return this.#value };

  get previous() { return this.#previous };

  toJSON() {
    return {
      value: this.#value,
      previous: this.#previous,
    }
  }
}

export class SelectedItemStack {
  #lastItem = null;
  #capacity = null;

  constructor(cap = 6) {
    this.#capacity = +cap || null;
  }

  static create(cap, initialItem) {
    const stack = new SelectedItemStack(cap);

    if (initialItem) stack.push(initialItem);

    return stack;
  }

  get size() {
    if (this.#lastItem === null) return 0;

    let size = 0;

    let curr = this.#lastItem;

    while (curr) {
      size++;
      let curr = curr.previous
    }

    return size;
  }

  peek() {
    return this.#lastItem ? this.#lastItem.value : null;
  }

  get #head() { return this.#lastItem };

  get capacity() { return this.#capacity || null };

  get isEmpty() { return this.size === 0 };

  get isFull() { return this.#capacity !== null && this.size >= this.#capacity };

  pop() {
    if (!this.isEmpty) {
      const temp = this.#lastItem

      this.#lastItem = temp ? temp.previous : null;

      return temp ? temp.value : null;
    }
  }

  push(value) {
    if (this.isFull) return console.warn('SelectedItemStack: Full');;

    const newPrev = this.#lastItem.previous;

    this.#lastItem = SelectedItem.create(value);

    this.#lastItem.previous = newPrev;

    return this.size;
  }

  clear() {
    this.#lastItem = null;

    return this.size;
  }

  toJSON() {
    return {
      selectedItems: this.#lastItem
    }
  }
}
