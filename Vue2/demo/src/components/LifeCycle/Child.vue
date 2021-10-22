<template>
  <div>
    Child
    {{ msg }}
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    beforeCreate() {
      console.log('child beforeCreate')
    },
    created() {
      console.log('child created')
    },
    beforeMount() {
      console.log('child beforeMount')
    },
    mounted() {
      console.log('child mounted')
    },
    beforeUpdate() {
      console.log('child beforeUpdate')
    },
    updated() {
      console.log('child updated')
    },
    beforeDestroy() {
      console.log('child beforeDestroy')
    },
    destroyed() {
      console.log('child destroyed')
    }
  }
</script>
