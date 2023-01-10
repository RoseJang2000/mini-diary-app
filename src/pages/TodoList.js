import 'styles/TodoList.css';
import { useState, useEffect } from 'react';
import TodoItem from 'components/TodoItem';
import { IoMdAdd } from 'react-icons/io';

const TodoList = ({ todos, setTodos }) => {
  const [todoValue, setTodoValue] = useState('');
  const [count, setCount] = useState(0);

  const onAddTodo = (event) => {
    event.preventDefault();

    const todoItem = {
      id: new Date().getTime(),
      text: todoValue,
      isChecked: false,
      isEdit: false,
    };

    if (todoValue !== '') {
      setTodos((current) => [todoItem, ...current]);
      setTodoValue('');
    }
  };

  const onToggleChecked = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const onDeleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const onToggleEdit = (id) => {
    const editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEdit = !todo.isEdit;
      }
      return todo;
    });

    setTodos(editTodos);
  };

  const onEditTodo = (event, id) => {
    const editTodo = todos.map((todo) => {
      const {
        target: { value },
      } = event;

      if (todo.id === id) {
        todo.text = value;
      }
      return todo;
    });

    setTodos(editTodo);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setTodoValue(value);
  };

  useEffect(() => {
    setCount(todos.filter((todo) => !todo.isChecked).length);
  }, [todos]);

  return (
    <div className="todo_container">
      <h1 className="todo_title">👉&nbsp;&nbsp;남은 할 일 {count}개</h1>
      <form className="input_wrapper" onSubmit={onAddTodo}>
        <input
          type="text"
          className="todo_input"
          value={todoValue}
          placeholder="할 일 입력하기..."
          onChange={onChange}
        />
        <div className="submit_button" onClick={onAddTodo}>
          <IoMdAdd size={26} />
        </div>
      </form>
      <div className="todo_list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleChecked={onToggleChecked}
            onDeleteTodo={onDeleteTodo}
            onToggleEdit={onToggleEdit}
            onEditTodo={onEditTodo}
          />
        ))}
        {todos.length === 0 && <p className="empty">할 일을 추가해주세요!</p>}
      </div>
    </div>
  );
};

export default TodoList;
