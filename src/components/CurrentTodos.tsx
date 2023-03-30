import 'styles/CurrentTodos.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Todo } from 'interfaces/TodoList.interface';

const CurrentTodos = ({ todos }: { todos: Todo[] }) => {
  const [currentTodos, setCurrentTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setCurrentTodos(todos.filter((todo) => !todo.isChecked).slice(0, 5));
  }, [todos]);

  return (
    <div className="current_container">
      <h1 className="current_title">📚 남은 할 일</h1>
      <div className="current_todos">
        {currentTodos.map((currentTodo, idx) => (
          <div key={idx} className="current_todo_wrapper">
            <p>{currentTodo.text}</p>
          </div>
        ))}
        <div className="goto_todopage">
          <p>모든 할 일 보러가기</p>
          <Link to="/todo">
            <IoIosArrowDroprightCircle size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentTodos;
