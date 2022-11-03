import { ReactNode } from "react";
import MainContainer from "@/components/MainContainer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </>
  );
}
