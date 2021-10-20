<template>
  <div>
    <h1>自定义v-model</h1>

    <p>{{ name }}</p>
    <CustomModel v-model="name" />
  </div>
</template>

<script>
  import CustomModel from './CustomModel.vue'
  export default {
    name: 'VModel',
    components: {
      CustomModel
    },
    data() {
      return {
        name: 'Tom',
      }
    }
  }
</script>
