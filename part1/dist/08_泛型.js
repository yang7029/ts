"use strict";
(function () {
    // 在定义函数或者是类的时候，如果遇到类型不明确就可以使用    泛型      用在函数或者类中       就是不确定的类型
    // 在函数名    的后面加上    <任意的大写字母>   就表示泛型      当函数执行的时候，我们就能知道  K  的类型
    function fn(a) {
        return a;
    }
    // 直接调用具有泛型的函数
    fn(10);
    fn("90"); // ts 可以自动判断，并不是所有的类型都可以推断出来
    fn('hello'); // 这种情况就是推断不出来，直接在      <定义类型>
    // 可以指定多个泛型
    function fun(a, b) {
        return a;
    }
    fun(133, 'perfect');
    function func(a) {
        return a.length;
    }
})();
