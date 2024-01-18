"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {

    const { ref } = useSectionInView("Contact");

  return (
    <motion.section id='contact' ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    viewport={{once: true}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6'>
        Please contact me directly at <a
        className='underline' href='mailto:stevenjacobs61@gmail.com'>
            stevenjacobs61@gmail.com</a>{" "}or through this form.
        </p>
        <form className='mt-10 flex flex-col' action={async(formData) => {
            try {
                await sendEmail(formData);
            } catch (error) {
                console.error(error)
            }
        }}>
            <input 
            type="email" 
            name='senderEmail'
            placeholder='Your email' 
            required 
            maxLength={500}
            className='h-14 rounded-lg borderBlack px-4'
            />
            <textarea 
            placeholder='Your message'
            name='message'
            className='h-52 my-3 rounded-lg borderBlack p-4'
            required
            maxLength={5000}
            />
            <button type='submit' 
            className='group flex items-center justify-center 
            gap-2 h-[3rem] bg-gray-900 text-white
            rounded-full outline-none transition-all
            w-[8rem] focus:scale-110 hover:bg-gray-950
            hover:scale-110 cursor-pointer active:scale-105'
            >
            Submit 
            <FaPaperPlane className='text-xs opacity-70 transition-all
            group-hover:translate-x-1 group-hover:-translate-y-1'
            />
            {" "}</button>
        </form>
    </motion.section>
  )
}
