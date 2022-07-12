import Snake from './Snake'
import Food from './Food'
import ScorePanle from './ScorePanel'

export default class GameControl {
    snake
    food
    scorePanel
    prevDirection = ''
    direction = ''
    gameOver = false
    paused = false
    validKeyCode = ['Space', 'ArrowRight']

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanle()
        this.init()
    }

    // 初始化
    init() {
        // 监听键盘按下事件
        document.addEventListener('keydown', (event) => {
            this.keydownHandler(event)
        })
        this.move()
    }

    // 键盘按下事件处理函数
    keydownHandler(event) {
        console.log(event, 'event')
        // 根据按下的按键来设置蛇的移动方向
        if (event.code === 'Space' && this.direction !== 'Space') {
            this.prevDirection = this.direction
            this.direction = event.code
        } else if (event.code === 'Space' && this.prevDirection === 'Space') {
            this.direction = this.prevDirection
        } else {
            this.direction = event.code
        }
    }

    // 蛇的移动
    move() {
        // 根据方向控制位置
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10
                break
            case 'ArrowDown':
            case 'Down':
                Y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                X -= 10
                break
            case 'ArrowRight':
            case 'Right':
                X += 10
                break
            default:
                break
        }

        // 食物检测
        this.checkFood(X, Y)

        // 更新蛇头位置
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            this.gameOver = true
            alert(e.message + 'Game Over!')
        }

        // 根据等级计算移动速度
        let speed = 300 - (this.scorePanel.level - 1) * 30
        !this.gameOver && setTimeout(this.move.bind(this), speed)
    }

    // 食物检测
    checkFood(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            // 增加分数
            this.scorePanel.addScore()

            // 刷新食物位置
            this.food.change()

            // 增加蛇的身体
            this.snake.addBody()
        }
    }
}
