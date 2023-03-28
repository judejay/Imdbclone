import React from 'react'
import Link from 'next/link'

type MenuItemProps ={
    title: string
    address: string
    Icon: any


}

const MenuItem = ({title, address, Icon}: MenuItemProps) => {
  return (
    <div>
         <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
            <Icon className="text-2xl sm:hidden mx-4" />
        <p className='hidden sm:inline my-2 text-sm mx-4'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem