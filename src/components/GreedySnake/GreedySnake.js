import React, { Component } from 'react';
import styles from './GreedySnake.module.scss';
// import GameControl from './GameControl';
import Food from './Food';
import Snake from './Snake';

class GreedySnake extends Component {
    direction = 'ArrowRight'; // 移动方向，初始为向右移动
    directionKeyCode = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'KeyA', 'KeyS', 'KeyD', 'KeyW'];

    maxLevel = 10; // 最大等级
    levelThreshold = 2; // 每升一级所需分数

    constructor() {
        super();

        this.state = {
            // 蛇体数据
            snakeData: [
                {
                    left: 0,
                    top: 0
                }
            ],
            level: 1, // 当前等级
            score: 0, // 当前分数
            gameStatus: 0, // 游戏状态  0 暂停， 1 进行中， 2 已结束
            // 食物位置
            foodPosition: {
                left: '0px',
                top: '0px'
            }
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.keydownHandler);
        this.refreshFood();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownHandler);
    }

    // 键盘按键按下事件处理函数
    keydownHandler = (event) => {
        // 阻止按键默认行为
        event.preventDefault();

        // 获取按键code值
        const { code } = event;
        let { gameStatus } = this.state;

        // 按键识别
        const isDirectionKey = this.directionKeyCode.includes(code);
        if (isDirectionKey && gameStatus === 1) {
            // 方向切换
            this.direction = code;
        } else if (code === 'Space' && gameStatus !== 2) {
            // 暂停/开始切换
            gameStatus = gameStatus === 1 ? 0 : 1;
            this.setState({ gameStatus }, () => {
                if (this.state.gameStatus === 1) {
                    this.move();
                }
            });
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
    move = () => {
        // 根据方向控制位置
        switch (this.direction) {
            case 'ArrowUp':
            case 'KeyW':
                this.updateSnakeData('top', -10);
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.updateSnakeData('top', 10);

                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.updateSnakeData('left', -10);
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.updateSnakeData('left', 10);
                break;
            default:
                break;
        }

        // 食物检测
        this.checkFood();

        // 根据等级计算移动速度
        const { level, gameStatus } = this.state;
        let speed = 300 - (level - 1) * 30;
        if (gameStatus === 1) {
            setTimeout(this.move.bind(this), speed);
        }
    };

    // 更新蛇体数据
    updateSnakeData = (field, num) => {
        const { snakeData } = this.state;
        const len = snakeData.length;

        if (len > 1) {
            // 将后一节蛇体的位置设置为前一节蛇体的位置
            for (let i = len - 1; i > 0; i--) {
                // 获取前一节蛇体的位置
                let top = snakeData[i - 1].top;
                let left = snakeData[i - 1].left;

                snakeData[i].left = left;
                snakeData[i].top = top;
            }
            // 蛇头数据更新
            snakeData[0][field] += num;
        } else {
            // 蛇头数据更新
            snakeData[0][field] += num;
        }

        // 撞墙检测
        if (snakeData[0].left < 0 || snakeData[0].top < 0 || snakeData[0].left > 290 || snakeData[0].top > 290) {
            this.setState({
                gameStatus: 2
            });
        }
        this.setState({
            snakeData
        });
    };

    // 增加蛇体数据
    addSnakeData = () => {
        const { snakeData } = this.state;
        const snakeTail = snakeData[snakeData.length - 1];
        let newSnakeTail = {
            top: snakeTail.top,
            left: snakeTail.left
        };

        // 根据前进方向决定新数据的位置
        switch (this.direction) {
            case 'ArrowUp':
            case 'KeyW':
                newSnakeTail.top -= 10;
                break;
            case 'ArrowDown':
            case 'KeyS':
                newSnakeTail.top += 10;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                newSnakeTail.left += 10;
                break;
            case 'ArrowRight':
            case 'KeyD':
                newSnakeTail.left -= 10;
                break;
            default:
                break;
        }
        snakeData.push(newSnakeTail);
        this.setState({
            snakeData
        });
    };

    // 食物检测
    checkFood() {
        const { snakeData, foodPosition } = this.state;
        const snakeHead = snakeData[0];
        // debugger;
        if (snakeHead.top === foodPosition.top && snakeHead.left === foodPosition.left) {
            // 增加分数
            this.addScore();

            // 刷新食物位置
            this.refreshFood();

            // 增加蛇的身体
            this.addSnakeData();
        }
    }

    // 增加分数及计算等级
    addScore = () => {
        let { score, level } = this.state;
        score += 1;
        let newLevel = level;
        if (level < this.maxLevel) {
            newLevel = Math.floor(score / this.levelThreshold) + 1;
        }
        this.setState({
            score,
            level: newLevel
        });
    };

    // 刷新食物
    refreshFood = () => {
        // 生成随机位置
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.setState({
            foodPosition: {
                left,
                top
            }
        });
    };

    render() {
        const { snakeData = [], score, level, foodPosition, gameStatus } = this.state;
        return (
            // 主容器
            <div className={styles.main}>
                {/* 游戏的舞台 */}
                <div className={styles.stage}>
                    {gameStatus !== 1 && (
                        <div className={styles.game_status}>{gameStatus === 0 ? '游戏暂停' : '游戏结束'}</div>
                    )}
                    {/* 蛇 */}
                    <Snake data={snakeData} />

                    {/* 食物 */}
                    <Food position={foodPosition} />
                </div>

                {/* 积分牌 */}
                <div className={styles.scorePanel}>
                    <div>Score:{score}</div>
                    <div>Level:{level}</div>
                </div>
            </div>
        );
    }
}

export default GreedySnake;
