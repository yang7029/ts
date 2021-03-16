(
  function () {
    // 定义对象的结构
    type myType = {
      name: string
      age: number
    }
    const obj: myType = {
      name: '小黄',
      age: 67
    }
    console.log(obj)

    // 接口用来定义一个类的结构，用来定义一个类中包含那些属性和方法
    // 接口可以重复声明    声明同一个类型
    // 同时接口也可以当成类型声明来使用
    // 接口可以重复声明    声明同一个类型
    // 接口可以在定义类的时候去限制类的结构


    // 接口可以重复声明    声明同一个类型
    interface myInterface{
      name: string
      age : number
    }
    // 接口可以重复声明    声明同一个类型

    interface myInterface {
      gender: string
    }
    const obj1: myInterface = {
      name: '小黑',
      age: 88,
      gender: "男"
    }
    console.log(obj1)


    // 接口可以在定义类的时候去限制类的结构
    // 接口中所有的属性都不能有实际值
    // 接口定义对象的结构，而不考虑实际值
    // 接口中所有的方法都是抽象的方法
    interface myInter {               // 接口：就是对类的一个限制
      name: string
      sayHellow(): void
    }
  // 定义类的时候，可以实现一个接口
    class MyClass implements myInter {
      name: string
      constructor(name: string) {
        this.name = name
      }
      sayHellow() {
        console.log(123)
      }
    }







  }
)()