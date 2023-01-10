import { useState, useEffect } from 'react';
import TodoItem from 'components/TodoItem';

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
    <>
      <h1>My Todo List ({count})</h1>
      <form className="App_input_wrapper" onSubmit={onAddTodo}>
        <input
          type="text"
          className="App_input"
          value={todoValue}
          placeholder="할 일 입력하기..."
          onChange={onChange}
        />
        <div className="App_input_button" onClick={onAddTodo}>
          Add
        </div>
      </form>
      <div className="App_todo_list">
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
    </>
  );
};

export default TodoList;
