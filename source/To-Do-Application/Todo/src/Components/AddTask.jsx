import React from 'react'
import styles from './main.module.css'
export default function AddTask({todo,setTodo,todoData,setTodoData}) {
  function handleSubmit(e){
    e.preventDefault();
    setTodoData([...todoData,todo])
    setTodo({TaskName:"",Duration:"",done:false})

    
  }
  return (
    <div className={styles.addcomponent}>
      <div className={styles.Form}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo.TaskName} onChange={(e)=> setTodo({...todo,TaskName:e.target.value,Duration:"",done:false})} required />&nbsp;
          <input type="date" value={todo.Duration} onChange={(e)=>setTodo({...todo,Duration:e.target.value})} required  />
          <button type="submit">Add Task</button>        
        </form>
      </div>
      
    </div>
  )
}