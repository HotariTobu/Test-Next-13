import { useContext, useState } from 'react';
import Task from './task';
import { useTasks, useTasksDispatch } from './TasksProvider';

export default function TaskList() {
  const tasks = useTasks()
  return (
    <ul>
      {tasks && tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task(props: {
  task: Task
}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={props.task.text}
          onChange={e => {
            dispatch && dispatch({
              type: 'changed',
              task: {
                ...props.task,
                text: e.target.value
              },
            })
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
          dispatch && dispatch({
            type: 'changed',
            task: {
              ...props.task,
              done: e.target.checked
            },
          })
        }}
      />
      {taskContent}
      <button onClick={() => dispatch && dispatch({
        type: 'deleted',
        id: props.task.id,
      })}>
        Delete
      </button>
    </label>
  );
}
