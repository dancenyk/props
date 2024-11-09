import { useState } from "react"


const AddtaskForm = ({ addTask }) => {
 const [task, setTask] = useState('')


 const handdleSubmit = (e) => {
   e.preventDefault()
   if (!task.trim()) return
   addTask(task)
   setTask('')
 }




 return (
   <>
   <form onSubmit={handdleSubmit}>
     <input
       type="text"
       placeholder="introduce una nueva tarea"
       value={task}
       onChange={(e) => setTask(e.target.value)}
     />
     <button type="submit">Agregar</button>
   </form>


   </>
 )
}


export default AddtaskForm