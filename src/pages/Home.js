import 'styles/Home.css';
import CurrentTodos from 'components/CurrentTodos';
import Weather from 'components/Weather';
import Today from 'components/Today';

const Home = ({ todos }) => {
  return (
    <div className="home_container">
      <div className="home_info">
        <Today />
        <Weather />
      </div>
      <CurrentTodos todos={todos} />
    </div>
  );
};

export default Home;
