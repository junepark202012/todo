import Title from "@/components/Form/atoms/Title";
import FormContainer from "@/components/Form/atoms/FormContainer";
import TextArea from "@/components/Form/atoms/TextArea";
import SubmitButton from "@/components/Form/atoms/SubmitButton";
import { useForm } from "react-hook-form";

export default function Form() {
  const reactHookForm = useForm();

  return (
    <FormContainer reactHookForm={reactHookForm}>
      <Title reactHookForm={reactHookForm} id="title" label="Title" />
      <TextArea reactHookForm={reactHookForm} id="details" label="Details" />
      <SubmitButton text="Add" />
    </FormContainer>
  );
}
