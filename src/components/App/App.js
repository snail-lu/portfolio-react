import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import DemoList from '../../containers/DemoList/DemoList';
import DemoDetail from '../../containers/DemoDetail/DemoDetail';
import Home from '../Home/Home';
import LeftNav from '../LeftNav/LeftNav';
import CopyRight from '../CopyRight/CopyRight';
import styles from './App.module.scss';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <LeftNav />
                <div className={styles.content}>
                    <Switch>
                        <Route path="/portfolio/:routerid" exact>
                            <DemoList />
                        </Route>
                        <Route path="/portfolio/:routerid/:demo" exact>
                            <DemoDetail />
                        </Route>
                        <Route path="/portfolio" exact>
                            <Home />
                        </Route>
                        <Route path="/" exact>
                            <Redirect to="/portfolio" />
                        </Route>
                    </Switch>
                    <CopyRight />
                </div>
            </div>
        </Router>
    )
    
}

export default App