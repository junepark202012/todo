import { Controller } from "react-hook-form";
import { ReactHookForm } from "@/components/Form/Form";
import { DueDate } from "@/components/Form/atoms/DueDate";

type DueDateControllerProps = {
  reactHookForm: ReactHookForm;
};

export default function DueDateController({
  reactHookForm,
}: DueDateControllerProps) {
  const { control } = reactHookForm;
  return <Controller name="dueDate" control={control} render={DueDate} />;
}
