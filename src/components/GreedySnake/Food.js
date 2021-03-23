// 食物类
export default class Food {
    element;
    
    constructor() {
      this.element = document.getElementById('food');
    }
  
    // 获取食物坐标
    get X() {
      return this.element.offsetLeft;
    }
  
    get Y() {
      return this.element.offsetTop;
    }
  
    // 随机修改食物位置，区间[0,290]，且必须是10的整数倍
    change() {
      // 生成随机位置
      let left = Math.round(Math.random() * 29) * 10;
      let top = Math.round(Math.random() * 29) * 10;
  
      this.element.style.left = left + 'px';
      this.element.style.top = top + 'px';
    }
  }