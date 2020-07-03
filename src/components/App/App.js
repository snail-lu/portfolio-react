import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import VisibleTodoList from '../../containers/TodoList/VisibleTodoList'
import Home from '../Home/Home';
import TopNav from '../TopNav/TopNav';
import Topics from '../Topics/Topics';
import CopyRight from '../CopyRight/CopyRight';
import styles from './App.module.scss';

const App = () => (
    <Router>
        <div className={styles.app}>
            <h1 className={styles.title}>react单页应用模板</h1>
            <TopNav />
            <div className={styles.content}>
                <Switch>
                    <Route path="/todolist">
                        <VisibleTodoList />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </div>
            <CopyRight />
        </div>
    </Router>
)

export default App