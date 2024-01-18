import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px4 text-center flex flex-col items-center text-gray-500'>
        <small className='mb-2 block text-xs max-w-[90%]'>&copy; 2024 Steven Jacobs. All rights reserved.</small>
        <p className='text-xs max-w-[90%]'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js 14(App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}
