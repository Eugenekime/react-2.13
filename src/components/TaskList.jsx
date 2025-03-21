import "../assets/styles/taskList.css";
import { useState } from "react";
import Task from "./Task";
import { formatDistanceToNow } from "date-fns";

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "some task",
      createdTime: formatDistanceToNow(new Date()),
    },
    {
      id: 2,
      text: "some task 2",
      createdTime: formatDistanceToNow(new Date()),
    },
    {
      id: 3,
      text: "some task 3",
      createdTime: formatDistanceToNow(new Date()),
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          text={task.text}
          creationTime={task.createdTime}
          key={task.id}
          id={task.id}
          onDelete={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
