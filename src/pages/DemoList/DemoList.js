import React, { Component } from 'react';
import styles from './DemoList.module.scss';
import { NavLink } from 'react-router-dom';
// import projectList from '../../config/project-list'

export default class DemoList extends Component {
    state = {
        demoList: []
    };
    componentDidMount() {
        this.getDemoList();
    }

    getDemoList = async () => {
        let res = await this.req({
            url: '/demo/list2'
        });
        if (res.result && res.result.list) {
            this.setState({
                demoList: res.result.list
            });
        }
    };

    render() {
        return (
            <div className={styles.projectsContainer}>
                {this.state.demoList.map((demo) => {
                    return (
                        <div className={`${styles.project_item} flex-box`} key={demo.path}>
                            <div className={styles.box_l}>
                                <img className={styles.cover} src={demo.coverUrl} alt="" />
                            </div>
                            <div className={`${styles.box_r} flex-item-1 flex-box-column flex-box-h-between`}>
                                <div>
                                    <div className={styles.name}>{demo.title}</div>
                                    <div className={styles.tags}>
                                        {demo.tags.map((tag) => (
                                            <span className={styles.tag} key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.desc}>{demo.desc}</div>
                                </div>

                                <div className="flex-box flex-box-h-between flex-box-v-center">
                                    <div>
                                        {demo.path && (
                                            <NavLink to={`/demo/${demo.path}`}>
                                                <span
                                                    className="iconfont icon-entrance"
                                                    style={{ fontSize: '2rem' }}
                                                ></span>
                                            </NavLink>
                                        )}
                                    </div>
                                    <div className={styles.date}>{demo.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
