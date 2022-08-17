import { useState } from 'react';
import Task from '../Task/Task';
import Summary from '../Summary/Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    done: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTask = (taskId) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (task._id === taskId) {
        task.done = !task.done;

        if (task.done) setTasksCompleted(tasksCompleted + 1);
        else setTasksCompleted(tasksCompleted - 1);
      }
    });
    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary completed={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
