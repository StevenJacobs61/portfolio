"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView("About");
    
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.175}}
        id='about'
        ref={ref}>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            After graduating with a degree in{" "}
            <span className="font-medium">Economics{" "}</span>and working in tech investment for several years, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}<br/>
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out and evolving a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            React.js, Node.js, Java
            </span>
            . I am also familiar and comfortable with TypeScript, SQL & NoSQL. I am <span className='font-medium'>always</span> looking to
            learn new technologies. <br/> I also teach programming as an instructor specialist at a coding bootcamp. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
        </p>
        <p>
            <span className="italic">When I&apos;m not coding</span>, I enjoy reading, exploring and playing with my cat. I greatly enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">philosophy and history</span>. I&apos;m also
            learning how to play the piano.
        </p>
    </motion.section>
    )
}
