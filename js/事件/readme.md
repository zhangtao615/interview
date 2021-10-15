## 事件

### 事件绑定

```
btn.addEventListener('click', e => {
  console.log('clicked')
})
```

**实现一个通用的事件绑定函数**
```
const bindEvent = (elem, type, fn) => {
  elem.addEventListener(type, fn)
}
```

### 事件冒泡

