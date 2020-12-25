import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.scss';
import { showNav } from '../../redux/actions';
import { SHOW_NAV, HIDE_NAV } from '../../redux/actionTypes';
import avatarUrl from '../../assets/images/avatar.jpg';

const TopNav = ({show,switchClick,routerid}) => {
    // if(show){
        return (
            // <div className={`${styles.left_nav} ${styles.left_nav_to_show}`}>
            //     <div className={styles.left_nav_content}>
            //             <NavLink to="/" exact activeClassName={styles.nav_item_selected}>
            //                 <div className={styles.nav_item}>首页</div>
            //             </NavLink>
            //             <NavLink to="/effect" activeClassName={styles.nav_item_selected}>
            //                 <div className={styles.nav_item}>特效型</div>
            //             </NavLink>
            //             <NavLink to="/functional" activeClassName={styles.nav_item_selected}>
            //                 <div className={styles.nav_item}>功能型</div>
            //             </NavLink>
            //     </div>
            //      <div className={styles.hide_btn} onClick={()=>switchClick(HIDE_NAV)}>&#171;</div>
            // </div>
            <div className={styles.top_nav}>
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