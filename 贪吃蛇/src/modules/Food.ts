// 用 ts 写代码，必须写在类中

// 定义食物的类  Food
class Food {


  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;   //获取页面元素food将其赋值给element     !:感叹号的意思是获取的这个元素不可能为空
  }
          // 怎么判断蛇被食物吃了呢？    就是蛇头和食物坐标重合
  // 定义一个方法，得到  X  轴的坐标
  get X(){
    return this.element.offsetLeft;
  }


  // 定义一个方法，得到  Y  轴的坐标
  get Y() {
    return this.element.offsetTop
  }


  // 修改食物的位置的方法
  // 食物出现的位置应该是在stage框里，最小是 0  最大是290   蛇的大小是整10的， 出现不适整10的位置的随机数就吃不到食物，所以食物也是整10的
  change() {



    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random()* 29)*10


    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }


}

// 类中定义的方法，可以直接调用通过     new    出来的实例对象进行方法   food.定义的方法
// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
// console.log(food.X, food.Y)

export default Food