import { TaskFormInterface } from "../interfaces";

function TaskForm({ taskOnSubmit }: TaskFormInterface) {
  return (
    <form
      onSubmit={taskOnSubmit}
      className="w-1/2 bg-neutral-100 p-8 flex flex-col gap-4 items-left justify-between"
    >
      <label
        htmlFor="taskTitle"
        className="flex justify-between items-center text-lg text-gray-900"
      >
        What's on your mind?
        <input
          type="text"
          id="taskTitle"
          className="ml-4 w-1/2 px-3 py-1 rounded shadow-md"
        />
      </label>
      <label
        htmlFor="taskDescription"
        className="flex justify-between items-center text-lg text-gray-900"
      >
        Any details?
        <input
          type="text"
          id="taskDescription"
          className="ml-4 w-1/2 px-3 py-1 rounded shadow-md"
        />
      </label>
      <button
        type="submit"
        className="border border-neutral-100 text-neutral-100 text-lg font-semibold shadow-md bg-sky-500 self-center px-12 py-2 rounded transition-all duration-200 hover:shadow-sky-500/30 hover:shadow-lg hover:scale-105"
      >
        Add Task
      </button>
    </form>
  );
}

export { TaskForm };
