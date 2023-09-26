import React from 'react'

export default function Layout({children}) {
  return (
    <div className='w-full lg:w-2/3 flex flex-col items-center mt-20'>
      {children}
    </div>
  )
}
