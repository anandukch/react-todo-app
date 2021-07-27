import React from 'react';

import {List,ListItem,ListItemText,ListItemAvatar,Button} from '@material-ui/core';
import db from './firebase/firebase'

function Todo(props) {

    const todoDeleteHandler=(e)=>{

        db.collection('todos').doc(props.todo.id).delete()

    }
    return (
        <div >
            
            <List>
              <ListItem>
                  <ListItemAvatar>
                  </ListItemAvatar>
                 <ListItemText primary={props.todo.todo} secondary='on progress'/>
              </ListItem>
              <Button onClick={todoDeleteHandler}variant="outlined" color="secondary">❌ Delete</Button>
            </List>
            
        </div>
    )
}

export default Todo
