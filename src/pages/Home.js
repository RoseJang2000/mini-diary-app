import CurrentTodos from 'components/CurrentTodos';
import Weather from 'components/Weather';

const Home = ({ todos }) => {
  return (
    <main>
      Home
      <Weather />
      <CurrentTodos todos={todos} />
    </main>
  );
};

export default Home;
