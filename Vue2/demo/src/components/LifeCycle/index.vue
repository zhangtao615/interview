<template>
  <div>
    Parents
    {{ msg }}
    <Child :msg="msg" />
  </div>
</template>

<script>
  import Child from './Child.vue'
  export default {
    components: {
      Child
    },
    props: ['msg'],
    beforeCreate() {
      console.log('parents beforeCreate')
    },
    created() {
      console.log('parents created')
    },
    beforeMount() {
      console.log('parents beforeMount')
    },
    mounted() {
      console.log('parents mounted')
    },
    beforeUpdate() {
      console.log('parents beforeUpdate')
    },
    updated() {
      console.log('parents updated')
    },
    beforeDestroy() {
      console.log('parents beforeDestroy')
    },
    destroyed() {
      console.log('parents destroyed')
    }
  }
</script>
