interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
  isEdit: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface TodoItemProps {
  todo: Todo;
  onToggleChecked: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onToggleEdit: (id: number) => void;
  onEditTodo: (event: any, id: number) => void;
}

export type { Todo, TodoListProps, TodoItemProps };
