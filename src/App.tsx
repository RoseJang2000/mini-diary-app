import { Route, Routes } from 'react-router-dom';
import 'styles/App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import { Todo } from 'interfaces/TodoList.interface';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    let stored = localStorage.getItem('todo');

    if (stored) {
      const parsedTodos = JSON.parse(stored);
      setTodos(parsedTodos);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home todos={todos} />} />
          <Route
            path="/todo"
            element={<TodoList todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
