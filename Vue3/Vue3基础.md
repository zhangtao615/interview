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