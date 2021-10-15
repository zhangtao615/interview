## 存储

### cookie

1. cookie是用于浏览器和server通讯，被‘借用’到本地存储，可通过documnet.cookie来修改
2. cookie最大存储4kb

### localstorage 和 sessionStorage
1. HTML5中专门为存储而设计，最大可存5M
2. API简单易用，setItem、getItem
3. 不会随着http请求发送出去

区别：
1. localStorage数据会永久存储，除非代码手动删除
2. sessionStorage数据只会存在当前会话当中，浏览器关闭则清空
