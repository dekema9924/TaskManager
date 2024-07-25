import React, { useState, useEffect } from 'react'
import axios from 'axios';

function FetchTasks() {
    const[isTask, setTask]= useState([{}]);
    const [isLoading, setLoading] = useState(true)


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
        {
           !isLoading ?
            <>
                {
                    isTask.map((tasks)=>{
                        console.log(tasks.todo)
                    })
                }

           </> : console.log('loading...')
        }

    </>
  )
}

export default FetchTasks