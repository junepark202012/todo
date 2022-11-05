export type Todo = {
  title: string;
  details: string;
};

export type TodoList = Todo[];

export type TodoWithId = Todo & { id: string };
