import styles from './GreedySnake.module.scss';

export default function GameStatus(props) {
    if (props.status === 0) {
        return <div className={styles.game_status}>按空格键开始游戏</div>;
    } else if (props.status === 2) {
        return <div className={styles.game_status}>游戏暂停</div>;
    } else if (props.status === 3) {
        return <div className={styles.game_status}>游戏结束</div>;
    } else {
        return null;
    }
}
