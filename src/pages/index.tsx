import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

// ajouter une typo

export default function Home() {
  const icons = ["next", "graphql", "react", "tailwind", "nodejs", "java", "javascript", "php", "typescript"];

  const telechargeCV = () => {
    // permettre a l'user de telecharger mon cv
  };
  return (
    <Layout title="Accueil">
      <div>
        <h1>Lorem ipsum dolor.</h1>
        <p>Développeur fullstack junior</p>
      </div>
      <div className="flex justify-center">
        <Button variant="cv" size="cv" onClick={telechargeCV}>
          Mon CV
          <Download />
        </Button>
      </div>
      <div className="flex justify-center space-x-10 mt-12 flex-wrap">
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={`/svg/${icon}.svg`}
            alt={icon}
            width={50}
            height={0}
          />
        ))}
      </div>
    </Layout>
  );
}
