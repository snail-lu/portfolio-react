import React, { Component } from 'react'
import styles from './AudioPlayer.module.scss'
import audioUrl from '../../assets/music/有何不可.mp3'

export default class AudioPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            paused: true,             // 音频是否暂停
            currentTime: 0,           // 已播放时间（未转换）
            playedTime: "00:00",      // 已播放时间 
            duration: 0,              // 音乐总时长（未转换）
            totalTime: "00:00"
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
    adjustVolume = (type) => {
        let audio = this.audio;
        if(type === 'up'){
            if(audio.volume<=0.9){
                audio.volume +=0.1;
            }else{
                audio.volume = 1;
            }
            // currentVol.style.width = audio.volume*100 + "%";
        }else if(type === 'down'){
            if(audio.volume>=0.15){
                audio.volume -=0.1;
            }else{
                audio.volume = 0;
            }
            // currentVol.style.width = audio.volume*100 + "%";
        }
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

    // timeUpdate监听
    timeUpdate = () => {
        let currentTime = this.audio.currentTime;
        let currentTime_m = Math.floor(currentTime/60);
        let currentTime_s = Math.floor(currentTime%60);

        currentTime_m = currentTime_m>=10?currentTime_m:"0"+ currentTime_m;
        currentTime_s = currentTime_s>=10?currentTime_s:"0"+ currentTime_s;
        
        this.setState({
            currentTime,
            playedTime: currentTime_m + ":" + currentTime_s
        })
    }

    render() {
        let { paused, playedTime, totalTime, currentTime, duration } = this.state;
        return (
                <div className={styles.music_container}>
                    <div className={styles.header}>音乐播放器</div>
                    <div className={styles.content}>
                        歌词
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
                        <div className={styles.controls}>
                            <span className={styles.prev + " iconfont icon-shangyishou"} title="previous"></span>
                            <span className={`${styles.switch} iconfont ${paused?"icon-bofang":"icon-zanting"}`} onClick={this.playControl}></span>
                            <span className={styles.next + " iconfont icon-xiayishou"} title="next"></span>
                            
                            {/* 音量增减 */}
                            <div className={styles.volume}>
                                <span className={`${styles.volume_icon} iconfont icon-danseshixintubiao-`}></span>
                                <input type="range" className={styles.volume_range} />
                            </div>
                        </div>
                    </div>
                    <audio id={styles.music1} src={audioUrl} ref={(audio) => { this.audio = audio  }} onTimeUpdate={this.timeUpdate} onCanPlay={this.canPlay}>
                        Your browser does not support the<code>audio</code> element.
                    </audio>
                </div>
        )
    }
}
