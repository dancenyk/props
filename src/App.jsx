import { useState } from 'react';
import './App.css'
import Task from './components/Task';
import AddtaskForm from './components/AddTaskForm';
import Template from './templates/Template';


const App = () => {
 const [tasks, setTasks] = useState([
   { id: 1, text: 'Hacer la compra', completed: false },
   { id: 2, text: 'Llamar al médico', completed: true },
   { id: 3, text: 'Hacer ejercicio', completed: false }
 ]);


 const [maxId, setMaxId] = useState(tasks.length + 1)


 const deleteTask = (taskId) => {
   setTasks(tasks.filter(task => task.id !== taskId ))
 }


 const toggleMarkTask = (taskId) => {
   setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed } : task))
 }


 const addTask = (text) => {
   const newTask = {
     id: maxId + 1,
     text,
     completed: false
   }
   setTasks([...tasks, newTask])
   setMaxId(newTask.id)
 }






 return (
   <>
   <Template>
   <h1>Lista de tareas</h1>
   <AddtaskForm addTask={addTask} />
   <ul>
     {tasks.map( task => <Task
       task={task}
       key={task.id}
       onDelete={deleteTask}
       onMark={toggleMarkTask}
       color="interior"
     />)}
   </ul>
   <ul>
   {tasks.map( task => <Task
       task={task}
       key={task.id}
       onDelete={deleteTask}
       onMark={toggleMarkTask}
       color="home"


     />)}
   </ul>
   </Template>
   </>
 );
};


export default App;

