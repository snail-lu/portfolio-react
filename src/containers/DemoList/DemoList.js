import React from 'react';
import PropTypes from 'prop-types'
import { useParams,NavLink } from 'react-router-dom';
import styles from './DemoList.module.scss';
import { connect } from 'react-redux'
import { requestDemoList } from '../../redux/actions'
import { DemoType } from '../../redux/actionTypes';

const DemoList = ({ getDemoList, list }) => {
        let { routerid } = useParams();
        getDemoList(routerid==='works'?DemoType.WORKS_DEMO:DemoType.WHIMS_DEMO);
        return (
            <div className={styles.demo_list_container}>
                <div className={styles.container_title}>
                    <div>菜单</div>
                    <div>{routerid==='works'?'WORKS':'WHIMS'}</div>
                </div>
                <div className={styles.demo_list}>
                    {
                        list.map((item)=>{
                            return (
                                <div className={styles.demo_item} key={item.component}>
                                    <div className={styles.header}>
                                        {
                                            item.completed
                                            ? <NavLink to={`/${routerid}/${item.component}`} className={styles.view_btn}>View</NavLink>
                                            : <span className={styles.development}>In Development</span>
                                        }
                                    </div>
                                    <div className={styles.info}>
                                        <h3 className={styles.name}>
                                            <span>{item.name}</span>
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
                                        <div className={styles.date}>{item.date}</div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
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