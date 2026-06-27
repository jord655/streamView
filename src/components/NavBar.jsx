import { Link } from "react-router-dom";
import "../CSS/Navbar.css"

function NavBr() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        StreamsView
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/Favorite" className="nav-link">
          Favorite
        </Link>


         <Link to="/Contact" className="nav-link">
          Contact US
        </Link>
      </div>
    </nav>
  );
}

export default NavBr;