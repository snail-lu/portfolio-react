import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.scss';
import { showNav } from '../../redux/actions';
import { SHOW_NAV, HIDE_NAV } from '../../redux/actionTypes';

const TopNav = ({show,switchClick,routerid}) => {
        return (
            <div className={styles.top_nav_container}>
              <div className={`${styles.menu_bar} ${show?styles.active:""}`} onClick={()=>switchClick(show?HIDE_NAV:SHOW_NAV)}>
                {
                  show
                  ?(
                    <div className={styles.menu_list}>
                      <NavLink to="/" exact className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>HOME</NavLink>
                      <NavLink to="/works" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>WROKS</NavLink>
                      <NavLink to="/whims" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>WHIMS</NavLink>
                      <NavLink to="/about" className={styles.menu_item} activeClassName={styles.selected} onClick={e=>e.stopPropagation()}>ABOUT</NavLink>
                    </div>
                  )
                  :"MENU"
                }
              </div>
              <div>{routerid==='works'?'WORKS':'WHIMS'}</div>
            </div>)
    //     )
    // }else{
        // return (
          // <div className={styles.top_nav}>
          //   <div className={styles.menu_bar} onClick={()=>switchClick(SHOW_NAV)}>MENU</div>
          //   <div>{routerid==='works'?'WORKS':'WHIMS'}</div>
          // </div>
        // )

        // <div className={styles.show_btn} onClick={()=>switchClick(SHOW_NAV)}>&#187;</div>
    // }
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