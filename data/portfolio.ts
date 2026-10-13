export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "phone";
};

export type SkillCategory = {
  title: string;
  icon: "code" | "server" | "smartphone" | "database" | "wrench";
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags?: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export const personalInfo = {
  name: "Alioune Badara Nguirane",
  title: "Développeur Full Stack Web & Mobile",
  tagline:
    "Je conçois des applications web et mobiles performantes, de l'architecture backend à l'expérience utilisateur.",
  location: "Fès, Maroc — ouvert à la relocalisation",
  email: "badaranguirane120@gmail.com",
  phone: "+212 6 16 28 25 75",
  cvUrl: "/cv/Alioune-Badara-Nguirane-CV.pdf",
  about:
    "Développeur Full Stack avec plus de 3 ans d'expérience dans la conception et le déploiement d'applications web et mobiles performantes. Je dispose de solides compétences sur les frameworks modernes (React, Node.js, Nuxt.js) et en développement mobile avec Flutter, et j'interviens sur tout le cycle de vie logiciel, de l'architecture microservices à l'intégration d'APIs complexes.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Nguirane120", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/alioune-badara-nguirane-711820197/", icon: "linkedin" },
  { label: "Email", url: `mailto:${personalInfo.email}`, icon: "mail" },
  { label: "Téléphone", url: `tel:${personalInfo.phone.replace(/\s/g, "")}`, icon: "phone" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React.js", "Next.js", "Nuxt.js", "Vue.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Django", "FastAPI", "Python"],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    skills: ["Flutter", "React Native"],
  },
  {
    title: "Bases de données & BaaS",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Firebase (Firestore, Auth, Functions)"],
  },
  {
    title: "Outils & Environnement",
    icon: "wrench",
    skills: ["Git", "Docker", "Linux", "Méthodologies Agiles"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Développeur Front-end (Nuxt.js)",
    company: "ISTAMCO SA",
    period: "Février 2025 – Juillet 2025",
    description: [
      "Développement des interfaces utilisateur pour les plateformes de gestion QHSE et le terminal maritime DMT.",
      "Modernisation de modules critiques vers Nuxt.js, améliorant la fluidité et l'expérience utilisateur.",
      "Mise en place d'environnements de développement isolés avec Docker pour sécuriser les tests d'intégration.",
    ],
    tags: ["Nuxt.js", "Vue.js", "Docker"],
  },
  {
    role: "Développeur Full Stack",
    company: "Voyzant",
    period: "Octobre 2024 – Décembre 2024",
    description: [
      "Conception d'un CRM sur mesure pour l'industrie du voyage utilisant Next.js et PostgreSQL.",
      "Optimisation des requêtes SQL et structuration des données pour la gestion des réservations.",
    ],
    tags: ["Next.js", "PostgreSQL"],
  },
  {
    role: "Développeur Full Stack",
    company: "CTS (Aviation Booking)",
    period: "Décembre 2023 – Septembre 2024",
    description: [
      "Développement de microservices pour une plateforme de réservation aérienne internationale.",
      "Collaboration étroite avec les équipes backend pour l'intégration d'APIs de ticketing complexes.",
    ],
    tags: ["Microservices", "API REST"],
  },
  {
    role: "Coach Assistant en Programmation",
    company: "Bakeli School Of Technology",
    period: "Octobre 2022 – Octobre 2023",
    description: [
      "Accompagnement technique de 10 étudiants sur le processus de formation.",
      "Supervision de projets internes et revues de code pour garantir le respect des bonnes pratiques.",
      "Explication de concepts complexes et animation d'ateliers sur le développement logiciel.",
    ],
    tags: ["Mentorat", "Code Review"],
  },
  {
    role: "Développeur Full Stack (Projets)",
    company: "Easy Market & Tayeur",
    period: "Projets personnels",
    description: [
      'Conception du backend de l\'application "Tayeur" et création d\'APIs d\'authentification robustes.',
      'Transition du back-office de l\'application "Easy Market" de Django vers ReactJS.',
      "Résolution de bugs critiques sur l'application mobile développée avec React Native.",
    ],
    tags: ["React Native", "Django", "ReactJS"],
  },
];

export const education: EducationItem[] = [
  { degree: "Études en Programmation", school: "Bakeli School Of Technology", period: "2020 – 2022" },
  { degree: "JavaScript Algorithms and Data Structures", school: "freeCodeCamp", period: "Certification" },
  { degree: "Back End Development and APIs (Node.js)", school: "freeCodeCamp", period: "Certification" },
  { degree: "Complete Flutter & Dart Development", school: "Udemy", period: "Certification" },
];

export const projects: Project[] = [
  {
    title: "Kaydiay — E-commerce",
    description:
      "Application e-commerce réalisée pour un client, avec paiement mobile intégré via Orange Money et Wave.",
    tags: ["Flutter", "Firebase", "Orange Money", "Wave"],
    demoUrl: "https://kaydiay-d5bd7.web.app/",
    codeUrl: "",
  },
  {
    title: "Gestion de boutique",
    description:
      "Application de gestion pour une boutique de vêtements : stock avec alertes de rupture, ventes, dépenses et tableau de bord du bénéfice. Installable sur mobile (PWA).",
    tags: ["Next.js", "Firebase"],
    demoUrl: "https://gestion-boutique-lemon.vercel.app/",
    codeUrl: "https://github.com/Nguirane120/gestion-boutique",
  },
  {
    title: "Gestion d'auto-école",
    description:
      "Application de gestion d'auto-école avec authentification : suivi des élèves, des examens et des paiements.",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://gestion-auto-ecole-red.vercel.app/login",
    codeUrl: "https://github.com/Nguirane120/gestion-auto-ecole",
  },
  {
    title: "Resto App — commande en ligne (prototype)",
    description:
      "Prototype d'application de commande pour un restaurant : menu par catégorie, recherche, panier avec code promo, et espace admin de gestion des produits.",
    tags: ["Nuxt.js", "Vue.js", "PrimeVue", "Tailwind CSS"],
    demoUrl: "",
    codeUrl: "https://github.com/Nguirane120/resto-app",
  },
  {
    title: "Xarala Mobile — clone e-learning",
    description:
      "Reproduction de l'application de la plateforme Xarala : catalogue de cours, favoris hors ligne, connexion e-mail et Google, profil avec photo.",
    tags: ["Flutter", "Bloc", "Firebase"],
    demoUrl: "",
    codeUrl: "https://github.com/Nguirane120/clone_xarala_mobileapp",
  },
  {
    title: "E-commerce Flutter",
    description:
      "Application mobile de boutique connectée à une API REST : catalogue par catégorie, détail produit, panier et gestion des produits.",
    tags: ["Flutter", "Bloc", "API REST", "go_router"],
    demoUrl: "",
    codeUrl: "https://github.com/Nguirane120/xaralEcommerce",
  },
  {
    title: "Gestionnaire de tâches — certification Force-N",
    description:
      "To-do list mobile avec catégories, filtre par date et suivi des tâches terminées. Stockage local SQLite et architecture en couches.",
    tags: ["Flutter", "Riverpod", "SQLite"],
    demoUrl: "",
    codeUrl: "https://github.com/Nguirane120/forceN_certification_app",
  },
  {
    title: "Gestion de budget",
    description:
      "Application mobile de suivi de budget personnel : ajout de revenus et de dépenses, calcul automatique du solde.",
    tags: ["Flutter", "Provider"],
    demoUrl: "",
    codeUrl: "https://github.com/Nguirane120/gestionBudget",
  },
  {
    title: "Modules QHSE & DMT — ISTAMCO",
    description:
      "Développement front-end du module QHSE (Qualité, Hygiène, Sécurité, Environnement) avec intégration des APIs backend, puis intégration des maquettes Figma des pages du terminal maritime DMT.",
    tags: ["Nuxt.js", "Vue.js", "API REST", "Figma"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "CRM Voyage — Voyzant",
    description: "CRM sur mesure pour l'industrie du voyage, gestion des réservations et requêtes SQL optimisées.",
    tags: ["Next.js", "PostgreSQL"],
    demoUrl: "",
    codeUrl: "",
  },
  {
    title: "Plateforme de réservation aérienne — CTS",
    description: "Microservices pour une plateforme de réservation aérienne internationale avec APIs de ticketing.",
    tags: ["Microservices", "API", "Backend"],
    demoUrl: "",
    codeUrl: "",
  },
];
