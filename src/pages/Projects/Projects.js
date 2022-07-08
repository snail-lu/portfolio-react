import React, { Component } from 'react'
import styles from './Projects.module.scss'
// import projectList from '../../config/project-list'

export default class Projects extends Component {
    state = {
        projectList: []
    }
    componentDidMount() {
        this.getProjectList()
    }

    getProjectList = async () => {
        let res = await this.req({
            url: '/project/list'
        })
        if (res.data && res.data.list) {
            this.setState({
                projectList: res.data.list
            })
        }
    }

    render() {
        return (
            <div className={styles.projectsContainer}>
                {this.state.projectList.map((project, index) => {
                    return (
                        <div className={`${styles.project_item} flex-box`} key={project.github}>
                            <div className={`${styles.box_l} flex-item-2`}>
                                <img className={styles.screenshots} src={project.coverUrl} alt="" />
                            </div>
                            <div className={`${styles.box_c} flex-item-2`}>
                                <div className={styles.name}>{project.title}</div>
                                <div className={styles.tags}>
                                    {/* {project.tags.map((tag) => (
                                        <span className={styles.tag} key={tag}>
                                            {tag}
                                        </span>
                                    ))} */}
                                </div>
                                <div className={styles.desc}>{project.desc}</div>
                                {/* <div className={styles.date}>{project.date}</div> */}
                            </div>
                            <div
                                className={`${styles.box_r} flex-box-column flex-box-h-center flex-box-v-center flex-item-1`}
                            >
                                <a
                                    className={styles.btn}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                                <a className={styles.btn} href={project.url} target="_blank" rel="noopener noreferrer">
                                    在线预览
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
