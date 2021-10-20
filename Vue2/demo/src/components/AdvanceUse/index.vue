<template>
  <div>
    <!-- <SlotDemo :url="website.url">
      {{ website.url }}
    </SlotDemo> -->

    <!-- <ScopedSlotDemo :url="website.url">
      <template slot-scope="data">
        {{ data.slotData.title }}
      </template>
    </ScopedSlotDemo> -->

    <KeepAlive />
  </div>
</template>

<script>
// import SlotDemo from './SlotDemo.vue'
// import ScopedSlotDemo from './ScopedSlotDemo.vue'
  import KeepAlive from './KeepAlive.vue'
  export default {
    components: {
      // SlotDemo,
      // ScopedSlotDemo,
      KeepAlive
    },
    data() {
      return {
        name: 'Tom',
        website: {
          url: 'https://www.baidu.com',
          title: '百度',
          subTitle: '百度一下，你就知道'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>