import 'styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1 className="nav_title">web diary</h1>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
