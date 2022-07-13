import React, { Component } from 'react';
import styles from './GreedySnake.module.scss';
import GameControl from './GameControl';
import Food from './Food';
import Snake from './Snake';

class GreedySnake extends Component {
    componentDidMount() {
        // new GameControl();
        // window.addEventListener('keydown', this.handleSpace)
    }

    componentWillUnmount() {
        // console.log('unmount');
        // window.removeEventListener('keydown', this.handleSpace)
    }

    // handleSpace = (e) => {
    //     if (e.code === 'Space') {
    //         e.preventDefault()
    //     }
    // }

    render() {
        return (
            // 主容器
            <div className={styles.main} id="main">
                {/* 游戏的舞台 */}
                <div className={styles.stage} id="stage">
                    {/* 蛇 */}
                    <Snake />
                    
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
