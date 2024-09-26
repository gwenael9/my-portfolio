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
      return "bgVert"
    }
  }

  return (
    <nav className="fixed flex justify-between overflow-hidden top-0 w-full left-0 pb-0 pt-[4rem] px-[10rem] text-white">
      <div>
        {/* ajouter un logo + personnel */}
        <Cat />
      </div>
      <div className="flex gap-[6rem]">
        {navLink.map((item, index) => (
          <Link key={index} href={item.link} className={`navLink relative overflow-hidden p-3 ${getBgColor(item.link)}`}>
            {getUpOne(item.name)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
