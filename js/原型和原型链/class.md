## class

使用class实现继承

### class常规使用
```
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }
}

const stu = new Student('Tom', 123456)
stu.sayHi()
```

### class实现继承

```
// 定义父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 子类继承父类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名${this.name}, 学号${this.number}`)
  }
}
// 实例化子类
const stu = new Student('Tom', 1453)
stu.sayHi()
stu.eat()

class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 教授 ${this.major}`)
  }
}

const teacher = new Teacher('Jerry', 'Math')
teacher.teach()
teacher.eat()
```