import { TaskInterface } from "../interfaces";

function Task({ title, description }: TaskInterface): JSX.Element {
  return (
    <li className="text-gray-900 px-5 py-3 text-lg border-2 border-gray-300 rounded-md transition-all duration-150 shadow-md hover:border-gray-400 hover:scale-[1.02]">
      <p>{title}</p>
      <p className="text-gray-500 text-base">
        <span className="">{"-"}</span> {description}
      </p>
    </li>
  );
}

export { Task };
