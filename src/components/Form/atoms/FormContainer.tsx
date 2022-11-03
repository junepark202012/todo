import { ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type FormContainerProps = {
  children: ReactNode;
  reactHookForm: ReturnType<typeof useForm>;
};

export default function FormContainer({
  children,
  reactHookForm,
}: FormContainerProps) {
  const { handleSubmit } = reactHookForm;
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col gap-3 px-4 py-5 sm:p-6"
      >
        {children}
      </form>
    </div>
  );
}
