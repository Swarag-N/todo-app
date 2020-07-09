import React,{useContext} from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState'

import {TodoContext} from '../context/todos.context'

function TodoForm(){
    const  [value,handleChange,reset] = useInputState("")
    const {addTodos} = useContext(TodoContext)

    return(
        <Paper style={{margin:"1rem 0", padding:"0 1rem"}} >
            <form onSubmit={(e)=>{
                e.preventDefault();
                addTodos(value)
                reset()
            }}>
            <TextField 
                label="Add a New Todo" 
                margin="normal"
                fullWidth 
                value={value} 
                onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default TodoForm