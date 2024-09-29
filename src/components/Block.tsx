import { ArrowDownRight } from "lucide-react";
import { ReactNode } from "react";

interface BlockProps {
  id: string;
  children: ReactNode;
  title: string;
}

export default function Block({ id, children, title }: BlockProps) {
  return (
    <div id={id} className="xl:pt-32 pb-40 xl:pb-80">
      <h2 className="mb-20 xl:mb-40 flex gap-2 text-sm lg:text-base font-extrabold">
        {title} <ArrowDownRight size={34} />
      </h2>
      {children}
    </div>
  );
}
