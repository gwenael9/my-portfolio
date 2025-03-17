export type Project = {
  name: string;
  description: string;
  technos: string;
  link: string;
  annee: number;
  github: string;
};

export const projects: Project[] = [
  {
    name: "arsenalgoal",
    description:
      "Projet personnel développé au cours de l'année 2024. Cette application affiche tout les buts d'Arsenal depuis la saison 2023/2024, il y a la possibilité pour l'utilisateur de filtrer sur les buts. Ce projet m'a permis de mettre plus en pratique mes connaissances en développement web, il s'agit d'un vrai tremplin pour moi.",
    technos:
      "React/Next.js Tailwind GraphQL Nodes.js/Express.js ApolloServer PostreSQL Docker",
    link: "https://arsenalgoal.fr",
    annee: 2024,
    github: "https://github.com/gwenael9/my-arsenal-app",
  },
  {
    name: "hygichecker",
    description:
      "Projet collaboratif réalisé en partenariat avec trois étudiants lors de mon année d'alternance à la Wild Code School. Il s'agit d'un outil de monitoring de sites web et d'API permettant à un utilisateur de tester une URL et d'en obtenir le code de statut. Grâce à une authentification, l'utilisateur peut également sauvegarder ses URLs au sein de campagnes dédiées.",
    technos:
      "React/Next.js Tailwind GraphQL Nodes.js/Express.js ApolloServer PostreSQL Docker",
    link: "https://0923-bleu-2.wns.wilders.dev/",
    annee: 2024,
    github: "https://github.com/WildCodeSchool/2023-09-wns-bleu-hygi-checker",
  },
  {
    name: "resellapp",
    description:
      "Site e-commerce de seconde main développé en autonomie lors du 1er semestre de mon Master 1. Ce projet est destiné exclusivement à un usage en développement et n'a pas vocation à être mis en production. Il constitue une démonstration technique des concepts et fonctionnalités d'un site e-commerce.",
    technos: "Vue.js Tailwind Nodes.js/Express.js TypeORM SQLite",
    link: "",
    annee: 2024,
    github: "https://github.com/gwenael9/my-resell-app",
  },
  {
    name: "todolistapp",
    description:
      "Petite application web d'une ToDoList. Ce projet m'a permis d'apprendre les bases du Java ainsi que SpringBoot.",
    technos: "React Next.js Tailwind Java SpringBoot PostgreSQL Docker",
    link: "",
    annee: 2024,
    github: "https://github.com/gwenael9/my-todolist-app",
  },
  {
    name: "messagerieapp",
    description:
      "Application de messagerie permettant de communiquer en temps réel grâce aux websockets. Ce projet m'a permis à la fois d'apprendre le fonctionnement des websockets ainsi que l'utilisation du framework backend Nest.js",
    technos: "React Next.js Tailwind Nest.js PostgreSQL Docker",
    link: "",
    annee: 2025,
    github: "https://github.com/gwenael9/my-messagerie-app",
  },
];
