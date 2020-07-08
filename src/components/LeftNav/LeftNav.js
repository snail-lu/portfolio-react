import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LeftNav.module.scss';
import avatarUrl from '../../assets/images/avatar.jpg';

const LeftNav = () => {
    return (
        <div className={styles.left_nav}>
            <div className={styles.left_nav_title}>
                <img src={avatarUrl} className={styles.avatar} />
                <div className={styles.title}>作品集</div>
            </div>
            <div className={styles.left_nav_content}>
                    <NavLink to="/" exact activeClassName={styles.nav_item_selected}>
                        <div className={styles.nav_item}>首页</div>
                    </NavLink>
                    <NavLink to="/effect" activeClassName={styles.nav_item_selected}>
                        <div className={styles.nav_item}>特效型</div>
                    </NavLink>
                    <NavLink to="/functional" activeClassName={styles.nav_item_selected}>
                        <div className={styles.nav_item}>功能型</div>
                    </NavLink>
            </div>
        </div>
    )
}

export default LeftNav;