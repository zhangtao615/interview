## React高级特性

### 函数组件

#### 1. 函数组件示例

```

function List(props) {
  const { list } = this.props;
  return <ul> 
      { list.map((item, index) => {
        return <li key={item.id}>
          <span>{ item.title }</span>
        </li>
      })}
    </ul>
}
```

#### 2. 函数组件和class组件的区别

1. 函数组件是纯函数，输入props，输出JSX
2. 函数组件没有实例，没有生命周期，没有state，不能扩展其他方法


### 非受控组件

相对于受控组件来说，input、checkbox之类的不受state的控制，只是使用defaultValue/defaultChecked赋初始值，使用ref来获取标签的值

#### 1. 使用场景

当必须要操作DOM的时候，可以使用非受控组件，例如文件上传、富文本编辑器

### Portals

1. 在React中组件渲染是按照默认层级嵌套渲染
2. 当默写情况需要将组件渲染到父组件之外时，可以使用portals

#### 1. 使用场景

1. 父组件设置overflow: hidden时，可以让子组件逃离父组件的限制
2. 父组件的z-index值太小
3. fixed属性的元素需要放在body的第一层

### context

1. 给每个组件传递一些比较简单的公共的信息(语言、主题)

### 异步组件

1. import()
2. React.lazy
3. React.Suspense

### 性能优化

#### 1. shouldComponentUpdate生命周期

**基本使用**
```
shouldComponentUpdate(nextProps, nextState) {
  if (nextState.count !== this.state.count) {
    return ture // 可以渲染
  }
  return false // 不重复渲染
}
```

**为什么react可以在改生命周期中可以返回false?**

> 前提: 在React中只要父组件更新，子组件就会无条件更新，这样就会出现很多不必要的更新

1. React中SCU默认返回 true ，即React默认重新渲染所有子组件
2. 必须配合`不可变值`一起使用
3. 课先不用SCU，有性能问题时在考虑使用性能优化

### 2. PureComponent 和 memo

1. PureComponent是在SCU中实现浅比较
2. memo是函数组件中的PureComponent
3. 浅比较已经适用大部分情况(尽量不做深度比较)

使用场景

```
// PureComponent

class App extends React.PureComponent {}

// memo

function MyComponent(props) {
  // 使用 props 渲染
}

function areEqual(preProps, nextProps) {

}

export default React.memo(MyComponent, areEqual)
```

### 组件公共逻辑抽离

#### 1. HOC

高阶组件不是一种功能，而是一种模式
```
const HOCFactory = (Component) => {
  class HOC extends React.component {
    // 在此定义公共逻辑
    render() {
      return <Component {...this.props} />
    }
  }
  return HOC
}

const EnhancedComponent = HOCFactory(WrappedComponent)
```
#### 2. RenderProps

