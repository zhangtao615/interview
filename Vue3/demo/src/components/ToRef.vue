<template>
  <div>
    <p>ageRef: {{ ageRef }}</p>
    <p>state.name: {{ state.name }}</p>
    <p>state.age: {{ state.age }}</p>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
      name: 'Tom',
      age: 30
    })
    let ageRef = toRef(state, 'age')
    const changeAge = () => {
      state.age++
    }
    return {
      ageRef,
      state,
      changeAge
    }
  }
}
</script>

<style lang="scss" scoped>

</style>