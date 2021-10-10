## 作用域和闭包

### 作用域

1. 全局作用域
2. 函数作用域
3. 块级作用域 (ES6)

### 自由变量

1. 一个变量在当前作用域没有定义但是被使用了
2. 在使用时会向上级作用域一层一层依次寻找，直到找到为止
3. 如果全局作用域还未找到，则报错

### 闭包

作用域应用的特殊情况，有两种表现
1. 函数作为参数传递
2. 函数作为返回值返回

==函数作为返回值返回==
```
function create() {
  let a = 100
  return function () {
    console.log(a) // 100
  }
}

let fn = create()
let a = 200
fn()
```
==函数作为参数传递==
```
function print(fn) {
  let a = 200
  fn()
}

let a = 100
function fn() {
  console.log(a) // 100
}

print(fn)
```
**所有的自由变量的查找是在函数定义的地方向上级作用域查找，不是在执行的地方**

### this

==this取什么值是在函数执行时确定的，不是在定义时确定==
#### 常见问题
1. this不同场景如何取值
2. bind函数实现
3. 闭包应用场景

##### - this不同场景取值

- 普通函数
```
function fn1() {
  console.log(this)
}

fn1() // window

fn1.call({ x: 100 }) // { x: 100 }
const fn2 = fn1.bind({ x: 100 })

fn2() // { x: 100 }
```
- 作为对象方法
```
const people = {
  name: 'Tom',
  sayHi() {
    console.log(this) // 当前对象
  },
  wait() {
    setTimeout(function () {
      console.log(this) // this === window
    }, 0)
  }
}
```
- 箭头函数
```
const people = {
  name: 'Tom',
  sayHi() {
    console.log(this) // 当前对象
  },
  wait() {
    setTimeout(() => {
      console.log(this) // this当前对象
    }, 0)
  }
}
```
**箭头函数中的this总是取上一个作用域中的this**
- class中调用
```
class People {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(this)
  }
}
const Tom = new People('Tom')
Tom.sayHi() // 实例化的对象Tom
```
#### - bind实现
```
Function.prototype.bind = function () {
  // 将参数解析成数组
  let [constructor, ...args] = [...arguments]
  // 获取参数第一项
  let _this = constructor
  // 获取当前函数
  let self = this
  return function () {
    return self.apply(_this, [...args])
  }
}
```