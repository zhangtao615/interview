<template>
  <div>
    <a :href="url">
      <slot :slotData="website">
        {{ website.subTitle }} <!-- 默认显示，即使父组件不传 -->
      </slot>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'ScopedSlotDemo',
    props: ['url'],
    data() {
      return {
        name: 'Tom',
        website: {
          url: 'https://www.taobao.com',
          title: '淘宝',
          subTitle: '淘你喜欢'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>