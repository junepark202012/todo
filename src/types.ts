export type Todo = {
  title: string;
  details: string;
  dueDate: Date;
};

export type TodoWithId = Todo & { id: string };

export type TodoJSON = Omit<Todo, "dueDate"> & { dueDate: string };
