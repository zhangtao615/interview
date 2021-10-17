## 面试题(部分)

**1. var、let、const区别**

- var是ES5的语法，let和const是ES6的语法；
- var有变量提升，let和const没有；
- var和let是变量，可以修改，const是常量，不可修改
- let、const有块级作用域，var没有
- var可以重复声明，let、const不可以重复申明

**2. typeof返回哪些类型**

undefined、string、number、symbol、boolean、object、function
```
typeof null === 'object'
```

**3. 列举强制类型转换和隐式类型转换**

1. 强制: parseInt、parseFloat、toString等
2. 隐式: if、逻辑运算、==、拼接字符串

**4. 手写深度比较(isEqual)**

```
const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null
}

const isEqual = (obj1, obj2) => {
  // 判断是否为数组或对象，如果不为数组或对象则直接比较
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  // 判断两个对象是否是同一个对象
  if (obj1 === obj2) {
    return true
  }

  // 1. 先取出 obj1 和 obj2 的keys，比较个数
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  // 2. 以 obj1 为基准，和 obj2 依次递归比较
  for (let key in obj1) {
    // 比较当前key的val
    const res = isEqual(obj1[key], obj2[key])
    if (res === false) {
      return false
    }
  }

  // 3. 遍历完成，没有命中false，就是全相等
  return true
}
```

**5. split()和join()的区别**

1. split() 将字符串拆分成数组
2. join() 将数组拼接成字符串

**6. 数组的pop、push、unshift、shift分别是做什么的**

| API | 功能 | 返回值 | 是否影响原数组 |
| :------- | :------- | :------- | :------- |
| push | 向数组末尾添加一个值 | 数组的长度 | 会 | 
| pop | 弹出数组最后一项 | 数组最后一项 | 会 | 
| shift | 弹出数组第一项 | 数组第一项 | 会 | 
| unshift | 向数组头部添加一个值 | 添加后的数组 | 会 | 
| push | 向数组末尾添加一个值 | 数组的长度 | 会 | 
| concat | 连接两个数组 | 连接后的新数组 | 不会 | 
| slice | 剪切数组 | 剪切后的数组 | 不会 | 

**7. slice和splice区别**

1. 功能区别：slice是切片、splice是剪接

**8. [10, 20, 30].map(parseInt)**

返回值： [10, NaN, NaN]

```
// 拆解
[10, 20, 30].map((item, index) => {
  return parseInt(item, index)
})
```

**9. get和post的区别**

1. get一般用于查询，post一般用于提交
2. get参数拼接在url上，post参数放在body里面
3. post的安全性高于get

**10. call和apply区别**

call的参数后面的参数是一个一个拆分的，apply的第二个参数是数组或类数组。

**11. 事件代理什么**

利用冒泡，将子元素上的事件冒泡到父元素上，在父元素上绑定函数执行相应的逻辑。

**12. 闭包是什么，有什么特性，有什么负面影响**

> 自由变量的查找要在函数定义的地方，而不是执行的地方

1. 什么是闭包，有什么特性？
闭包是作用域调用的两种特殊形式：函数当作参数传递、函数当作返回值返回

2. 影响

变量会常驻在内存中，得不到释放；

**13. 如何阻止事件冒泡和默认行为**
1. e.stopPropagation()
2. e.preventDefault()
3. return false

**14. 查找、添加、删除、移动DOM节点的方法**

1. 查找：getElementById()、getElementsByClassName()、querySelctorAll()...
2. 添加：appendChild()
3. 删除：removeChild()
4. 移动：appendCild()

**15. 如何减少DOM操作**

1. 缓存DOM查询结果
2. 多次DOM操作，合并一次插入

**16. 解释jsonp的原理**

jsonp是通过script标签实现、ajax是通过XMLHttpRequest对象来实现

**17. document load和ready的区别**

1. load是页面全部资源加载完成才会执行
2. ready是DOM加载完就会执行

**18. =\=和===的区别**

1. `==`是只比较值是否相等，会尝试类型转换
2. `===`是不仅比较值相等还会比较类型是否相等

**19. 函数声明和函数表达式的区别**

1. 函数声明`function fn() {...}`，函数表达式`const fn = function() {...}`
2. 函数声明会在代码执行前预加载，函数表达式则不会

**20. new Object()和Object.create()的区别**

1. {} 等同于 new Object()，原型Object.prototype
2. Object.create(null) 没有原型
3. Object.create({...}) 可指定原型

**21. this的场景题**

this作用域是在调用时确认

**22. 作用域和自由变量场景题1**

```
let i

for(i = 1; i <=3; i++) {
  setTimeout(function() {
    console.log(i) // 3 3 3
  }, 5000)
}
```

**23. 判断字符串以字母开头，后面字母数字下划线**

```
const reg = /^[a-zA-Z]\w{5,29}$/
```

**24. 作用域和自由变量场景题2**

```
let a = 1000

function fn() {
  console.log(a, '1') // 1000
  a = 10
  console.log(a, '2') // 10
}

fn()

console.log(a, '3') // 10
```

**25. 手写trim()**

```
String.prototype.trim = function () {
  return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
```

**26. 获取多个数字的最大值**

```
function max() {
  const nums = Array.prototype.slice.call(arguments)
  let max = 0

  nums.forEach(n => {
    if (n > max) {
      max = n
    }
  })
  return max
}
```

**27. JS实现继承**

1. class继承
2. prototype继承

**28. 如何捕获JS程序中的异常**

1. try...catch
2. window.onerror 自动捕获异常
```
window.onerror = function (message, source, lineNum, colNum, error) {
  // 1. 对跨域的js，如CDN不会有详细的报错信息
  // 2. 对于压缩的js，还要配合sourceMap 反查未压缩的代码行、列
}
```
**29. 什么是JSON**

1. json是一种数据格式，本质是一段字符串
2. json格式和js对象结构一致，对js语言更友好
3. window.JSON是一个全局对象：JSON.stringify、JSON.parse

**30. 获取当前url的参数**