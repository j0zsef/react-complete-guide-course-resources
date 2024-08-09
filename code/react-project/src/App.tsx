import './App.css';
import { useState } from 'react';
import Todo from './models/todo';
import ToDos from './components/ToDos';
import NewTodo from './components/NewTodo';

const App = () => {
  // change this to context API to avoid prop drilling
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, 'Learn React'),
    new Todo(2, 'Learn TypeScript'),
  ]);
  const newTodoHandler = (todo: string) => {
    const id = todos.length + 1;
    setTodos((prevState) => prevState.concat(new Todo(id, todo)));
  };

  return (
    <div>
      <NewTodo onAddToDo={newTodoHandler} />
      <ToDos items={todos} />
    </div>
  );
};

export default App;
