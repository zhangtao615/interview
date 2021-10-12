## async/await

async和await要一起使用，不能单独使用await
async/await可以以同步的写法获得异步的结果

### async/await和Promise的关系

1. async和await是消灭异步回调的终极武器
2. async/await与Promise并不互斥
3. 执行async函数，返回的是Promise对象
```
async function fn () {
  return 100 // 相当于Promise.resolve(100)
}

console.log(fn()) // Promise对象

fn().then(res => console.log(res)) // 100
```
4. await相当于Promise的then
```
(async function() {
  const p1 = Promise.resolve(300)
  const data = await p1
  console.log(data, 'data') // 300
})()
```
5. try...catch 可捕获异常，代替了Promise的catch
```
(async function() {
  const p4 = Promise.reject('error')
  try {
    const res = await p4
    console.log(res)
  } catch (err) {
    console.log(err) // try...catch相当于Promise的catch
  }
})()
```
### 异步本质

async/await是消灭异步回调的终极武器，JS还是单线程，还是得有异步，还得基于event loop，async/await只是一个语法糖

