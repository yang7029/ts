class Snake {


  // 表示蛇头元素
  head: HTMLElement;
  // 获取蛇的容器
  element:HTMLElement;
  // 表示蛇的身体（包括蛇头）
  bodies: HTMLCollection;    //HTMLCollection:是个实时刷新的集合，当给sanke里面添加新的元素的时候，HTMLCollection,会自动添加
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement     //找到这个蛇头 进行类型断言，表示这个蛇就是HTMLelement这个元素
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
  }

  // 获取蛇头的X位置
  get X () {
    return this.head.offsetLeft
  }

  // 获取蛇头的纵坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的横坐标
  set X(value: number) {
    this.head.style.left = value + 'px'
  }

  // 设置蛇头的纵坐标
  set(value: number) {
    this.head.style.top = value + 'px'
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element添加一个div
    this.element.insertAdjacentHTML('beforeend', "<div></div>")

  }



}