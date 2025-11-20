import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTasks from '../Other/AllTasks'

function Admin() {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <CreateTask/>
      <AllTasks/>
 
    </div>
  )
}

export default Admin
