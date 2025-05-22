import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ShowComments from "./Comments";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...Hold tight!</p>;
  }

  if (!article) {
    return <p>Article not found cue detective monacle</p>;
  }

  const dateFunc = new Date(article.created_at).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: "true",
  });

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <div className="article-content">
        <img
          id="single-article-image"
          src={article.article_img_url}
          alt={article.title}
        />
        <p className="single-article-text">{article.body}</p>
      </div>
      <footer className="article-footer">
        <div className="article-info">
          <p>
            Written by <strong>{article.author}</strong>
          </p>
          <p>
            Date: <strong>{dateFunc}</strong>
          </p>
        </div>

        <div className="article-vote">
          <p>
            <button id="button-format">Like ⬆️ </button>
            <strong id="vote-count"> {article.votes} </strong>
            <button id="button-format"> ⬇️ I'm a hater</button>
          </p>
        </div>

        <div className="comment-button">
          <button id="button-format">
            <strong>Comment</strong>
          </button>
        </div>
      </footer>
      <div className="comments-toggle">
        <p>
          <button onClick={() => setShowComments(!showComments)}id="button-format">
            {showComments ? "Hide Comments 🙈" : "Show Comments 👀"}
          </button>
        </p>
       {showComments && <ShowComments article_id={article_id} />}
      </div>
    </div>
  );
}

export default SingleArticle;

//topic and votes
