import LayoutBlock from "@/components/Layout.block";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Loader from "@/components/Loader";
import CardCompetences from "@/components/Projet/Card.competences";
import { projects } from "@/utils/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadCompleted = () => {
    setLoading(false);
  };

  // effet par la gauche
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  if (loading) {
    return <Loader onLoadComplete={handleLoadCompleted} />;
  }

  return (
    <Layout title="Accueil">
      <motion.div
        className="pt-60 pb-40 sm:py-80"
        initial="hidden"
        animate="visible"
        variants={fadeInFromLeft}
        transition={{ duration: 0.5 }}
      >
        <p className="tracking-neg-2 text-primary text-lg xl:text-3xl font-extrabold">
          Gwenaël Guého
        </p>
        <h1 className="uppercase font-extrabold text-4xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight xl:tracking-normal leading-.75">
          developer fullstack portfolio
        </h1>
      </motion.div>

      <LayoutBlock id="about" title="à propos" >
        <p className="text-center text-xl xl:text-6xl font-extrabold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque,
          alias accusantium nihil quia accusamus dolorem officia.
        </p>
      </LayoutBlock>

      <LayoutBlock id="projects" title="mes projets">
        <ul className="text-center text-2xl xl:text-7xl uppercase font-extrabold">
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                href={`/${project}`}
                className="hover:text-primary transition-all duration-700 ease-in-out hover:font-medium"
              >
                {project}
              </Link>
            </li>
          ))}
        </ul>
      </LayoutBlock>

      <LayoutBlock id="competences" title="compétences">
        <div className="flex justify-center gap-4 sm:gap-12 flex-wrap">
          <CardCompetences />
        </div>
      </LayoutBlock>

      <LayoutBlock id="contact" title="contact">
        <div className="flex flex-col">
          <Link
            href="mailto:gwenaelgueho@gmail.com"
            className="text-sm lg:text-5xl mb-4 text-primary hover:text-white transition-colors duration-1000"
          >
            gwenaelgueho@gmail.com
          </Link>
          <Link href="tel:+33787085394" className="text-xl">
            (+33) 7 87 08 53 94
          </Link>
        </div>
      </LayoutBlock>
      <Footer />
    </Layout>
  );
}
