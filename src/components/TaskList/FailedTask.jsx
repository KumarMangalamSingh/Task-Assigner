import React from 'react'

function FailedTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>{data.taskNumber}</h3>
        <h4 className='text-sm'>{data.taskdate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 '> {data.taskDescription} </p>

        <div className='mt-4'>
            <button className='bg-red-500 rounded p-2'>Failed Task</button>
        </div>

        </div> 
  )
}

export default FailedTask
