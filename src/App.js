import './App.css';
import { useState } from "react"
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { AddTask } from './components/AddTask';

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
   const [ showAddTask, setShowAddTask] = useState(false);

   const addTask = (task) =>{
     const id = Math.floor(Math.random() *10000) + 1
     const newTask = {id, ...task}
     setTask([...tasks, newTask])
   }
   const deleteTask = (id) =>{
     setTask(tasks.filter( (task) => task.id !== id))
   }
   const toggleReminder = (id) =>{
     setTask(tasks.map( task => 
       task.id === id ? {...task, reminder: !task.reminder}
       : task 
     ))
   }
  return (
    <div className="App">
      <Header showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder}/>
    </div>
  );
}

export default App;
