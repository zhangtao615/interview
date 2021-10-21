## 前端路由原理

### 常见路由模式

1. hash
2. history

### hash的特点

1. hash的变化会触发网页的跳转，即浏览器的前进和后退
2. hash的变化不会刷新页面
3. hash永远不会提交到server端

### hash实现原理

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>hash</title>
</head>
<body>
  <p>test</p>
  <button id="btn1">修改hash</button>
  <script>
    // hash变化包括：
    // JS修改url
    // 手动修改url的hash
    // 浏览器前进和后退
    window.onhashchange = (event) => {
      console.log('old url', event.oldURL)
      console.log('new url', event.newURL)
      console.log('hash', location.hash)
    }

    // 页面初次加载，获取hash
    document.addEventListener('DOMContentLoaded', () => {
      console.log('hahs:', location.hash)
    })

    // JS 修改 url
    document.getElementById('btn1').addEventListener('click', () => {
      location.href = '#/user'
    })
  </script>
</body>
</html>
```
1. 使用`window.onhashchange`来监听路由hash的变化并进行相应的操作

### history模式特点

1. 用url规范的路由，跳转时不刷新页面
2. 主要用`history.pushState`和`window.onpopstate`来实现

### history模式实现

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>H5 history API</title>
</head>
<body>
  <p>history API test</p>
  <button id="btn1">修改url</button>

  <script>
    // 页面初次加载，获取path
    document.addEventListener("DOMContentLoaded", () => {
      console.log('load', location.pathname)
    })

    // 打开新路由
    // 【注意】使用pushState方式，浏览器不会刷新页面
    document.getElementById("btn1").addEventListener("click", () => {
      const state = { name: 'page1' }
      console.log('路由切换到 page1')
      history.pushState(state, '', 'page1')
    })

    // 监听浏览器前进、后退
    window.onpopstate = (event) => {
      console.log('onpopstate', event.state, location.pathname)
    }
  </script>
</body>
</html>
```