<template>
  <!-- <Ref /> -->
  <!-- <ToRef /> -->
  <ToRefs />
</template>

<script>
// import Ref from './components/Ref.vue'
// import ToRef from './components/ToRef.vue'
import ToRefs from './components/ToRefs.vue'
export default {
  name: 'App',
  components: {
    // Ref,
    // ToRef,
    ToRefs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
