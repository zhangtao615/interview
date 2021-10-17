// let i

// for(i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i) // 3 3 3
//     }, 1000)
//   })(i)
  
// }

let a = 1000

function fn() {
  console.log(a, '1') // 1000
  a = 10
  console.log(a, '2') // 10
}

fn()

console.log(a, '3') // 10