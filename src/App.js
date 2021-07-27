
import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input,InputLabel } from '@material-ui/core';
import Todo from './components/Todo'
import { useEffect } from 'react';

import firebase from 'firebase'


import db from './components/firebase/firebase'


function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('')

  useEffect(()=>{

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})));
    })

  },[])

  const submitHandler=(e)=>{
    
    e.preventDefault();

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')

  }

  return (
    <div className="App">
     <h1>Todo app</h1>
    <form >
     <FormControl>
      <InputLabel> Add todo</InputLabel>

       <Input value={input} onChange={e=>setInput(e.target.value)}/>
     </FormControl>
     <Button disabled={!input} type='submit' onClick={submitHandler} variant="contained" color="primary">
       create
      </Button>
    
    </form>
     <div>
       <ul>

         {todos.map(todo=>(
           <Todo todo={todo}/>
         ))}

       </ul>
     </div>
    </div>
  );
}

export default App;
