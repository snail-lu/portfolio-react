// demo列表
export default [
    {
        name: '指针时钟',
        desc: '使用css+js实现的指针时钟，模拟实物时钟的运行效果',
        tags: ['指针时钟','CSS-transition','JavaScript'],
        date: 'Apr 19, 2019',
        route: 'pointerclock',
        completed: true
    },
    {
        name: '数字时钟',
        desc: '简易动态数字时钟，每位数字在其列表中滚动变化，样式较为简单，代码量不大',
        tags: ['数字时钟','CSS-transition','JavaScript'],
        date: 'Apr 18, 2019',
        route: 'digitalclock',
        completed: true
    },
    {
        name: '音乐播放器',
        desc: '一个本地音乐播放的音乐播放器',
        tags: ['Audio','CSS-animation','JavaScript'],
        date: 'Jul 3, 2019',
        route: 'audioplayer',
        completed: true,
        bugs: ['进度条无法拖拽','音量调节不太协调','歌词滚动播放不顺滑','碟片旋转在暂停播放时会回到原点']
    }
];
