## React原理

### 1. 函数式编程 

1. 纯函数
2. 不可变值

### 2. vdom 和 diff

#### vnode

1. h函数
2. vnode数据结构
3. patch函数

#### diff算法

1. 只比较同一层级，不跨级比较
2. tag不同则直接删掉重建，不再深度比较
3. tag和key都相同则认为是同一节点，不再深度比较

### 3. JSX本质

> 1. JSX等同于Vue模版
> 2. Vue模版不是html
> 3. JSX也不是JS

#### 例子

```
// JSX

const ele = <div id="box">
      	<p className="p" style={{ color: 'red' }}>hello</p>
        <img src={imgUrl} />
      </div>

// 编译结果

const ele = /*#__PURE__*/React.createElement("div", {
  id: "box"
}, /*#__PURE__*/React.createElement("p", {
  className: "p",
  style: {
    color: 'red'
  }
}, "hello"), /*#__PURE__*/React.createElement("img", {
  src: imgUrl
}));
```

#### 本质

JSX编译使用`React.createElement`函数，第一个参数是tag标签或者是组件，第二个参数是标签下的属性，之后都是该元素的子元素，`React.createElement(tagName/component, props/null, children1, children2, ...)`

### 4. 合成事件机制

#### 事件机制
1. React17之前所有的事件全部挂载到document上
2. event不是原生的，是 SyntheticEvent 合成事件对象
3. 和Vue事件不同，和DOM事件不同

#### 合成事件图示

![合成事件](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E5%90%88%E6%88%90%E4%BA%8B%E4%BB%B6.png)

#### 为什么要合成事件机制?

1. 更好的兼容性和跨平台
2. 挂载到document上，减少内存消耗，避免频繁解绑
2. 方便事件的统一管理(如事务机制)

#### React 17事件绑定的变化

1. React 17后事件绑定到root上
2. 有利于多个React版本共存

### 5. setState 和 batchUpdate

#### setState机制

1. 有时异步（普通使用），有时同步（setTimeout、DOM事件）
2. 有时合并（对象形式），有时不合并（函数形式）

![setState主流程](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/setState%E4%B8%BB%E6%B5%81%E7%A8%8B.png)

#### isBatchingUpdates

**React通过isBatchingUpdates来判断setState是同步还是异步**

```
// 异步情况
increase = () => {
  // 开始：处于batchUpdate
  isBatchingUpdates = true
  this.setState({
    ...
  })
  isBatchingUpdates = false
}
// 同步情况
increase = () => {
  // 开始：处于batchUpdate
  isBatchingUpdates = true
  setTimeout(() => {
    // 此时，isBatchingUpdates为false
    this.setState({
      ...
    })
  }, 1000)
  isBatchingUpdates = false
}
```

当 isBatchingUpdates 为 true 时，setState是异步的，反之则为同步

### 6. React transaction事务机制

事务机制图示
![事务机制](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/transanction.png)

### 7. 组件渲染和更新过程