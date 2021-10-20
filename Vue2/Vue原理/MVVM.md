### 组件化基础

1. 组件化在很早之前就存在
2. vue和react都采用了数据驱动视图(MVVM，setState)

### 数据驱动视图

1. 传统组件，只是静态渲染，更新需要依赖操作DOM
2. 数据驱动视图——Vue MVVM
3. React setState

### Vue MVVM 

MVVM是model-view-viewModel的简称，view是视图层，对应DOM，主要由html和css组成；在viewModel层主要是vue来完成的事件监听等，当model层进行修改数据时，会第一时间修改DOM。