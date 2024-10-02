import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import { getUpOne } from "@/utils/function";
import { Project, projects } from "@/utils/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Projet() {
  const router = useRouter();
  const { name } = router.query;

  const project: Project | undefined = projects.find(
    (project) => project?.name === name
  );

  if (!project) {
    return (
      <Layout title="Projet inconnu">
        <div style={{ height: "calc(100vh - 100px)" }}>
          <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-neg-2">
            Projet inconnu..
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={getUpOne(project.name)}>
      <div className="pb-40">
        <div className="flex items-start justify-between flex-wrap mb-40 uppercase">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-neg-2">
            {name}
          </h1>
          <Link
            className="relative flex items-center gap-2 text-sm group transition-all duration-700 hover:text-primary"
            href={project.link}
            target="_blank"
          >
            voir <ArrowUpRight size={30} />
            <span
              className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-700 group-hover:w-full"
            ></span>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-32">
          <div className="flex flex-col gap-20 sm:w-1/2">
            <h2 className="text-primary uppercase text-sm font-bold">
              informations
            </h2>
            <p className="text-xs">{project.description}</p>
          </div>
          <div className="flex flex-col gap-20 sm:w-1/2">
            <h2 className="text-primary uppercase text-sm font-bold">
              technos
            </h2>
            <div className="text-xs">{project.technos}</div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
