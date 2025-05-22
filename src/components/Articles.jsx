import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Link } from "react-router-dom";


function ArticlesList() {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
      setIsLoading(false)
    })
    .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(true);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...Hold tight!</p>
  }

  return (<div className="articles-container">
    {articles.map((article) => {
        return (<ul key={article.article_id} className="article-card">
            <Link to={`/articles/${article.article_id}`}>
            <button>
                <h2>{article.title}</h2>
                <img id="article-image" src={article.article_img_url} alt={article.title}></img>
                </button>
                </Link>
        </ul>)
    })}
  </div>);
}

export default ArticlesList;


