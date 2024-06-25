import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import TodoItem from './TodoItem';
import { motion } from "framer-motion";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    // <div className='container'>
      <div className='todos'>
        {/* <span className="todos_heading">Active Tasks</span> */}
        {todos.map( (todo) => (
          <TodoItem
              todo={todo}
              todos={todos}
              key = {todo.id}
              setTodos={setTodos}
          />
        ))}
      </div>
    // </div>
  );
}

export default TodoList;
