const compiler = require('vue-template-compiler')

// 简单模版
// const template = `<p>{{ message }}</p>` // with(this){return _c('p',[_v(_s(message))])}

// 带有判断逻辑的模版
// const template = `<p>{{ flag ? message : 'no message found' }}</p>` // with(this){return _c('p',[_v(_s(flag ? message : 'no message found'))])}

// 属性和动态属性
// const template = `
//   <div id="container" class="div1">
//     <img :src="imgUrl" />
//   </div>
// `
// with(this){return _c('div',{staticClass:"div1",attrs:{"id":"container"}},[_c('img',{attrs:{"src":imgUrl}})])}

// 条件
// const template = `
//   <div>
//     <p v-if="flag === 'a'">A</p>
//     <p v-else>B</p>
//   </div>
// `
// with(this){return _c('div',[(flag === 'a')?_c('p',[_v("A")]):_c('p',[_v("B")])])}

// 循环

// const template = `
//   <div v-for="(item, index) in list" :key="index">
//     {{ item }}
//   </div>
// `
// with(this){return _l((list),function(item,index){return _c('div',{key:index},[_v("\n    "+_s(item)+"\n  ")])})}

// 事件

// const template = `
//   <button @click="clickHandler">click</button>
// `
// with(this){return _c('button',{on:{"click":clickHandler}},[_v("click")])}

// v-model

const template = `
  <input type="text" v-model="name"/>
`
// with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}
const res = compiler.compile(template)

console.log(res.render) 