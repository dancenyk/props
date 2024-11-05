import React, { useState, useEffect } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false },
  ]);

  return(

    <div>
      <h1>Lista de tareas</h1>
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
      <Task tasks={tasks}/>
    </div>
  )

};

export default App;
