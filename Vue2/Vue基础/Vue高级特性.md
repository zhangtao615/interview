### 1. 自定义v-model

```
// VModel.vue
<template>
  <div>
    <h1>自定义v-model</h1>

    <p>{{ name }}</p>
    <CustomModel v-model="name" />
  </div>
</template>

<script>
  import CustomModel from './CustomModel.vue'
  export default {
    name: 'VModel',
    components: {
      CustomModel
    },
    data() {
      return {
        name: 'Tom',
      }
    }
  }
</script>

```
```
// CustomModel.vue
<template>
  <div>
    <input type="text" :value="text" @input="$emit('change', $event.target.value)">
    <!-- 
      1. input使用了 :value 而不是v-model
      2. change和model.event需要对应
      3. text属性需要对应
     -->
  </div>
</template>

<script>
  export default {
    name: 'CustomModel',
    model: {
      prop: 'text',
      event: 'change',
    },
    props: {
      text: String,
      default: () => ''
    }
  }
</script>

```

### 2. $nextTick

1. Vue是异步渲染
2. data改变之后，DOM不会立刻渲染
3. 页面渲染会将多次data修改整合，多次修改只渲染一次
4. $nextTick会在DOM渲染后触发，以获取最新的DOM节点

### 3. slot

1. 基本使用

```
// SlotDemo.vue
<template>
  <div>
    <a :href="url">
      默认内容
    </a>
  </div>
</template>

<script>
  export default {
    name: 'SlotDemo',
    props: ['url']
  }
</script>
```

```
// index.vue
<template>
  <div>
    <SlotDemo :url="website.url">
      {{ website.url }}
    </SlotDemo>
  </div>
</template>

<script>
import SlotDemo from './SlotDemo.vue'
  export default {
    components: {
      SlotDemo
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

```
父组件向子组件插入一段内容

2. 作用域插槽
```
// ScopeSlotDemo.vue
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

```

```
// index.vue
<ScopedSlotDemo :url="website.url">
      <template slot-scope="data">
        {{ data.slotData.title }}
      </template>
    </ScopedSlotDemo>
```

3. 具名插槽

```
// NamedSlot.vue
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
```

### 4. 动态组件

1. `:is="conponent-name"` 用法
2. 当组件类型不确定时，需要根据数据来判断，可以使用动态组件

### 5. 异步组件

1. import()

```
export default {
  components: {
    asyncComponent: () => import('./asyncComponent.vue')
  }
}
```

2. 按需加载，异步加载大组件

### 6. 缓存组件

1. keep-alive: 一般用在tab页等频繁切换的地方

### 7. 组件公共逻辑抽离 mixin

1. 多个组件有相同的逻辑，可以抽离出来

### vue-router 

1. 路由模式：hash、H5 history
2. 懒加载： import()