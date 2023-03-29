"use client"

import react ,{ useEffect }  from 'react'

type ErrorProps ={
    error : any
    reset : any
}

const Error = ({error, reset}: ErrorProps) => {

    // useEffect(() =>{
    //     console.log(error)
    // }, [error])
  return (
    <div>
         <div>Something went wrong</div>
    <button className='hover: bg-amber-600' onClick={() => reset}>Try Again</button>
    </div>
   
  )
}

export default Error