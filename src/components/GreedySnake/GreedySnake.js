import React, { Component } from 'react';
import styles from './GreedySnake.module.scss';
import GameControl from './GameControl';

class GreedySnake extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        new GameControl()
    }

    render() {
        return (
            // 主容器
            <div className={styles.main} id="main">
                {/* 游戏的舞台 */}
                <div className={styles.stage} id="stage">
                    {/* 蛇 */}
                    <div className={styles.snake} id="snake">
                        {/* 蛇头 */}
                        <div id = "snake_head"></div>
                        {/* 蛇体，动态添加 */}
                    </div>
        
                    {/* 食物 */}
                    <div id="food" className={styles.food}>
                        {/* 添加四个小div 来设置食物的样式 */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
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
        )
    }
}


export default GreedySnake;