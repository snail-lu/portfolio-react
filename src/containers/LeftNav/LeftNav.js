import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './LeftNav.module.scss';
import { showNav } from '../../redux/actions';
import { SHOW_NAV, HIDE_NAV } from '../../redux/actionTypes';
import avatarUrl from '../../assets/images/avatar.jpg';

const LeftNav = ({show,switchClick}) => {
    if(show){
        return (
            <div className={`${styles.left_nav} ${styles.left_nav_to_show}`}>
                <div className={styles.left_nav_title}>
                    <img src={avatarUrl} className={styles.avatar} alt="头像" />
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
                 <div className={styles.hide_btn} onClick={()=>switchClick(HIDE_NAV)}>&#171;</div>
            </div>
        )
    }else{
        return <div className={styles.show_btn} onClick={()=>switchClick(SHOW_NAV)}>&#187;</div>
    }
}

const mapStateToProps = state => {
    return {
      show: state.showNav
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      switchClick: type => {
        dispatch(showNav(type))
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);