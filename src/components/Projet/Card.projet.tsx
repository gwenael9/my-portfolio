import { getUpOne } from "@/utils/function";

type Competence = {
  title: string;
  content: string[];
};

interface CompetencesProps {
  competence: Competence;
}

export default function CardProjet({
  competence: { title, content },
}: CompetencesProps) {
  return (
    <div className="rounded-card p-8 border-primary border-base flex flex-col justify-between aspect-square w-[22rem] md:w-[28rem] hover:bg-primary transition-colors duration-500 transform hover:scale-[1.03]">
      <ul>
        {content.map((c, index) => (
          <li key={index} className="text-2.4">
            {getUpOne(c)}
          </li>
        ))}
      </ul>
      <h3 className="text-2.4 sm:text-3.2">{getUpOne(title)}</h3>
    </div>
  );
}
