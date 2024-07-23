import React from 'react'
import ShowTask from './ShowTask'

function AddTask() {
  return (
   <>
    <div className='border-2  h-96 p-4 bg-black w-full fixed bottom-60 top-50'>
        <form action="" className='flex'>
          <input  className='border-2 bg-gray-600 border-none text-white w-11/12 pl-3 h-10 rounded-md outline-none' type="text" placeholder='New Task...' />
          <button className='bg-blue-400 text-white w-40 h-10 rounded-lg relative right-2 p-2 ' type="submit">Add Task</button>
        </form>
    </div>
    <ShowTask/>
   
   </>
  )
}

export default AddTask