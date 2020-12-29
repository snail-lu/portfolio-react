import React from 'react';
import styles from './About.module.scss';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.about_me_container}>
            <div className={styles.about_item}><a href="https://github.com/snail-lu">GitHub</a></div>
            <div className={styles.about_item}><a href="https://yes-i-do.cn">个人网站</a></div>
            <div className={styles.about_item}><a href="https://www.cnblogs.com/snaillu/">Blogs</a></div>
            <div className={styles.about_item}><a href="mailto:snaillu@yeah.net">Email</a></div>
        </div>
    )
}

export default About
