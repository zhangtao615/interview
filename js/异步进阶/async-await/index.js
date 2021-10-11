// async function fn() {
//   return 100
// }

// (async function () {
//   const a = fn()
//   console.log(a) // Promise { 100 }
//   const b = await fn() // 100
//   console.log(b)
// })()

(async function () {
  console.log('start')
  const a = await 100
  console.log(a, 'a') // 100
  const b = await Promise.resolve(200)
  console.log(b, 'b')  // 200
  const c = await Promise.reject(300)
  console.log(c, 'c') // UnhandledPromiseRejectionWarning: 300
  console.log('end')
})()