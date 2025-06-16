import { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a task"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;