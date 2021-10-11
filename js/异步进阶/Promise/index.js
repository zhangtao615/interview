// const p1 = new Promise((resolve, reject) => {
  
// })
// console.log(p1)

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 500)
// })
// console.log(p2)
// setTimeout(() => {console.log(p2)}, 1000)

console.log(1)

new Promise(reslove => {
  reslove()
  console.log(2)
}).then(() => {
  console.log(3)
})

Promise.resolve().then(() => {
  console.log(4)
})


console.log(5)