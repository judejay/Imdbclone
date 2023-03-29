import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className='flex justify-between mx-4 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title='HOME' address='/' Icon={AiFillHome}></MenuItem>
            <MenuItem title='ABOUT' address='/about' Icon={AiFillInfoCircle}></MenuItem>
        </div>
        <div className='flex items-center space-x-5'>
            <DarkModeSwitch></DarkModeSwitch>
            <Link href="/">
                <h2 className='text-2xl'><span className='font-bold bg-purple-300 dark:bg-amber-300 py-1 px-2 rounded-lg mr-1'>ITEDB</span> <span className='text-xl hidden sm:inline'>Judetec</span></h2>
            </Link>
        </div>
        </div>
  )
}

export default Header