import React,{createContext} from 'react'

import TodoReducer from '../reducer/todo.reducer'
import useLocalStorageReducer from '../reducer/localStorage.reducer'

export const TodoContext = createContext()
export const DispatchContext = createContext() 

const defaultTodos = [
    {text:"Star This Repo 😅",id:213123,completed:false},
    {text:"Clone This Repo 📕",id:217823,completed:false},
    {text:"Impoove This Repo",id:743123,completed:true},
]

export function TodosProvider (props){
    const [todos,dispatch] = useLocalStorageReducer("todos",defaultTodos,TodoReducer)

    return (
        <TodoContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    )
}
