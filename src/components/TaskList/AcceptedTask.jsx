import React from 'react'

const AcceptedTask = ({data}) => {
   
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-b-xl  p-5'> 
    <div className='flex text-sm items-center justify-between'>
    <h3 className='bg-amber-600 px-3 py-1 rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2 '>{data.taskDescription} </p>
    <div className='flex justify-between mt-4'>
    <button className='bg-blue-500  text-sm text-white px-2 py-1  rounded-b-sm cursor-pointer hover:bg-blue-400'>Mark as Completed</button>
    <button className='bg-red-500 text-sm text-white px-2 py-1  rounded-b-sm cursor-pointer hover:bg-red-400' >Mark as Failed</button>
    </div>
    
    </div> 
   
  )
}

export default AcceptedTask
