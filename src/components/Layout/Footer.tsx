import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const icons = [
    { name: "linkedin", link: "https://www.linkedin.com/in/gwena%C3%ABl-gu%C3%A9ho-92995a26b/" },
    { name: "github", link: "https://github.com/gwenael9" },
  ];

  return (
    <footer className="mb-24">
      <div className="p-12 sm:p-24 bg-primary text-secondary rounded-footer flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <p className="text-xs sm:text-sm lg:text-lg font-semibold">Tous droit réservés © 2024</p>
          <div className="flex gap-8">
            {icons.map((icon, index) => (
              <Link href={icon.link} target="_blank" key={index}>
                <Image
                  src={`/images/${icon.name}.svg`}
                  alt={`icon de ${icon.name}`}
                  width={28}
                  height={0}
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="uppercase font-extrabold text-3xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight xl:tracking-normal leading-.75">
          portfolio
        </p>
      </div>
    </footer>
  );
}
