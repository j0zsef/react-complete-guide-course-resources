import React, {
  useState, createContext, ReactNode, useMemo,
} from 'react';
import Todo from '../models/todo';

type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, 'Learn React'),
    new Todo(2, 'Learn TypeScript'),
  ]);

  const addTodoHandler = (text: string) => {
    const id = Math.random();
    const newTodo = new Todo(id, text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodoContextType = useMemo(() => ({
    todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }), [todos, addTodoHandler, removeTodoHandler]);

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
