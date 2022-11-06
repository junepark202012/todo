import type { FormId, ReactHookForm } from "@/components/Form/Form";
import { RegisterOptions } from "react-hook-form";
import { useState } from "react";
import styles from "@/components/Form/styles/form.module.css";

type TextAreaProps = {
  label: string;
  id: FormId;
  reactHookForm: ReactHookForm;
};

export default function TextArea({ label, id, reactHookForm }: TextAreaProps) {
  const [length, setLength] = useState(0);

  const {
    register,
    formState: { errors },
  } = reactHookForm;
  const maxLength = 300;
  const registerOptions: RegisterOptions = {
    maxLength: {
      value: maxLength,
      message: `This field must be less than ${maxLength} characters`,
    },
  };

  return (
    <div>
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm font-medium text-form-label">
          {label}
        </label>
        <span
          className={
            `mr-1 text-sm text-form-placeholder` +
            `${errors.details ? "text-red-500" : undefined}`
          }
        >{`${length} / ${maxLength}`}</span>
      </div>
      <div className="mt-1">
        <textarea
          {...register(id, registerOptions)}
          rows={4}
          name={id}
          id={id}
          className={[
            "w-full",
            styles.inputDefault,
            errors.details ? styles.inputIsError : styles.inputIsNotError,
          ].join(" ")}
          defaultValue={""}
          placeholder="I need to buy milk for my coffee."
          onChange={(e) => setLength(e.target.value.length)}
        />
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {errors.details?.message}
      </p>
    </div>
  );
}
