(
  function () {

    class Animal {
      name: string;
      constructor(name: string) {
        this.name = name
      }
      sayHellow() {
        console.log("动物在叫")
      }
    }
    const dog = new Animal("旺财")
    console.log(dog)


    class Dog extends Animal {
      //重写sayHellow
      sayHellow() {


        // 在类的方法中，super就表示当前类的父类
        super.sayHellow()
      }

      age: number

      // 如果咋子类中写了构造函数，在子类构造函数中必须对父类的构造函数调用,且要在子类的构造函数中加上父类的属性赋值，在子类中调用父类的构造函数，直接用     super(父类的属性传过来)
      constructor(name:string ,age: number) {

        super(name)
        this.age = age

      }


    }

    // const dog1 = new Dog("小花" )
    // console.log('yang', dog1)


    const dog2 = new Dog("小花", 34)
    console.log(dog2)
  }
)()