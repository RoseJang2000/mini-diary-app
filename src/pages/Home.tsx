import 'styles/Home.css';
import CurrentTodos from 'components/CurrentTodos';
import Weather from 'components/Weather';
import Today from 'components/Today';
import { Todo } from 'interfaces/TodoList.interface';

interface HomeProps {
  todos: Todo[];
}

const Home = ({ todos }: HomeProps) => {
  return (
    <div className="home_container">
      <Today />
      <Weather />
      <CurrentTodos todos={todos} />
    </div>
  );
};

export default Home;
