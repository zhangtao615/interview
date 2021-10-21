## Virtual DOM

### 背景

1. DOM操作非常耗费性能
2. Vue和React都是使用数据驱动视图，使用vdom来实现

### vdom

1. 当页面复杂度提升之后，想减少计算次数比较难
2. 考虑将计算更多的转移到JS中来实现，JS执行速度快
3. vdom使用JS模拟DOM结构，计算出最小的变更，最后再操作DOM

### JS模拟DOM结构

1. DOM结构
```
<div id="container" class="div1">
  <p>vdom</p>
  <ul style="font-size: 20px;">
    <li>a</li>
  </ul>
</div>
```
2. vdom
```
let vdom = {
  tag: 'div',
  props: {
    className: 'div1',
    id: 'container'
  },
  children: [
    {
      tag: 'p',
      text: 'vdom',
      children: []
    },
    {
      tag: 'ul',
      props: {
        style: "font-size: 20px"
      },
      children: [
        {
          tag: 'li',
          text: 'a',
          children: []
        }
      ]
    }
  ]
}
```

