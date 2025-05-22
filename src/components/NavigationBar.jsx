import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
      <Link to="/Topics">
        <button>Topics</button>
      </Link>
    </div>
  );
}

export default NavBar;
