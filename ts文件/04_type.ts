// // 定义对象    一切皆对象
// // let a :object    //一般不这样声明，但是在开发中一般不不用字面量的方式声明对象
// //声明的变量一定和赋值的变量一一对应，但是声明的变量可以后面加上（ ？），用于表示这个值在赋值的变量中可以赋值，或者不赋值都可以
// let bb: {
//   name: string
//   age?: number
// }
// bb = {
//   name: '张三',
//   age: 67
// }

// //需求：如果赋值的时候，可以任意添加多个属性名和属性值，但是声明的时候也可以一个一个添加所对应赋值的类型，这样做太麻烦，最简单的思路是做个数组，定义类型例子：
// let cc: {
//   name: string,
//   [PropName: string]: any, //*******表示任意类型的属性     //意思就是属性名的类型是string（对象中的属性名是字符串）属性名的类型不进行校验，那么赋值的时候可以随意添加属性
// }
// cc = {
//   name: 'wangsan',
//   age: 23,
//   meal: 'gender',
//   hellos: true
// }



// //定义函数      语法：（形参：类型, 形参：类型......） => 定义函数返回值类型
// let aaa: (a: number, b: number) => number      //定义函数aaa的参数为a:number   b:number     返回值为number
// aaa = function (a, b) {
//   return a+b
// }




// //定义数组   开发的时候，数组中都是存同一种类型的值     两种写法
// let ee: string[]    //意思就是  ee  是个数组，里面的值都是字符串     表示字符串数组 第一种写法
// let dd: number[]    //表示数字数组
// dd = [1,2,3,4]
// let ff: Array<string>    //第二种写法，
// ff = ['1', '2', '3']





// // 定义元组     元组：就是固定长度的数组      当数组里面的值是固定的时候，用元组      数量和类型必须一一对应
// let h: [string, string]
// h = ['hellow', 'world']




// //定义枚举     多个值之间选择的时候，就用枚举
// enum Gender{
//   Male = 0,
//   Female = 1
// }

// let gg: {
//   name: string
//   gender: Gender
// }
// gg = {
//   name: '孙悟空',
//   gender: Gender.Male
// }





// // 类型的别名：
// type myType = 1 | 2 | 3 | 4 | 5 | 6 | 7
// let k: myType
// let l: myType
// k = 1
// // k = 8   报错，因为myType中没有8，所以报错


// // ---------------------------------------------------------------------ts编译规范

// // 新建一个tsconfig.json       直接tsc，直接进行编译        tsc -w直接监视所有ts文件
// // tsconfig.json 是ts编译器的配置文件，提示编译器可以根据他的信息类对代码进行编译
// // include：用来指定那些ts文件需要被编译
//         // 路径：** 表示任意目录
//         //      * 表示任意文件

// //exclude: 用来指定那些文件不被编译
//         // 路径：** 表示任意目录
//         //      * 表示任意文件

// //extends:表示那些文件被继承，就是说，有一个文件里面的配置我需要，但是我不想手写，就用到了extends

// //files:指定被编译的文件列表，只有需要编译的文件少是才会用到

// //compilerOptions:最重要的编译选项

// {
//   "include": [
//     "src/**/*.ts",
//     "src/**/*.tsx",
//     "src/**/*.vue",
//     "tests/**/*.ts",
//     "tests/**/*.tsx"
//   ],
//   "exclude": [
//     "node_modules"
//   ]，
//   "extends": [
//     'xxx.json'
//   ],
//   "files": [
//       "core.ts",
//       "sys.ts",
//       "type.ts"
//   ],
//     "compilerOptions": {
//     //表示ts被编译成js的版本，默认成转换成ES3    传错值，看正确的值长啥样
//     "target": "ES5",
//     //表示指定要使用的模块化的规范      传错值，看正确的值长啥样       有点东西
//     "module": "ES6"
//     //用来指定项目中使用的库，一般不用去改
//     "lib": ["ES5", "dom" 。。。。。。],
//     //用来指定编译后的文件放在哪个目录文件夹下面
//     "outDir": "./dist",
//     //将代码合并成一个文件
//     "outFile": "./dist/app.js"   //将代码编译合并后，放到dist下面的app.js文件中
//   },
//   //是否对js文件进行编译，默认为false
//   "allowJS": false,
//   //是否检查js代码符合语法规范，默认是false
//   "checkJS": false,
//   //是否移除注释，意思就是说在ts中的文件注释，编译的时候，能不能再编译后的文件中进行显示
//   "removeComments": true,
//   //不生成编译后的文件，意思是不生成编译后的文件
//   "noEmit": false,
//   //当有错误的时候不生成编译后的文件
//   "noEmitError": true,
//   //用来设置编译后的js文件是否使用严格模式，默认为false      在编译后的文件中会出现    'user strict'
//   "alwaysStrict":true
//   //不指定类型，变为any类型，，，，，，，不允许使用any类型，，，，，不推荐使用
//   "noImpicitAny": true
//   //不允许不明确类型的this
//   "noImpicitThis": false
//   //严格的检查空值
//   "strictNullChecks": false
//  //所有严格检查的总开关     推荐使用
//   "strict": false

// }



// // ------------------------------------------------------webpack配置

// // 初始化项目
// npm i nint -y
// // 下载四个包
// npm i - D webpack webpack - cli typescript ts - loader
// // 新建 webpack.config.js文件

// // 1.引入一个包
// const path = require('path')
// const HTMLWebpackPlugin = require('html-webpacl-plugin')
// const cleanWebpackPlugin = require('clean-webpacl-plugin')


// // 2.webpack的所有配置信息都在module.exports中
// module.exports = {

//   // 指定入口文件
//   entry: '../src/index.ts'

//   // 指定打包的文件所在目录
//   output: {

//     //指定打包的文件所在目录
//     path: path.resolve(__dirname, path)

//     // 打包后的文件名
//     filename: 'bundle.js'

//     //告诉webpack不使用箭头函数
//     environment: {
//       arrowFunction:false
//     }
//   }

//   // 指定webpack打包时要使用的模块
//   module: {
//     // 指定加载的规则
//     rules: [
//       {
//         // test指定的是规则生效的文件
//         test: /\.ts$/,      //表示加载所有的以ts结尾的文件
//         // 要使用的loader
//         // use:'ts-loader',
//         use: [
//           // 配置bable
//           {
//             // 指定加载器
//             loader: 'bable-loader'
//             // 配置bable
//             options: {
//               // 设置预定义环境
//               presets: [
//                 // 指定环境插件
//                 "@bable/preset-e"
//                 // 配置信息
//                 {
//                 // 要兼容的浏览器
//                   targets: {
//                     "chrome": "88"
//                   },
//                   // 指定corejs的版本
//                   "core-js": "3"
//                 // 使用corejs的方式 “usage”  表示按需加载
//                   "useBuiltIns": "usage"
//                 }

//               ]
//             }
//           },
//           'ts-loader'
//         ],
//         // 指定要排除的文件夹
//         exclude: /node_modules/
//       }
//     ]
//   }

//   // 在package.json中设置build
//   // "bulild": "webpack",


//   // 配置webpack插件   引入html文件
//   plugin: [
//     new cleanWebpackPlugin(),
//     new HTMLWebpackPlugin()
//     // 所有引入的文件都以src/index.html为模板进行编译
//     template: './src/index.html'
//   ]

//   // 用来设置的引用的模块,
//   resolve: {
//     extensions:['.ts', '.js']     //项目中有模块，但是设置以 ts 和 js 结尾的文件都可以当成模块来使用
//   }
// }


// // 安装插件     引入html文件
// npm i html-webpack-Plugin
// const HTMLWebpackPlugin = require('html-webpacl-plugin')

// // 安装插件   这个插件是和webpack关联的，当你的文件发生变化的时候，会自动刷新你编译的文件
// npm i - D webpack - dev - server
// // 在package.json中设置start     启动 webpack 并且在谷歌浏览器中打开
// "start": "webpack serve --open chrome.exe",

// // 安装插件     意思是在进行编译的时候，把久的编译的文件进行删除，在把新的编译的文件在进行编译，保证dist目录下的文件是最新的
// npm i - D clean - webpack - plugin
// const cleanWebpackPlugin = require('clean-webpacl-plugin')

// // 安装插件，可以兼容到不同的浏览器 bable  在module里面配置
// npm i - D @babel/core @babel/preset-env（提前预制了环境，预先设置的环境） babel-loader（把webpack和bable结合） core-js（模拟js的运行环境，就是老版本的浏览器用到最新的技术）

// test



//temp test

