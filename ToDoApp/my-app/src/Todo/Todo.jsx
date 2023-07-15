import React, { useState } from 'react'
import './Todo.css'
import { BiSolidMessageSquareEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'

function Todo() {
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState([])
    const [editid, seteditid] = useState(0)

const add=(e)=>{
    // e.preventDefault()
   if(todo !== '')
   {
    settodos([...todos,{list: todo, id:Date.now()}])
    settodo('')
   }
   if(editid)
   {
    const edittodo = todos.find((to)=>to.id == editid)
    const updt=todos.map((to)=>to.id === edittodo.id ? (to = {id:to.id, list : todo}) : (to = {id:to.id,list:to.list}) )
    settodos(updt)
   }
}

const dlt=(id)=>{
    settodos(todos.filter((to)=>to.id !== id))
}

const edit =(id)=>{
    const findid= todos.find((to)=>to.id === id)
    settodo(findid.list)
    seteditid(findid.id)
}
  return (
    <div className='todo'>
    <div className='todo-container'>
    <h1>Todo - App</h1>
    <div className='todo-input'>
    <input type='text' value={todo} placeholder='Enter The Task!' onChange={(e)=>settodo(e.target.value)} />
    <button className='button' onClick={add}>{editid ? "Edit" : "Add"}</button>
    </div>
   {todos.map((to)=>(
    <ul className='todo-lists'>
    <li>{to.list}</li>
    <span><BiSolidMessageSquareEdit onClick={()=>edit(to.id)} className='icon'/> <MdDeleteForever onClick={()=>dlt(to.id)} className='icon'/> </span>
    </ul>
    ))}
    </div>
    </div>
  )
}

export default Todo