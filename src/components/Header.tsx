import React from 'react'
import MenuItem from './MenuItem'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import Logo  from '../../public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between mx-4 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
 
        <span className='text-xl hidden p-2 mx-2 sm:inline bg-purple-400 dark:bg-amber-600 decoration-sky-50 rounded-lg'><Image src={Logo} alt=""  width={45} 
></Image></span>
            <MenuItem title='HOME' address='/' Icon={AiOutlineHome}></MenuItem>
            <MenuItem title='ABOUT' address='/about' Icon={AiOutlineInfoCircle}></MenuItem>
        </div>
        <div className='flex items-center space-x-5'>
            <DarkModeSwitch></DarkModeSwitch>
            <Link href="/">
                <h2 className='text-2xl'><span className='font-bold text-blue-400 bg-purple-300 dark:bg-amber-300 py-1 px-2 rounded-lg mr-1'>ITEDB</span> </h2>
            </Link>
        </div>
        </div>
  )
}

export default Header