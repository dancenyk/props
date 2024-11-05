//Este componente muestra una tarea individual y maneja los eventos de clic en la tarea

import React from "react";

const Task = ({tasks}) =>{
return (
    <div>
        <h2>Aqui van las tareas</h2>
        {tasks.map((task)=>(
            <Task key={task.id} task={task.text} />
        ))}
    </div>
)

}

export default Task



//A Task le pasaremos el id como key, la tarea, y las funciones de borrado y completado para poder usarlas en cada tarea.
//Y también es donde haremos que se rendericen nuestros datos y componentes.

//Aquí tendremos cada una de las tareas con las funcionalidades de borrar y marcar como completada.




