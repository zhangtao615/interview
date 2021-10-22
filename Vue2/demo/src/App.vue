<template>
  <div id="app">
    <!-- <TplDemo></TplDemo> -->
    <!-- <ComputedDemoVue /> -->
    <!-- <WatchDemo /> -->
    <!-- <VModel /> -->
    <!-- <AdvanceUse /> -->
    <LifeCycle v-if="flag" :msg="message" />
    <button @click="changeHandler">click</button>
    <button @click="updateHandler">udpate</button>
  </div>
</template>

<script>
// import TplDemo from './components/BaseUse/TplDemo.vue'
// import ComputedDemoVue from './components/BaseUse/ComputedDemo.vue'
// import WatchDemo from './components/BaseUse/ComputedDemo.vue'
// import VModel from './components/AdvanceUse/VModel.vue'
// import AdvanceUse from './components/AdvanceUse/index.vue'
import LifeCycle from './components/LifeCycle/index.vue'
export default {
  name: 'App',
  components: {
    // TplDemo,
    // ComputedDemoVue,
    // WatchDemo,
    // VModel,
    // AdvanceUse,
    LifeCycle
  },
  data() {
    return {
      flag: true,
      message: 'hello'
    }
  },
  methods: {
    changeHandler() {
      this.flag = !this.flag
    },
    updateHandler() {
      this.message = this.message + Date.now()
    }
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
