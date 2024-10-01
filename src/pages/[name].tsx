import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import { getUpOne } from "@/utils/function";
import { projects } from "@/utils/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Projet() {
  const router = useRouter();
  const { name } = router.query;

  const getLink = (name: string) => {
    if (name == "arsenalgoal") {
      return "https://arsenalgoal.fr";
    } else {
      return "https://0923-bleu-2.wns.wilders.dev/";
    }
  };

  if (!name || !projects.includes(name.toString())) {
    return <div>non</div>;
  }

  return (
    <Layout title={getUpOne(name.toString())}>
      <div className="pb-40">
        <div className="flex items-start justify-between flex-wrap mb-40 uppercase">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-neg-2">
            {name}
          </h1>
          <Link
            className="flex items-center gap-2 text-sm"
            href={getLink(name.toString())}
            target="_blank"
          >
            voir <ArrowUpRight size={30} />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-32">
          <div className="flex flex-col gap-20 sm:w-1/2">
            <h2 className="text-primary uppercase text-sm font-bold">
              informations
            </h2>
            <p className="text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              nemo sed officiis. Rem nemo unde perspiciatis quae. Neque
              consectetur corporis fugiat aliquid, iusto architecto, sapiente
              doloremque, commodi enim quia magnam!
            </p>
          </div>
          <div className="flex flex-col gap-20 sm:w-1/2">
            <h2 className="text-primary uppercase text-sm font-bold">
              technos
            </h2>
            <div className="text-xs">
              React/Next.js GraphQL Node.js/Express.js ApolloServer Docker
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
