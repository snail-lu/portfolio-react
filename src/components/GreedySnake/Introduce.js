import styles from './GreedySnake.module.scss';

export default function Introduce() {
    return (
        <div className={styles.introduce_container}>
            <div className={styles.title}>玩法介绍</div>
            <div className={styles.usage}>键盘按对应键操作游戏</div>
            <ul>
                <li>
                    <span className={styles.label}>空格键：</span>开始/暂停
                </li>
                <li>
                    <span className={styles.label}>W、↑键：</span>向上
                </li>
                <li>
                    <span className={styles.label}>A、←键：</span>向左
                </li>
                <li>
                    <span className={styles.label}>S、↓键：</span>向下
                </li>
                <li>
                    <span className={styles.label}>D、→键：</span>向右
                </li>
                <li>
                    <span className={styles.label}>R键：</span>重新开始
                </li>
            </ul>
        </div>
    );
}
