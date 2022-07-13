import React, { Component } from 'react';
import styles from './GreedySnake.module.scss';
import GameControl from './GameControl';
import Food from './Food';
import Snake from './Snake';

class GreedySnake extends Component {
    direction = 'ArrowRight'; // 移动方向，初始为向右移动
    directionKeyCode = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'KeyA', 'KeyS', 'KeyD', 'KeyW'];
    gameOver = false; // 游戏结束
    paused = true; // 游戏暂停

    constructor() {
        super();

        this.state = {
            snakeData: [
                {
                    left: 0,
                    top: 0
                }
            ]
        };
    }
    componentDidMount() {
        // new GameControl();
        document.addEventListener('keydown', this.keydownHandler);
    }

    componentWillUnmount() {
        // console.log('unmount');
        document.removeEventListener('keydown', this.keydownHandler);
    }

    // 键盘按键按下事件处理函数
    keydownHandler = (event) => {
        // 阻止按键默认行为
        event.preventDefault();
        event.stopPropagation();

        // 获取按键code值
        const { code } = event;
        const { paused } = this;

        // 按键识别
        const isDirectionKey = this.directionKeyCode.includes(code);
        if (isDirectionKey && !paused) {
            // 方向切换
            this.direction = code;
        } else if (code === 'Space') {
            // 暂停/开始切换
            this.paused = !paused;
            if (!this.paused) {
                this.move();
            }
        } else if (code === 'KeyR') {
            // 复位操作
            // this.snake = new Snake();
            // this.snake.X = 0;
            // this.snake.Y = 0;
            // this.food = new Food();
            // this.scorePanel = new ScorePanle();
        }
    };

    // 蛇的移动
    move() {
        // 根据方向控制位置
        const { direction } = this;

        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'KeyW':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'KeyS':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'KeyD':
                // X += 10;
                this.updateSnakeData('left', +10);
                break;
            default:
                break;
        }

        // 食物检测
        // this.checkFood(X, Y);

        // 更新蛇头位置
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            this.gameOver = true;
            alert(e.message + 'Game Over!');
        }

        // 根据等级计算移动速度
        let speed = 300 - (this.scorePanel.level - 1) * 30;
        if (!this.paused && !this.gameOver) {
            setTimeout(this.move.bind(this), speed);
        }
    }

    // 更新蛇体数据
    updateSnakeData = (field, num) => {
        const { snakeData } = this.state;
        const len = snakeData.length;

        if (len > 1) {
            // 将后边一节蛇体的位置设置为前一节蛇体的位置
            for (let i = len - 1; i > 1; i--) {
                // 获取前一节蛇体的位置
                let top = snakeData[i - 1].top;
                let left = snakeData[i - 1].left;

                snakeData[i].left = left;
                snakeData[i].top = top;
            }
        } else {
            snakeData[0][field] += num;
        }
        this.setState({
            snakeData
        });
    };

    // 食物检测
    checkFood(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            // 增加分数
            this.scorePanel.addScore();

            // 刷新食物位置
            this.food.change();

            // 增加蛇的身体
            this.snake.addBody();
        }
    }

    render() {
        const { snakeData = [] } = this.state;
        return (
            // 主容器
            <div className={styles.main} id="main">
                {/* 游戏的舞台 */}
                <div className={styles.stage} id="stage">
                    {/* 蛇 */}
                    <Snake data={snakeData} />

                    {/* 食物 */}
                    <Food />
                </div>

                {/* 积分牌 */}
                <div id="score-panel" className={styles.scorePanel}>
                    <div>
                        Score:<span id="score">0</span>
                    </div>
                    <div>
                        Level:<span id="level">1</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default GreedySnake;
