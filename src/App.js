import { Route, Routes } from 'react-router-dom';
import 'styles/App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    let stored = JSON.parse(localStorage.getItem('todo'));

    if (stored) {
      setTodos(stored);
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
          <Route path="/todo" element={<TodoList todos={todos} setTodos={setTodos} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
