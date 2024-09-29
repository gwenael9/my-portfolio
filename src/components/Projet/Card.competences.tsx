import { getUpOne } from "@/utils/function";

type Competence = {
  title: string;
  content: string[];
};

export default function CardCompetences() {
  const competences: Competence[] = [
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
    <>
      {competences.map((competence, index) => (
        <div
          key={index}
          className="rounded-card p-8 border-primary border-base flex flex-col justify-between aspect-square w-[22rem] md:w-[28rem] hover:bg-primary transition-colors duration-500 transform hover:scale-[1.03] hover:text-white"
        >
          <ul>
            {competence.content.map((c, index) => (
              <li key={index} className="text-sm">
                {getUpOne(c)}
              </li>
            ))}
          </ul>
          <h3 className="text-sm sm:text-base font-extrabold">{getUpOne(competence.title)}</h3>
        </div>
      ))}
    </>
  );
}
