<template>
  <div class="tpl-demo">
    <p>文本插值{{ message }}</p>
    <p>JS表达式 {{ flag ? 'yes' : 'no' }}</p>
    <p v-if="flag">【v-if】flag来决定是否显示</p>
    <p v-show="!flag">【v-show】flag来决定是否显示</p>
    <p :id='dynamicId'>动态属性id</p>
    <hr>
    <p v-html="rawHtml">
      <span>【注意】使用v-html后，会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'TplDemo',
    data() {
      return {
        message: 'hello vue',
        flag: true,
        rawHtml: '指令 - 原始html <b>加粗</b> <i>斜体</i>',
        dynamicId: `id-${Date.now()}`
      }
    }
  }
</script>
