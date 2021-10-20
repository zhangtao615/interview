/**
 * Object.defineProperty实现基本响应式
 */

// const data = {}
// let name = 'Tom'

// Object.defineProperty(data, "name", {
//   get: function () {
//     console.log('get')
//     return name
//   },
//   set: function (value) {
//     console.log('set')
//     name = value
//   }
// })

// console.log(data.name)
// data.name = 'Jerry'

/**
 * 深度监听data变化
 */