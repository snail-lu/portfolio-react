import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'
import styles from './AddTodo.module.scss';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className={styles.addtodo_box}>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          className={styles.input_box}
          placeholder="输入待办事项"
        />
        <button type="submit" className={styles.submit_button}>添加</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo