import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className=' h-[40%] mt-10 overflow-x-auto flex items-center justify-start  gap-5 py-5'>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>17 Sept 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Project on react js and express js</h2>
        <p className='text-sm mt-2 '> Hello Ji kidd ho saaree aur sb chnga si mzee h sb </p>
        </div>   

        <div className='flex-shrink-0 h-full w-[300px] bg-red-300 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>17 Sept 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Project on react js and express js</h2>
        <p className='text-sm mt-2 '> Hello Ji kidd ho saaree aur sb chnga si mzee h sb </p>
        </div>   

        <div className='flex-shrink-0 h-full w-[300px] bg-green-500 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>17 Sept 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Project on react js and express js</h2>
        <p className='text-sm mt-2 '> Hello Ji kidd ho saaree aur sb chnga si mzee h sb </p>
        </div>   

        <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 rounded-b-xl  p-5'> 
        <div className='flex text-sm items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>17 Sept 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Project on react js and express js</h2>
        <p className='text-sm mt-2 '> Hello Ji kidd ho saaree aur sb chnga si mzee h sb </p>
        </div>   

       
    </div>
  )
}

export default TaskList
