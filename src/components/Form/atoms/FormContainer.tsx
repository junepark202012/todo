import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import type { ReactHookForm } from "@/components/Form/Form";

type FormContainerProps = {
  children: ReactNode;
  reactHookForm: ReactHookForm;
};

export default function FormContainer({
  children,
  reactHookForm,
}: FormContainerProps) {
  const {
    handleSubmit,
    formState: { errors },
  } = reactHookForm;

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
