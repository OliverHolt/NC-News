import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID, patchArticle } from "../api";

const Likes = () => {
  const { article_id } = useParams();
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setLikes(article.votes);
    });
  }, [article_id]);

  const disableButton = (event) => {
    event.currentTarget.disabled = true;
    console.log("button disabled");
  };

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
        disableButton(event);
      }}
    >
      <span aria-label="votes for this article">❤️</span> {likes}
    </button>
  );
};

export default Likes;
