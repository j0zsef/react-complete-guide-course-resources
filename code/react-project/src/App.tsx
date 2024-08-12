import './App.css';
import Todo from './models/todo';
import ToDos from './components/ToDos';
import NewTodo from './components/NewTodo';
import { TodoProvider } from './store/todo-context';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <NewTodo />
        <ToDos />
      </div>
    </TodoProvider>
  );
};

export default App;
