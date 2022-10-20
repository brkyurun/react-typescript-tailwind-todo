import { Task } from "./Task";
import { TasksInterface } from "../interfaces";

function TaskList({ tasks }: TasksInterface) {
  return (
    <ul className="w-1/2 bg-neutral-100 flex flex-col p-8 gap-3">
      {tasks.map((task) => (
        <Task title={task.title} description={task.description} />
      ))}
    </ul>
  );
}

export { TaskList };
