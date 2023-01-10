const TodoItem = ({ todo, onDeleteTodo, onToggleChecked, onToggleEdit, onEditTodo }) => {
  const { id, text, isChecked, isEdit } = todo;
  return (
    <div className="todo_list">
      <div
        className={isChecked ? 'todo_checked' : 'todo_unchecked'}
        onClick={() => onToggleChecked(id)}
      >
        {isChecked && 'Check'}
      </div>
      {isEdit ? (
        <input
          className={'edit_input'}
          placeholder={text}
          value={text}
          onChange={(event) => onEditTodo(event, id)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onToggleEdit(id);
            }
          }}
        />
      ) : (
        <div className={isChecked ? 'todo_text_checked' : 'todo_text'}>{text}</div>
      )}
      <div className="todo_edit" onClick={() => onToggleEdit(id)}>
        Edit
      </div>
      <div className="todo_delete" onClick={() => onDeleteTodo(id)}>
        Del
      </div>
    </div>
  );
};

export default TodoItem;
