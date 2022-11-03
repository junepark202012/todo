type TextAreaProps = {
  label: string;
  id: string;
};

export default function TextArea({ label, id }: TextAreaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-form-label">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name={id}
          id={id}
          className="block w-full resize-none overflow-auto rounded-md border-form-border text-form-text placeholder-form-placeholder shadow-sm focus:border-form-focusBorder focus:ring-form-focusBorder sm:text-sm"
          defaultValue={""}
          placeholder="I need to buy milk for my coffee."
        />
      </div>
    </div>
  );
}
