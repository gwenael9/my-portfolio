import Layout from "@/components/Layout/Layout";
import CardProjet from "@/components/Projet/Card.projet";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = ["arsenalgoal", "hygichecker"];

  const competences = [
    {
      title: "frontend",
      content: ["react", "next.js", "vue.js", "tailwind", "typescript"],
    },
    {
      title: "backend",
      content: ["java", "node.js", "express.js", "graphQL", "typeORM"],
    },
    { title: "workflow", content: ["docker", "git", "CI/CD"] },
  ];

  return (
    <Layout title="Accueil">
      <div className="py-80">
        <p className="name text-primary text-3.6 xl:text-5.4">Gwenaël Guého</p>
        <h1 className="uppercase font-bold text-6.5 md:text-10 lg:text-12 xl:text-20 tracking-tight xl:tracking-normal">
          developer fullstack portfolio
        </h1>
      </div>

      <div id="about" className="xl:pt-32 pb-40 xl:pb-80">
        <h2 className="mb-20 xl:mb-40 flex gap-2 text-2.4 xl:text-3.2">
          à propos <ArrowDownRight size={34} />
        </h2>
        <p className="text-center text-4 xl:text-9">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque,
          alias accusantium nihil quia accusamus dolorem officia.
        </p>
      </div>

      <div id="projects" className="xl:pt-32 pb-40 xl:pb-80">
        <h2 className="mb-20 xl:mb-40 flex gap-2 text-2.4 xl:text-3.2">
          mes projets <ArrowDownRight size={34} />
        </h2>
        <ul className="text-center text-5 xl:text-12 uppercase">
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                href={`/${project}`}
                className="hover:text-primary transition-colors duration-500"
              >
                {project}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div id="competences" className="xl:pt-32 pb-40 xl:pb-80">
        <h2 className="mb-20 xl:mb-40 flex gap-2 text-2.4 xl:text-3.2">
          compétences <ArrowDownRight size={34} />
        </h2>
        <div className="flex justify-center gap-4 sm:gap-12 flex-wrap">
          {competences.map((competence, index) => (
            <CardProjet key={index} competence={competence} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
