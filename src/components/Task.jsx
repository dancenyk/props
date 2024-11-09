const Task = ({task, onDelete, onMark, color}) => {
  const handdleDelete = () => {
    onDelete(task.id)
  }
  return (
    <>
      <li style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
        <span className={color} onClick={() => onMark(task.id)}>{task.text}</span>
        <button onClick={handdleDelete}>Eliminar</button>
      </li>
    </>
  )
 }
 
 
 export default Task