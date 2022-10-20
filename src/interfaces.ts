export interface TaskInterface {
  title: string;
  description?: string;
  id: number;
}

export interface TasksInterface {
  tasks: TaskInterface[];
}

export interface TaskForm {
  taskOnSubmit: (event: Event) => void;
}
