import React from 'react'
import Header from '../Other/Header'
import TaskListno from '../Other/TaskListno'
import TaskList from '../TaskList/TaskList'

function Employee() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >
      <Header/>
      <TaskListno/>
      <TaskList/>
    </div>
  )
}

export default Employee
