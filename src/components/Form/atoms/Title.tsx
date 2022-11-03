type TitleProps = {
  label: string;
  id: string;
  description?: string;
};

export default function Title({ label, description, id }: TitleProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-form-label">
        {label}
      </label>
      <div className="mt-1">
        <input
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
