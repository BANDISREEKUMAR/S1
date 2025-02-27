import { useState } from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import AddTask from "./Components/AddTask.jsx";
import DisplayTask from "./Components/DisplayTask.jsx";
import TaskCount from "./Components/TaskCount.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div className="main_component">
        <AddTask />
        <DisplayTask />
        <TaskCount />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
