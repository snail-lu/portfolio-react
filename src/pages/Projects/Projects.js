import React, { Component } from 'react';
import styles from './Projects.module.scss';
import projectList from '../../config/project-list';

export default class Projects extends Component {
    render() {
        return (
            <div className={styles.projectsContainer}>
                {
                    projectList.map((project, index)=> {
                        return (
                            <div className={`${styles.project_item} flex-box`}>
                                <div className={`${styles.box_l} flex-item-2`}>
                                    <img className={styles.screenshots} src="" alt="" />
                                </div>
                                <div className={`${styles.box_c} flex-item-2`}>
                                    <div className={styles.name}>{project.name}</div>
                                    <div className={styles.tags}>
                                        {
                                            project.tags.map((tag)=><span className={styles.tag}>{tag}</span>)
                                        }
                                    </div>
                                    <div className={styles.desc}>{project.desc}</div>
                                    <div className={styles.date}>{project.date}</div>
                                </div>
                                <div className={`${styles.box_r} flex-box-column flex-box-h-center flex-box-v-center flex-item-1`}>
                                    <a className={styles.btn} href={project.github} target="_blank">Github</a>
                                    <a className={styles.btn} href={project.url} target="_blank">在线预览</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
