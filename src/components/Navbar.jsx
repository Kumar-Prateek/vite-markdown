import { Link } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {routes.map(({ path, name }) => (
          <li key={path} className="navbar-item">
            <Link className="navbar-link" to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
