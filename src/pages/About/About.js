import React from 'react';
import styles from './About.module.scss';
import githubUrl from '../../assets/images/github.png';
import siteUrl from '../../assets/images/site.png';
import blogUrl from '../../assets/images/cnblogs.png';
import emailUrl from '../../assets/images/email.png';

const About = () => {
    return (
        <div className={styles.about_me_container}>
            <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://github.com/snail-lu" target="_blank" title="github">
                <img className={styles.icon} src={githubUrl} alt=""></img>
            </a>
            <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://yes-i-do.cn" title="个人网站">
                <img className={styles.icon} src={siteUrl} alt=""></img>
            </a>
            <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://www.cnblogs.com/snaillu/" target="_blank" title="博客">
                <img className={styles.icon} src={blogUrl} alt=""></img>
            </a>
            <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="mailto:snaillu@yeah.net" target="_blank" title="snaillu@yeah.net">
                <img className={styles.icon} src={emailUrl} alt=""></img>
            </a>
        </div>
    )
}

export default About
