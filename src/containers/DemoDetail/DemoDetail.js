import React from 'react';
import { useParams,withRouter } from 'react-router-dom';
import styles from './DemoDetail.module.scss';
import VisibleTodoList from '../TodoList/VisibleTodoList';
import DigitalClock from '../DigitalClock/DigitalClock';
import PointerClock from '../PointerClock/PointerClock';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import demoData from '../../config/demo-list';

// 已完成的组件展示
const components = {
    digitalclock: DigitalClock,
    pointerclock: PointerClock,
    todolist: VisibleTodoList,
    audioplayer: AudioPlayer
};

const DemoDetail = (props) => {
    let { routerid, demo } = useParams();
    let demoInfo = {};

    // 根据routerid在组件列表中查找组件的相关信息
    demoData[routerid].forEach((item)=>{
        if(item.component===demo){
            demoInfo = item;
        }
    });
    const RenderComponent = components[demo];
    return (
        <div className={styles.demo_detail_container}>
            <div className={styles.title}>
                <span onClick={()=>props.history.goBack()} className={styles.back_icon}></span>
                <span>{demoInfo.name}</span>
            </div>
            <RenderComponent />

            {/* <div className={styles.demo_content}>
            </div> */}
        </div>
    )
    
}

export default withRouter(DemoDetail);