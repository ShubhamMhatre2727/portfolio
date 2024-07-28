import React from 'react'

export const NavBar = () => {
  return (
    <nav className='absolute list-none w-full flex justify-center gap-10 py-3 cursor-pointer text-sm'>
        <li className='hover:text-white'>Home</li>
        <li className='hover:text-white'>Projects</li>
        <li className='hover:text-white'>Contact</li>
    </nav>
  )
}
