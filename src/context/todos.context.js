import React,{createContext} from 'react'
import useTodoState from '../hooks/useTodoState'

export  const TodoContext = createContext()
const defaultTodos = [
    {text:"Star This Repo",id:213123,completed:false},
    {text:"Clone This Repo",id:217823,completed:false},
    {text:"Impoove This Repo",id:743123,completed:true},
]
export function TodosProvider (props){
    const {todos,addTodos,removeTodo,toggleTodo,updateEditedTodo}=useTodoState(defaultTodos)

    return (<TodoContext.Provider 
        value={{todos,addTodos,removeTodo,toggleTodo,updateEditedTodo}}>
            {props.children}
        </TodoContext.Provider>)
}
