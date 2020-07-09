import React,{useContext} from 'react'

import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import TodoItem from './TodoItem'

import {TodoContext} from '../context/todos.context'

function TodoList(){
    const {todos} = useContext(TodoContext)
    if (todos.length>0){
    return(
    <Paper>
        <List>
            {todos.map((todo,i)=>(
                <div key={todo.id}>
                    <TodoItem {...todo} key={todo.id}/>
                    {i < todos.length-1 && <Divider/>}
                </div >
        ))}
        </List>
    </Paper>
    )}
    return null
}

export default TodoList