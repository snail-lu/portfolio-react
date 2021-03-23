import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import DemoList from '../pages/DemoList/DemoList';
import About from '../pages/About/About';
import DemoDetail from '../pages/DemoDetail/DemoDetail';

const routeConfig = [
    { 
        path: '/projects',
        component: Projects,
    },
    { 
        path: '/demo/:demo',
        component: DemoDetail,
    },
    { 
        path: '/demo',
        component: DemoList,
    },
    { 
        path: '/about',
        component: About,
    },
    { 
        path: '/',
        component: Home,
    }
]

export default routeConfig