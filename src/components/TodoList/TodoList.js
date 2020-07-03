import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import FilterLink from '../../containers/TodoList/FilterLink'
import AddTodo from '../../containers/TodoList/AddTodo'
import styles from './TodoList.module.scss'

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <div className={styles.todolist_container}>
    <AddTodo />
    <div className={styles.filter_box}>
      显示: <FilterLink filter="SHOW_ALL">全部</FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">待完成</FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
    </div>
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} deleteTodo={()=>onDeleteClick(index)} />
      ))}
    </ul>
  </div>
  
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoList