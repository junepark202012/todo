import styles from "@/components/Form/styles/form.module.css";
import type { ReactHookForm } from "@/components/Form/Form";
import { FormId } from "@/components/Form/Form";
import { RegisterOptions } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { getClasses } from "@/utils/styles";

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
  const {
    register,
    formState: { errors },
  } = reactHookForm;

  // Form validation options
  const minLength = 2;
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
      <div className="relative mt-1">
        <input
          {...register(id, registerOptions)}
          type="text"
          name={id}
          id={id}
          className={getClasses(
            "w-full",
            styles.inputDefault,
            Boolean(errors.title),
            styles.inputIsError,
            styles.inputIsNotError
          )}
          placeholder="Buy milk"
          aria-describedby={errors.title ? "todo-error" : undefined}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {errors.title ? (
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {errors.title?.message}
      </p>
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
