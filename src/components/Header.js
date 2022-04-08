import { Button } from "./Button"

export const Header = () => {
    const onClick = () =>{
        console.log("click")
    }
   return(
       <header>
            <h1>This is Header</h1>
            <Button text='Add' color='green' onClick={onClick} />
       </header>
   )
}
