import React from 'react'
import styles from './main.module.css'
export default function DisplayTask({todoData}) {
  return (
    <div>
      <div className={styles.displaytask}>
        {todoData.map((value,index)=> (
          <div key={index} className={styles.TaskItems}>
            <h4>{value.TaskName}</h4>
            <h4>{value.Duration}</h4>
            <button type="submit">Edit</button>
            <button type="submit">Delete</button>
          </div>
          ))}
      </div>
    </div>
  )
}
