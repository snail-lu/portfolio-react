import React from 'react'
import styles from './Layout.module.scss'
import TopNav from '../TopNav/TopNav'
// import { renderRoutes } from 'react-router-config';
import { Outlet } from 'react-router-dom'

export default function Layout(props) {
    const { route } = props

    return (
        <div className={styles.layoutContainer}>
            <TopNav />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    )
}
