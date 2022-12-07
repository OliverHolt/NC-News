import { useEffect, useState } from "react";
import { getArticleByID, patchArticle } from "../api";

const Likes = ({ article_id }) => {
  const [likes, setLikes] = useState(0);
  const [likeButton, setLikeButton] = useState(false);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setLikes(article.votes);
    });
  }, [article_id]);

  const handleVote = (article_id) => {
    setLikes((likes) => {
      return likes + 1;
    });

    patchArticle(article_id).catch((err) => {
      console.log(err.response);
      setLikes((likes) => {
        return likes - 1;
      });
    });
  };

  return (
    <button
      id="likes-button"
      onClick={(event) => {
        handleVote(article_id);
        setLikeButton(true);
      }}
      disabled={likeButton === true ? true : false}
    >
      <span aria-label="votes for this article">❤️</span> {likes}
    </button>
  );
};

export default Likes;
