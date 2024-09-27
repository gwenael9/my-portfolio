import Layout from "@/components/Layout/Layout";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = ["arsenalgoal", "hygichecker"];

  return (
    <Layout title="Accueil">
      <div className="py-[20rem]">
        <p className="name text-primary">Gwenaël Guého</p>
        <h1 className="uppercase font-bold">developpeur fullstack portfolio</h1>
      </div>

      <div id="about" className="pt-32 pb-80">
        <h2 className="mb-40 flex gap-2">
          à propos <ArrowDownRight size={44} />
        </h2>
        <p className="text-center" style={{ fontSize: "9rem" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse neque,
          alias accusantium nihil quia accusamus dolorem officia.
        </p>
      </div>

      <div id="projects" className="pt-32 pb-80">
        <h2 className="mb-40 flex gap-2">
          mes projets <ArrowDownRight size={44} />
        </h2>
        <ul className="text-center" style={{ fontSize: "12rem" }}>
          {projects.map((project, index) => (
            <li key={index}>
              <Link href={`/${project}`}>{project}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
