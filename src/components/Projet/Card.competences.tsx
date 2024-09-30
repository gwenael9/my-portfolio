import { getUpOne } from "@/utils/function";
import React from "react";

type Competence = {
  title: string;
  content: string[];
};

const competences: Competence[] = [
  {
    title: "frontend",
    content: ["react", "next.js", "vue.js", "tailwind", "typescript"],
  },
  {
    title: "backend",
    content: ["java", "node.js", "express.js", "graphQL", "typeORM"],
  },
  {
    title: "workflow",
    content: ["docker", "git", "CI/CD"],
  },
];

export default function CardCompetences() {
  return (
    <>
      {competences.map(({ title, content }, index) => (
        <div
          key={index}
          className="rounded-card p-8 border-primary border-base flex flex-col justify-between aspect-square w-[22rem] md:w-[28rem] hover:bg-primary transition-colors duration-500 transform hover:scale-[1.03]"
        >
          <ul>
            {content.map((c, idx) => (
              <li key={idx} className="text-sm">
                {getUpOne(c)}
              </li>
            ))}
          </ul>
          <h3 className="text-sm sm:text-base font-extrabold">
            {getUpOne(title)}
          </h3>
        </div>
      ))}
    </>
  );
}
