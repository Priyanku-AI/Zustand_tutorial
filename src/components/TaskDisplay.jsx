function TaskDisplay({ tasks }) {
  return (
    <ul className="list-disc pl-5">
      {tasks.map((task, index) => (
        <li key={index} className="text-gray-800">{task}</li>
      ))}
    </ul>
  );
}

export default TaskDisplay;