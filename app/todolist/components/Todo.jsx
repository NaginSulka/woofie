"use client"
import { useState } from "react";
import Input from "../components/Input";
import Todoelements from "../components/Todoelements";

const Todo = () => {
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
      <Input addList={addList}/>  
      {listTodo.map((listItem,i)=>{
        return(
           <Todoelements key={i} item={listItem} index={i} deleteList={deleteList} />
           )
      }
      )}
      </>
    );
  }

export default Todo
