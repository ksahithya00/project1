import React, {useContext, useRef} from "react";

import { TodoContext } from "../store/todo-context";
import classes from './AddItem.module.css';

const AddItem: React.FC  = () => {
    const todoCtx = useContext(TodoContext);

    const todoInputRef = useRef<HTMLInputElement>(null)

    const  submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredTodo = todoInputRef.current!.value;
        if(enteredTodo.trim().length === 0){
            return
        }

        todoCtx.addTodo(enteredTodo);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='listItem'>Todo Item</label>
        <input type='text' id='listItem' ref={todoInputRef}/>
        <button>Add Todo</button>
    </form>
};

export default AddItem;