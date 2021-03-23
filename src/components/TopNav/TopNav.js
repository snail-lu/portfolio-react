import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.scss';
import { showNav } from '../../redux/actions';
import { SHOW_NAV, HIDE_NAV } from '../../redux/actionTypes';

const TopNav = ({ show, switchClick }) => {
  return (
    <div className={styles.topNavContainer}>
      <div className={`${styles.menu_bar} ${show?styles.active:""}`} onClick={()=>switchClick(show?HIDE_NAV:SHOW_NAV)}>
        {
          show
          ?(<div className={styles.menu_list}>
              <NavLink to="/" exact className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>HOME</NavLink>
              <NavLink to="/projects" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>PROJECT</NavLink>
              <NavLink to="/demo" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>DEMO</NavLink>
              <NavLink to="/about" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>ABOUT</NavLink>
            </div>)
          :"MENU"
        }
      </div>
      <div></div>
    </div>
  )
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


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);