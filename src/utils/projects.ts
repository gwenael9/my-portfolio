export type Project = {
    name: string;
    description: string;
    technos: string;
    link: string;
    annee: number;
}

export const projects: Project[] = [
  {
    name: "arsenalgoal",
    description:
      "Projet personnel développé au cours de l'année 2024. Cette application affiche tout les buts d'Arsenal depuis la saison 2023/2024, il y a la possibilité pour l'utilisateur de filtrer sur les buts. Ce projet m'a permis de mettre plus en pratique mes connaissances en développement web, il s'agit d'un vrai tramplin pour moi.",
    technos: "React/Next.js Tailwind GraphQL Nodes.js/Express.js ApolloServer PostreSQL Docker",
    link: "https://arsenalgoal.fr",
    annee: 2024,
  },
  {
    name: "hygichecker",
    description:
      "Projet collaboratif développé avec l'aide de 3 étudiants lors de mon année d'alternance à la Wild Code School. Ce projet est un monitoring de site web/API, il permet à un utilisateur qui de tester une URL afin d'obtenir son statut code. Avec une authentification, l'utilisateur pourra stocker ses URLs dans des campaignes.",
    technos:
      "React/Next.js Tailwind GraphQL Nodes.js/Express.js ApolloServer PostreSQL Docker",
    link: "https://0923-bleu-2.wns.wilders.dev/",
    annee: 2024,
  },
];
