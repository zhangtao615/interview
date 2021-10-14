/**
 * @description 手写Promise构造函数
 * @author zhangtao
 */

class MyPromise {
  state = 'pending' // 状态
  value = undefined // 成功后的值
  reason = undefined // 失败原因

  resolveCallbacks = [] // 当pending状态存储失败的回调
  rejectCallbacks = [] // 当pending状态存储失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
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
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      console.log(err)
    }
  }
  then(fn1, fn2) {
    // 当pending状态下
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

    if (this.state === 'pending') {
      return new MyPromise((resolve, reject) => {
        this.rejectCallbacks.push(() => {
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
            reject(newReason)
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
  // catch是then的语法糖
  catch (fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = (value) => {
  return new MyPromise((resolve, reject) => resolve(value))
}

MyPromise.reject = (reason) => {
  return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = (promiseList = []) => {
  return new MyPromise((resolve, reject) => {
    const result = [] // 存储 promiseList 所有结果
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)
        resolvedCount++
        if (resolvedCount === length) {
          // 遍历到最后一个Promise
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
    promiseList.forEach(p => {
      p.then(data => {
        if (!resolved) {
          resolve(data)
          resolve = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}

const p1 = new MyPromise(resolve => {
  setTimeout(() => {
    resolve(100)
  }, 500)
})

const p2 = new MyPromise((resolve, reject) => {
  reject(100)
})

console.log(p1)