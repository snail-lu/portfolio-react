import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './DemoLayout.module.scss';

const DemoLayout = (props) => {
  const { children, title } = props;
  
  return (
    <div className={styles.demoDetailContainer}>
        <div className={styles.title}>
            <span onClick={()=>props.history.goBack()} className={styles.back_icon}></span>
            <span>{ title }</span>
        </div>
        { children }
    </div>
  )
}

export default withRouter(DemoLayout);