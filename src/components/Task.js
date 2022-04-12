import { FaTimes } from 'react-icons/fa'
export const Task = ({task, onDelete, toggle}) => {
   return(
       <div onDoubleClick={() => toggle(task.id)}>
        <h3>{task.text}
            < FaTimes style={{color:'red'}} onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.day}</p>
       </div>
   )
}