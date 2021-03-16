(function () {



  // 在定义函数或者是类的时候，如果遇到类型不明确就可以使用    泛型      用在函数或者类中       就是不确定的类型

  // 在函数名    的后面加上    <任意的大写字母>   就表示泛型      当函数执行的时候，我们就能知道  K  的类型
  function fn<K>(a: K): K {
    return a
  }


  // 直接调用具有泛型的函数
  fn(10)
  fn("90")    // ts 可以自动判断，并不是所有的类型都可以推断出来
  fn<string>('hello')    // 这种情况就是推断不出来，直接在      <定义类型>




  // 可以指定多个泛型
  function fun<T, K>(a: T, b: K):T {
    return a
  }
  fun<number, string>(133, 'perfect')



  // 泛型可以继承
  interface inter {
    length: number
  }
  function func<T extends inter>(a: T) {
    return a.length
  }


})()