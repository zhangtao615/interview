const btn = document.getElementById('btn')

// btn.addEventListener('click', e => {
//   console.log('clicked')
// })

const bindEvent = (elem, type, fn) => {
  elem.addEventListener(type, fn)
}

bindEvent(btn, 'click', (e) => {
  console.log('clicked')
})