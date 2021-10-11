## 异步

### 1. 同步和异步的区别

1. 异步是基于JS是单线程语言的
2. 异步不会阻塞代码的执行
3. 同步会阻塞代码的执行

**为什么需要异步？**
> 1. JS是单线程，同时只能做一件事
> 2. 浏览器和nodejs已经支持JS启动进程，如Web Worker
> 3. JS和Dom渲染共用同一个线程，因为JS可修改DOM
> 4. 遇到等待时(网路请求、定时任务)，就会卡住

==异步是通过callback函数来实现==

### 2. 手写Promise加载一张图片
```
const url = 'https://7years-img.oss-cn-beijing.aliyuncs.com/-1a8b0a3b98c2e4a9.jpg'

function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function() {
      reject(new Error('图片加载失败'))
    }
    img.src = src
    document.body.appendChild(img)
  })
}
loadImg(url).then(res => {
  console.log(res.width)
}).catch(err => {
  console.log(err)
})
```

### 3. 前端异步使用的场景

1. 网络请求，ajax请求图片等
2. 定时任务，如setTimeout