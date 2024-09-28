import Layout from "@/components/Layout/Layout";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = ["arsenalgoal", "hygichecker"];

  return (
    <Layout title="Accueil">
      <div className="py-80">
        <p className="name text-primary text-3.6 xl:text-5.4">Gwenaël Guého</p>
        <h1 className="uppercase font-bold text-7.2 md:text-10 lg:text-12 xl:text-16 2xl:text-20 tracking-tight xl:tracking-normal">
          developpeur fullstack portfolio
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
        <ul className="text-center text-6 xl:text-12 uppercase">
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
    </Layout>
  );
}
