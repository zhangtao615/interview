### 1. Vue3相对于Vue2有什么优势

1. 性能更好
2. 体积更好
3. 更好的ts支持
4. 更好的代码组织
5. 更好的逻辑抽离

### 2. 生命周期

**options API生命周期**

与Vue2相比，将`beforeDestory`改为`beforeUnmounted`、`destoryed`改为`unmounted`

**Composition API生命周期**

1. setup
2. onBeforeUnmount
3. onMounted
4. onBeforeUpdate
5. onUpdated
6. onBeforeUnmount
7. onUnmounted

### 3. options API VS Composition API

**Composition API带来了什么**

1. 更好的代码组织

![代码组织](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E4%BB%A3%E7%A0%81%E7%BB%84%E7%BB%87.png)

2. 更好的逻辑复用

  - 自定义hooks

3. 更好的类型推导

**如何选择API**

1. 不建议共用，会引起混乱
2. 小型项目、业务逻辑简单，用Options API
3. 中、大型项目、复杂业务逻辑，用Composition API

### 4. 如何理解ref toRef和toRefs

**ref**

1. 生成值类型的响应式数据
2. 可用于模版和reactive
3. 通过.value修改值

**toRef**

1. 针对一个响应式对象(reactive封装)的prop
2. 创建一个ref，具有响应式
3. 两者保持引用关系

**toRefs**

1. 将响应式对象转为普通对象
2. 对象的每个prop都对应ref
3. 两者保持引用关系

**ref toRef和toRefs最佳使用方式**

1. 用reactive做对象响应式，用ref做值类型响应式
2. setup中返回toRefs(state)，或者toRef(state, 'prop')
3. 合成函数返回响应式对象，使用toRefs有利于解构

**为什么需要用ref**

1. 返回值类型会失去响应式
2. 在setup、computed、合成函数，都有可能返回值类型
3. Vue如果不定义值类型，用户将自造ref

**为什么需要.value**

1. ref是一个对象(不丢失响应式)，value存储值
2. 通过.value属性的get和set实现响应式
3. 用于模版、reactive时，不需要.value，其他都需要

**为什么需要toRef和toRefs**

1. 设计初衷：在不丢失响应式的情况下，把对象数据分解/扩散
2. 前提：针对响应式对象，并非普通对象
3. 注意：不创造响应式，而是延续响应式

### 5. Vue3升级项

1. createApp
2. emits属性
3. 生命周期
4. 多事件
5. Fragment
6. 移除.async
7. 异步组件写法
8. 移除filter
9. Teleport
10. Suspense
11. Composition API

**createApp**

```
// vue2.x
const app = new Vue({})

// vue3.x
const app = Vue.createApp({})

// vue2.x
Vue.use()
Vue.mixin()
Vue.component()
Vue.directive()

// vue3.x
app.use()
app.mixin()
app.component()
app.directive()
```

**emits属性**

```
// 父组件
<HelloWorld :msg="msg" @sayHello="sayHello">

export default {
  name: 'HelloWorld,
  props: ['msg'],
  emits: ['sayHello'],
  setup(props, { emit }) {
    emit('sayHello', 'hello')
  }
}
```

**多事件处理**

```
// 在methods中定义多个函数
<button @click="one($event), two($event), three($event)">click</button>
```

**Fragment**

Vue3中模版中支持多个节点

**移除.sync**

```
// vue2.x
<Component v-bind:title.sync="title" />

// vue3.x
<Component v-model:title="title" />
```

**异步组件**

```
// vue2.x
new Vue({
  components: {
    'my-component': () => {'../async-component.vue'}
  }
})

// vue3.x
import { createApp, defineAsyncComponent } from 'vue'

createApp({
  components: {
    AsyncComponent: defineAsyncComponent(() => import('./components/AsyncComponent.vue'))
  }
})
```

**Teleport**

可以将组件挂载到指定的元素下

**Suspense**

![Suspense](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/Suspense.png)

### 6. Composition API实现逻辑复用

1. 抽离代码逻辑到一个函数
2. 函数命名约定useXXX
3. setup中引用函数

```
import { ref, onMounted, onUnmounted } from 'vue'
const useMousePosition = () => {
  const x = ref(0)
  const y = ref(0)
  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    console.log('mousemove')
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return {
    x,
    y
  }
}

export default useMousePosition\
```

### 7. setup中如何获取组件实例

1. 在setup中和其他Componsition API中没有this
2. 可通过getCUrrentInstance获取当前实例
3. data中定义的值，在setup中打印的时候需要在onMounted中才能获取到

### 8. Vue3为什么比Vue2快

1. Proxy响应式
2. PatchFlag
3. hoistStatic
4. catchHandler
5. ssr优化
6. tree-shaking

> https://vue-next-template-explorer.netlify.app/ 进行调试

**patchFlag**

1. 编译模版时，动态节点做标记
2. 标记，分不同类型，如TEXT PROPS
3. diff算法时，可以区分静态节点以及不同类型的动态节点

![patchFlag下diff算法](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/patchFlag.png)

**hoistStatic**

1. 将静态节点的定义，提升到父作用域缓存起来（当静态节点过多时，会将所有节点合并）
2. 多个静态节点会被合并起来
3. 拿空间换时间

**cacheHandler**

1. 可以缓存事件

**SSR优化**

1. 静态节点直接输出，绕过vdom
2. 动态节点，还是要动态渲染

**tree shaking**

1. 编译时会根据不同情况引入不同的API

### 9. Composition API和react hooks区别

1. 前者setup只会调用一次，后者函数会被多次调用
2. 前者无需使用useMemo useCallback，因为setup只会调用一次
3. 前者无需考虑调用顺序，后者需要保证hooks的顺序一致
