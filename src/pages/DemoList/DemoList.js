import React from 'react'
import PropTypes from 'prop-types'
import { useParams, NavLink } from 'react-router-dom'
import styles from './DemoList.module.scss'
import { connect } from 'react-redux'
import { requestDemoList } from '../../redux/actions'
import { DemoType } from '../../redux/actionTypes'

const DemoList = ({ getDemoList, list }) => {
    let { routerid } = useParams()
    console.log(routerid, 'routerid')
    getDemoList(routerid === 'works' ? DemoType.WORKS_DEMO : DemoType.WHIMS_DEMO)
    return (
        <div className={styles.demo_list_container}>
            <div className={styles.demo_list}>
                {list.map((item) => {
                    return (
                        <div className={styles.demo_item} key={item.route}>
                            <div className={styles.header}>
                                {item.completed ? (
                                    <NavLink to={`/demo/${item.route}`} className={styles.view_btn}>
                                        预览
                                    </NavLink>
                                ) : (
                                    <span className={styles.development}>开发中</span>
                                )}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.tags_list}>
                                    {item.tags.map((tag) => {
                                        return (
                                            <span className={styles.tags_item} key={tag}>
                                                {tag}
                                            </span>
                                        )
                                    })}
                                </div>
                                <div className={styles.desc}>{item.desc}</div>
                                <div className={styles.date}>{item.date}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.demoList ? state.demoList : []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDemoList: (type) => {
            const res = requestDemoList(type)
            console.log(res, 'res')
            dispatch(res)
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoList)
