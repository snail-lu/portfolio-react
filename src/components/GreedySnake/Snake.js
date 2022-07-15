import styles from './GreedySnake.module.scss';
export default function Snake(props) {
    const { data = [] } = props;
    return (
        <div className={styles.snake}>
            {data.map(({ left, top }, index) => {
                return (
                    <div className={styles.snake_item} style={{ left: left + 'px', top: top + 'px' }} key={index}></div>
                );
            })}
        </div>
    );
}
