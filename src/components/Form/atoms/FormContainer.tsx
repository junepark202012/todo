import { ReactNode } from "react";
import type { ReactHookForm } from "@/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { TodoInput, TodoWithId } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { parseISO } from "date-fns";

type FormContainerProps = {
  children: ReactNode;
  reactHookForm: ReactHookForm;
};

export default function FormContainer({
  children,
  reactHookForm,
}: FormContainerProps) {
  const { handleSubmit } = reactHookForm;

  const onSubmit: SubmitHandler<TodoInput> = async (data) => {
    console.log(data.dueDate);
    const ISODate = parseISO(data.dueDate);
    const todo: TodoWithId = { id: uuidv4(), ...data, dueDate: ISODate };
    const res = await fetch("/api/addTodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    console.log(res);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-3 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
    >
      {children}
    </form>
  );
}
