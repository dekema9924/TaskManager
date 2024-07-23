import React from 'react'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditNoteIcon from '@mui/icons-material/EditNote';

function ShowTask() {
    return (
        <>
            <div className=' relative top-60 w-11/12 text-white m-auto flex flex-col gap-3 '>
                <div className='flex justify-between bg-gray-500 h-10 items-center rounded-md'>
                    <div className='flex gap-2 ml-3 items-center'>
                        <input type="checkbox" name=""  />
                        <p>Go Shopping</p>
                    </div>
                    <div className='mr-5 flex gap-3'>
                        <EditNoteIcon className='cursor-pointer text-blue-200 rounded-md bg-gray-700' />
                        <DeleteSweepIcon className='cursor-pointer text-red-400 rounded-md  bg-gray-700' />
                    </div>
                </div>

                <div className='flex justify-between bg-gray-500 h-10 items-center rounded-md'>
                    <div className='flex gap-2 ml-3 items-center'>
                        <input type="checkbox" name=""  />
                        <p>Go Shopping</p>
                    </div>
                    <div className='mr-5 flex gap-3'>
                        <EditNoteIcon className='cursor-pointer text-blue-200 rounded-md bg-gray-700' />
                        <DeleteSweepIcon className='cursor-pointer text-red-400 rounded-md  bg-gray-700' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShowTask