//也可以使用字面量进行类型声明
let a: 10;
a = 10;

//    或的使用（ | ）     （&：表示同时）      (这个类型也叫做联合类型：限制某个值就是这几个类型，不能有其他类型，可以写多个或)
let b: 'male' | 'female';
b = "male";
b = "female"

let c: boolean | string | number;
c = true;
c = 'hellow';
c = 89;

//   any类型的使用    表示的是任意类型，一个类型设置类型为any，相当于对该变量关闭了类型检测(在TS中，不推荐使用)
let d: any
let f;//声明变量，不指定类型，则TS解析器会自动判断变量的类型为any（隐式的类型）
d = true
d = 'hellow'
d = 34


//   unknown   表示未知类型的值   在不确定类型，不推荐使用any类型的情况下，可以使用unknown，unknown不会关闭类型检测
let e: unknown
e = 10;
e = 'hellow'
e = true

let s: string
s = d   //d的类型是any，他可以赋值给任意变量,但是也可以改变被赋值的类型为any     （TS中不推荐使用any，推荐使用unknown）
// s = e   //e表示一个未知类型的值，s表示的是一个string，把一个未知类型的值赋值给string，就会报错
// 需求：如果就想把unknown类型的d值赋值给string类型的s，那么就得进行类型判断   //   或者用类型断言


// 类型判断：
if (typeof e === 'string') {
  s = e
}
// 类型断言：用 as  和   <类型>
s = e as string       //表示 e 就是一个string
s = <string> e        //   变量 as 类型          //   <类型> 变量


// any和unknown的区别：
// any：对变量定义类型为any，那么会对该变量关闭类型检测
// unknown：对变量定义类型为unknown，会对变量进行类型检测，所以赋值给另一个变量，会报错，其实就是一个类型安全的any

// 函数的返回值
function fn(sum: number): number | boolean{     //表示函数的返回值为number或者boolean
  if (sum > 10) {
    return 1
  } else {
    return true
  }
}
//   void  函数返回值为 空
function func(): void {   //void表示函数没有返回值，如果出现return，那么就会报错，return null | undefined不会报错
  console.log(347)
}

//   never  表示函数永远没有  返回结果    很少用
function func1(): never {
  throw  new Error('报错了')
}