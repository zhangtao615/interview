## JS Web API

### 主要内容

1. DOM
2. BOM
3. 事件绑定
4. Ajax
5. 存储

### DOM (Document Object Modal)

#### DOM本质

DOM本质是从html文件解析出来的一棵树

#### DOM节点操作

1. 获取DOM节点

> document.getElementById、document.getElementByClassName、document.querySelectorAll...

#### 问题

1. DOM属于哪种数据结构?
>
2. DOM操作常用的API
>
3. attr和property的区别？

> - property是对DOM元素的JS变量进行修改，不会体现到html结构中
> - attr是对DOM结构的属性进行修改，会改变html结构
> - 两者都可能引起DOM重新渲染

4. 一次性插入多个DOM节点
>