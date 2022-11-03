import Title from "@/components/Form/atoms/Title";
import FormContainer from "@/components/Form/atoms/FormContainer";
import TextArea from "@/components/Form/atoms/TextArea";
import SubmitButton from "@/components/Form/atoms/SubmitButton";

export default function Form() {
  return (
    <FormContainer>
      <Title id="title" label="Title" />
      <TextArea id="details" label="Details" />
      <SubmitButton text="Add" />
    </FormContainer>
  );
}
