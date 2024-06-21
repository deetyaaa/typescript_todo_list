import React, { useRef } from 'react';
import "./styles.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; // function that takes in a React.FormEvent and returns void
}
const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => { // creates inputField FC requiring the above props

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' 
        onSubmit={(e) => { // on form submit, manually handle the addition of a todo
            handleAdd(e)
            inputRef.current?.blur()
        }
    }>
        <input className='input_box' 
            ref={inputRef}
            type='text' 
            placeholder='enter task'
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
        />
        <button className='input_submit' type='submit'>go</button>
    </form>
  );
}

export default InputField;
