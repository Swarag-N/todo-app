import { v4 as uuidv4 } from 'uuid';
// import { useState} from 'react'
import useLocalStorage from './useLocalStorage'

export default initialTodos=>{
    const [todos,setTodos]=useLocalStorage("todos",initialTodos)
    return{
        todos,
        addTodos : (newTodoText)=>{
            setTodos([...todos,{id:uuidv4(),text:newTodoText,completed:false}])
        },
        removeTodo : (todoId)=>{
            const updatedTodos = todos.filter(todoItem=>todoItem.id!==todoId) 
            setTodos(updatedTodos)
        },
        toggleTodo : (todoId) =>{
            const updatedTodos = todos.map(todoItem=>(
                todoItem.id===todoId?{...todoItem,completed:!todoItem.completed}:todoItem
            ))
            setTodos(updatedTodos);
        },
        updateEditedTodo : (todoId,todoText)=>{
            const updatedTodos = todos.map(todoItem=>
                todoItem.id===todoId?{...todoItem,text:todoText}:todoItem
            )
            setTodos(updatedTodos);
        }

    }

}
