import { useState } from "react";
import { deleteComment } from "../api";

const DeleteComment2 = ({
  articleComments,
  setArticleComments,
  comment_id,
}) => {
  const [error, setError] = useState("");

  const deleteSpecificComment = (comment_id) => {
    deleteComment(comment_id)
      .then(() => {
        setArticleComments((currComments) => {
          const newCommentList = [...currComments];
          const filteredList = newCommentList.filter(
            (el) => el.comment_id !== comment_id
          );
          return filteredList;
        });
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          deleteSpecificComment(comment_id);
        }}
      >
        Delete comment!
      </button>
      <h3>
        {error === ""
          ? ""
          : error === false
          ? "Comment deleted!"
          : "Comment failed to delete..."}
      </h3>
    </div>
  );
};

export default DeleteComment2;
