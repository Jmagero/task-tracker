import { Button } from "./Button"

export const Header = ({showAddTask, onAdd}) => {
   return(
       <header>
            <h1>This is Header</h1>
            <Button 
            text={showAddTask ? 'close' : 'Add'} 
            color={showAddTask ? 'red' :'green'} 
            onClick={onAdd} />
       </header>
   )
}
