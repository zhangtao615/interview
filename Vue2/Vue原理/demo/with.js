const obj = {
  a: 100, 
  b: 200
}

// 使用with，等改变 {} 内自由变量的查找方式，将 {} 内自由变量，当作 obj 的属性查找
with(obj) {
  console.log(obj.a);
  console.log(obj.b);
}