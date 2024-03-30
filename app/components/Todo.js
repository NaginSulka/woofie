"use client"
import React,{useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';


const Todo = (props) => {
  
  return (
    <div className="h-12 pl-4 md:pl-6 w-[60%] md:w-[34vw] rounded border-2 mx-auto my-4 flex justify-between items-center">
      <span className="text-sm md:text-base">{props.item}</span>
      <i
        className="fa-solid fa-trash-can mr-2 md:mr-4 fa-lg cursor-pointer"
        onClick={() => props.deleteList(props.index)}
      ></i>
    </div>
  )
}

export default Todo;
