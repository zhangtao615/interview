## http 缓存

### 什么是缓存？为什么需要缓存？

当浏览器第一次访问某个网站时，浏览器会将返回的部分资源（静态资源，如html、css、js）存在本地，当下次再次请求数据的时候判断资源是否过期，如果过期就再次请求，没有过期就从本地读取资源，减少请求，加快页面渲染。

### 强缓存

**强缓存图示**

![强缓存](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E5%BC%BA%E7%BC%93%E5%AD%98.png)

**流程**

浏览器初次向服务端请求资源时，服务端返回资源和Cache-Control，Cache-Control存在Response Headers中，由它控制强缓存。
`Cache-Control`的max-age字段来表明资源缓存时间。当缓存超过最大缓存时间，会再次请求服务端的资源并返回新的Cache-Control。

**Cache-Control的值**

1. max-age 最大缓存时间
2. no-cache 不使用本地强制缓存
3. no-store 不实使用强制缓存，服务端也不做缓存
4. private 只允许最终用户缓存
5. public 允许中间路由或代理服务器缓存

> Tips：Expires也是控制缓存过期，被cache-control代替

### 协商缓存

服务端缓存策略，由服务端判断文件是否使用缓存如果文件一致则返回304，否则返回200和新的资源。资源标识是在Response Headers中，分为两种`Last-Modified`(资源最后修改时间)和`ETag`(资源唯一标识)

**协商缓存图示**

![协商缓存](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98.png)

**流程**

浏览器初次向服务端情求资源时，服务端返回资源和对应的资源标识，当再次请求时，会带上之前返回的资源标识，服务端通过标识判断资源是否可用，如果可用，则返回304，否则返回200、新的资源和标识。

**Last-Modified**

浏览器初次请求资源时，服务端返回资源以及`Last-Modified`，当再次请求时，Request Headers中带着`If-Modified-Since`法网服务器，服务器判断文件是否被修改，如果未修改返回304，否则返回新资源和新的`Last-Modified`。

**Etag**

浏览器初次请求资源时，服务端返回资源和根据资源计算出的`Etag`值，再次请求时，Request Headers带着If-None-Match发往服务器，服务端判断缓存的Etag和服务端的Etag是否相同，如果相同则返回304，如果不相同则返回200，以及新的资源和新的Etag。

**Last-Modified和Etag区别**

1. 当两者同时存在的时候会优先使用Etag
2. Last-Modified只能精确到秒级
3. 如果资源被重复生成，而内容不变，Etag更精准

**综述**

![综述](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E7%BB%BC%E8%BF%B0.png)

**不同刷新页面的方式对缓存的影响**

1. 正常刷新————浏览器输入网址：强缓存和协商缓存都有效
2. 手动刷新————command+r：强缓存失效，协商缓存有效
3. 强制刷新————shift+command+r/ctrl+f5：强缓存和协商缓存都失效