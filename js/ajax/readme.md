## AJAX

### 手写ajax

```
function ajax () {
  let xhr = new XMLHttpRequest()

  xhr.open(method, url, true)

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

**同源策略**

1. 使用ajax请求时，浏览器要求当前网页和server端必须同源
2. 对于url来说，同源必须是协议、域名、端口一致
3. 图片、css、js文件可以跨域

**跨域注意事项**

1. 所有的跨域必须进过server端允许和配合
2. 未经server端允许就实现跨域，说明浏览器有漏洞

**常见跨域方式**

1. JSONP

> 服务端可以任意动态拼接数据返回，只要符合html格式，当使用`script标签`访问js文件时，也可返回我们需要的数据

```
// jquery实现jsonp
$.ajax({
  url: '',
  dataType: 'jsonp',
  jsonpCallback: 'callback',
  success: () => {

  }
})

```

2. CORS

由服务端设置`http header`中`Access-Control-Allow-Origin`属性，允许传递cookie则需要设置`Access-Control-Allow-Credentials`为true