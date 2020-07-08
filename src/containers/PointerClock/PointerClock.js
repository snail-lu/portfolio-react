import React, { Component } from 'react';
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
        if(hours>19){
            clockArray[1] = [0,1,2,3];
        }
        hours = hours<9 ? '0'+hours : hours+''
        let h = hours.split("");
    
        let minutes = date.getMinutes();
        minutes = minutes<9 ? '0'+minutes : minutes+'';
        let m = minutes.split("")
        let seconds = date.getSeconds();
        seconds = seconds<9 ? '0'+seconds : seconds+'';
        let s = seconds.split("");

        let currentTime = h.concat(m,s);
        this.setState({ h, m, s, currentTime, clockArray});

    }
    render() {
        let { clockArray, currentTime=[] } = this.state;
        return (
            <div className={styles.clock_container}>
                {
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
                }
            </div>
        )
    }
}


export default DigitalClock;