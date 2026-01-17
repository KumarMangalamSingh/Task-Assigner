import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function Header({handelLogout,data}) {

console.log(data);

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Welcome <br /> <span className='text-3xl font-semibold'>{data?.name}</span> </h1>
      <button className='bg-red-500 text-lg font-medium text-white px-5 py-2  rounded-b-sm' onClick={handelLogout}>Log Out</button>
    </div>
  )
}

export default Header
