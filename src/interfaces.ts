export interface TaskInterface {
  title: string;
  description: string;
}

export interface TasksInterface {
  tasks: TaskInterface[];
}

export interface TaskForm {
  taskOnSubmit: () => void;
}
