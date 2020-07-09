import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {TodosProvider} from '../context/todos.context'

import TodoList from './TodoList'
import TodoForm from './TodoForm'


function Todo(){
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
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo