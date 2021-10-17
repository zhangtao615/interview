const arr = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8]

// push
// let res = arr.push(6)


// pop()
// let res = arr.pop()

// shift
// let res = arr.shift()

// unshift
// let res = arr.unshift(0)

// concat
// let res = arr.concat(arr2)

// splice
// let res = arr.splice(2, 0, "1", "2")

// slice
// let res = arr.slice(1)
// console.log(res)
// console.log(arr)

const res = [10, 20, 30].map((item, index) => {
  return parseInt(item, index)
})
console.log(res)