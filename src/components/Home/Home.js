import React from 'react';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* <p>Hey, </p>
            <p>Here is My Portfolio~</p>
            <p>ψ(｀∇´)ψ</p> */}
            <div className={styles.title}>
                <p className={styles.title_txt}>Portfolio</p>
            </div>
            <div className={styles.tab_list}>
                <NavLink to="/" exact activeClassName={styles.nav_item_selected}>
                    <div className={styles.tab_item}>Home</div>
                </NavLink>
                <NavLink to="/wroks" activeClassName={styles.nav_item_selected}>
                    <div className={styles.tab_item}>Works</div>
                </NavLink>
                <NavLink to="/whims" activeClassName={styles.nav_item_selected}>
                    <div className={styles.tab_item}>Whims</div>
                </NavLink>
                <NavLink to="/functional" activeClassName={styles.nav_item_selected}>
                    <div className={styles.tab_item}>About</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;