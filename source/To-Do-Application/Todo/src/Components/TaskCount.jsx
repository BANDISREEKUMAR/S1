import React from 'react'
import styles from './main.module.css'
export default function TaskCount({count,doneCount}) {
  return (
    <div>
      <div className={styles.taskcount}>
        <h1>Total Todos: {count}</h1>
        <br /> <br />
        <h1>Completed : {doneCount}</h1>
      </div>
    </div>
  )
}
