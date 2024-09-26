import Layout from "@/components/Layout/Layout";
import Image from "next/image";

export default function Projets() {
  const icons = [
    "next",
    "graphql",
    "react",
    "tailwind",
    "nodejs",
    "java",
    "javascript",
    "php",
    "typescript",
  ];

  return (
    <Layout title="Mes projets">
      <div className="py-[20rem]">
        <h1>Page de projets</h1>
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
      </div>
    </Layout>
  );
}
