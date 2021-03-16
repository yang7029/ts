"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
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
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    // 现在属性是在对象中设置，属性的值可以任意修改
    // 属性可以任意被修改会导致对象中的数据会变得非常的不安全
    // get和set主动权掌握在自己手里
    const person = new Person("张三", 18);
    // console.log(person)
    // // person.age = -56        私有属性不能更改
    // console.log(person)
    // console.log(person.getName())
    // person.setName('李老四')     //进行传值设置set
    // console.log(person.getName())   //进行获取get
    console.log(person.name);
    person.name = '李老四';
    console.log(person.name);
})();
