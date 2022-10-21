import { Task } from "./Task";
import { TTaskInterface } from "../interfaces";

interface ITaskListProps {
  tasks: TTaskInterface[];
  onClick: (taskId?: string) => void;
}

function TaskList({ tasks, onClick }: ITaskListProps) {
  return (
    <ul className="w-1/2 bg-neutral-100 flex flex-col p-8 gap-3">
      {tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          onClick={() => onClick(task.id)}
          key={task.id}
        />
      ))}
    </ul>
  );
}

export { TaskList };
