import { Component } from 'react';
import styles from './GreedySnake.module.scss';
import Food from './Food';
import Snake from './Snake';
import GameStatus from './GameStatus';
import _ from 'lodash';

class GreedySnake extends Component {
    direction = 'ArrowRight'; // 移动方向，初始为向右移动
    directionKeyCode = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'KeyA', 'KeyS', 'KeyD', 'KeyW'];
    speed = 300; // 移动速度
    maxLevel = 10; // 最大等级
    levelThreshold = 2; // 每升一级所需分数
    timer = null;

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
            gameStatus: 0, // 游戏状态  0 初始状态， 1 进行中， 2 已暂停， 3 已结束
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
        } else if (code === 'Space' && gameStatus !== 3) {
            // 暂停/开始切换
            gameStatus = gameStatus === 1 ? 2 : 1;
            this.setState({ gameStatus }, () => {
                if (this.state.gameStatus === 1) {
                    this.move();
                } else {
                    clearTimeout(this.timer);
                }
            });
        } else if (code === 'KeyR') {
            // 复位操作
            this.setState({
                snakeData: [
                    {
                        left: 0,
                        top: 0
                    }
                ],
                level: 1,
                score: 0,
                gameStatus: 0
            });
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
    };

    // 更新蛇体数据
    updateSnakeData = (field, num) => {
        const snakeData = _.cloneDeep(this.state.snakeData);
        // const snakeData = [...this.state.snakeData];
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
                gameStatus: 3
            });
            clearTimeout(this.timer);
            return;
        }

        this.setState(
            {
                snakeData
            },
            () => {
                // 食物检测
                this.checkFood();
                this.timer = setTimeout(this.move.bind(this), this.speed);
            }
        );
    };

    // 增加蛇体数据
    addSnakeData = () => {
        const snakeData = _.cloneDeep(this.state.snakeData);
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
        const { foodPosition, snakeData } = this.state;
        const snakeHead = snakeData[0];
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
        // 计算移动速度
        this.speed = 300 - (level - 1) * 30;
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
                    {/* 游戏状态 */}
                    <GameStatus status={gameStatus} />

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
