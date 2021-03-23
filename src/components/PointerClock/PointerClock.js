import React, { Component } from 'react';
import { generatorArray } from '../../utils/index';
import styles from './PointerClock.module.scss';

class PointerClock extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.getCurrentTime();
        },200);
    }

    // 获取当前时间并进行角度转换
    getCurrentTime = () => {
        let date = new Date();
        let hours = date.getHours(); 
        if(hours>11){
            hours=hours-12;
        }
    
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        this.setState({ 
            hoursDeg: hours*30 + minutes*0.5,
            minutesDeg: minutes*6 + seconds*0.1,
            secondsDeg: seconds*6
        });

    }
    render() {
        let { hoursDeg, minutesDeg, secondsDeg } = this.state;
        let markArray = generatorArray(60);
        return (
            <div className={styles.clock_container}>
                <div className={styles.clock_border}>
                    {
                        markArray.map((item)=>{
                            return <div style={{transform: "rotate("+item*6+'deg'+")"}} className={`${item%5===0?styles.clock_mark_hightlight:styles.clock_mark}`}>
                                {
                                    item%5===0?<span className={styles.clock_num} style={{ transform: "rotate(" +(-item*6)+"deg"+")"}}>{item/5!==0?item/5:12}</span>:null
                                }
                            </div>
                        })
                    }
                    <div style={{ transform: "rotate("+hoursDeg+'deg'+")" }} className={styles.hour_hand}></div>
                    <div style={{ transform: "rotate("+minutesDeg+'deg'+")" }} className={styles.minute_hand}></div>
                    <div style={{ transform: "rotate("+secondsDeg+'deg'+")" }} className={styles.second_hand}></div>
                </div>
            </div>
        )
    }
}


export default PointerClock;