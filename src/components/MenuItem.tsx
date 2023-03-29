import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

type MenuItemProps ={
    title: string
    address: string
    Icon: any


}

const MenuItem = ({title, address, Icon}: MenuItemProps) => {


  return (
    <div>
         <Link href={address} className="mx-4 lg:mx-6 " >
            <Icon className="text-2xl sm:hidden mx-4 hover:bg-amber-600" />
        <p className='hidden sm:inline my-2 text-bold mx-4 text-white dark:text-slate-600 hover:text-amber-600'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem