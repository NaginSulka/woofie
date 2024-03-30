"use client"
import { useState } from "react";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";


export default function Home() {
  const[listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{ 
    if (inputText!="") {
      setListTodo([...listTodo,inputText])
    } 
  }
  let deleteList=(index)=>{
    let newList=[...listTodo];
    newList.splice(index,1);
    setListTodo([...newList]);
  }
  return (
    <>
    <Navbar heading="Todo List"/>
    <Input addList={addList}/>  
    {listTodo.map((listItem,i)=>{
      return(
         <Todo key={i} item={listItem} index={i} deleteList={deleteList} />
         )
    }
    )}
    </>
  );
}