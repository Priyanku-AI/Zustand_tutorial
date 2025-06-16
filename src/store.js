import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: ['Learn React', 'Build a project'],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;