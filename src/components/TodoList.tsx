import React,{useContext} from 'react';

import TodoItem from "./TodoItem";
import {TodoContext} from '../store/todo-context';
import classes from "./TodoList.module.css";

const TodoList:React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
