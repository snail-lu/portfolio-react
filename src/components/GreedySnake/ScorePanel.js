// 计分类
export default class ScorePanle {
    score = 0;
    level = 1;
    scoreEle;
    levelEle;
  
    // 最高等级
    maxLevel;
  
    // 等级提升门槛
    levelThreshold;
    
    constructor(maxLevel = 10, levelThreshold = 2) {
      this.scoreEle = document.getElementById('score');
      this.levelEle = document.getElementById('level');
      this.maxLevel = maxLevel;
      this.levelThreshold = levelThreshold;
    }
  
    // 增加分数
    addScore() {
      this.scoreEle.innerHTML = ++this.score + '';
  
      // 根据当前分数值，换算等级
      this.levelTransform();
    }
  
    // 换算等级
    levelTransform() {
      if(this.level < this.maxLevel) {
        this.level = Math.floor(this.score/this.levelThreshold)+1;
        this.levelEle.innerHTML = this.level + '';
      }
    }
  }