<template>
  <div>
    <input type="text" :value="text" @input="$emit('change', $event.target.value)">
    <!-- 
      1. input使用了 :value 而不是v-model
      2. change和model.event需要对应
      3. text属性需要对应
     -->
  </div>
</template>

<script>
  export default {
    name: 'CustomModel',
    model: {
      prop: 'text',
      event: 'change',
    },
    props: {
      text: String,
      default: () => ''
    }
  }
</script>

