### flex布局
flex布局又叫弹性布局，它是给元素的父元素上添加display：flex属性，拥有这个属性的元素就叫容器。当给元素设置这个属性后，容器内元素的float将会失效。在flex布局中有四个概念：容器、项目、主轴、交叉轴。容器就是父元素，项目就是父元素下的子元素，默认横向为主轴以左边为起点，纵向是交叉轴上面为起点。

### 属性
1. flex-direction 该属性是决定主轴的方向，默认是row，column是将主轴设为垂直方向，row-reverse、column-reverse将起点改变。
2. flex-wrap 决定元素是否换行，默认为no-wrap，wrap表示换行，wrap-reverse换行，第一行在下
3. justify-content 处理项目外的空间 默认为flex-start（左对齐），flex-end（右对齐），center（居中），space-between（项目两端对齐，中间等距排列），space-around（每个项目两侧间距相等）
4. align-items 管理项目在交叉轴上如何排列 默认为strech，flex-start/end（分别以交叉轴的起点/终点对齐）， center（居中对齐），baseline（项目第一行文字对齐）
5. align-content 决定多根主轴对齐方式 项目属性
6. order 决定项目的排列顺序 越小越靠前
7. flex-grow/shrink 决定项目的放大/缩小倍数，默认为1
8. flex-basis 定义了在分配多余空间之前，项目占据主轴的空间
9. flex 为2、3缩写
10. align-self 允许单个项目有区别于其他项目的对齐方式

### 使用flex布局绘制骰子
```
#box {
  width: 200px;
  height: 200px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #666;
}
.item:nth-child(2) {
  align-self: center;
}
.item:nth-child(3) {
  align-self: flex-end;
}

<div id="box">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```