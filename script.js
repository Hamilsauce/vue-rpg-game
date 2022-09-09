const app = document.querySelector('#app');
const appBody = document.querySelector('#app-body')
const containers = document.querySelectorAll('.container')
const blocks = document.querySelectorAll('.block')
const slots = document.querySelectorAll('.slot')

const state = {
  removedElement: null,
}

// blocks.forEach((b, i) => {
//   b.addEventListener('click', e => {
//     e.stopPropagation()
//     if (state.removedElement !== null) return;
//     state.removedElement = b.parentElement.removeChild(b)
//   });
// });

slots.forEach((slot, i) => {
  slot.addEventListener('click', e => {
    e.stopPropagation()
    const block = slot.querySelector('.block');
    console.log('e.target', e.target)
    console.log('block', block)
    if (!block || state.removedElement !== null) return;
    state.removedElement = slot.removeChild(block)
  });
});

containers.forEach((c, i) => {
  c.addEventListener('click', e => {
    e.stopPropagation()

    if (state.removedElement === null) return;
    c.appendChild(state.removedElement)
    state.removedElement = null
  });
});
