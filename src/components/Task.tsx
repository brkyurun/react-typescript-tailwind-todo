import { TTaskInterface } from "../interfaces";

type ITaskProps = TTaskInterface;

function Task({ title, description, onClick }: ITaskProps): JSX.Element {
  return (
    <li className="text-gray-900 px-5 py-3 text-lg border-2 border-gray-300 rounded-md transition-all duration-150 shadow-md hover:border-gray-400 hover:scale-[1.02]">
      <p className="flex justify-between items-center">
        {title}
        <span
          onClick={onClick}
          className="inline-block transition-all duration-200 hover:scale-125 bg-red-500 rounded-full px-[5px] text-neutral-100 text-sm"
        >
          X
        </span>
      </p>
      <p className="text-gray-500 text-base">
        <span className="">{description ? "-" : ""}</span>{" "}
        {description ? description : ""}
      </p>
    </li>
  );
}

export { Task };
