import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    REQUEST_WEATHER_START,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_FAIL,
    REQUEST_DEMO_LIST
} from './actionTypes';
import axios from 'axios';

let nextId = 0;
/**
 * 
 * 同步action 创建函数
 */

// 左侧导航栏显示/隐藏
export function showNav(type){
    return {
        type
    }
}

// 添加待办项
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextId+1,
        text
    }
}

// 待办项状态修改
export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

// 移除待办项
export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    }
}

// 设置筛选条件
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

// 请求天气
function requestWeather(){
    return {
        type: REQUEST_WEATHER_START
    }
}

// 请求天气--成功
function requestWeatherSuccess(weather){
    return { type: REQUEST_WEATHER_SUCCESS, weather }
}

// 请求天气--失败
function requestWeatherFail(error){
    return { type: REQUEST_WEATHER_FAIL, error }
}

//  获取DEMO_LIST
export function requestDemoList(demoType){
    return { type: REQUEST_DEMO_LIST, demoType}
}

/**
 * 异步action 
 */

 // 获取天气信息
export function getWeatherInfo(cityCode) {
    return dispatch => {
        dispatch(requestWeather());
        axios.get('/free/day',{
            params:{
                appid: 59541261,
                appsecret: 'Gl7WsQ3d',
                cityid: cityCode
            }
        }).then(res=>{
            if(res.status === 200){
                dispatch(requestWeatherSuccess(res.data))
            }
        }).catch(err=>{
            dispatch(requestWeatherFail(err));
        })
    }
}