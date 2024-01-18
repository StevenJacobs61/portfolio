"use client";

import Image from 'next/image'
import React from 'react'
import Me from '@/public/me.jpeg'
import { motion } from "framer-motion"
import Link from 'next/link';
import  { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' ref={ref} id="home">
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type: "tween", duration: 0.2}}>
                <Image 
                    src={Me} 
                    alt='Steven portrait' 
                    quality={95} 
                    priority={true}
                    className='h-24 w-24 object-cover rounded-full
                    border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
            <motion.span className='absolute bottom-0 right-0 text-4xl'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 125, delay:0.1, duration: 0.7}}>
            👋
            </motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] 
            sm:text-4xl'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}>
            <span className="font-bold">Hello, I'm Steven.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
            </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center 
            justify-center gap-2 px-4 text-lg font-medium'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}>
            <Link href='#contact' 
            onClick={()=>{
                setTimeOfLastClick(Date.now())
                setActiveSection("Contact")}}
                className='group bg-gray-900 flex text-white px-7 py-3 
                items-center gap-2 rounded-full outline-none focus:scale-110
                hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a className='group bg-white flex px-7 py-3 
            items-center gap-2 rounded-full outline-none focus:scale-110
            hover:scale-110 cursor-pointer active:scale-105 transition borderBlack
            dark:bg-white/10'
            href='/CV.pdf' download>
                Download CV{" "}<HiDownload className='opacity-70 group-hover:translate-y-1'/>
            </a>
            <a className='bg-white flex p-4 text-gray-700
            items-center gap-2 rounded-full focus:scale-[1.15]
            hover:scale-[1.15] hover:text-gray-950 cursor-pointer active:scale-105 transition borderBlack dark:text-white/60 dark:bg-white/10'
            href='https://www.linkedin.com/in/steven-jacobs-9b99a4a9/'>
                <BsLinkedin/>
            </a>
            <a className='bg-white flex p-4 text-gray-700
            items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15]
            hover:scale-[1.15] hover:text-gray-950 cursor-pointer active:scale-105 transition borderBlack dark:text-white/60 dark:bg-white/10'
            href='https://github.com/StevenJacobs61'>
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
