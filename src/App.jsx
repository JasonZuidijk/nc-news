import "./App.css";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/Articles";
import NavBar from "./components/NavigationBar";
import Home from "./components/Home";
import Topics from "./components/Topics";
import SingleArticle from "./components/Article";

function App() {
  return (
    <>
      <div>
        <header>
          <button>User Profile, hard coded, maybe circle</button>
          <label> 31/12/1999</label>
          <h1 className="title">The NC Daily</h1>
          <h2>
            <NavBar></NavBar>
          </h2>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route path="/Topics" element={<Topics />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>

        <footer className="footer">
          <p1>Copyright contact</p1>
        </footer>
      </div>
    </>
  );
}

export default App;
