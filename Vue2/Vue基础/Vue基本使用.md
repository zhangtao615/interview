### 1. 指令、插值

```
// TplDemo.vue
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

```

### 2. computed和watch

1. computed有缓存，data不变则不会重新计算
2. watch开始深度监听：`deep: true`，如果watch监听引用类型，拿不到oldval

### 3. v-if和v-show的区别

1. v-if是条件渲染，当值变化时，组建会销毁和重新创建
2. v-show是基于`display: none`和`dispaly: block`切换，组建会一直存在DOM中
3. 当组建切换不频繁是可以使用v-if，当频繁切换时推荐使用v-show

### 4. 事件

Vue中事件的event是原生的event对象，事件是被挂载到当前元素

### 5. 事件修饰符

1. stop 阻止事件继续传播
2. @submit.prevent 提交事件不再重载页面
3. @click.stop.prevent 修饰符串联
...

### 6. 父子组件间通讯

1. props和$emit
2. Vuex
3. inject和provide
4. 自定义事件：$on、$emit

### 7. 组件生命周期

1. beforeCreate
2. created
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestory
8. destoryed
![生命周期](https://cn.vuejs.org/images/lifecycle.png)

**mounted 和 created区别**
created：页面还没开始渲染，vue实例已经初始化完了
mounted：页面已经渲染完成

### 8. 父子生命周期调用顺序

1. 渲染：父组件beforeCreate -> 父组件created -> 父组件beforeMounted -> 子组件beforeCreated -> 子组件created -> 子组件beforeMounted -> 子组件mounted -> 父组件mounted
2. 更新：父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
3. 销毁：父beforeDestory -> 子beforeDestory -> 子destoryed -> 父destoryed
