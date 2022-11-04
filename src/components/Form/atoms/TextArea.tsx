import type { FormId, ReactHookForm } from "@/components/Form/Form";

type TextAreaProps = {
  label: string;
  id: FormId;
  reactHookForm: ReactHookForm;
};

export default function TextArea({ label, id, reactHookForm }: TextAreaProps) {
  const { register } = reactHookForm;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-form-label">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          {...register(id)}
          rows={4}
          name={id}
          id={id}
          className="block w-full resize-none overflow-auto rounded-md border-form-border-default text-form-text placeholder-form-placeholder shadow-sm focus:border-form-focusBorder-default focus:ring-form-focusBorder-default sm:text-sm"
          defaultValue={""}
          placeholder="I need to buy milk for my coffee."
        />
      </div>
    </div>
  );
}
