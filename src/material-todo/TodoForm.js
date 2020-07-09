import React from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState'

function TodoForm({handleAddTodo}){
    const  [value,handleChange,reset] = useInputState("")

    return(
        <Paper style={{margin:"1rem 0", padding:"0 1rem"}} >
            {/* {value} */}
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleAddTodo(value);
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