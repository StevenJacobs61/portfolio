import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px4 text-center max-w-[90%] text-gray-500'>
        <small className='mb-2 block text-xs'>&copy; 2024 Steven Jacobs. All rights reserved.</small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span> built with React & Next.js 14(App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel Hosting.
        </p>
    </footer>
  )
}
