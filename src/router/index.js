import React from 'react';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import DemoList from '../pages/DemoList/DemoList';
import About from '../pages/About/About';
import Layout from '../components/Layout/Layout'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import DigitalClock from '../components/DigitalClock/DigitalClock';
import PointerClock from '../components/PointerClock/PointerClock';
import GreedySnake from '../components/GreedySnake/GreedySnake';
import DemoLayout from '../components/DemoLayout/DemoLayout';

const routeConfig = [
    { 
        path: '/',
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
            { 
                path: '/projects',
                component: Projects,
            },
            { 
                path: '/about',
                component: About,
            },
            { 
                path: '/demo',
                exact: true,
                component: DemoList,
            },
            { 
                path: '/demo/audioplayer',
                render: () => {
                    return <DemoLayout title="音乐播放器"><AudioPlayer /></DemoLayout>
                }
            },
            { 
                path: '/demo/digitalclock',
                render: () => {
                    return <DemoLayout title="数字时钟"><DigitalClock /></DemoLayout>
                }
            },
            { 
                path: '/demo/pointerclock',
                render: () => {
                    return <DemoLayout title="指针时钟"><PointerClock /></DemoLayout>
                }
            },
            { 
                path: '/demo/greedysnake',
                render: () => {
                    return <DemoLayout title="贪吃蛇"><GreedySnake /></DemoLayout>
                }
            },
        ],
    }
]

export default routeConfig