import Link from "next/link";
import { Cat } from "lucide-react";

export default function Header() {
  const navLink = [
    { name: "accueil", link: "/" },
    { name: "projets", link: "/projets" },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  // mettre en majuscule la 1ere lettre
  const getUpOne = (str: string) => {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  return (
    <div className="flex justify-start h-20 px-8">
      <div className="flex gap-4 items-center">
        {/* ajouter un logo + personnel */}
        <Cat />
        <div className="flex space-x-6 ml-8">
          {navLink.map((item, index) => (
            <Link key={index} href={item.link} className="hover:border-b">
              {getUpOne(item.name)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
