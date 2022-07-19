import React, { Component } from 'react';
import styles from './Projects.module.scss';
// import projectList from '../../config/project-list'

export default class Projects extends Component {
    state = {
        projectList: []
    };
    componentDidMount() {
        this.getProjectList();
    }

    getProjectList = async () => {
        let res = await this.req({
            url: '/project/list'
        });
        if (res.result && res.result.list) {
            this.setState({
                projectList: res.result.list
            });
        }
    };

    render() {
        return (
            <div className={styles.projectsContainer}>
                {this.state.projectList.map((project, index) => {
                    return (
                        <div className={`${styles.project_item} flex-box`} key={project.path}>
                            <div className={styles.box_l}>
                                <img className={styles.cover} src={project.coverUrl} alt="" />
                            </div>
                            <div className={`${styles.box_r} flex-item-1 flex-box-column flex-box-h-between`}>
                                <div>
                                    <div className={styles.name}>{project.title}</div>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span className={styles.tag} key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.desc}>{project.desc}</div>
                                </div>

                                <div className="flex-box flex-box-h-between flex-box-v-center">
                                    <div>
                                        <a
                                            className={styles.btn}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="项目github"
                                        >
                                            <span className="iconfont icon-github" style={{ fontSize: '2rem' }}></span>
                                        </a>
                                        {project.url && (
                                            <a
                                                className={styles.btn}
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="线上地址"
                                            >
                                                <span
                                                    className="iconfont icon-entrance"
                                                    style={{ fontSize: '2rem' }}
                                                ></span>
                                            </a>
                                        )}
                                    </div>
                                    <div className={styles.date}>{project.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
