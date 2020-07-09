import React, {useEffect} from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TodoList from './TodoList'
import TodoForm from './TodoForm'

import useTodoState from '../hooks/useTodoState'
function Todo(){
    const todoItems = [{text:"Star This Repo",id:213123,completed:false}]
    const {todos,addTodos,removeTodo,toggleTodo,updateEditedTodo}=useTodoState(todoItems)

    useEffect(()=>{
        window.localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return(
        <Paper
            style={{
                padding:0,
                margin:0,
                height:"100vh",
                backgroundColor:"#fafafa"
            }}
            elevation={0}
            >
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6">Todo App</Typography>
                </Toolbar>
            </AppBar>
            <Grid container  justify="center"  style={{marginTop:"1.5rem"}}>
                <Grid item xs={11} sm={11} md={8} lg={4}>
                    <TodoForm handleAddTodo={addTodos}/>
                    <TodoList
                        todoItems={todos}
                        handleRemoveTodo={removeTodo}
                        handleToggle={toggleTodo}
                        handleEditTodo={updateEditedTodo}
                        />
                </Grid>
            </Grid>

        </Paper>
    )
}

export default Todo