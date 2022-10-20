import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { TTaskInterface } from "./interfaces";
import { TaskForm } from "./components/TaskForm";
import uniqid from "uniqid";

const exampleTasks: TTaskInterface[] = [
  {
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    id: uniqid(),
  },
  {
    title: "title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    id: uniqid(),
  },
  {
    title: "title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    id: uniqid(),
  },
];

function App() {
  const [tasks, setTasks] = useState(exampleTasks);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  function handleChange(event: Event) {
    const eventName = event.target.id === "taskTitle" ? "title" : "description";
    setTask({
      ...task,
      [eventName]: event.target.value,
    });
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
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
    setInterval(() => {
      setTask({
        title: "",
        description: "",
      });
    }, 1000);
  }

  function handleDelete(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="min-h-screen py-32 bg-sky-500 flex flex-col items-center gap-8">
      <TaskForm
        taskOnSubmit={handleSubmit}
        taskOnChange={handleChange}
        value={task}
      />
      <TaskList tasks={tasks} onClick={handleDelete} />
    </div>
  );
}

export default App;
