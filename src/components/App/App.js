import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import DemoList from '../../containers/DemoList/DemoList';
import DemoDetail from '../../containers/DemoDetail/DemoDetail';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import About from '../About/About';
import TopNav from '../../containers/TopNav/TopNav';
import styles from './App.module.scss';

const App = () => {
    return (
        <Router basename="/portfolio">
            <div className={styles.app}>
                <div className={styles.content}>
                    <TopNav />
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/project" exact>
                            <Projects />
                        </Route>
                        <Route path="/demo" exact>
                            <DemoList />
                        </Route>
                        <Route path="/demo/:demo" exact>
                            <DemoDetail />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
    
}

export default App