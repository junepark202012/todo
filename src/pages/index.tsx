import Hero from "@/components/Hero";
import Form from "@/components/Form/Form";
import TodoTable from "@/components/TodoTable/TodoTable";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-3xl">
        <Form />
        <TodoTable />
      </div>
    </>
  );
}
