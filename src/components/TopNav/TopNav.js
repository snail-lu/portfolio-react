import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.scss';

const TopNav = () => {
    return (
        <ul className={styles.top_nav}>
            <li className={styles.nav_item}>
                <NavLink to="/" exact activeClassName={styles.nav_item_selected}>Home</NavLink>
            </li>
            <li className={styles.nav_item}>
                <NavLink to="/todolist" activeClassName={styles.nav_item_selected}>TodoList</NavLink>
            </li>
            <li className={styles.nav_item}>
                <NavLink to="/topics" activeClassName={styles.nav_item_selected}>Topics</NavLink>
            </li>
        </ul>
    )
}

export default TopNav;