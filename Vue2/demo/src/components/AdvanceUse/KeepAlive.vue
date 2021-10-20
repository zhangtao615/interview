<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    <keep-alive>
      <KeepAliveAVue v-if="state == 'A'"></KeepAliveAVue>
    </keep-alive>
    <keep-alive>
      <KeepAliveBVue v-if="state == 'B'"></KeepAliveBVue>
    </keep-alive>
    <keep-alive>
      <KeepAliveCVue v-if="state == 'C'"></KeepAliveCVue>
    </keep-alive>
  </div>
</template>

<script>
  import KeepAliveAVue from "./KeepAliveA.vue"
  import KeepAliveBVue from "./KeepAliveB.vue"
  import KeepAliveCVue from "./KeepAliveC.vue"
  export default {
    components: {
      KeepAliveAVue,
      KeepAliveBVue,
      KeepAliveCVue
    },
    data() {
      return {
        state: 'A',
      }
    },
    methods: {
      changeState(state) {
        this.state = state
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>