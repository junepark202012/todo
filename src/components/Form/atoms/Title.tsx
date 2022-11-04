import type { ReactHookForm } from "@/components/Form/Form";
import { FormId } from "@/components/Form/Form";
import { RegisterOptions } from "react-hook-form";

type TitleProps = {
  label: string;
  id: FormId;
  description?: string;
  reactHookForm: ReactHookForm;
};

export default function Title({
  label,
  description,
  id,
  reactHookForm,
}: TitleProps) {
  const { register } = reactHookForm;

  const minLength = 3;

  const registerOptions: RegisterOptions = {
    required: "This field is required",
    minLength: {
      value: minLength,
      message: `This field must be at least ${minLength} characters`,
    },
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-form-label">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(id, registerOptions)}
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-form-border text-form-text placeholder-form-placeholder shadow-sm focus:border-form-focusBorder focus:ring-form-focusBorder sm:text-sm"
          placeholder="Buy milk"
          aria-describedby="todo-title"
        />
      </div>
      {description ? (
        <p
          className="mt-2 text-sm text-form-description"
          id="email-description"
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
