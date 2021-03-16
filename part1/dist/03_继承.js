"use strict";
// 立即执行函，表示类的名字和别的不重复，在这个立即执行函数的作用域里面
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHellow() {
            console.log("动物在叫");
        }
    }
    // 继承： 子类继承父类，Animal为父类，Dog为子类，
    // 使用继承后，子类继承父类的所有方法和属性
    // 通过继承可以将多个类中的共有的代码写在一个父类中
    // 这样就只可以在父类中写一次，且所有的子类都同时拥有父类中的属性和方法
    // 如果希望在子类中添加一些父类中没有的属性和方法，直接在子类中加
    // 在开发中千万不要修改别人的类，可以在子类中添加      遵循：添加不删除不更改原则
    // Dog继承Animal的类
    class Dog extends Animal {
        // 支持方法的重写，覆盖父类的方法
        sayHellow() {
            console.log("汪汪汪");
        }
        run() {
            console.log("paopaopao");
        }
    }
    const dog = new Dog("小花", 4);
    const dog1 = new Dog("花花", 5);
    console.log(dog);
    dog.sayHellow();
    dog.run();
    console.log(dog1);
    dog1.sayHellow();
    // Cat继承Animal的类
    class Cat extends Animal {
        sayHellow() {
            console.log("喵喵喵");
        }
    }
    const cat = new Cat("小黄", 8);
    const cat1 = new Cat("晃晃", 9);
    console.log(cat);
    cat.sayHellow();
    console.log(cat1);
    cat1.sayHellow();
})();
