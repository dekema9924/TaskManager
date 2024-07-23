import React from 'react'

function EditTask() {
  return (
    <>
        <div className=' w-80 h-20 bg-gray-900 text-white border-2 border-red-500 flex flex-col justify-center items-center gap-2 m-auto'>
            <p>Edit</p>
            <form action="">
                <input className='w-64 bg-slate-400 text-white' type="text" value="hey" />
                <div className='flex gap-4'>
                    <button>Update</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default EditTask