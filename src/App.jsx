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

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))

  }

  return(

    <div>
      <ul>
        {tasks.map(task => <Task 
        key={task.id} 
        task={task.text}
        onDelete={deleteTask} 
        />
        )}
      </ul>
    </div>
  )

};

export default App;
