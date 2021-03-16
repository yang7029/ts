(function () {
  class Person {

    // 在TS中，可以在属性前面添加属性修饰符

    // piblic： 修饰的属性可以在任意位置访问（修改）    默认值
    // private：私有属性，私有属性只能在类的内部进行访问（修改）
             // 通过在类中添加方法使得私有属性可以被外界访问

    private _name: string
    private _age: number
    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    // // 定义方法，用来获取name属性
    // getName() {
    //   return this.name
    // }

    // // 定义方法，用来设置name属性
    // setName(value: string) {
    //   this.name = value
    //  }



  // getter：用来读取属性
  // setter：用来设置属性
            //被称为属性存储器



  // 以上两种方式太low了    在 TS 中设置getter的方式
    get name() {
      return this._name
    }

    set name(value: string ) {
      this._name = value
    }





  }

  // 现在属性是在对象中设置，属性的值可以任意修改
  // 属性可以任意被修改会导致对象中的数据会变得非常的不安全
  // get和set主动权掌握在自己手里





  const person = new Person("张三", 18)
  // console.log(person)
  // // person.age = -56        私有属性不能更改
  // console.log(person)
  // console.log(person.getName())

  // person.setName('李老四')     //进行传值设置set
  // console.log(person.getName())   //进行获取get
  console.log(person.name)
  person.name = '李老四'
  console.log(person.name)

})()