import { ReactElement } from "react";
import Head from "next/head";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>layout</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
