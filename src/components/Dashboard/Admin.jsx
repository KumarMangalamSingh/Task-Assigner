import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTasks from '../Other/AllTasks'
import adminimg from '../../assets/adminbg.jpeg'

function Admin({handelLogout,data}) {

  
  return (
    <div className='h-screen w-screen p-10  bg-cover bg-center bg-no-repeat'  style={{ backgroundImage: `url(${adminimg})` }}>
      <Header handelLogout={handelLogout} data={data} />
      <CreateTask data={data}/>
      <AllTasks data={data}/>
 
    </div>
  )
}

export default Admin
