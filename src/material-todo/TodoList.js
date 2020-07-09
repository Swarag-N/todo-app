import React from 'react'

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import TodoItem from './TodoItem'

function TodoList({todoItems,handleRemoveTodo,handleToggle,handleEditTodo}){
    if (todoItems.length>0){
    return(
    <Paper>
        <List>
            {todoItems.map((todo,i)=>(
                <div key={todo.id}>
                    <TodoItem {...todo} 
                        key={todo.id}
                        handleRemoveTodo={handleRemoveTodo} 
                        handleToggle={handleToggle} 
                        handleEditTodo={handleEditTodo}/>
                    {i < todoItems.length-1 && <Divider/>}
                </div >
        ))}
        </List>
    </Paper>
    )}
    return null
}

export default TodoList