import { useState } from "react";
import { updateVotes } from "../api";

function VoteButtons({ id, initialVotes, type }) {
  const [voteCount, setVoteCount] = useState(initialVotes);
  const [userVote, setUserVote] = useState(0); 
  const [voteError, setVoteError] = useState(null);

  const handleVote = (change) => {
    const newVote = userVote === change ? 0 : change;
    const voteDiff = newVote - userVote;

    setVoteCount((prev) => prev + voteDiff);
    setUserVote(newVote);
    setVoteError(null);

    updateVotes(type, id, voteDiff).catch((err) => {
      console.error("Vote failed:", err);
      setVoteCount((prev) => prev - voteDiff);
      setUserVote(userVote);
      setVoteError("Oops! Vote failed :(");
    });
  };

  return (
    <div className="vote-buttons">
      <button
        onClick={() => handleVote(1)}
        style={{ opacity: userVote === 1 ? 0.7 : 1 }}
      >
        Like ⬆️
      </button>
      <strong>{voteCount}</strong>
      <button
        onClick={() => handleVote(-1)}
        style={{ opacity: userVote === -1 ? 0.7 : 1 }}
      >
        Dislike ⬇️
      </button>
      {voteError && <p className="error-message">{voteError}</p>}
    </div>
  );
}

export default VoteButtons;
