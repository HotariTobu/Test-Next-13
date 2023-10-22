'use client'

import AddTask from './AddTask';
import TaskList from './TaskList';
import TasksProvider, { initialTasks } from './TasksProvider';

export default function Tasks() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask initialTaskCount={initialTasks.length} />
      <TaskList />
    </TasksProvider>
  );
}
