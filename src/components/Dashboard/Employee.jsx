import React, { useEffect } from 'react'
import Header from '../Other/Header'
import TaskListno from '../Other/TaskListno'
import TaskList from '../TaskList/TaskList'
import { setLocalStorage } from '../../utils/localStorage'

function Employee() {

  useEffect(()=>{
setLocalStorage()
console.log(setLocalStorage());
  })
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >
      <Header/>
      <TaskListno/>
      <TaskList/>
    </div>
  )
}

export default Employee
