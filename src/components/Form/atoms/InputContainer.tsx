export default function InputContainer(props: any) {
  return (
    <input
      {...props}
      {...register(id, registerOptions)}
      type="text"
      name={id}
      id={id}
      className={
        `block w-full rounded-md text-form-text placeholder-form-placeholder shadow-sm sm:text-sm` +
        `${
          errors.title
            ? "border-form-border-error focus:border-form-focusBorder-error focus:ring-form-focusBorder-error"
            : "border-form-border-default focus:border-form-focusBorder-default focus:ring-form-focusBorder-default"
        }`
      }
      placeholder="Buy milk"
      aria-describedby={errors.title ? "todo-error" : undefined}
    />
  );
}
