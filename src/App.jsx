import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [tasks, setTasks] = useState(['Why Prop Drilling is a Problem?']);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List (Prop Drilling)</h1>
      <Dashboard tasks={tasks} addTask={addTask} />
    </div>
  );
}

export default App;