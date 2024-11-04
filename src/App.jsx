import React, { useState, useEffect } from "react";
import "./App.css";

texto = input.target.value;

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer la compra", completed: false },
    { id: 2, text: "Llamar al médico", completed: true },
    { id: 3, text: "Hacer ejercicio", completed: false },
  ]);

  const addTask = (texto) => {
    const newTask = {
      id: tasks.length+1,
      text: texto,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask)
    console.log(tasks)
  };

  useEffect(()=>{
    addTask(texto)
  },[])

  return(

    <div>
      <h1>Lista de tareas</h1>
      <input type="text" name="addNewTask" placeholder="Agregar nueva tarea"/>
      <button onClick={addTask}>Agregar</button>

    </div>
  )

};

export default App;
