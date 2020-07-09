import React, { Component } from 'react';
import { generatorArray } from '../../utils/index';
import styles from './PointerClock.module.scss';

class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state = {
            clockArray: [[0,1,2],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9]]
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.getCurrentTime();
        },200);
    }

    getCurrentTime = () => {
        let { clockArray } = this.state;
        let date = new Date();
        let hours = date.getHours(); 
        if(hours>11){
            hours=hours-12;
        }

        // hours = hours<9 ? '0'+hours : hours+''
        // let h = hours.split("");
    
        let minutes = date.getMinutes();
        // minutes = minutes<9 ? '0'+minutes : minutes+'';
        // let m = minutes.split("")
        let seconds = date.getSeconds();
        // seconds = seconds<9 ? '0'+seconds : seconds+'';
        // let s = seconds.split("");

        // let currentTime = h.concat(m,s);
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
                                    item%5===0?<span className={styles.clock_num} style={{ transform: "rotate(" +(-item*6)+"deg"+")"}}>{item/5!=0?item/5:12}</span>:null
                                }
                            </div>
                        })
                    }
                    <div style={{ transform: "rotate("+hoursDeg+'deg'+")" }} className={styles.hour_hand}></div>
                    <div style={{ transform: "rotate("+minutesDeg+'deg'+")" }} className={styles.minute_hand}></div>
                    <div style={{ transform: "rotate("+secondsDeg+'deg'+")" }} className={styles.second_hand}></div>
                </div>
                {/* {
                    clockArray.map((item,index)=>{
                        return (
                            <div className={styles.clock_item}>
                                <div key={item[0].toString()}>
                                {
                                    item.map(childItem => (
                                        <div
                                            className={childItem==currentTime[index]?styles.current:styles.normal} 
                                            key={childItem}
                                        >{childItem}</div>
                                    ))
                                }
                                </div>
                            </div>
                            
                        )
                    })
                } */}

            </div>
        )
    }
}


export default DigitalClock;