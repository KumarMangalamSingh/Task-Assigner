import React from 'react'
import AcceptedTask from './AcceptedTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'

function TaskList({data}) {
  if(!data){
    return null;
  }
  return (
    <div id='tasklist' className=' h-[40%] mt-10 overflow-x-auto flex items-center justify-start  gap-5 py-5'>
     

{data.tasks.map((elem, key) => {
  if (elem.newTask) {
    return <NewTask key={key} data={elem} />
  }
  if (elem.active) {
    return <AcceptedTask key={key} data={elem} />
  }
  if (elem.completed) {
    return <CompleteTask key={key} data={elem} />
  }
  if (elem.failed) {
    return <FailedTask key={key} data={elem} />
  }
  return null
})}

    </div>
  )
}

export default TaskList
