"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const DarkModeSwitch = () => {
    const {systemTheme , theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() =>{setMounted(true) } , [])

  return (
<>
    { mounted && currentTheme === "dark" ?   <BsMoon className='text-slate-600 text-bold text-xl hover:text-purple-500' onClick={() => setTheme("light")} />: <MdOutlineLightMode  className='text-xl text-white  hover:text-amber-500' onClick={() => setTheme("dark")} /> }
    
   
</>  )
}

export default DarkModeSwitch