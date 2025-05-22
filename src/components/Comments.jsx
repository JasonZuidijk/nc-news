import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";

function ShowComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("err computer says no.. comments here", error);
        setIsLoading(true);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Comments Loading...</p>;
  }

  if (!comments) {
    return <p>Nothing to see here, keep on walking..</p>;
  }

  return (
    <section className="Comments-container">
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.comment_id} className="comment-card">
            <p><strong>{comment.author}</strong></p>
            <p>{comment.body}</p>
            <p><button id="button-format">Like ⬆️ </button>
            <strong id="vote-count"> {comment.votes} </strong>
            <button id="button-format"> ⬇️ I'm a hater</button></p>
            <p id="comment-date">
              {new Date(comment.created_at).toLocaleDateString("en-GB", {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: "true",
              })}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowComments;
