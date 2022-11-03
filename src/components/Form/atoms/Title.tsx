type TitleProps = {
  label: string;
  description: string;
};

export default function Title({ label, description }: TitleProps) {
  return (
    <div>
      <label
        htmlFor="title"
        className="block text-sm font-medium text-form-title"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full rounded-md border-gray-300 placeholder-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm"
          placeholder="Buy milk"
          aria-describedby="todo-title"
        />
      </div>
      <p className="mt-2 text-sm text-form-description" id="email-description">
        {description}
      </p>
    </div>
  );
}
