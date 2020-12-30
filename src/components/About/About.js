import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.about_me_container}>
            <div className={styles.about_item}><a href="https://github.com/snail-lu" target="_blank">GitHub</a></div>
            <div className={styles.about_item}><a href="https://yes-i-do.cn">Site</a></div>
            <div className={styles.about_item}><a href="https://www.cnblogs.com/snaillu/" target="_blank">Blogs</a></div>
            <div className={styles.about_item}><a href="mailto:snaillu@yeah.net" target="_blank">Email</a></div>
        </div>
    )
}

export default About
