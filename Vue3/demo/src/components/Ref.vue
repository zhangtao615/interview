<template>
  <div>
    <p>ref demo</p>
    {{ nameRef }}
    {{ ageRef }}
    {{ obj.name }}
    {{ obj.age }}
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Ref',
  setup () {
    const ageRef = ref(20)
    const nameRef = ref('Tom')
    const obj = reactive({
      age: ageRef.value
    })

    return {
      ageRef,
      nameRef,
      obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>