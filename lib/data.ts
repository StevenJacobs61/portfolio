import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import burgerBoxImg from "@/public/burgerBoxScreenShot.png";
import blockarchImg from "@/public/bass1.png";
import badpolesImg from "@/public/bpss.png";
import chainWorkImg from "@/public/cwss.png";
import { MdOutlineImportantDevices } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuNetwork } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "London, UK",
    description:
      "I graduated after 6 months of studying. I immediately found a role as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "London, UK",
    description:
      "I worked as a front-end developer for 1 year, creating a web3 recruitment platform. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Brighton, UK",
    description:
      "I spent 1 year as a full-stack developer founding AppStarter. My stack included React, Next.js, TypeScript, Tailwind, Node.js, and MongoDB.",
    date: "2021-2023",
    icon: React.createElement(FaReact),
  },
  {
    title: "Full-Stack Developer",
    location: "London, UK",
    description:
      "I co-founded Blockarch, developing an AI blockchain application. I greatly improved my Java and SQL knowledge here.",
    date: "2022-2023",
    icon: React.createElement(MdOutlineImportantDevices),
  },
  {
    title: "Prgramming Tutor",
    location: "London, UK",
    description:
      "I picked up an evening teaching role at a programming bootcamp. I re-discovered my passion for mentoring.",
    date: "2023-Present",
    icon: React.createElement(LiaChalkboardTeacherSolid),
  },
  {
    title: "Full-stack Developer",
    location: "London, UK",
    description:
      "I work full time in process optimisation, building custom applications and API integrations for large clients; improving efficiency, revenue and saving costs. I am also open to new opportunities.",
    date: "2023-Present",
    icon: React.createElement(LuNetwork),
  },
] as const;

export const projectsData = [
  {
    title: "Blockarch.io",
    description:
      "Full-stack AI-powered matching tool for web3 startups, offering expert insights into the optimal technology for their project.",
    tags: ["React", "Java", "OOP", "PostgreSQL", "Docker", "SCSS"],
    imageUrl: blockarchImg,
    link: "https://blockarch.io",
  },
  {
    title: "Burgerbox UK",
    description:
      "I worked as a full-stack developer for this management app which replaces the use of middleware such as Deliveroo.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "ePOS", "css"],
    imageUrl: burgerBoxImg,
    link: "https://burgerbox-uk.com",
  },
  {
    title: "Chainwork",
    description:
      "A Web3 decentralised working environment in the metaverse. I worked as a UX/UI designer and front-end developer.",
    tags: ["Figma", "React", "Next.js", "Web3", "css"],
    imageUrl: chainWorkImg,
    link: "https://chainwork-redesign.vercel.app/",
  },
  {
    title: "Badpoles NFT",
    description:
      "An NFT hosting platform to showcase artworks, mint collectibles and offer exclusive content.",
    tags: ["React", "Node.js", "Ethers.js", "Solidity", "CSS"],
    imageUrl: badpolesImg,
    link: "https://bad-poles.vercel.app/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "SCSS",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "Spring",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "APIs",
  "GraphQL",
  "Express",
  "Solidity",
  "Python",
  "Django",
  "Framer Motion",
] as const;
