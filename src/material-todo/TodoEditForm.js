import React,{useContext} from 'react'

import TextField from '@material-ui/core/TextField';
import {TodoContext} from '../context/todos.context'

import useInputState from '../hooks/useInputState'

function TodoEditForm({toggleEditing,id,text}){
    const {updateEditedTodo} = useContext(TodoContext)
    const  [value,handleChange,reset] = useInputState(text)
    return <form onSubmit={(e)=>{
        e.preventDefault();
        updateEditedTodo(id,value)
        reset()
        toggleEditing()
    }}
    style={{width:"75%",marginLeft:"1rem"}}
    >
        <TextField
            value={value}
            onChange={handleChange}
            label="Edit" 
            fullWidth
            autoFocus
            />
    </form>
}

export default TodoEditForm;