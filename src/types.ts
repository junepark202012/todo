export type Todo = {
  title: string;
  details: string;
  dueDate: Date;
};

export type TodoWithId = Todo & { id: string };

export type TodoInput = Todo & { dueDate: string };
