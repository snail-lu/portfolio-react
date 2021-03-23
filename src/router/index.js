import React from 'react';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import DemoList from '../pages/DemoList/DemoList';
import About from '../pages/About/About';
import Layout from '../components/Layout/Layout'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';
import DigitalClock from '../components/DigitalClock/DigitalClock';
import PointerClock from '../components/PointerClock/PointerClock';
import WindowsDesktop from '../components/WindowsDesktop/WindowsDesktop';
import DemoLayout from '../components/DemoLayout/DemoLayout';

const routeConfig = [
    { 
        path: '/projects',
        component: Projects,
    },
    { 
        path: '/demo',
        component: Layout,
        routes: [
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
                    return <DemoLayout title="动态数字时钟"><DigitalClock /></DemoLayout>
                }
            },
            { 
                path: '/demo/pointerclock',
                render: () => {
                    return <DemoLayout title="动态指针时钟"><PointerClock /></DemoLayout>
                }
            },
            { 
                path: '/demo/windowsdesktop',
                render: () => {
                    return <DemoLayout title="仿windows桌面"><WindowsDesktop /></DemoLayout>
                }
            },
        ]
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