import { Task } from "./Task"

export const Tasks = ({tasks, onDelete, toggle}) => {
   return(
       <div>
           { tasks.length > 0 ?
               tasks.map((task) => (
               <Task key={task.id} task={task} onDelete={onDelete} toggle={toggle} />
               )):
               <h4>No Tasks</h4>}
       </div>
   )
}