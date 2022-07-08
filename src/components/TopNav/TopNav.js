import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TopNav.module.scss'
import logoUrl from '../../assets/icons/logo.png'

const TopNav = () => {
    return (
        <div className={styles.topNavContainer}>
            <div className="flex-box flex-box-v-center">
                <img src={logoUrl} className={styles.logo} alt="logo" />
                <div className={`${styles.menu_list} flex-box`}>
                    <NavLink to="/" className={styles.menu_item} onClick={(e) => e.stopPropagation()}>
                        PROJECT
                    </NavLink>
                    <NavLink to="/demo" className={styles.menu_item} onClick={(e) => e.stopPropagation()}>
                        DEMO
                    </NavLink>
                </div>
                <a
                    href="https://github.com/Snail-Lu/portfolio-react"
                    className={styles.icon_github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="iconfont icon-github" style={{ 'font-size': '2.5rem' }}></span>
                </a>
            </div>
            <div></div>
        </div>
    )
}

export default TopNav
