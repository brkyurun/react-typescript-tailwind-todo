import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TaskList } from "./components/TaskList";
import { TTaskInterface } from "./interfaces";
import { TaskForm } from "./components/TaskForm";
import uniqid from "uniqid";

function App() {
  const [tasks, setTasks] = useState<TTaskInterface[]>(() =>
    JSON.parse(localStorage.getItem("tasks") ?? "")
  );
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event?: ChangeEvent<HTMLInputElement>) {
    const eventName =
      event?.target.id === "taskTitle" ? "title" : "description";
    setTask({
      ...task,
      [eventName]: event?.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement> | Event | undefined) {
    event?.preventDefault();
    if (task.title.length <= 2) return;
    setTasks([
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: uniqid(),
      },
    ]);
    setTask({
      title: "👍🏻",
      description: "👍🏻",
    });
    setTimeout(() => {
      setTask({
        title: "",
        description: "",
      });
    }, 1000);
  }

  function handleDelete(taskId?: string) {
    Array.isArray(tasks) &&
      setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="min-h-screen py-32 bg-sky-500 flex flex-col items-center gap-8">
      <TaskForm
        taskOnSubmit={(event) => handleSubmit(event)}
        taskOnChange={(event) => handleChange(event)}
        value={task}
      />
      <TaskList tasks={tasks} onClick={handleDelete} />
    </div>
  );
}

export default App;
