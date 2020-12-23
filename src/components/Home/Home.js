import React from 'react';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* <p>Hey, </p>
            <p>Here is My Portfolio~</p>
            <p>ψ(｀∇´)ψ</p> */}
            {/* <div className="title">
                Portfolio
            </div>
            <div className="tab-list">
                <NavLink to="/" exact activeClassName={styles.nav_item_selected}>
                    <div className={styles.nav_item}>Home</div>
                </NavLink>
                <NavLink to="/wroks" activeClassName={styles.nav_item_selected}>
                    <div className={styles.nav_item}>Works</div>
                </NavLink>
                <NavLink to="/whims" activeClassName={styles.nav_item_selected}>
                    <div className={styles.nav_item}>Whims</div>
                </NavLink>
                <NavLink to="/functional" activeClassName={styles.nav_item_selected}>
                    <div className={styles.nav_item}>About</div>
                </NavLink>
            </div> */}

            <div id={styles.clouds}>
                <div className={styles.cloud1}></div>
                <div className={styles.cloud2}></div>
                <div className={styles.cloud3}></div>
            </div>
            <div id={styles.clouds2}>
                <div className={styles.cloud1}></div>
                <div className={styles.cloud2}></div>
                <div className={styles.cloud3}></div>
            </div>
        </div>
    )
}

export default Home;