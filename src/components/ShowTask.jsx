import React, { useState } from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext'

function ShowTask() {

    const { isTask, setTask, setNewTask, isLoading } = useContext(TaskContext);

    
    const HandleDelete = (index) => {
        const deleteTask = isTask.filter((element, i) => i !== index);
        setTask(deleteTask)
    }

    const HandleUpdate = (index) => {
        const edit = isTask.find((element, i)=>i === index);
        setNewTask(edit.todo)
        const editedTask = isTask.filter((element, i) => i !== index);
        setTask(editedTask)

    }


    return (
        <>

            {
                !isLoading ? <>
                {
                    isTask.map((task, index) => {
                    return (
                        <>
                            <div className=' relative top-60 text-white m-auto flex flex-col bg-black w-full '>
                                <div key={index} className='flex justify-between bg-gray-500 p-4 items-center rounded-md mb-3 transition-all delay-70'>
                                    <div className='flex gap-2 ml-3 items-center'>
                                        <input className='check-with-label' type="checkbox" name="checked"  />    
                                        <label className='label-for-check' htmlFor="checked">{task.todo}</label>
                                    </div>
                                    <div className='mr-5 flex gap-3'>
                                        <EditNoteIcon onClick={()=>HandleUpdate(index)} className='cursor-pointer text-blue-200 rounded-md bg-gray-700' />
                                        <DeleteSweepIcon onClick={() => HandleDelete(index)} className='cursor-pointer text-red-400 rounded-md  bg-gray-700' />
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })
                }
                        
                </> : console.log('...loading')
          
            }

            



        </>
    )
}

export default ShowTask