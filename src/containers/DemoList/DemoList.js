import React , { Component } from 'react';
import PropTypes from 'prop-types'
import { useParams,NavLink } from 'react-router-dom';
import styles from './DemoList.module.scss';
import { connect } from 'react-redux'
import { requestDemoList } from '../../redux/actions'
import { DemoType } from '../../redux/actionTypes';

const DemoList = ({ getDemoList, list }) => {
        let { routerid } = useParams();
        getDemoList(routerid==='effect'?DemoType.EFFECT_DEMO:DemoType.FUNCTIONAL_DEMO);
        return (
            <div className={styles.demo_list_container}>
                <div className={styles.container_title}>
                    {routerid==='effect'?'特效型DEMO':'功能型DEMO'}
                </div>
                {

                    list.map((item,index)=>{
                        return (
                            <div className={styles.style_demo_item} key={item.component}>
                                <div className={styles.date}>{item.date}</div>
                                <div className={styles.info}>
                                    <h3 className={styles.name}>
                                        <span>{item.name}</span>
                                        <span className={item.completed?styles.completed:styles.uncompleted}>{item.completed?'已完成':'开发中'}</span>
                                    </h3>
                                    <div className={styles.tags_list}>
                                        {
                                            item.tags.map(tag=>{
                                                return (
                                                    <span className={styles.tags_item} key={tag}>{tag}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={styles.desc}>{item.desc}</div>
                                    {
                                        item.completed
                                            ? <NavLink to={`/portfolio/${routerid}/${item.component}`}><span className={styles.btn}>效果展示</span></NavLink>
                                            : <div className={styles.btn}>还未完成，敬请期待</div>
                                    }
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    
}

const mapStateToProps = state => {
    return {
      list: state.demoList?state.demoList:[],
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      getDemoList: type => {
        dispatch(requestDemoList(type))
      }
    }
}

DemoList.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired
      }).isRequired
    ).isRequired,
    getDemoList: PropTypes.func.isRequired
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DemoList)