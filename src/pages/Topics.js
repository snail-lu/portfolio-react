import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Topic from '../components/Topic';

const Topics = () => {
    let match = useRouteMatch();
    return (
        <div>
            <h4>这里是Topics页</h4>
            <ul>
                <li>
                    <NavLink activeClassName="selected" to={`${match.url}/components`}>Components</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to={`${match.url}/props-v-state`}>
                        Props v. State
                    </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}

export default Topics;