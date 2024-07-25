import React, { useEffect, useState } from 'react'
import ShowTask from './ShowTask'
import {TaskContext} from '../Context/TaskContext'
import TaskHeader from './TaskHeader';
import FetchTasks from './FetchTasks';

function AddTask() {
  const [isTask, setTask] = useState([]);
  const [newtask, setNewTask] = useState("");
  const totalTask = isTask.length;
  const [isLoading, setLoading] = useState(true)

  const HandleSubmit=(e)=>{
    e.preventDefault();
   if(newtask.trim() !== ""){
    setTask(t => [...t, newtask])
    setNewTask("")
   }
  }

  useEffect(()=>{ 
    fetch('https://dummyjson.com/todos')
    .then(res=> res.json())
    .then((data)=>{
        setTask(data.todos)
        setLoading(false)
    })


  },[])



  return (
   <>
    <div className=' h-20 p-4 bg-black w-full fixed bottom-60 top-40 z-50 '>
        <form action="" onSubmit={HandleSubmit} className='flex fixed z-50'>
          <input onChange={(e)=>setNewTask(e.target.value)} value={newtask}  className='border-2 bg-gray-600 border-none text-white w-96 pl-3 h-10 rounded-md outline-none' type="text" placeholder='New Task...' />
          <button className='bg-blue-400 text-white w-2/7 h-10 rounded-lg relative right-2 p-2 ' type="submit">Add Task</button>
        </form>
    </div>
   
   <TaskContext.Provider value={{isTask, setTask, setNewTask, totalTask, isLoading}}>
       <ShowTask/>
       <TaskHeader/>
   </TaskContext.Provider>
  
   
   </>
  )
}

export default AddTask