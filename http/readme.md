## http/https

### 常见http状态码

**1xx 服务器收到请求**

**2xx 请求成功**

1. 200 请求成功

**3xx 重定向**

1. 301 永久重定向(配合location，浏览器自动处理)
2. 302 临时重定向(配合location，浏览器自动处理)
3. 304 资源未修改

**4xx 客户端错误**

1. 404 资源找不到
2. 403 没有权限

**5xx 服务端错误**

1. 500 服务器错误
2. 504 网关超时

### http methods

**传统的methods**

1. get获取服务器数据
2. post向服务器提交数据

**现在的methods**

1. get获取数据
2. post新建数据
3. patch/put更新数据
4. delete删除数据

**Restful API**

1. 一种API设计方法
2. 传统API设计：把每个url当作一个功能
3. Restful API设计：把每个url当作一个唯一的资源

### http header

**Request Header**

1. Accept 浏览器可接收的数据格式
2. Accept-Encoding 浏览器可接收的压缩算法，如gzip
3. Accept-Language 浏览器可接收的语言，如zh-CN
4. Connecttion: keep-alive 一次TCP连接重复使用
5. cookie
6. Host 请求的域名
7. User-Agent（UA）浏览器信息
8. Content-type 发送数据的格式，如application/json


**Response Header**

1. Content-type 返回的数据格式，如application/json
2. Content-length 返回数据大小，多少字节
3. Content-Encoding 返回数据的压缩算法，如gzip
4. set-cookie 设置cookie

**缓存相关的headers**

1. Cache-Control
2. Expires
3. Last-Modified
4. If-Modified-Since
5. Etag
6. If-None-Match

### https

**http与https的区别**

1. http是明文传输，敏感信息容易被劫持
2. http = http + 加密，劫持了也无法解密
3. 现代浏览器已经开始强制使用https协议

**加密方式**

1. 对称加密：使用一个key同时负责加密和解密
2. 非对成加密：一对key，A加密之后，只能用B来解密

**https加密流程**

1. 先使用非对称加密，获取pubkey，然后生成一个随机字符串，传给服务端，服务端使用key来解密。然后再使用随机字符串来作为对称加密的key来加密。

**https证书**

> 中间人攻击：在劫持时，将服务端的pubkey替换成自己的pubkey，劫持客户端生成的随机字符串解密，就得到了对称加密的key

可以使用第三方证书来防止中间人攻击。

