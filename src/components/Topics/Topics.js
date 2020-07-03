import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
} from "react-router-dom";
import Topic from './Topic';
import styles from './Topics.module.scss';

const Topics = () => {
    let match = useRouteMatch();
    return (
        <div className={styles.topics_container}>
            <ul className={styles.topics_nav}>
                <li className={styles.topics_nav_item}>
                    <NavLink activeClassName={styles.selected} to={`${match.url}/topic1`}>Topic1</NavLink>
                </li>
                <li className={styles.topics_nav_item}>
                    <NavLink activeClassName={styles.selected} to={`${match.url}/topic2`}>
                        Topic2
                    </NavLink>
                </li>
            </ul>
            <div className={styles.topic_content}>
                <Switch>
                    <Route path={`${match.path}/:topicId`}>
                        <Topic />
                    </Route>
                    <Route path={match.path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Topics;