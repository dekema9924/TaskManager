import React, { useState } from 'react'
import ShowTask from './ShowTask'
import {TaskContext} from '../Context/TaskContext'

function AddTask() {
  const [isTask, setTask] = useState(["drive", "walk"]);
  const [newtask, setNewTask] = useState("");

  const HandleSubmit=(e)=>{
    e.preventDefault();
   if(newtask.trim() !== ""){
    setTask(t => [...t, newtask])
    setNewTask("")
   }
  }

  return (
   <>
    <div className='border-2  h-full p-4 bg-black w-full fixed bottom-60 top-40 '>
        <form action="" onSubmit={HandleSubmit} className='flex'>
          <input onChange={(e)=>setNewTask(e.target.value)} value={newtask}  className='border-2 bg-gray-600 border-none text-white w-11/12 pl-3 h-10 rounded-md outline-none' type="text" placeholder='New Task...' />
          <button className='bg-blue-400 text-white w-40 h-10 rounded-lg relative right-2 p-2 ' type="submit">Add Task</button>
        </form>
    </div>
   
   <TaskContext.Provider value={{isTask, setTask, setNewTask}}>
       <ShowTask/>
   </TaskContext.Provider>
  
   
   </>
  )
}

export default AddTask