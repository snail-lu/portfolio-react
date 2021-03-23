export default class Snake {
    // 蛇容器
    snake: HTMLElement;
  
    // 蛇头元素
    head: HTMLElement;
  
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
  
    constructor() {
      this.snake = document.getElementById('snake')!;
      this.head = document.getElementById('snake_head')!;
      this.bodies = this.snake.getElementsByTagName('div');
    }
  
    // 获取蛇头坐标
    get X() {
      return this.head.offsetLeft;
    }
  
    get Y() {
      return this.head.offsetTop;
    }
  
    // 设置蛇头坐标
    set X(value: number) {
      // 值未变动
      if(this.X === value) {
        return;
      }
  
      // 掉头检测
      if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
        // 向左掉头
        if(value < this.X){
          value = this.X + 10;
        } else {
          value = this.X - 10;
        }
      }
  
      // 撞墙检测
      if(value<0 || value>290) {
        throw new Error('撞墙了！');
      }
  
      this.moveBody();
      this.head.style.left = value + 'px';
  
      // 检测蛇头与蛇体是否相撞
      this.checkHeadBody();
    }
  
    set Y(value: number) {
      if(this.Y === value) {
        return;
      }
  
      // 掉头检测
      if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
        // 向上掉头
        if(value < this.Y){
          value = this.Y + 10;
        } else {
          value = this.Y - 10;
        }
      }
  
      // 撞墙检测
      if(value<0 || value>290) {
        throw new Error('撞墙了！');
      }
      this.moveBody();
      this.head.style.top = value + 'px';
  
      // 检测蛇头与蛇体是否相撞
      this.checkHeadBody();
    }
  
    // 蛇体增长
    addBody() {
      this.snake.insertAdjacentHTML('beforeend',"<div></div>");
    }
  
    // 蛇体移动
    moveBody(){
      // 将后边一节蛇体的位置设置为前一节蛇体的位置
      for(let i = this.bodies.length-1; i>0; i--) {
        // 获取前一节蛇体的位置
        let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
  
        (this.bodies[i] as HTMLElement).style.left = X + 'px';
        (this.bodies[i] as HTMLElement).style.top = Y + 'px';
      }
    }
  
    // 检测蛇头是否与蛇体相撞
    checkHeadBody() {
      for(let i=1; i<this.bodies.length; i++) {
        let el = this.bodies[i] as HTMLElement;
        if(this.X === el.offsetLeft && this.Y === el.offsetTop){
          throw new Error('撞到自己了！');
        }
      }
    }
  }