import Title from "@/components/Form/atoms/Title";
import FormContainer from "@/components/Form/atoms/FormContainer";
import TextArea from "@/components/Form/atoms/TextArea";
import SubmitButton from "@/components/Form/atoms/SubmitButton";
import { useForm } from "react-hook-form";
import { TodoInput } from "@/types";
import { DueDate } from "@/components/Form/atoms/DueDate";

export type FormId = keyof TodoInput;

export type ReactHookForm = ReturnType<typeof useForm<TodoInput>>;

export default function Form() {
  const reactHookForm = useForm<TodoInput>();

  return (
    <FormContainer reactHookForm={reactHookForm}>
      <Title reactHookForm={reactHookForm} id="title" label="Title" />
      <TextArea reactHookForm={reactHookForm} id="details" label="Details" />
      <div className="flex flex-col sm:flex-row">
        <DueDate reactHookForm={reactHookForm} />
        <SubmitButton text="Add" />
      </div>
    </FormContainer>
  );
}
