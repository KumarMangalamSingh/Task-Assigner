import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>Mangalam✌️</span> </h1>
      <button className='bg-red-500 text-lg font-medium text-white px-5 py-2  rounded-b-sm'>Log Out</button>
    </div>
  )
}

export default Header
