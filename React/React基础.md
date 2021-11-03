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

1. 不要直接修改state里面的值，需要在setState中修改
```
this.state.count++ // 错误

this.setState({
  count: this.state.count++ // 正确
})
```

**可能是异步更新**

