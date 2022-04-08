import { Task } from "./Task"

export const Tasks = ({tasks, onDelete}) => {
   return(
       <div>
           { tasks.length > 0 ?
               tasks.map((task) => (
               <Task key={task.id} task={task} onDelete={onDelete} />
               )):
               <h4>No Tasks</h4>}
       </div>
   )
}