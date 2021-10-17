const ipt1 = document.getElementById('input1')
const ipt2 = document.getElementById('input2')

let timer = null
ipt1.addEventListener('keyup', (e) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      console.log(e.target.value)
      timer = null
    }, 500)
})


function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
ipt2.addEventListener('keyup', throttle(function () {
  console.log(123)
}, 1000))