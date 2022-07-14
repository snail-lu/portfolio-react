import Snake from './Snake';
import Food from './Food';

export default class GameControl {
    snake;
    food;
    direction = 'ArrowRight'; // 移动方向，初始为向右移动
    gameOver = false; // 游戏结束
    paused = true; // 暂停状态
    directionKeyCode = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'KeyA', 'KeyS', 'KeyD', 'KeyW'];

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        // this.scorePanel = new ScorePanle();
        this.init();
    }

    // 初始化
    init() {
        // 监听键盘按下事件
        document.addEventListener('keydown', this.keydownHandler);
    }

    // 键盘按下事件处理函数
    keydownHandler = (event) => {
        console.log(event, 'event');
        // 阻止按键默认行为
        event.preventDefault();
        event.stopPropagation();

        // 获取按键code值
        const { code } = event;
        const { paused } = this;

        // 根据按下的按键来设置蛇的移动方向
        const isDirectionKey = this.directionKeyCode.includes(code);
        if (isDirectionKey && !paused) {
            this.direction = code;
        } else if (code === 'Space') {
            this.paused = !paused;
            if (!this.paused) {
                this.move();
            }
        } else if (code === 'KeyR') {
            this.snake = new Snake();
            this.snake.X = 0;
            this.snake.Y = 0;
            this.food = new Food();
            // this.scorePanel = new ScorePanle();
        }
    };

    // 蛇的移动
    move() {
        // 根据方向控制位置
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
            case 'KeyW':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
            case 'KeyS':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
            case 'KeyA':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
            case 'KeyD':
                X += 10;
                break;
            default:
                break;
        }

        // 食物检测
        this.checkFood(X, Y);

        // 更新蛇头位置
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            this.gameOver = true;
            alert(e.message + 'Game Over!');
        }

        // 根据等级计算移动速度
        // let speed = 300 - (this.scorePanel.level - 1) * 30;
        // if (!this.paused && !this.gameOver) {
        //     setTimeout(this.move.bind(this), speed);
        // }
    }

    // 食物检测
    checkFood(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            // 增加分数
            // this.scorePanel.addScore();

            // 刷新食物位置
            this.food.change();

            // 增加蛇的身体
            this.snake.addBody();
        }
    }
}
