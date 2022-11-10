import { useLayoutEffect, useRef, useState } from "react";
import DoneDelete from "./molecules/ DoneDelete";
import { TableHeader } from "@/components/TodoTable/molecules/TableHeader";
import { TodoWithId } from "@/types";

const todos: TodoWithId[] = [
  {
    id: "1",
    title: "Learn Next.js",
    details: "Learn Next.js and Tailwind CSS",
    dueDate: "2022-11-10T13:30:00.177Z",
  },
  // More todos...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TableRow(props: {
  selectedPeople: any[];
  searchElement: { name: string; title: string; email: string };
  onChange: (e: Event) => void;
}) {
  return (
    <tr
      className={
        props.selectedPeople.includes(props.searchElement)
          ? "bg-gray-50"
          : undefined
      }
    >
      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
        {props.selectedPeople.includes(props.searchElement) && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
        )}
        <input
          type="checkbox"
          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
          value={props.searchElement.email}
          checked={props.selectedPeople.includes(props.searchElement)}
          onChange={props.onChange}
        />
      </td>
      <td
        className={classNames(
          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
          props.selectedPeople.includes(props.searchElement)
            ? "text-indigo-600"
            : "text-gray-900"
        )}
      >
        {props.searchElement.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {props.searchElement.title}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {props.searchElement.email}
      </td>
      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a
          href="@/components/TodoTable/TodoTable#"
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit<span className="sr-only">, {props.searchElement.name}</span>
        </a>
      </td>
    </tr>
  );
}

export default function Example() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < todos.length;
    setChecked(selectedPeople.length === todos.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : todos);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedPeople.length > 0 && <DoneDelete />}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <TableHeader
                  ref={checkbox}
                  checked={checked}
                  onChange={toggleAll}
                />
                <tbody className="divide-y divide-gray-200 bg-white">
                  {todos.map((person) => (
                    <TableRow
                      key={person.email}
                      selectedPeople={selectedPeople}
                      searchElement={person}
                      onChange={(e) =>
                        setSelectedPeople(
                          e.target.checked
                            ? [...selectedPeople, person]
                            : selectedPeople.filter((p) => p !== person)
                        )
                      }
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
