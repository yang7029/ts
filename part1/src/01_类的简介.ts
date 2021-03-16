/*
面向对象：
    我们写程序的时候，都是通过对象进行操作的。
    操作浏览器用window
    操作网页用document
    操作控制台用console
*/


// 对象里面包含了属性和方法
// 类：就是定义了对象长什么样子，就是定义对象结构    使用 class 定义，  函数用的是function
class Person {


  // 定义属性
  // 直接定义的属性称为实例属性，通过实例对象来访问   可以读取和更改值
  // const per = new Person()
  // console.log(per)

  // 使用static开头的静态属性（类属性）可以直接通过类方法访问，不需要通过new实例来访问
  // console.log（Person.gender）



  // 实例属性


  // 定义属性(实例属性，只有 new 了实例对象之后，才能访问里面的属性)
  // readonly：表示只读属性，不能更改
  name: string = 'TS'
  readonly age: number = 56    //readonly是只读属性，不能更改
  // 类属性
  // 在属性前面加上static关键字可以定义类属性（静态属性）
  static gender: string = '男'
  static readonly aaa: number = 34

// 定义方法   实例方法    调的时候，用实例调
sayHi() {
  console.log("hellow")
}

// 加上static表示的是类方法，直接用类调用
static sayHi1(){
  console.log("ni hao")
  }




}
const per = new Person();
console.log(per)
per.name = "娃哈哈"
console.log(per)
// per.age = 18       只读属性报错




// 类属性不需要new来访问
// 静态属性不需要new实例来访问，直接用类访问，也称为类属性
console.log(Person.gender)
// Person.aaa = 78      只读类属性



per.sayHi()
Person.sayHi1()



// 类属性： 加上 static 直接用类调用
// 类方法： 加上 static 直接用类调用
// 实例属性：不加 static 按平常写，需要用 new 实例对象来调用
// 实例方法：不加 static 按平常写，需要用 new 实例对象来调用