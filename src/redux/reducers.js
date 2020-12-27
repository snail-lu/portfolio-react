import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    REQUEST_WEATHER_START,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_FAIL,
    LOADING,
    SUCCESS,
    FAIL,
    REQUEST_DEMO_LIST,
    SHOW_NAV,
    HIDE_NAV
  } from './actionTypes';
  import demoData from '../config/demo-list';

const { SHOW_ALL } = VisibilityFilters;

/**
 * TopNav reducer
 * @param {*} state 
 * @param {*} action 
 */
function showNav(state=false, action){
  switch (action.type) {
    case SHOW_NAV:
      return true;
    case HIDE_NAV:
      return false;
    default: 
      return state;
  }
}


/**
 * todos reducer
 * @param {*} state 
 * @param {*} action 
 */
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case DELETE_TODO: 
      return state.filter((todo,index)=>index!==action.index)
    default:
      return state
  }
}

/**
 * visibilityFilter reducer
 * @param {*} state 
 * @param {*} action 
 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

/**
 * 获取天气信息
 * @param {*} state 
 * @param {*} action 
 */
function weatherInfo(state={}, action) {
  switch (action.type) {
    case REQUEST_WEATHER_START:
      return { status: LOADING }
    case REQUEST_WEATHER_SUCCESS: 
      return { status: SUCCESS, weather: action.weather }
    case REQUEST_WEATHER_FAIL: 
      return { status: FAIL, error: action.error }
    default:
      return state
  }
}

/**
 * 获取demo list
 */
function demoList(state=[], action) {
  switch (action.type){
    case REQUEST_DEMO_LIST:
      return demoData;
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
    visibilityFilter,
    todos,
    demoList,
    showNav
})

export default rootReducer;