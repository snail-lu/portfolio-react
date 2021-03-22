import React from 'react';
import styles from './About.module.scss';
import githubUrl from '../../assets/images/github.png';
import siteUrl from '../../assets/images/site.png';
import blogUrl from '../../assets/images/cnblogs.png';
import emailUrl from '../../assets/images/email.png';
import Layout from '../../components/Layout/Layout';

const About = () => {
    return (
        <Layout>
            <div className={styles.about_me_container}>
                <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://github.com/snail-lu" target="_blank" title="github">
                    <img className={styles.icon} src={githubUrl}></img>
                </a>
                <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://yes-i-do.cn" title="个人网站">
                    <img className={styles.icon} src={siteUrl}></img>
                </a>
                <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="https://www.cnblogs.com/snaillu/" target="_blank" title="博客">
                    <img className={styles.icon} src={blogUrl}></img>
                </a>
                <a className={`${styles.about_item} flex-box flex-box-v-center flex-box-h-center`} href="mailto:snaillu@yeah.net" target="_blank" title="snaillu@yeah.net">
                    <img className={styles.icon} src={emailUrl}></img>
                </a>
            </div>
        </Layout>
    )
}

export default About
