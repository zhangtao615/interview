// 触发更新视图

function updateView() {
  console.log('更新视图')
}

// 重新定义数组原型
const oldArray = Array.prototype
const arrProto = Object.create(oldArray)
['pop', 'push', 'shift', 'unshift', 'slice'].forEach(methodName => {
  arrProto[methodName] = function() {
    updateView() // 触发试图更新
    oldArray[methodName].call(this, ...arguments)
  }
})
// 重新定义属性并监听

function defineReactive(target, key, value) {
  // 深度监听
  observer(value)

  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue)

        value = newValue

        // 触发更新视图
        updateView()
      }
    }
  })
}

// 监听对象属性

function observer(target) {
  // 判断是否为对象或数组
  if (typeof target !== 'object' || target === null) {
    return target
  }
  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  // 重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

// 数据

const data = {
  name: 'Tom',
  age: 21,
  info: {
    address: '北京'
  },
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

observer(data)

data.name = 'Jerry'
data.age = 22
data.info.address = '杭州'
data.x = 1000
delete data.name
console.log(data.info.address)