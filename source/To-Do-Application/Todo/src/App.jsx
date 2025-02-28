import { useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import AddTask from "./Components/AddTask.jsx";
import DisplayTask from "./Components/DisplayTask.jsx";
import TaskCount from "./Components/TaskCount.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  const [todo,setTodo]=useState({TaskName:"",Duration:""});//Task Input
  const [todoData,setTodoData]=useState([]);//Task Data
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div className="main_component">
        <AddTask todo={todo} setTodo={setTodo} todoData={todoData} setTodoData={setTodoData} />
        <DisplayTask todoData={todoData} />
        <TaskCount />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
