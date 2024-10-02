import Link from "next/link";
import { Cat } from "lucide-react";
import { getUpOne } from "@/utils/function";

export default function Header() {
  const navLink = [
    { name: "accueil", link: "/" },
    { name: "projets", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <nav className="fixed flex justify-between items-center overflow-hidden top-0 w-full left-0 pb-0 pt-12 sm:pt-16 px-8 sm:px-16 md:px-20 z-10">
      <div>
        {/* ajouter un logo + personnel */}
        <Cat />
      </div>
      <div className="flex gap-4 sm:gap-24">
        {navLink.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="navLink relative overflow-hidden text-xs sm:text-sm p-3 hover:text-white"
          >
            {getUpOne(item.name)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
