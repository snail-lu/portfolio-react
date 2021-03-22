import React from 'react'
import styles from './Layout.module.scss';
import TopNav from '../../containers/TopNav/TopNav';

export default function Layout(props) {
  const {
    children,
  } = props;

  return (
    <div className={styles.layoutContainer}>
        <TopNav />
        <main className={styles.content}>{ children }</main>
    </div>
  )
}