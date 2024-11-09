//Este componente muestra una tarea individual y maneja los eventos de clic en la tarea
const Task = ({ task,onDelete }) => {

    const handleDelete = () =>{
        onDelete(task.id)
    }
  return (
    <>
      <li>
        {task.text} 
        <button onClick={handleDelete}>Eliminar</button>
      </li>
    </>
  );
};

export default Task;

//A Task le pasaremos el id como key, la tarea, y las funciones de borrado y completado para poder usarlas en cada tarea.
//Y también es donde haremos que se rendericen nuestros datos y componentes.

//Aquí tendremos cada una de las tareas con las funcionalidades de borrar y marcar como completada.
