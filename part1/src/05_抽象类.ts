(
  function () {

    // abstract 开头的类，叫做抽象类
    // 抽象类，和别的类区别不大，只是不能用来创建对象
    // 所以说，抽象类，是专门用来继承的类
    // 抽象类中可以添加抽象的方法

    abstract class Animal {
      name: string;
      constructor(name: string) {
        this.name = name
      }

      // 抽象方法:只定义结构，不传值，返回一个空
      // 抽刑方法使用 abstract 开头，没有方法体
      // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
     abstract sayHellow(): void
    }


    // 当我们不想对父类进行实例化对象，进行一个赋值，就得加上abstract，就变成了抽象类
    // const dog = new Animal("旺财")
    // console.log(dog)


    class Dog extends Animal {
      //重写sayHellow
      sayHellow() {
        // 在类的方法中，super就表示当前类的父类
        console.log("哇哈哈哈")

      }



    }

    const dog1 = new Dog("小花" )
    console.log(dog1)
  }
)()