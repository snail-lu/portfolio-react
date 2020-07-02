import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Weather from '../containers/Weather';
import Home from '../pages/Home';
import About from '../pages/About';
import Topics from '../pages/Topics';

const App = () => (
    <Router>
        <div>
            <h1>react项目模板</h1>
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todolist" activeClassName="selected">TodoList</NavLink>
                    </li>
                    <li>
                        <NavLink to="/topics" activeClassName="selected">Topics</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/todolist">
                    <h4>这里是TodoList页</h4>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
)

export default App