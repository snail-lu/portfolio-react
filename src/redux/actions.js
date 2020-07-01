import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from './actionTypes';

let nextId = 0;
/**
 * 
 * action 创建函数
 */
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextId+1,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}