<template>
  <div>
    <p>watch vs watchEffect</p>
    <p>{{ numberRef }}</p>
    <p>state - name {{ name }}</p>
    <p>state-age {{ age }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default {
  name: 'Watch',
  setup () {
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
    })
    watchEffect(() => {

    })
    setTimeout(() => {
      numberRef.value = 30
    }, 1500)
    return {
      numberRef,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>