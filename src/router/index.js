import React from 'react'
const Home = React.lazy(() => import('../pages/Home/Home'))
const Projects = React.lazy(() => import('../pages/Projects/Projects'))
const DemoList = React.lazy(() => import('../pages/DemoList/DemoList'))
const About = React.lazy(() => import('../pages/About/About'))
const Layout = React.lazy(() => import('../components/Layout/Layout'))
const AudioPlayer = React.lazy(() => import('../components/AudioPlayer/AudioPlayer'))
const DigitalClock = React.lazy(() => import('../components/DigitalClock/DigitalClock'))
const PointerClock = React.lazy(() => import('../components/PointerClock/PointerClock'))
const GreedySnake = React.lazy(() => import('../components/GreedySnake/GreedySnake'))
const DemoLayout = React.lazy(() => import('../components/DemoLayout/DemoLayout'))

const routeConfig = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/demo',
                // exact: true,
                element: <DemoList />
            },
            {
                path: '/demo/audioplayer',
                render: () => {
                    return (
                        <DemoLayout title="音乐播放器">
                            <AudioPlayer />
                        </DemoLayout>
                    )
                }
            },
            {
                path: '/demo/digitalclock',
                render: () => {
                    return (
                        <DemoLayout title="数字时钟">
                            <DigitalClock />
                        </DemoLayout>
                    )
                }
            },
            {
                path: '/demo/pointerclock',
                render: () => {
                    return (
                        <DemoLayout title="指针时钟">
                            <PointerClock />
                        </DemoLayout>
                    )
                }
            },
            {
                path: '/demo/greedysnake',
                render: () => {
                    return (
                        <DemoLayout title="贪吃蛇">
                            <GreedySnake />
                        </DemoLayout>
                    )
                }
            }
        ]
    }
]

export default routeConfig
