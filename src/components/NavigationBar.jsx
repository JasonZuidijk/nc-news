import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <Link to="/">
        <button id="button-format">Home</button>
      </Link>
      <Link to="/articles">
        <button id="button-format">Articles</button>
      </Link>
      <Link to="/Topics">
        <button id="button-format">Topics</button>
      </Link>
    </div>
  );
}

export default NavBar;
