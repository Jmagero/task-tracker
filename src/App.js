import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTask] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5002/tasks');
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5002/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTask(tasksFromServer);
    };
    getTasks();
  }, []);

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5002/tasks',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
    const data = await res.json();
    setTask([...tasks, data]);
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5002/tasks/${id}`, {
      method: 'DELETE',
    });
    setTask(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch('http://localhost:5002/tasks',{
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res.json();

    setTask(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder }
      : task)));
  };
  return (
    <div className="App">
      <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder} />
    </div>
  );
}

export default App;
