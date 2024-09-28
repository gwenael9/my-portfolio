import Link from "next/link";
import { Cat } from "lucide-react";
import { useRouter } from "next/router";

export default function Header() {

  const router = useRouter();

  const navLink = [
    { name: "accueil", link: "/" },
    { name: "projets", link: "/projets" },
    { name: "contact", link: "/contact" },
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

  const getBgColor = (item: string) => {
    if (item === router.pathname) {
      return "bgVert";
    }
  }

  return (
    <nav className="fixed flex justify-between items-center overflow-hidden top-0 w-full left-0 pb-0 pt-12 sm:pt-16 px-20 sm:px-40">
      <div>
        {/* ajouter un logo + personnel */}
        <Cat />
      </div>
      <div className="flex gap-4 sm:gap-24">
        {navLink.map((item, index) => (
          <Link key={index} href={item.link} className={`navLink relative overflow-hidden text-1.9 sm:text-2.4 p-3 ${getBgColor(item.link)}`}>
            {getUpOne(item.name)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
