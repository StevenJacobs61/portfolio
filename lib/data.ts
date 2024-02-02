import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import burgerBoxImg from "@/public/burgerBoxScreenShot.png";
import blockarchImg from "@/public/bass.png";
import badpolesImg from "@/public/bpss.png";
import chainWorkImg from "@/public/cwss.png";
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
    title: "Chainwork",
    description:
      "A Web3 decentralised working environment in the metaverse. I worked as a UX/UI designer and front-end developer.",
    tags: ["Figma", "React", "Next.js", "Web3", "css"],
    imageUrl: chainWorkImg,
    link: 'https://chainwork-redesign.vercel.app/'
  },
  {
    title: "Burgerbox UK",
    description:
      "Full-stack app which eplaces the use of middleware such as Deliveroo. I worked as a full-stack developer on this startup project.",
    tags: ["React", "Next.js","Node.js", "MongoDB", "ePOS", "css"],
    imageUrl: burgerBoxImg,
    link: 'https://burgerbox-uk.com'
  },
  {
    title: "Blockarch.io",
    description:
      "Full-stack app which provides consultation to web3 startups, offering expert insights into the optimal technology for their project.",
    tags: ["React", "Java", "OOP", "PostgreSQL", "Docker", "SCSS"],
    imageUrl: blockarchImg,
    link: 'https://blockarch.io'
  },
  {
    title: "Badpoles NFT",
    description:
      "An NFT hosting platform to showcase artworks, mint collectibles and offer exclusive content.",
    tags: ["React", "Node.js", "Ethers.js", "Solidity", "CSS"],
    imageUrl: badpolesImg,
    link: 'https://bad-poles.vercel.app/'
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