import "./assets/styles/global.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm />
      <TaskList />
      <Footer />
    </section>
  );
}

export default App;
