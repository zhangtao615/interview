## 原型

### 原型关系

1. 每个class都有显式原型prototype
2. 每个实例都有隐式原型__proto__
3. 实例的__proto__指向对应的class的prototype

### 基于原型的执行规则

获取属性或者方法时，先在自身的属性和方法中寻找，如果找不到则去__proto__中查找

### 原型链

![原型](https://7years-img.oss-cn-beijing.aliyuncs.com/原型.png?versionId=CAEQGBiBgMDO05eh4xciIDkyMDMyMThhMmQ3ZjRjMTViOTA0NWNhMjM0ZGNlMDJm "原型")
![原型链](https://7years-img.oss-cn-beijing.aliyuncs.com/原型链.png?versionId=CAEQGBiBgMDH05eh4xciIDE0OWRkODFiNmE4YTRiNzlhNmIzNTllMjJjZmU5Y2Uw "原型链")