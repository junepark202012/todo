import Title from "@/components/Form/atoms/Title";
import FormContainer from "@/components/Form/atoms/FormContainer";
import TextArea from "@/components/Form/atoms/TextArea";
import SubmitButton from "@/components/Form/atoms/SubmitButton";
import { useForm } from "react-hook-form";
import { Todo } from "@/types";

export type FormId = keyof Todo;

export type ReactHookForm = ReturnType<typeof useForm<Todo>>;

export default function Form() {
  const reactHookForm = useForm<Todo>();

  return (
    <FormContainer reactHookForm={reactHookForm}>
      <Title reactHookForm={reactHookForm} id="title" label="Title" />
      <TextArea reactHookForm={reactHookForm} id="details" label="Details" />
      <input type="datetime-local" />
      <SubmitButton text="Add" />
    </FormContainer>
  );
}
