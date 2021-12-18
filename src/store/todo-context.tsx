import React, {useState} from 'react';

import Todo from '../models/todo';

type contextObj = {
    items: Todo[],
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}
export const TodoContext = React.createContext<contextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

const TodoContextProvider:React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) =>{
      return prevTodo.concat(newTodo);
    } )
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos)=> {
     return prevTodos.filter(todo => todo.id !== todoId);
    })
  }
  const ctxValue: contextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }

    return <TodoContext.Provider value={ctxValue}>{props.children}</TodoContext.Provider>
}

export default TodoContextProvider;
