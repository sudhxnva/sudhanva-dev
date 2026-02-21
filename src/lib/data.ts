import type { Experience, Project, SkillCategory, Education, ContactLink } from "@/types";

export const experiences: Experience[] = [
  {
    id: "games24x7",
    company: "Games24x7",
    role: "Software Engineer",
    period: "Jan 2023 – Jul 2025",
    location: "Hybrid",
    bullets: [
      "Built AI image recognition feature → +2.34% ARPU across 10M+ user base",
      "Re-architected network layer → 48% cold start reduction (2.9s → 1.5s)",
      "Led React Native major version upgrade for flagship 10M+ user app",
      "Accelerated dev velocity with Cursor AI → 60% unit test writing time reduction",
      "Authored Redux persistence middleware reused across 3+ internal projects",
      "5000+ LOC refactor achieving 90% unit test coverage",
      "Unified 3 disparate OTA pipelines into single CI/CD system",
    ],
  },
  {
    id: "inika",
    company: "Inika Design Studio",
    role: "Full-Stack Developer Intern",
    period: "Jun 2022 – Jul 2022",
    location: "Remote",
    bullets: [
      "Built Shopify Plus order tracker with React SSR → fulfilment time 4–5 days to <2 days for 5000+ orders/mo",
      "Architected iOS hyperlocal event discovery app — designed backend + frontend, led team of 3",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "sanity-automation",
    title: "Mobile App Sanity Automation Suite",
    description:
      "PR-triggered autonomous QA pipeline: GitHub Actions → Lambda (RAG on codebase diff) → EC2 running Claude Code + headless Android emulator. Claude takes screenshots, reads UI tree, interacts via ADB MCP, and posts pass/fail back to the PR.",
    bullets: [
      "75% developer time saved on manual sanity testing",
      "Auto-hands off to QA team on success, posts failure reason on fail",
      "RAG on codebase generates plain-English test instructions from diff",
      "Claude Code controls emulator via screenshots + XPath/coordinates",
    ],
    stack: ["GitHub Actions", "AWS Lambda", "EC2", "Claude Code", "ADB MCP", "RAG", "Android Emulator"],
    highlight: true,
  },
  {
    id: "crime-detection",
    title: "Near Real-Time Crime Detection via Drones & CNNs",
    description:
      "Bandwidth-efficient aerial surveillance pipeline: DJI Tello drone performs local processing and transmits only key frames via UDP to Flask backend running DenseNet-121 CNN with OpenCV facial recognition.",
    bullets: [
      "Local edge processing → minimal bandwidth consumption",
      "DenseNet-121 CNN + OpenCV facial recognition + object tracking",
      "Co-authored published research paper under Dr. Sandesh Jayanth",
      "Real-time analysis over UDP with Flask coordination backend",
    ],
    stack: ["Python", "Flask", "CNN", "OpenCV", "DJI SDK", "DenseNet-121"],
    highlight: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "Kotlin", level: 75 },
      { name: "Java", level: 75 },
      { name: "Swift", level: 70 },
      { name: "Dart", level: 65 },
      { name: "C++", level: 65 },
      { name: "Go", level: 60 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Expo", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Flutter", level: 70 },
      { name: "Vue", level: 65 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 85 },
      { name: "GitHub Actions", level: 85 },
      { name: "Docker", level: 80 },
      { name: "GCP", level: 70 },
      { name: "Kubernetes", level: 65 },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "Generative AI", level: 85 },
      { name: "LLMs / RAG", level: 85 },
      { name: "CNNs", level: 75 },
      { name: "RL", level: 65 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Claude Code", level: 90 },
      { name: "Figma", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Kafka", level: 65 },
    ],
  },
];

export const education: Education[] = [
  {
    id: "cu-boulder",
    institution: "University of Colorado Boulder",
    degree: "M.S. Computer Science",
    period: "Aug 2025 – Present",
    cgpa: "3.9 / 4.0",
    location: "Boulder, CO",
    coursework: [
      "User Centered Design & Development",
      "Building AI Agents",
      "Data Mining",
      "Computer Graphics",
    ],
  },
  {
    id: "pes",
    institution: "PES University",
    degree: "B.Tech Computer Science & Engineering",
    period: "Aug 2019 – May 2023",
    cgpa: "3.7 / 4.0",
    location: "Bangalore, India",
    coursework: [
      "Machine Intelligence",
      "Web Technologies",
      "Database Management Systems",
    ],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "sudhanva.m@icloud.com",
    href: "mailto:sudhanva.m@icloud.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sudhanva-m",
    href: "https://linkedin.com/in/sudhanva-m",
    icon: "⬡",
  },
  {
    label: "GitHub",
    value: "github.com/sudhxnva",
    href: "https://github.com/sudhxnva",
    icon: "◈",
  },
  {
    label: "Phone",
    value: "(303) 505-7325",
    href: "tel:+13035057325",
    icon: "◉",
  },
];

export const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export const heroRoles = [
  "Software Engineer",
  "React Native Developer",
  "AI Systems Builder",
  "UX Enthusiast",
  "MS CS @ CU Boulder",
];

export const bootLines = [
  "> Booting sudhanva.dev...",
  "> Loading modules... OK",
  "> Establishing connection... OK",
  "> Ready.",
];
