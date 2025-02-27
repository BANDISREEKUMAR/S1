import { useState } from 'react'
import './App.css'
import First from './Components/First.jsx'
import styles from './Components/first.module.css'
function App() {
  return (
   <div>
    <h1>Welcome to the world of Tech</h1>
    <div className={styles.a}>
    <First />
    </div>
    
   </div>
  
  )
}

export default App
