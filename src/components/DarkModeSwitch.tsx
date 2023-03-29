"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const DarkModeSwitch = () => {
    const {systemTheme , theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() =>{setMounted(true) } , [])

  return (
<>
    { mounted && currentTheme === "dark" ?   <BsFillMoonFill className='text-xl hover:text-purple-500' onClick={() => setTheme("light")} />: <MdOutlineLightMode  className='text-xl  hover:text-amber-500' onClick={() => setTheme("dark")} /> }
    
   
</>  )
}

export default DarkModeSwitch