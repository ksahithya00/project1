import TodoContextProvider from "./store/todo-context";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

function App() {
  return (
    <TodoContextProvider>
      <AddItem />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
