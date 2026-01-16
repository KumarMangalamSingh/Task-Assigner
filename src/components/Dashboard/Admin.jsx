import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTasks from '../Other/AllTasks'

function Admin({handelLogout,data}) {

  
  return (
    <div className='h-screen w-full p-10'>
      <Header handelLogout={handelLogout} data={data} />
      <CreateTask data={data}/>
      <AllTasks data={data}/>
 
    </div>
  )
}

export default Admin
