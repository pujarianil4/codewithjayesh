import React, { useState } from 'react'
import './todo.css'
import { v4 } from 'uuid'
export default function Todo() {

    const [input, setInput] = useState('')
    const [todolist, setTodoList] = useState([])

    const handleInput = (event) => {
        const value = event.target.value

        setInput(value)
    }

    const handleAdd = () => {
       const item = {
        value: input,
        status: false,
        id: v4()
       }

       const newList = todolist.concat([item])  
       setTodoList(newList)
       setInput('')
    }

    const handleDelete = (id) => {
//   console.log(id)
   
    const filterdArray = todolist.filter((item) => item.id !== id )

    setTodoList(filterdArray)
    }

    const handleStatus = (id) => {

        const updatedData = todolist.map((item) => item.id === id ? {...item, status: !item.status}: item )

        console.log(updatedData);
       setTodoList(updatedData)
    
    }

    const handleUpdate = (id) => {

    }


  return (
    <div className='todo'>
        <h1 className="title">Todo</h1><br/>

        <div className='input_container'>  
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
            {/* <h1>{input}</h1> */}
        </div>

        <div className='list'>
           {
            todolist.map((item) => <div key={item.id}> <p>{item.value}</p> <button onClick={() => handleStatus(item.id)} >{item.status  ? 'Done': 'Incomplete'}</button> <button onClick={function () {
                handleDelete(item.id)
            }}>Delete</button> <button onClick={handleUpdate}>Update</button> </div>)
           }
        </div>
    </div>
  )
}
