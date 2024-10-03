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
        <title>{`Gwenaël Guého - ${title}`}</title>
        <meta name="title" content="Gwenaël Guého - Portfolio" />
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Découvrez mes projets en tant que développeur fullstack, alliant expertise frontend et backend pour créer des solutions web performantes et élégantes."
        />
        <meta
          name="keywords"
          content="développeur fullstack, portfolio, projets, frontend, backend, développement web"
        />
        <meta name="author" content="Gwenaël Guého" />
        <meta property="og:title" content="Gwenaël Guého - Portfolio" />
        <meta
          property="og:description"
          content="Découvrez mon portfolio et mes projets en tant que développeur fullstack."
        />
        <meta property="og:image" content="/images/portfolio.png" />
        <meta property="og:url" content="https://www.gwenaelgueho.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gwenaël Guého - Développeur Fullstack"
        />
        <meta
          name="twitter:description"
          content="Découvrez mon portfolio et mes projets en tant que développeur fullstack."
        />
        <meta name="twitter:image" content="/images/portfolio.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image:alt"
          content="Aperçu du portfolio de Gwenaël Guého"
        />
        <meta
          name="twitter:image:alt"
          content="Aperçu du portfolio de Gwenaël Guého"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {home ? <Header /> : <HeaderProject />}
      <main className="px-8 sm:px-16 md:px-20 xl:px-40 max-w-[144rem] m-auto">
        {children}
      </main>
    </>
  );
}
