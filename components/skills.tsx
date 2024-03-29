"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

export default function Skills() {

    const { ref } = useSectionInView("Skills")


  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill,i) => 
                <motion.li key={i}
                className='bg-white borderBlack rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80'
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true
                }}
                transition={{
                    delay: 0.05 * i
                }}>
                {skill}</motion.li>
            )}
        </ul>
    </section>
  )
}
