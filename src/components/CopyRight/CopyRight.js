import React from 'react';
import styles from './CopyRight.module.scss';

const CopyRight = () => {
    return (
        <div className={styles.copy_right_container}>
            CopyRight © 2020 <a href="https://github.com/Snail-Lu/react-project-template" className={styles.github_link}>Snail-Lu</a>
        </div>
    )
}

export default CopyRight;