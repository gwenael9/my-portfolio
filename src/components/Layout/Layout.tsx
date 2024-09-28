import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="px-5 sm:px-10 lg:px-40 max-w-[144rem] m-auto">{children}</main>
    </>
  );
}
