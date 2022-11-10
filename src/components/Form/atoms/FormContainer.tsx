import { ReactNode } from "react";
import type { ReactHookForm } from "@/components/Form/Form";
import { SubmitHandler } from "react-hook-form";
import { Todo } from "@/types";
import { v4 as uuidv4 } from "uuid";

type FormContainerProps = {
  children: ReactNode;
  reactHookForm: ReactHookForm;
};

export default function FormContainer({
  children,
  reactHookForm,
}: FormContainerProps) {
  const { handleSubmit } = reactHookForm;

  const onSubmit: SubmitHandler<Todo> = async (data) => {
    const dataWithUUID = { id: uuidv4(), ...data };
    const res = await fetch("/api/addTodo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWithUUID),
    });
    console.log(res);
  };

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 px-4 py-5 sm:p-6"
      >
        {children}
      </form>
    </div>
  );
}
