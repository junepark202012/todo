import { useLayoutEffect, useRef, useState } from "react";
import DoneDelete from "./molecules/DoneDelete";
import { TableHeader } from "@/components/TodoTable/molecules/TableHeader";
import { TodoWithId } from "@/types";
import { TableRow } from "@/components/TodoTable/molecules/TableRow";

const todos: TodoWithId[] = [
  {
    id: "1",
    title: "Learn Next.js",
    details:
      "Learn Next.js and Tailwind CSS Learn Next.js and Tailwind CSSLearn Next.js and Tailwind CSS",
    dueDate: new Date("December 14, 2022 03:24:00"),
  },
  {
    id: "2",
    title: "Learn React",
    details: "Learn React and Tailwind CSS",
    dueDate: new Date("December 17, 2022 03:24:00"),
  },
  // More todos...
];

export default function TodoTable() {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState<TodoWithId[]>([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedTodos.length > 0 && selectedTodos.length < todos.length;
    setChecked(selectedTodos.length === todos.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current !== null) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedTodos]);

  function toggleAll() {
    setSelectedTodos(checked || indeterminate ? [] : todos);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
          {selectedTodos.length > 0 && <DoneDelete />}
          <table className="min-w-full max-w-full table-fixed divide-y divide-gray-300">
            <TableHeader
              ref={checkbox}
              checked={checked}
              onChange={toggleAll}
            />
            <tbody className="divide-y divide-gray-200 bg-white">
              {todos.map((todo) => (
                <TableRow
                  key={todo.id}
                  selectedTodos={selectedTodos}
                  searchElement={todo}
                  onChange={(e) =>
                    setSelectedTodos(
                      e.target.checked
                        ? [...selectedTodos, todo]
                        : selectedTodos.filter((p) => p !== todo)
                    )
                  }
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
