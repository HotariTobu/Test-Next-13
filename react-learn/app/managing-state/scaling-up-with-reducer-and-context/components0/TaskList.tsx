import { useState } from 'react';
import Task from './task';

export default function TaskList(props: {
  tasks: Task[],
  onChangeTask: (task: Task) => void,
  onDeleteTask: (taskId: number) => void,
}) {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={props.onChangeTask}
            onDelete={props.onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task(props: {
  task: Task
  onChange: (task: Task) => void
  onDelete: (taskId: number) => void
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={props.task.text}
          onChange={e => {
            props.onChange({
              ...props.task,
              text: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {props.task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={e => {
          props.onChange({
            ...props.task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => props.onDelete(props.task.id)}>
        Delete
      </button>
    </label>
  );
}
