import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { MdOutlineImportantDevices } from "react-icons/md";

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
      "I spent 1 year as a full-stack developer working as a freelancer. My stack included React, Next.js, TypeScript, Tailwind, Node.js, and MongoDB.",
      date: "2022-2023",
      icon: React.createElement(FaReact),
    },
    {
      title: "Full-Stack Developer & Tutor",
      location: "London, UK",
      description:
      "I currently work as a full-stack developer using mainly React and Java. I also teach at a programming bootcamp in the evenings. I have greatly improved my Typescript, React and Java skills. I am open to new opportunities.",
      date: "2023-Present",
      icon: React.createElement(MdOutlineImportantDevices),
    },
] as const;

export const projectsData = [
  {
    title: "Burger Box",
    description:
      "I worked as a full-stack developer on this startup project. It is an app which replaces the use of middleware such as Deliveroo.",
    tags: ["React", "Next.js","Node.js", "MongoDB", "ePOS", "css"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Blockarch.io",
    description:
      "Full-stack app which provides consultation to web3 startups, offering expert insights into the optimal technology for their project.",
    tags: ["React", "Java", "OOP", "PostgreSQL", "SCSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "NFT Platform",
    description:
      "An NFT hosting platform to showcase artworks, mint collectibles and offer exclusive content.",
    tags: ["React", "Node.js", "Ethers.js", "Solidity", "CSS"],
    imageUrl: wordanalyticsImg,
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
  "GraphQL",
  "Express",
  "Solidity",
  "Python",
  "Django",
  "Framer Motion",
] as const;