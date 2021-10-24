<template>
  <div>
    X: {{ x }}
    Y: {{ y }}
  </div>
</template>

<script>
import { reactive } from 'vue'
import useMousePosition from '../hooks/useMousePosition'

export default {
  setup () {
    const { x, y } = useMousePosition()
    return {
      x, 
      y
    }
  }
}
</script>

<style lang="scss" scoped>

</style>