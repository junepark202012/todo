import { ReactNode } from "react";

export default function FormContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow">
      <form className="flex flex-col gap-3 px-4 py-5 sm:p-6">{children}</form>
    </div>
  );
}
