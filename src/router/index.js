import React from 'react'
import Layout from '../components/Layout/Layout'
const Projects = React.lazy(() => import('../pages/Projects/Projects'))
const DemoList = React.lazy(() => import('../pages/DemoList/DemoList'))
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
                path: '/',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Projects />
                    </React.Suspense>
                )
            },
            {
                path: '/demo',
                // exact: true,
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <DemoList />
                    </React.Suspense>
                )
            },
            {
                path: '/demo/audioplayer',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <DemoLayout title="音乐播放器">
                            <AudioPlayer />
                        </DemoLayout>
                    </React.Suspense>
                )
            },
            {
                path: '/demo/digitalclock',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <DemoLayout title="数字时钟">
                            <DigitalClock />
                        </DemoLayout>
                    </React.Suspense>
                )
            },
            {
                path: '/demo/pointerclock',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <DemoLayout title="指针时钟">
                            <PointerClock />
                        </DemoLayout>
                    </React.Suspense>
                )
            },
            {
                path: '/demo/greedysnake',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <DemoLayout title="贪吃蛇">
                            <GreedySnake />
                        </DemoLayout>
                    </React.Suspense>
                )
            }
        ]
    }
]

export default routeConfig
