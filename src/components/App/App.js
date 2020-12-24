import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import DemoList from '../../containers/DemoList/DemoList';
import DemoDetail from '../../containers/DemoDetail/DemoDetail';
import Home from '../Home/Home';
import styles from './App.module.scss';

const App = () => {
    return (
        <Router basename="/portfolio">
            <div className={styles.app}>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/:routerid" exact>
                            <DemoList />
                        </Route>
                        <Route path="/:routerid/:demo" exact>
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