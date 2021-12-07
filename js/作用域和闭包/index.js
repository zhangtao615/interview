// 函数作为返回值返回

// function create() {
//   let a = 100lll
//   return function () {
//     console.log(a) // 100
//   }
// }

// let fn = create()
// let a = 200
// fn()

// 函数作为参数传递
// function print(fn) {
//   let a = 200
//   fn()
// }

// let a = 100
// function fn() {
//   console.log(a) // 100
// }

// print(fn)

// const people = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this) // 当前对象
//   },
//   wait() {
//     setTimeout(function() {
//       console.log(this) // this === window
//     }, 0)
//   }
// }
// people.wait()

// class People {
//   constructor(name) {
//     this.name = name
//   }
//   sayHi() {
//     console.log(this)
//   }
// }
// const Tom = new People('Tom')
// Tom.sayHi()

// bind实现

// Function.prototype.bind = function () {
//   // 将参数解析成数组
//   let [constructor, ...args] = [...arguments]
//   // 获取参数第一项
//   let _this = constructor
//   // 获取当前函数
//   let self = this
//   return function ({ ...args }) {
//     return self.apply(_this, [...args, ...arg])
//   }
// }

let a

for (var i = 0; i < 10; i++) {
  (function(i) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      console.log(i)
    })
    document.body.appendChild(a)
  })(i)
 
}