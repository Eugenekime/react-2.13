import "../assets/styles/newTaskForm.css";

function NewTaskForm() {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  );
}

export default NewTaskForm;
