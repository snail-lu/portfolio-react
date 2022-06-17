import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './DemoLayout.module.scss'

const DemoLayout = (props) => {
    const { children, title } = props
    let navigate = useNavigate()

    return (
        <div className={styles.demoDetailContainer}>
            <div className={styles.title}>
                <span onClick={() => navigate(-1)} className={styles.back_icon}></span>
                <span>{title}</span>
            </div>
            {children}
        </div>
    )
}

export default DemoLayout
