import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoList.module.scss'

const Todo = ({ onClick, completed, text, deleteTodo }) => (
  <li
    className={styles.todo_item}
  >
    <span 
      className={styles.todo_item_content} 
      style={{textDecoration: completed ? 'line-through' : 'none'}}
      onClick={onClick}
    >{text}</span>
    <span className={styles.close_btn} onClick={deleteTodo}>x</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo