## AJAX

### 手写ajax

```
function ajax () {
  let xhr = new XMLHttpRequest()

  xhr.open(method, url, false)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 操作
    }
  }
  xhr.send(null)
}
```
#### xhr.readyState取值及含义

1. 0: 未初始化，还没调用send方法
2. 1：载入，已调用send方法，正在发送请求
3. 2: 载入完成，send方法执行完成，已经接收到全部响应内容
4. 3: 交互，正在解析响应内容
5. 4：完成，响应内容解析完成，可以在客户端调用

#### xhr.status取值及含义
1. 2xx: 表示请求处理成功，如200
2. 3xx: 组要重定向，浏览器重新跳转，如301、302、304
3. 4xx: 客户端错误，如404
4. 5xx: 服务端错误
### 跨域

