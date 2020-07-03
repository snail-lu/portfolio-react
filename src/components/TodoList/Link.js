import React from 'react'
import PropTypes from 'prop-types'
import styles from './TodoList.module.scss'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className={styles.current_filter_item}>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
      className={styles.filter_item}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link