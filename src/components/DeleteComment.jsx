import { useContext, useState } from "react";
import { deleteComment } from "../api";
import { UserContext } from "../contexts/User";

const DeleteComment = ({
  articleComments,
  setArticleComments,
  setDeleteCommentID,
  deleteCommentID,
}) => {
  const userValue = useContext(UserContext);
  const [disableButton, setDisableButton] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const targetArticle = function (array) {
      for (let i = 0; i < array.length; i++) {
        if (
          array[i].comment_id === Number(deleteCommentID) &&
          array[i].author === userValue.user
        ) {
          return true;
        }
      }
      return false;
    };

    if (targetArticle(articleComments)) {
      deleteComment(deleteCommentID).then(() => {
        setDeleteCommentID("");
        setError(false);
        setDisableButton(true);
        setArticleComments(articleComments);
      });
    } else {
      setDeleteCommentID("");
      setError(true);
      setDisableButton(true);
    }
  };

  return (
    <form
      className="comment-adder"
      onSubmit={(event) => {
        setError(""); //look at this
        setDeleteCommentID(event.target[0].value);
        handleSubmit(event);
      }}
    >
      <label htmlFor="delete-comment">
        <h2>Delete a comment:</h2>
      </label>
      <input
        id="delete-comment"
        type="text"
        placeholder="Enter comment ID"
        onChange={(event) => {
          setDeleteCommentID(event.target.value);
          setError("");
          setDisableButton(false);
        }}
      ></input>
      <button
        type="submit"
        onClick={() => {
          setDisableButton(true);
        }}
        disabled={disableButton === true ? true : false}
      >
        Submit
      </button>
      <h3>
        {error === ""
          ? ""
          : error === false
          ? "Comment deleted!"
          : "Comment failed to delete..."}
      </h3>
    </form>
  );
};

export default DeleteComment;
