import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title='Home' address='/' Icon={AiFillHome}></MenuItem>
            <MenuItem title='About' address='/about' Icon={AiFillInfoCircle}></MenuItem>
        </div>
        <div className=''>
            <Link href="/">
                <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMBD</span> <span className='text-xl hidden sm:inline'>Clone</span></h2>
            </Link>
        </div>
        </div>
  )
}

export default Header