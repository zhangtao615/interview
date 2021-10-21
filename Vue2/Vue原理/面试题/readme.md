### 1. v-for为什么需要key

1. 在v-for中必须使用key，而且不能使index和random
2. diff算法中通过tag和key来判断是否为sameNode
3. 可以减少渲染次数，提升渲染性能

### 2. Vue组件如何通讯

1. props和$emit
2. 自定义事件event.$on、event.$off、event.$emit
3. Vuex

### 3. 组件渲染更新过程
![组件渲染更新过程](https://7years-img.oss-cn-beijing.aliyuncs.com/imooc/%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93%E6%9B%B4%E6%96%B0%E8%BF%87%E7%A8%8B.png)

### 4. 双向数据绑定v-model实现原理

1. input元素的value = this.anme
2. 绑定input事件this.name = $event.target.value
3. data更新触发re-render

### 5. 对MVVM理解


### 6. computed特点

1. 最大特点就是缓存，data不变不回重新计算
2. 可以提高性能

### 7. 组件data为什么是个函数

### 8. ajax请求放在那个声明周期

mounted

### 9. 如何将组件所有的props传给子组件

1. `$props`: `<Component v-bind="$props">`

### 10. 何时需要使用beforeDestory

1. 解绑自定义事件event.$off
2. 清除定时器
3. 解绑自定义DOM事件，`removeEventListener`

### 11. 响应式原理

### 12. Vue常见的性能优化

1. 合理使用v-show和v-if
2. 合理使用computed
3. v-for时加key，避免和v-if同时使用
4. 自定义事件、DOM事件即使销毁
5. 合理使用异步组件
6. 合理使用keep-alive
7. data层级不要太深
