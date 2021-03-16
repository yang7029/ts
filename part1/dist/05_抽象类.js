"use strict";
(function () {
    // abstract 开头的类，叫做抽象类
    // 抽象类，和别的类区别不大，只是不能用来创建对象
    // 所以说，抽象类，是专门用来继承的类
    // 抽象类中可以添加抽象的方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // 当我们不想对父类进行实例化对象，进行一个赋值，就得加上abstract，就变成了抽象类
    // const dog = new Animal("旺财")
    // console.log(dog)
    class Dog extends Animal {
        //重写sayHellow
        sayHellow() {
            // 在类的方法中，super就表示当前类的父类
            console.log("哇哈哈哈");
        }
    }
    const dog1 = new Dog("小花");
    console.log(dog1);
})();
