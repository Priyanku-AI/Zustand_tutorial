import { create } from 'zustand';

const useTaskStore = create((set) => ({
  tasks: ['Prop drilling solved with Zustand'],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;