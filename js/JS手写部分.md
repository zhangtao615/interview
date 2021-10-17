### 手写深拷贝

```
const deepClone = (obj) => {
  if (typeof obj !== 'object || typeof obj == null) {
    return obj
  }

  const res = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
  return res
}
```

### 手写bind
```
Function.prototype.bind = function () {
  // 解构参数
  const [constructor, ...args] = [...arguments]
  // 获取第一项
  const _this = constructor
  // 获取当前函数
  const self = this

  return function () {
    return self.apply(_this, [...args])
  }
}
```

### 手写Promise

```
class Promise {
  state = 'pending'
  value = undefined // 成功的返回
  reason = undefined // 失败的原因

  resolvedCallbacks = []
  rejectedCallbacks = []
  constructor(fn) {
    const resolvedHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        resolvedCallbacks.forEach(fn => fn(this.value))
      }
    }

    const rejectedHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        rejectedCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      fn(resolvedHandler,rejectedHandler)
    } catch (e) {
      console.log(e)
    }
  }

  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state = == 'pending') {
      return new Promise((resolve, reject) => {
        this.resolvedCallbacks.push(() => {
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        }),
        this.rejectedCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            rejected(newReason)
          } catch (err) {
            reject(err)
          }
        })
      })
    }
    if (this.state === 'fulfilled') {
      return new Promise((resolve, reject) => {
        try {
          const newvalue = fn1(this.value)
          resolve(newValue)
        } catch (err) {
          reject(err)
        }
      })
    }
    if (this.state === 'rejected') {
      return new Promise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }
  catch (fn) {
    return this.then(null, fn)
  }
}

Promise.resolve = (value) => {
  return new Promise((resolve, reject) => resolve(value))
}

Promise.reject = (reason) => {
  return new Promise((reject, reject) => reject(reason))
}

Promise.all = (promiseList) => {
  const result = []
  const length = promiseList.length
  let resolvedCount = 0
  return new Pormise((resolve, reject) => {
    promiseList.forEach((promise) => {
      promise.then(data => {
        result.push(data)
        resolvedCount++
        if (resolvedCount === length) {
          resolve(result)
        }
      }).catch(error) {
        reject(error)
      }
    })
  })
}

Promise.race = (promiseList) => {
  let resolved = false
  return new Promise((resolved, reject) => {
    promiseList.forEach(promise => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolved = true
        }
      }).catch(error) {
        reject(error)
      }
    })
  })
}
```

### 防抖debounce
```
const debounce = (fn, delay) => {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
```

### 节流throttle

```
function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
```