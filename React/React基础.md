### React基础
#### 1. React事件为什么要绑定this

在React的函数中，默认的this为undefined，需要使用bind来使this指向当前实例，或者在定义函数的时候使用静态方法，可以不使用bind

#### 2. React事件中的event是什么

**React中的事件是SyntheticBaseEvent（组合事件）,不是原生事件**
event是React封装的，可以看做是 \_\_proto__.constructor 是 SyntheticBaseEvent 组合事件
event.nativeEvent是原生事件对象，所有的事件都是被挂载到 document 上，和DOM事件不一样，和 Vue 事件也不一样


#### 3. React 受控组件

表单中的值会受state控制

#### 4. React 父子组件通讯

#### 5. setState

**不可变值**

1. 不能直接操作state里面的值，需要在setState中修改
```
this.state.count++ // 错误

this.setState({
  count: this.state.count++ // 正确
})

```
2. 不能提前修改state里面的值，当需要改变时再修改，并且不能改变之前的值

**可能是异步更新**

1. setState修改数据之后打印，修改的值没有变化

```
// count: 1
this.setState({
  count: this.state.count + 1
})

console.log('count', this.state.count) // count, 1
```

2. 如何获取修改后的值

```
// count: 1
this.setState({
  count: this.state.count + 1
}, () => {
  console.log('count:', this.state.count)
})

```

3. setTimeout和自定义事件中是同步的

```
// setTimeout
setTimeout(() => {
  this.setState({
    count: this.state.count + 1
  })

  console.log('同步跟新count:', this.state.count)
}, 1000

// 自定义事件

document.body.addEventListener('click', () => {
  this.setState({
    count: this.state.count + 1
  })
  console.log('自定义事件中的count', this.state.count)
})

```

**可能会被合并**

1. 传入对象会被合并

```
// count: 0
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1
})
this.setState({
  count: this.state.count + 1
})
```
最终结果三次操作会被合并成一次，count为1

2. 传入函数不会被合并

```
this.setState((pre, props) => {
  return {
    count: pre.count + 1,
  }
})
this.setState((pre, props) => {
  return {
    count: pre.count + 1,
  }
})
this.setState((pre, props) => {
  return {
    count: pre.count + 1,
  }
})
```
三次操作不会被合并，结果count为3