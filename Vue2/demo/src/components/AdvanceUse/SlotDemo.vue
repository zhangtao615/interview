<template>
  <div>
    <a :href="url">
      默认内容
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SlotDemo',
    props: ['url']
  }
</script>

<style lang="scss" scoped>

</style>