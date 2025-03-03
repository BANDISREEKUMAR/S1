import React,{useState} from 'react'
import styles from './main.module.css'
export default function DisplayTask({todoData,setTodoData,doneCount,setDoneCount}) {

  function handleClick(value) {
    setTodoData(
      todoData.map((todo,index)=> 
        todo.TaskName == value.TaskName ? { ...todo, done: !todo.done }   : todo
      )
    )
    {value.done!=false?setDoneCount(doneCount-1):setDoneCount(doneCount+1)}
    }
    console.log(doneCount);
    
  return (
    <div>
      <div className={styles.displaytask}>
        {todoData.map((value,index)=> (
          <div key={index} className={styles.TaskItems}>
            <h4 className={value.done!=false?styles.done:styles.notdone}  onClick={()=>handleClick(value)} >{value.TaskName}</h4>
            <h4>{value.Duration}</h4>
          </div>
          ))}
      </div>
    </div>
  )
}