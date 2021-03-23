import React, { Component } from 'react'
import styles from './AudioPlayer.module.scss'
import audioUrl from '../../assets/music/有何不可.mp3'
import coverUrl from '../../assets/images/music_cover.jpg'

export default class AudioPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            paused: true,             // 音频是否暂停
            currentTime: 0,           // 已播放时间（未转换）
            playedTime: "00:00",      // 已播放时间 
            duration: 0,              // 音乐总时长（未转换）
            totalTime: "00:00",
            lyric: "有何不可\n" +
            "\n" +
            "作词：许嵩 作曲：许嵩\n" +
            "\n" +
            "演唱：许嵩\n" +
            "\n" +
            "天空好想下雨\n" +
            "\n" +
            "我好想住你隔壁\n" +
            "\n" +
            "傻站在你家楼下\n" +
            "\n" +
            "抬起头 数乌云\n" +
            "\n" +
            "如果场景里出现一架钢琴\n" +
            "\n" +
            "我会唱歌给你听\n" +
            "\n" +
            "哪怕好多盆水往下淋\n" +
            "\n" +
            "夏天快要过去\n" +
            "\n" +
            "请你少买冰淇淋\n" +
            "\n" +
            "天凉就别穿短裙\n" +
            "\n" +
            "别再那么淘气\n" +
            "\n" +
            "如果有时不那么开心\n" +
            "\n" +
            "我愿意将格洛米借给你\n" +
            "\n" +
            "你其实明白我心意\n" +
            "\n" +
            "为你唱这首歌 没有什么风格\n" +
            "\n" +
            "它仅仅代表着 我想给你快乐\n" +
            "\n" +
            "为你解冻冰河 为你做一只扑火的飞蛾\n" +
            "\n" +
            "没有什么事情是不值得\n" +
            "\n" +
            "为你唱这首歌 没有什么风格\n" +
            "\n" +
            "它仅仅代表着 我希望你快乐\n" +
            "\n" +
            "为你辗转反侧 为你放弃世界有何不可\n" +
            "\n" +
            "夏末秋凉里带一点温热 有换季的颜色\n" +
            "\n" +
            "天空好想下雨\n" +
            "\n" +
            "我好想住你隔壁\n" +
            "\n" +
            "傻站在你家楼下\n" +
            "\n" +
            "抬起头 数乌云\n" +
            "\n" +
            "如果场景里出现一架钢琴\n" +
            "\n" +
            "我会唱歌给你听\n" +
            "\n" +
            "哪怕好多盆水往下淋\n" +
            "\n" +
            "夏天快要过去\n" +
            "\n" +
            "请你少买冰淇淋\n" +
            "\n" +
            "天凉就别穿短裙\n" +
            "\n" +
            "别再那么淘气\n" +
            "\n" +
            "如果有时不那么开心\n" +
            "\n" +
            "我愿意将格洛米借给你\n" +
            "\n" +
            "你其实明白我心意\n" +
            "\n" +
            "为你唱这首歌 没有什么风格\n" +
            "\n" +
            "它仅仅代表着 我想给你快乐\n" +
            "\n" +
            "为你解冻冰河 为你做一只扑火的飞蛾\n" +
            "\n" +
            "没有什么事情是不值得\n" +
            "\n" +
            "为你唱这首歌 没有什么风格\n" +
            "\n" +
            "它仅仅代表着 我希望你快乐\n" +
            "\n" +
            "为你辗转反侧 为你放弃世界有何不可\n" +
            "\n" +
            "夏末秋凉里带一点温热\n" +
            "\n" +
            "为你解冻冰河 为你做一只扑火的飞蛾\n" +
            "\n" +
            "没有什么事情是不值得\n" +
            "\n" +
            "为你唱这首歌 没有什么风格\n" +
            "\n" +
            "它仅仅代表着 我希望你快乐\n" +
            "\n" +
            "为你辗转反侧 为你放弃世界有何不可\n" +
            "\n" +
            "夏末秋凉里带一点温热 有换季的颜色"
        }
    }

    componentDidMount () {

    }

    // 播放/暂停
    playControl = () => {
        if(this.audio.paused){
            this.audio.play()
        }else {
            this.audio.pause()
        }
        this.setState({
            paused: this.audio.paused
        })
    }

    // 音量调节
    adjustVolume = (event) => {
        let audio = this.audio;
        audio.volume = event.target.value
    }

    // canPlay监听
    canPlay = () => {
        let duration = this.audio.duration;
        let duration_m = Math.floor(duration/60);
        let duration_s = Math.floor(duration%60);

        duration_m = duration_m >= 10 ? duration_m : "0"+duration_m;
        duration_s = duration_s >= 10 ? duration_s : "0"+duration_s;

        this.setState({
            duration,
            totalTime: duration_m + ":" + duration_s
        })
    }

    // timeUpdate监听，更新播放时长与进度条
    timeUpdate = () => {
        let currentTime = this.audio.currentTime;
        let currentTime_m = Math.floor(currentTime/60);
        let currentTime_s = Math.floor(currentTime%60);

        currentTime_m = currentTime_m>=10?currentTime_m:"0"+ currentTime_m;
        currentTime_s = currentTime_s>=10?currentTime_s:"0"+ currentTime_s;

        const lyricHeight = this.lyricDom.clientHeight;
        this.setState({
            lyricPosition: -Math.floor(lyricHeight*currentTime/this.audio.duration)+'px',
            currentTime,
            playedTime: currentTime_m + ":" + currentTime_s
        })
    }

    // 结束时
    onEnd = () => {
        console.log('播放结束了')
    }

    render() {
        let { paused, playedTime, totalTime, currentTime, duration, lyricPosition} = this.state;
        return (
                <div className={styles.music_container}>
                    <div className={styles.header}>音乐播放器</div>
                    <div className={styles.content}>
                        <div className={`${styles.disc}  ${styles.flex_center}`}>
                            <div className={`${styles.disc_outer} ${styles.flex_center}`}>
                                <div className={styles.disc_inner}>
                                    <img src={coverUrl} className={`${styles.cover_img} ${!paused?styles.cover_img_rotate:''}`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.lyric}>
                            <pre
                                className={styles.lyric_text}
                                style={{top: lyricPosition}}
                                ref={(lyricDom) => { this.lyricDom = lyricDom  }}>{this.state.lyric}</pre>
                        </div>
                    </div>
                    <div className={styles.footer}>

                        {/* 歌曲信息 */}
                        <div className={styles.music_info}>
                            {/* 音乐名 */}
                            <div>
                                <span className={styles.songName}>有何不可</span>
                                <span>---</span>
                                <span className={styles.songSinger}>许嵩</span>
                            </div>

                            {/* 音乐时长 */}
                            <div className={styles.music_duration}>
                                <span>{playedTime}</span>/
                                <span>{totalTime}</span>
                            </div>
                        </div>
                        

                        {/* 播放进度 */}
                        <div className={styles.progress}>
                            <div className={styles.currentPro} style={{width: currentTime*100/duration+"%"}}></div>
                        </div>
                        
                        {/* 播放控制 */}
                        <div className={`${styles.controls} ${styles.flex_center}`}>
                            <span className={styles.prev + " iconfont icon-shangyishou"} title="previous"></span>
                            <span className={`${styles.switch} iconfont ${paused?"icon-bofang":"icon-zanting"}`} onClick={this.playControl}></span>
                            <span className={styles.next + " iconfont icon-xiayishou"} title="next"></span>
                            
                            {/* 音量增减 */}
                            <div className={styles.volume}>
                                <span className={`${styles.volume_icon} iconfont icon-danseshixintubiao-`}></span>
                                <input type="range" className={styles.volume_range} max="1" min="0" step="0.1" onChange={this.adjustVolume}/>
                            </div>
                        </div>
                    </div>
                    <audio
                        id={styles.music1}
                        loop={true}
                        src={audioUrl}
                        ref={(audio) => { this.audio = audio  }}
                        onTimeUpdate={this.timeUpdate}
                        onCanPlay={this.canPlay}
                        onEnded={this.onEnd}>
                        Your browser does not support the<code>audio</code> element.
                    </audio>
                </div>
        )
    }
}
