import TaskInput from './TaskInput';
import TaskDisplay from './TaskDisplay';

function TaskContainer({ tasks, addTask }) {
  return (
    <div>
      <TaskInput addTask={addTask} />
      <TaskDisplay tasks={tasks} />
    </div>
  );
}

export default TaskContainer;