import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

function AllTasks() {
  const [userData,setUserData]= useContext(AuthContext)
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded  overflow-auto'>
      <div className='bg-blue-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 '>Employee Name</h2>
        <h2 className='w-1/5 '>New Task</h2>
        <h2 className='w-1/5 '>Active Task</h2>
        <h2 className='w-1/5 '>Completed</h2>
        <h2 className='w-1/5'>Failed</h2>
      </div>
      {userData.map(function(elem,key){
        return  <div key={key} className=' border-2 border-blue-300 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>{elem.name}</h2>
        <h2 className='text-lg  font-medium w-1/5 '>{elem.taskCounts.newTask}</h2>
        <h2 className='text-lg font-medium w-1/5 '>{elem.taskCounts.active}</h2>
        <h2 className='text-lg font-medium w-1/5 '>{elem.taskCounts.completed}</h2>
        <h2 className='text-lg font-medium w-1/5 '>{elem.taskCounts.failed}</h2>
        
      </div>
      })}
     
    </div>
  )
}

export default AllTasks
