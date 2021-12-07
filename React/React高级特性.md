## React高级特性

### 函数组件

#### 函数组件示例

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

#### 函数组件和class组件的区别

1. 函数组件是纯函数，输入props，输出JSX
2. 函数组件没有实例，没有生命周期，没有state，不能扩展其他方法


### 非受控组件

相对于受控组件来说，input、checkbox之类的不受state的控制，只是使用defaultValue/defaultChecked赋初始值，使用ref来获取标签的值

#### 使用场景

当必须要操作DOM的时候，可以使用非受控组件，例如文件上传、富文本编辑器

### Portals

1. 在React中组件渲染是按照默认层级嵌套渲染
2. 当默写情况需要将组件渲染到父组件之外时，可以使用portals

#### 使用场景

1. 父组件设置overflow: hidden时，可以让子组件逃离父组件的限制
2. 父组件的z-index值太小
3. fixed属性的元素需要放在body的第一层

### context

1. 给每个组件传递一些比较简单的公共的信息(语言、主题)

### 异步组件

1. import()
2. React.lazy
3. React.Suspense