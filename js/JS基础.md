#### 1. typeof能判断哪些类型

1. 能识别所有的基本数据类型
2. 能够识别函数
3. 能够判断是否为引用类型（但不可细分）

#### 2. ===和\==的使用时机
1. 判断是否等于null或undefined时用==，其余用===

#### 3. 基本数据类型和引用数据类型区别

1. 基本数据类型：number、string、boolean、undefined、null、Symbol
2. 引用数据类型：object、array

**区别**
基本数据类型是存放在栈中，引用数据类型是存放在堆中
#### 4. 手写深拷贝

```
const deepClone = (obj) => {
  if (typeof obj !== 'object' || typeof obj == null) {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 保证key不是原型上的属性
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
  return res
}

```