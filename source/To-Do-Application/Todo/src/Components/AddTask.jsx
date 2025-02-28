import React from 'react'
import styles from './main.module.css'
export default function AddTask() {
  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <div className={styles.addcomponent}>
      <div className={styles.Form}>
        <form onSubmit={handleSubmit}>
          <input type="text" required />&nbsp;
          <button type="submit">Add Task</button>
          <input type="date"  />
        </form>
      </div>
    </div>
  )
}