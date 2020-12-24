import React from 'react';
import styles from './Home.module.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.title}>
                <p className={styles.title_txt}>Portfolio</p>
            </div>
            <div className={styles.tab_list}>
                <NavLink to="/" exact className={styles.tab_item}><span>Home</span></NavLink>
                <NavLink to="/wroks" className={styles.tab_item}><span>Works</span></NavLink>
                <NavLink to="/whims" className={styles.tab_item}><span>Whims</span></NavLink>
                <NavLink to="/about" className={styles.tab_item}><span>About</span></NavLink>
                <NavLink to="/about" className={styles.tab_item}><span>About</span></NavLink>
            </div>
        </div>
    )
}

export default Home;