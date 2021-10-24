const data = {
  name: 'Tom',
  age: 20
}

const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    const ownKeys = Reflect.ownKeys(target)
    if (ownKeys.includes(key)) {
      console.log('get', key)
    }
    const res = Reflect.get(target, key, receiver)
    console.log('get', key)
    return res
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    console.log('set', key, value)
    return res // 是否设置成功
  },
  deleteProp(target, key) {
    const res = Reflect.deleteProperty(target, key)
    console.log('deleteProperty', key)
    return res // 是否删除成功
  }
})