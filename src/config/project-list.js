// demo列表
export default [
    {
        name: '动态数字时钟',
        desc: '简易动态数字时钟，每位数字在其列表中滚动变化，样式较为简单，代码量不大',
        tags: ['数字时钟','CSS-transition','JavaScript'],
        date: 'Apr 18, 2019',
        component: 'digitalclock',
        completed: true
    },
    {
        name: '动态指针时钟',
        desc: '使用css+js实现的动态指针时钟，模拟实物时钟的运行效果',
        tags: ['指针时钟','CSS-transition','JavaScript'],
        date: 'Apr 19, 2019',
        component: 'pointerclock',
        completed: true
    },
    {
        name: '商城常用促销插件',
        desc: '商城营销活动经常使用的促销插件，目前包含大转盘、红包雨、签到、九宫格、打地鼠，后续会持续更新...',
        tags: ['CSS','CSS-animation','JavaScript'],
        date: 'Jun 3, 2019',
        component: 'SalesComponent',
        completed: false
    },
    {
        name: '实时聊天',
        desc: '在线实时通讯聊天demo',
        tags: ['CSS','CSS-animation','JavaScript'],
        date: 'Jul 3, 2019',
        component: 'RealTimeChat',
        completed: false
    },
    {
        name: '仿windows桌面',
        desc: 'windows桌面模仿，包含有有图标的拖拽、弹窗等',
        tags: ['CSS','CSS-animation','JavaScript'],
        date: 'Jul 3, 2019',
        component: 'WindowsDesktop',
        completed: false
    },
    {
        name: '音乐播放器',
        desc: '一个本地音乐播放的音乐播放器',
        tags: ['Audio','CSS-animation','JavaScript'],
        date: 'Jul 3, 2019',
        component: 'audioplayer',
        completed: true,
        bugs: ['进度条无法拖拽','音量调节不太协调','歌词滚动播放不顺滑','碟片旋转在暂停播放时会回到原点']
    },
    {
        name: 'TodoList',
        desc: '学习react-redux时制作的一个todoList Demo',
        tags: ['CSS','CSS-animation','JavaScript'],
        date: 'Jul 3, 2019',
        component: 'todolist',
        completed: true
    }
];
