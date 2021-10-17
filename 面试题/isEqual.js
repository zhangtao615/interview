const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}

// const isObject = (obj) => {
//   return typeof obj === 'object' && obj !== null
// }

// const isEqual = (obj1, obj2) => {
//   // 判断是否为数组或对象，如果不为数组或对象则直接比较
//   if (!isObject(obj1) || !isObject(obj2)) {
//     return obj1 === obj2
//   }
//   // 判断两个对象是否是同一个对象
//   if (obj1 === obj2) {
//     return true
//   }

//   // 1. 先取出 obj1 和 obj2 的keys，比较个数
//   const keys1 = Object.keys(obj1)
//   const keys2 = Object.keys(obj2)

//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   // 2. 以 obj1 为基准，和 obj2 依次递归比较
//   for (let key in obj1) {
//     // 比较当前key的val
//     const res = isEqual(obj1[key], obj2[key])
//     if (res === false) {
//       return false
//     }
//   }

//   // 3. 遍历完成，没有命中false，就是全相等
//   return true
// }

// console.log(isEqual(obj1, obj2))
