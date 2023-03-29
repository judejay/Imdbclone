"use client";
import { ThemeProvider } from 'next-themes'
import React from 'react'

type ProvidersProps ={
    children: React.ReactNode
}
const Providers = ({children}: ProvidersProps) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
    <div className='bg-slate-600 dark:bg-slate-100 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
      {children}
    </div>
    
    </ThemeProvider>
   
  )
}

export default Providers