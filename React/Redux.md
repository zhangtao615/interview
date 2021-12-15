## Redux

### 基本概念

1. store
2. state
3. reducer
4. action

### 单向数据流概述 

1. dispatch(action)
2. reducer -> newState
3. subscribe触发通知

### 异步action

**在action中可以发送异步请求获取数据，不过需要时用redux-thunk插件**

1. 使用redux-thunk中间件

```

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

```

2. 异步action

```
export const addTodoAsync = text => {
  // 返回函数
  return (dispatch) => {
    fetch(url).then(res => {
      dispatch(addTodo(res.text))
    })
  }
}
```

### redux中间件原理

1. 图示

![redux中间件](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.png)

2. redux中间件——logger实现

```
// 自己修改 dispatch，增加logger

let next = store.dispatch

store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  next(action)
  console.log('next state', store.getState())
}
```

### redux数据流图

![redux数据流图](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/redux%E6%95%B0%E6%8D%AE%E6%B5%81%E5%9B%BE.png)