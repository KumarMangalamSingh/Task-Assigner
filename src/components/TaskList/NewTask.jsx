import React from 'react'

function NewTask({data}) {
  return (
    
    <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 '> {data.taskDescription} </p>
        <button className='bg-blue-500  text-sm text-white px-2 py-1  rounded-b-sm cursor-pointer hover:bg-blue-400'>Review</button>
        </div>   
  )
}

export default NewTask
