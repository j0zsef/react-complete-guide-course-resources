import './App.css';
import ToDos from './components/ToDos';
import NewTodo from './components/NewTodo';
import { TodoProvider } from './store/todo-context';

const App = () => {
  return (
    <TodoProvider>
      <NewTodo />
      <ToDos />
    </TodoProvider>
  );
};

export default App;
