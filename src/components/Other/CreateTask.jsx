import React,{useState, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setUserData]= useContext(AuthContext)

  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [assignTo,setAssignTo]=useState('')
  const [category,setcategory]=useState('')
  
  const submitHandler=(e)=>{
  e.preventDefault();

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    assignTo,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  };

  const data=userData

 
  data.forEach(function(elem){
    if(assignTo==elem.name){
      elem.tasks.push(task);
      elem.taskCounts.newTask=elem.taskCounts.newTask+1;
      console.log(elem);
    }
  })
  setUserData(data);

  setTaskDate('')
  setcategory('')
  setAssignTo('')
  setTaskTitle('')
  setTaskDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e);
    }} className='flex w-full flex-wrap items-start justify-between'>
      <div className='w-1/2'> 
       <h3 className='text-sm text-gray-300 mb-0.5'>Task Title </h3>
        <input value={taskTitle} onChange={(e)=>{
          setTaskTitle(e.target.value);
        }}
        type="text" placeholder='Enter your Task Title' className='text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
        <input value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }}
        type="date" name="" id=""  className='text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/></div>
        <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
        <input value={assignTo}
        onChange={(e)=>{
          setAssignTo(e.target.value)}}
        type="text" placeholder='employee name'  className='text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
        </div>
        <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Category </h3>
        <input value={category}
        onChange={(e)=>{
          setcategory(e.target.value)}}
         type="text" placeholder='design,dev,etc'  className='text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
       </div>
       
        </div>


        <div className='w-2/5 flex flex-col items-start gap-2'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>

        <textarea value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)}}
        className='text-sm  w-full h-44 px-4 py-2  rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>

        <button className='bg-blue-500 text-sm hover:bg-blue-300 font-medium text-white px-5 py-2 w-full rounded-b-xl'>Create Task</button>
        </div>  
    </form>
  </div>
  )
}

export default CreateTask
