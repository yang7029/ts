// 表示记分牌的类
class ScorePanel {

  // 初始值
  score = 0;
  level = 1;

  // 分类和等级所在的元素，在构造函数中进行赋值
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置一个变量，限制等级
  maxLevel: number;
  // 设置一个变量，表示多少分时升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {     //es6语法，不传值，就用默认的10，传值的话，就用传的值

    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
    this.upScore = upScore
  }


  // 设置一个加分的项
  addScore() {
    // 设置等级，等级不能大于10
      this.score++;
      this.scoreEle.innerHTML = this.score + '' ;

    // 判断分数是多少
    if (this.score % 10 === 0) {
      this.levelUp()
    }


  }


  // 设置等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++;
      this.levelEle.innerHTML = this.level + '';
    }
  }

}

// const scroePalel = new ScorePanel(200,2)
// for (let i = 0; i < 100; i++) {
//   scroePalel.addScore()
// }



export default ScorePanel
