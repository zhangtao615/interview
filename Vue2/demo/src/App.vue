<template>
  <div id="app">
    <!-- <TplDemo></TplDemo> -->
    <!-- <ComputedDemoVue /> -->
    <!-- <WatchDemo /> -->
    <!-- <VModel /> -->
    <AdvanceUse />
  </div>
</template>

<script>
// import TplDemo from './components/BaseUse/TplDemo.vue'
// import ComputedDemoVue from './components/BaseUse/ComputedDemo.vue'
// import WatchDemo from './components/BaseUse/ComputedDemo.vue'
// import VModel from './components/AdvanceUse/VModel.vue'
import AdvanceUse from './components/AdvanceUse/index.vue'
export default {
  name: 'App',
  components: {
    // TplDemo,
    // ComputedDemoVue,
    // WatchDemo,
    // VModel,
    AdvanceUse
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
