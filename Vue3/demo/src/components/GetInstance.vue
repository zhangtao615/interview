<template>
  <div>

  </div>
</template>

<script>
import { onMounted, getCurrentInstace } from 'vue'
export default {
  name: 'GetInstance',
  data() {
    return {
      x: 1,
      y: 2
    }
  },
  setup () {
    onMounted(() => {
      console.log(instace.data.x)
    })
    const instace = getCurrentInstace()
    console.log(instace)
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>