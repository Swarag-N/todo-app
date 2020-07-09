import React,{useContext} from 'react'

import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Checkbox from '@material-ui/core/Checkbox'

import TodoEditForm from './TodoEditForm'
import useToggle from '../hooks/useToggle'

import {TodoContext} from '../context/todos.context'

function TodoItem({id,text,completed}){
    const{removeTodo,toggleTodo} = useContext(TodoContext)
    const [isEditing,toggleEditing] = useToggle(false);
    return(
        <ListItem>
            {isEditing?
                <TodoEditForm id={id} toggleEditing={toggleEditing} text={text}/>:
                <>
                    <ListItemIcon onClick={()=>toggleTodo(id)}>
                        <Checkbox icon={<AssignmentTurnedInOutlinedIcon />} checkedIcon={<AssignmentTurnedInIcon />} color="primary" checked={completed}/>
                    </ListItemIcon>
                    <ListItemText key={id} style={{textDecoration:completed?"line-through":"none"}}>
                        {text}
                    </ListItemText>
                    <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={toggleEditing}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={()=>removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default TodoItem;