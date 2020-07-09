import React from 'react'

import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState'

function TodoEditForm({handleEditTodo,toggleEditing,id,text}){
    const  [value,handleChange,reset] = useInputState(text)
    return <form onSubmit={(e)=>{
        e.preventDefault();
        handleEditTodo(id,value)
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