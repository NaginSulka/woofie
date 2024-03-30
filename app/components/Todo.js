"use client"
import React,{useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.css';


const Todo = (props) => {
  
  return (
    <div className="h-12 pl-4 w-[34vw] rounded border-2 mx-auto my-4 flex justify-between items-center">
      <span>{props.item}</span>
      <i className="fa-solid fa-trash-can mr-4 fa-lg cursor-pointer" onClick={e=>{props.deleteList(props.index)}}></i>
    </div>
  )
}

export default Todo;
