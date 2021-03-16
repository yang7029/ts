"use strict";
(function () {
    const obj = {
        name: '小黄',
        age: 67
    };
    console.log(obj);
    const obj1 = {
        name: '小黑',
        age: 88,
        gender: "男"
    };
    console.log(obj1);
    // 定义类的时候，可以实现一个接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHellow() {
            console.log(123);
        }
    }
})();
