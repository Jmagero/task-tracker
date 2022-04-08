import './App.css';
import { useState } from "react"
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
  const [tasks , setTask] = useState(
    [{
        id: 1,
        text:"Doctor's appointement",
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text:"Meeting at School",
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text:"Food Shopping",
        day: 'Feb 10th at 5:30pm',
        reminder: true
    },
   ]);

   const deleteTask = (id) =>{
     setTask(tasks.filter( (task) => task.id !== id))
   }
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
