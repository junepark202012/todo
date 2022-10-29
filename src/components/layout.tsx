import { ReactElement } from "react";
import Head from "next/head";
import Navbar from "./ui/Navbar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
