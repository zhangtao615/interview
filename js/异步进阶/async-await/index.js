// async function fn() {
//   return 100
// }

// (async function () {
//   const a = fn()
//   console.log(a) // Promise { 100 }
//   const b = await fn() // 100
//   console.log(b)
// })()


// async function fn () {
//   return 100 // 相当于Promise.resolve(100)
// }

// console.log(fn()) // Promise对象

// fn().then(res => console.log(res))

// (async function() {
//   const p1 = Promise.resolve(300)
//   const data = await p1
//   console.log(data, 'data')
// })()

(async function() {
  const p4 = Promise.reject('error')
  try {
    const res = await p4
    console.log(res)
  } catch (err) {
    console.log(err)
  }
})()

// (async function () {
//   console.log('start')
//   const a = await 100
//   console.log(a, 'a') // 100
//   const b = await Promise.resolve(200)
//   console.log(b, 'b')  // 200
//   const c = await Promise.reject(300)
//   console.log(c, 'c') // UnhandledPromiseRejectionWarning: 300
//   console.log('end')
// })()