### BFC

块级格式化上下文：它是一个完全独立的空间，空间内元素的布局不会对外面的布局产生影响

#### 如何触发BFC

1. overflow不是visible
2. float不是none
3. position不为absolute或fixed
4. display是inline-block或flex


### BFC解决的问题

1. 清除浮动
2. margin外边距重叠