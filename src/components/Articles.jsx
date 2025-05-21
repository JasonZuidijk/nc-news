import { useEffect, useState } from "react";
import { getArticles } from "../api";

function Articles() {
const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  console.log(articles.title)

  return (<div className="articles-container">
    {articles.map((article) => {
        return (<ul className="article-card">
            <button>
                <h2>{article.title}</h2>
                <img id="article-image" src={article.article_img_url}></img>
                </button>
            
        </ul>)
    })}
  </div>);
}

export default Articles;


