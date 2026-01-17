import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import TaskListno from '../Other/TaskListno'
import TaskList from '../TaskList/TaskList'
import { setLocalStorage,getLocalStorage } from '../../utils/localStorage'
import empdash from '../../assets/empdash.jpeg'

function Employee({handelLogout,data}) {
 
  useEffect(()=>{
setLocalStorage()
  })
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen bg-cover bg-center bg-no-repeat w-screen ' style={{ backgroundImage: `url(${empdash})` }} >
    <Header handelLogout={handelLogout} data={data} />
      <TaskListno data={data}/>
      <TaskList data={data}/>
    </div>
  ) 
}

export default Employee
