import "../assets/styles/task.css";
import { useState } from "react";

function Task({ id, text, creationTime, onDelete }) {
  ///////////    ↓ This code toggles the task between completed and active. ↓
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };
  ///////////    ↓ This code turn a task to an input ↓
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => setIsEditing(!isEditing);

  ///////////   ↓ This code for delete a task ↓
  const handleDelete = () => onDelete(id);

  /////////// ↓ This code for edit a task ↓
  const [taskText, setTaskText] = useState(text);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.trim() === "") {
      handleDelete();
    } else if (event.key === "Enter") {
      setIsEditing(!isEditing);
    }
  };

  return (
    <li className="editing">
      <div className="view" style={{ display: isEditing ? "none" : "block" }}>
        <input className="toggle" type="checkbox" onChange={toggleCompletion} />
        <label>
          <span
            className="description"
            style={{
              color: isCompleted ? "#cdcdcd" : "",
              textDecoration: isCompleted ? "line-through" : "",
            }}
          >
            {taskText}
          </span>
          <span className="created">created {creationTime}</span>
        </label>
        <button className="icon icon-edit" onClick={handleEdit}></button>
        <button className="icon icon-destroy" onClick={handleDelete}></button>
      </div>
      <input
        type="text"
        className="edit"
        value={taskText}
        style={{ display: isEditing ? "block" : "none" }}
        onChange={(event) => {
          setTaskText(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => setIsEditing(false)}
      />
    </li>
  );
}

export default Task;
