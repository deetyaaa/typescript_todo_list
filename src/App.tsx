import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { motion } from "framer-motion";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); // todo state is a string, initially set to ""
  const [todos, setTodos] = useState<Todo[]>([]); //todos state is an array of Todo objects (different from the above variable todo)
  
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault(); // prevents page from reloading

    // if todo state is not an empty string, add todo to the array of todos
    if (todo) { 
      setTodos([...todos, // ... = spread operator; includes all previous elements of todos when creating new array to
        {id: Date.now(), todo, isDone:false}
      ]);
    }
    setTodo(""); // reset search bar
  };
  
  console.log(todos);

  return (
    <div className="App">
      <motion.span className="heading"
        whileHover={{scale: 1.05}}
        initial={{}}
        animate={{}}
      >be productive</motion.span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      {/* NOTE: In JSX, curly braces {} are used to embed JavaScript expressions within the HTML-like markup. */}

      {/* {todos.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
}

export default App;
