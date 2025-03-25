import "../assets/styles/taskList.css";
import { useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "some task",
      completed: false,
    },
    {
      id: 2,
      text: "some task 2",
      completed: false,
    },
    {
      id: 3,
      text: "some task 3",
      completed: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          text={task.text}
          key={task.id}
          id={task.id}
          onDelete={deleteTask}
          onToggle={toggleCompletion}
          completed={task.completed}
        />
      ))}
    </ul>
  );
}

export default TaskList;
