import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='flex justify-center items-center w-full bg-zinc-800'>
        <nav className='flex justify-between items-center lg:container w-[95vw] py-3'>
            <Link href={'/'} className='text-2xl font-medium flex items-center gap-1 cursor-pointer'>
                <p>
                HoverLaunch 🚀
                </p>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar