import React from "react";
import { forwardRef } from "react";

type TableHeaderProps = {
  checked: boolean;
  onChange: () => void;
  hec;
};

export const TableHeader = forwardRef<HTMLInputElement, TableHeaderProps>(
  function TableHeader(props, ref) {
    return (
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
            <input
              type="checkbox"
              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
              ref={ref}
              checked={props.checked}
              onChange={props.onChange}
            />
          </th>
          <th
            scope="col"
            className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Details
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
    );
  }
);
