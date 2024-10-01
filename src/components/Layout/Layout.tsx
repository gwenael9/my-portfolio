import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import React from "react";
import { useRouter } from "next/router";
import HeaderProject from "./HeaderProject";

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter();

  // si on est sur l'accueil
  const home = router.pathname == "/";

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
      {home ? <Header /> : <HeaderProject />}
      <main className="px-16 md:px-20 xl:px-40 max-w-[144rem] m-auto">
        {children}
      </main>
    </>
  );
}
