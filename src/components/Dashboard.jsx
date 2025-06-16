import TaskContainer from './TaskContainer';

function Dashboard({ tasks, addTask }) {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
      <TaskContainer tasks={tasks} addTask={addTask} />
    </div>
  );
}

export default Dashboard;