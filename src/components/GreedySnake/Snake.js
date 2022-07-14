import { Component } from 'react';
import styles from './GreedySnake.module.scss';
class Snake extends Component {
    // 获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X(value) {
        // 值未变动
        if (this.X === value) {
            return;
        }

        // 掉头检测
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            // 向左掉头
            if (value < this.X) {
                value = this.X + 10;
            } else {
                value = this.X - 10;
            }
        }

        // 撞墙检测
        if (value < 0 || value > 290) {
            throw new Error('撞墙了！');
        }

        this.moveBody();
        this.head.style.left = value + 'px';

        // 检测蛇头与蛇体是否相撞
        this.checkHeadBody();
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }

        // 掉头检测
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            // 向上掉头
            if (value < this.Y) {
                value = this.Y + 10;
            } else {
                value = this.Y - 10;
            }
        }

        // 撞墙检测
        if (value < 0 || value > 290) {
            throw new Error('撞墙了！');
        }
        this.moveBody();
        this.head.style.top = value + 'px';

        // 检测蛇头与蛇体是否相撞
        this.checkHeadBody();
    }

    // 检测蛇头是否与蛇体相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let el = this.bodies[i];
            if (this.X === el.offsetLeft && this.Y === el.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }

    render() {
        const { data = [] } = this.props;
        return (
            <div className={styles.snake}>
                {data.map(({ left, top }, index) => {
                    return (
                        <div
                            className={styles.snake_item}
                            style={{ left: left + 'px', top: top + 'px' }}
                            key={index}
                        ></div>
                    );
                })}
            </div>
        );
    }
}

export default Snake;
