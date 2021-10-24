### watch和watchEffect区别

1. 两者都可监听data属性的变化
2. watch需要明确监听哪个属性
3. watchEffect会根据其中的属性，自动监听其变化

**watch使用**

```
const numberRef = ref(100)
const state = reactive({
  name: 'Tom',
  age: 20
})
watch(numberRef, (newNum, oldNum) => {
  console.log('ref watch', newNum, oldNum)
})
watch(() => state.age, (newNum, oldNum) => {
  console.log('ref watch', newNum, oldNum)
}, {
  immediate: true // 初始化就监听
}))

```

**watchEffect**

```
// 初始化肯定会执行一次（收集需要坚挺的数据）
watchEffect(() => {
  console.log('watchEffect')
   console.log('state.name', state.name)
})
```