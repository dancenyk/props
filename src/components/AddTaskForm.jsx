import React from "react";
import { useState} from "react";

const AddTaskForm = ({tasks, setTasks}) => {

    const [taskText, setTaskText] = useState("")

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks)
    setTaskText(""); // aquí voy a limpiar el campo después de agregar la tarea 
    };

  return (
    <div>
      <input type="text" name="addNewTask" placeholder="Agregar nueva tarea" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
      <button onClick={addTask}>Agregar</button>
    </div>
  );
};

export default AddTaskForm;
