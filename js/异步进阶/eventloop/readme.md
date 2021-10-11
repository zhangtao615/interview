## event loop (事件循环)

JS是单线程，异步基于回调实现，==event loop==就是异步回调的实现原理

### JS如何执行的？

1. JS执行是从前到后，一行一行执行
2. 如果一行只想报错，则停止下面的代码执行
3. 先把同步的代码执行完，再执行异步

### event loop执行过程
```
console.log('hi')

setTimeout(() => {
  console.log('cb1')
}, 1000)

console.log('bye')
```
代码运行时分为五块，Browser console、Call Stack（调用栈）、Web APIs、Callback Queue（回调队列）、Event Loop（事件循环）。

1. 代码执行时，先执行第一行代码`console.log('hi')`，将代码推入Call Stack，在Brower console中打印出‘hi’，执行完成后清空调用栈。
2. 执行第二行代码setTimeout函数，setTimeout函数第一个参数是一个函数，第二个参数是时间，将函数放在一个定时器中，时间到了之后，将函数推入Callback Queue中执行，setTimeout是浏览器定义的，所以是在Web APIs
3. 执行最后一行，将`console.log('bye')`推入Call Stack，在Brower console中打印出‘Bye’，执行完成后清空调用栈。
4. 所有同步任务执行完成之后，当没有任务能被推入到Call Stack中，立刻启动Event Loop机制，开始循环在Callback Queue中寻找有没有函数可以执行，等到定时器时间结束，将定时器中的函数推入Callback Queue中，Event Loop检测到有函数可以执行，就将定时器中的函数推到Call Stack中执行，执行`console.log('cb1')`，打印‘cb1’
5. 

**总结**
1. 同步代码，一行一行放在Call Stack执行
2. 遇到异步，会先“记录”下来，等待时机成熟
3. 时机到了，就会移动到Callback Queue
4. 如果Call Stack为空(同步代码执行完成)，Event Loop开始工作
5. 轮询Callback Queue， 如果有则移动到Call Stack执行
6. 然后继续轮询查找

### DOM事件和Event Loop关系

```
console.log('hi')

$('#btn').click(() => {
  console.log('button click')
})

console.log('bye')
```
**执行过程**
1. 代码执行时，先执行第一行代码`console.log('hi')`，将代码推入Call Stack，在Brower console中打印出‘hi’，执行完成后清空调用栈。
2. 执行第二行，将回调函数暂存起来，等待用户点击
3. 执行最后一行代码，打印“Bye”