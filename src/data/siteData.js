import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { CodeXml } from "lucide-react";
export const siteData = {
  name: "ConsciousAI",
  email: "hello@consciousai.dev",
  tagline: "Digital products, built consciously.",
};
export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "2+", label: "Projects Completed" },
  { value: "2+", label: "Happy Clients" },
  { value: "2", label: "Developers" },
];
export const projects = [
  {
    id: 1,
    number: "01",
    title: "Goodgig Consultancy",
    category: "Business Website",
    description:
      "A modern, responsive website for Goodgig Consultancy, a social impact consulting firm working across policy research, impact assessment, programme strategy and organisational development.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.goodgig.in/",
  },
  {
    id: 2,
    number: "02",
    title: "HM Pharmaceuticals",
    category: "Pharmaceutical Website",
    description:
      "A modern pharmaceutical website for HM Pharmaceuticals, showcasing pediatric healthcare products, therapeutic categories, company information, quality standards, certifications and contact details.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.hmpharmaceuticalsllp.com/",
  },
];
export const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive and scalable web applications built around your business goals.",
    icon: "globe",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform iOS and Android applications using React Native and Expo.",
    icon: "smartphone",
  },
  {
    title: "AI Integration",
    description:
      "AI-powered features, assistants, recommendations and intelligent workflows.",
    icon: "brain",
  },
  {
    title: "API & Backend",
    description:
      "Reliable APIs, authentication, databases and backend systems that scale.",
    icon: "cloud",
  },
];
export const techStack = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React Native",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "REST API",
    icon: CodeXml,
  },
];
export const team = [
  {
    initials: "SP",
    name: "Suyash Padwal",
    role: "Full Stack Developer",
    description:
      "Focused on full-stack product development, modern frontend experiences, backend systems and scalable applications.",
    skills: ["React", "Next.js", "React Native", "Node.js", "AI"],
    image: "/suyash.jpeg",
  },
  {
    initials: "DJ",
    name: "Dhruv Jani",
    role: "Full Stack Developer",
    description:
      "Focused on full-stack products, backend systems, APIs and practical AI integrations using modern technologies.",
    skills: ["React", "Node.js", "Java", "Spring Boot", "AI"],
    image: "/dhruv.jpeg",
  },
];
