### Proxy响应式实现

**基本使用**

```
const data = {
  name: 'Tom',
  age: 20
}

const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    console.log('get', key)
    return result
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    console.log('set', key, value)
    return result // 是否设置成功
  },
  deleteProp(target, key) {
    const res = Reflect.deleteProperty(target, key)
    console.log('deleteProperty', key)
    return result // 是否删除成功
  }
})
```