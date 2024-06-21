import React, { useEffect, useRef, useState } from 'react';
import "./styles.css";
import { Todo } from '../model';
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        );
    }

    // ensures when edit is toggled, the input field is active
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (edit) {
            inputRef.current?.focus();
        }
    }, [edit]);

    return (
        <form className='todo_single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {/* <div className='todo_single-container'> */}
                {edit ? (
                    <input 
                        className='todo_single-box' 
                        ref={inputRef}
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                ) : (
                    todo.isDone ? (
                        <s className="todo_single-text">{todo.todo}</s>
                    ) : (
                        <span className="todo_single-text">{todo.todo}</span>
                    )
                )}

                <div className='icon_group'>
                    <span className="icon" onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit);
                        }
                    }}>
                        <MdEdit />
                    </span>

                    <span className="icon" onClick={() => handleDelete(todo.id)}>
                        <MdDelete />
                    </span>

                    <span className="icon" onClick={() => handleDone(todo.id)}>
                        <FaCheck />
                    </span>
                </div>
            {/* </div> */}
        </form>
    );
}

export default TodoItem;