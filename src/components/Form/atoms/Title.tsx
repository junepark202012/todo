import { useForm } from "react-hook-form";

type TitleProps = {
  label: string;
  id: string;
  description?: string;
  reactHookForm: ReturnType<typeof useForm>;
};

export default function Title({
  label,
  description,
  id,
  reactHookForm,
}: TitleProps) {
  const { register } = reactHookForm;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-form-label">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...register(id, {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "This field must be at least 3 characters",
            },
          })}
          type="text"
          name={id}
          id={id}
          className="block w-full rounded-md border-form-border text-form-text placeholder-form-placeholder shadow-sm focus:border-form-focusBorder focus:ring-form-focusBorder sm:text-sm"
          placeholder="Buy milk"
          aria-describedby="todo-title"
          required
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
