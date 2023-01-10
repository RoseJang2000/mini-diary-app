import { useEffect, useState } from 'react';

const CurrentTodos = ({ todos }) => {
  const [currentTodos, setCurrentTodos] = useState([]);

  useEffect(() => {
    setCurrentTodos(todos.filter((todo) => !todo.isChecked).slice(0, 5));
  }, [todos]);

  return (
    <section>
      {currentTodos.map((currentTodo) => (
        <div></div>
      ))}
    </section>
  );
};

export default CurrentTodos;
