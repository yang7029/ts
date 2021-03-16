class Dog {
  name: string
  age: number

// 构造函数     构造函数会在实例对象创建的时候调用
  constructor(name: string , age : number) {
    console.log("执行了")
    //在实例方法中，this就表示当前的实例对象，new几个实例对象，this指向当前的实例对象
    console.log(this)

    // 通过this可以向新建的对象中添加属性，采用的是this不同的指向性
    this.name = name
    this.age = age

   }



  bark() {
    console.log("汪汪汪")
  }
}
const dog = new Dog("小黑", 23)
const dog1 = new Dog("小白", 56)
// console.log(dog)



// 总结：  重点
//   在 class类中定义属性
//   构造函数中进行赋值，进行传参定义，用到 this 指向的问题    this就是当前对象
//   创建的实例对象进行实例化，执行构造函数，传实参
//   构造函数中的属性用   this.xxx = xxx  进行不同的赋值
