import React from 'react';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import avatarUrl from '../../assets/images/avatar.jpg';

const Home = (props) => {
    return (
        <div className={styles.home}>
            <div className={styles.coin_box}>
                <img className={styles.coin_front} src={avatarUrl} alt=""></img>
                <div className={styles.coin_back}>作品集</div>
            </div>
            <div className={styles.nav_list}>
                <NavLink to="/projects" className={styles.nav_item}><span className={styles.nav_label}>Project</span></NavLink>
                <NavLink to="/demo" className={styles.nav_item}><span className={styles.nav_label}>Demo</span></NavLink>
                <NavLink to="/about" className={styles.nav_item}><span className={styles.nav_label}>About</span></NavLink>
            </div>
        </div>
    )
}

export default Home;