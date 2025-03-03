import { useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import AddTask from "./Components/AddTask.jsx";
import DisplayTask from "./Components/DisplayTask.jsx";
import TaskCount from "./Components/TaskCount.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  const [todo,setTodo]=useState({TaskName:"",Duration:"",done:false});//Task Input
  const [todoData,setTodoData]=useState([]);//Task Data
  const [doneCount,setDoneCount]=useState(0);
  const todocount=todoData.length;
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div className="main_component">
        <AddTask todo={todo} setTodo={setTodo} todoData={todoData} setTodoData={setTodoData} />
        <DisplayTask todoData={todoData} setTodoData={setTodoData} doneCount={doneCount} setDoneCount={setDoneCount}  />
        <TaskCount count={todocount} doneCount={doneCount} setDoneCount={setDoneCount}  />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
