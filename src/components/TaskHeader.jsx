import React, { useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext'



function TaskHeader() {
    const {totalTask, isTask, setTask} = useContext(TaskContext)




    return (
        <>
            <div className=' flex items-center border-2 h-40 justify-between bg-black text-white flex-wrap fixed top-0 gap-3 w-full'>
                <div className='flex items-center uppercase font-bold ml-5'>
                    <p className='font-bold text-2xl h-10 pt-1 w-10 text-white rounded-full text-center bg-blue-400'>T</p>
                    <p>ask Manager</p>
                </div>
        
                <div className='flex gap-3 mr-5'>
                    <p className='w-fit h-10 pt-2 text-sm pr-4 pl-4  bg-gray-500 text-white text-center cursor-pointer rounded-sm'>Total Tasks: {totalTask}</p>
                </div>
           

             
             
            </div>

        </>
    )
}

export default TaskHeader