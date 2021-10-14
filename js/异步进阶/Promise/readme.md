## Promise

### Promise三个状态以及变化

三种状态： pending、resolve、rejected

状态变化: pending -> resolve、pending -> rejected

==变化不可逆==

**状态表现**
1. pending状态，不会触发then和catch
2. resolved状态，会触发后续的then回调函数
3. rejected状态，会触发后续的catch回调函数

### then和catch如何影响状态的变化

1. then正常返回resolved，里面有报错则返回rejected
2. catch正常返回resolved，里面有报错则返回rejected

### 手写Promise

**要求**
1. 可以初始化 & 异步调用
2. 支持链式调用
3. 实现基本Promise API：resolve、reject、race、all...

#### 1. 手写Promise构造函数
```
class MyPromise {
  state = 'pending'
  value = undefined
  reason = undefined

  resolveCallbacks = []
  rejectCallbacks = []
  constructor(fn) {
    const resolveHanlder = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      fn(resolveHanlder, rejectHandler)
    } catch (err) {
      console.log(err)
    }
  }

  then(fn1, fn2) {
    // pending状态下
    typeof fn1 === 'function' ? fn1 : (v) => v
    typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        this.resolveCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (e) {
            reject(e)
          }
        }),
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            resolve(newReason)
          } catch (e) {
            reject(e)
          }
        })
      })
    }
    if (this.state === 'fulfilled') {
      return new MyPromise((resolve, reject) => {
        try {
          const newValue = fn1(this.value)
          resolve(newValue)
        } catch (e) {
          reject(e)
        }
      })
    }
    if (this.state === 'rejected') {
      return new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (e) {
          reject(e)
        }
      })
    }
  }

  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = (value) => {
  return new MyPromise(resolve => resolve(value))
}

MyPromise.reject = (reason) => {
  return new MyPromise(reject => reject(reason))
}

MyPromise.all = (promiseList) => {
  return new MyPromise((resolve, reject) => {
    const result = []
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach(promise => {
      promise.then(data => {
        result.push(data)
        resolvedCount++
        if (resolvedCount === length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}

MyPromise.race = (promiseList) => {
  let resolved = false
  return new MyPromise((resolve, reject) => {
    promiseList.forEach(promise => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}
```