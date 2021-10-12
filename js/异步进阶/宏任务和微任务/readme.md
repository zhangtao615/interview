## 宏任务macroTask和微任务microTask
==微任务执行机制比宏任务早==
### 宏任务
常见宏任务：setTimeout、setInterval、Ajax、DOM事件

### 微任务
常见微任务：Promise、async/await

### event loop和DOM渲染
> JS是单线程的，和DOM渲染共用一个线程，JS执行时，需要留一些时机供DOM渲染

Event Loop执行机制中，每次Call Stack清空时(同步任务执行完成)，尝试DOM渲染，再触发Event Loop。



### 宏任务和微任务区别
1. 宏任务在DOM渲染后触发，如setTimeout
2. 微任务在DOM渲染前触发，如Promise
3. 