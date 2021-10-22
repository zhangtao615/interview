<template>
  <div>
    <p>toRefs - name: {{ name }}</p>
    <p>state - name: {{ state.name }}</p>
    <p>toRefs - age: {{ age }}</p>
    <p>state - age: {{ state.age }}</p>
    <p>toRefs - count: {{ count }}</p>
    <p>state - count: {{ state.count }}</p>

    <button @click="changeState">changeState</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
      name: 'Tom',
      age: 20
    })

    const changeState = () => {
      state.count++
      state.age++
    }

    const stateToRefs = toRefs(state)

    return {
      ...stateToRefs,
      state,
      changeState
    }
  }
}
</script>

<style lang="scss" scoped>

</style>