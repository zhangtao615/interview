const arr = [10, 20, 30, 40, 50, 60, 70, 80]

// function sum(arr) {
//   let res = 0
//   arr.forEach(n => res = res + n)

//   console.log(res)
// }

// sum(arr)

// const sum = arr.reduce((sum, curVal, index, arr) => {
//   console.log('----reduce----')
//   console.log(sum, 'sum')
//   console.log(curVal, 'curVal')
//   console.log(index, 'index')

//   return sum + curVal // 返回值会当作下一次执行时的第一个参数
// }, 0)

const sum = arr.reduce((sum, cur) => sum + cur, 0)

console.log(sum)