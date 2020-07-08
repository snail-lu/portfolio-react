import React from 'react';
import { useParams,withRouter } from 'react-router-dom';
import styles from './DemoDetail.module.scss';
import VisibleTodoList from '../TodoList/VisibleTodoList';
import DigitalClock from '../DigitalClock/DigitalClock';
import PointerClock from '../PointerClock/PointerClock';
import demoData from '../../demo-config/demo-config';

const components = {
    digitalclock: DigitalClock,
    pointerclock: PointerClock,
    todolist: VisibleTodoList
};

const DemoDetail = (props) => {
    let { routerid, demo } = useParams();
    let demoInfo = {};
    demoData[routerid].forEach((item)=>{
        if(item.component===demo){
            demoInfo = item;
        }
    });
    const RenderComponent = components[demo];
    return (
        <div className={styles.demo_detail_container}>
            <div className={styles.container_title}>
                <span onClick={()=>props.history.goBack()} className={styles.left_arrow}></span>
                <span>{demoInfo.name}</span>
            </div>
            <RenderComponent />

            {/* <div className={styles.demo_content}>
            </div> */}
        </div>
    )
    
}

export default withRouter(DemoDetail);