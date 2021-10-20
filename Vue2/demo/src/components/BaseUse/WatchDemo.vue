<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: 'WatchDemo',
    data() {
      return {
        name: 'Tom',
        info: {
          city: 'San Francisco',
        }
      }
    },
    watch: {
      name(oldVal, val) {
        console.log('watch name', oldVal, val)
      },
      info: {
        handler(oldVal, val) {
          console.log('watch info', oldVal, val)
        },
        deep: true // 开启深度监听
      }
    }
  }
</script>
