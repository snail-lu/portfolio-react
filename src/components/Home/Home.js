import React from 'react';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import avatarUrl from '../../assets/images/avatar.jpg';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.coin_box}>
                <img className={styles.coin_front} src={avatarUrl} alt=""></img>
                <div className={styles.coin_back}>作品集</div>
            </div>
            <div className={styles.nav_list}>
                <NavLink to="/works" className={styles.nav_item}><span className={styles.nav_label}>Works</span></NavLink>
                <NavLink to="/whims" className={styles.nav_item}><span className={styles.nav_label}>Whims</span></NavLink>
                <NavLink to="/about" className={styles.nav_item}><span className={styles.nav_label}>About</span></NavLink>
            </div>
        </div>
    )
}

export default Home;