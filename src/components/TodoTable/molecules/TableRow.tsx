import { TodoWithId } from "@/types";
import { ChangeEventHandler } from "react";
import { classNames } from "@/utils/styles";
import { format } from "date-fns";

export function TableRow({
  selectedTodos,
  searchElement,
  onChange,
}: {
  selectedTodos: TodoWithId[];
  searchElement: TodoWithId;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const { id, title, dueDate, details } = searchElement;
  return (
    <tr
      className={
        selectedTodos.includes(searchElement) ? "bg-gray-50" : undefined
      }
    >
      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
        {selectedTodos.includes(searchElement) && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
        )}
        <input
          type="checkbox"
          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
          value={id}
          checked={selectedTodos.includes(searchElement)}
          onChange={onChange}
        />
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
          selectedTodos.includes(searchElement)
            ? "text-indigo-600"
            : "text-gray-900"
        )}
      >
        {format(dueDate, "yyyy-MM-dd")}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">{title}</td>
      <td className="hidden max-w-0 overflow-hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
        {details}
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a
          href="@/components/TodoTable/TodoTable#"
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit<span className="sr-only">, {title}</span>
        </a>
      </td>
    </tr>
  );
}
