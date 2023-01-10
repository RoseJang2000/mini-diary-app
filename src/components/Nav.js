import 'styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1 className="nav_title">web diary</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
