import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-gradient-to-r from-slate-200 via-purple-10 to-slate-400 text-center lg:text-lg p-4 '>
        <NavbarItem  title="Trending" param="fetchTrending"/>
        <NavbarItem  title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar