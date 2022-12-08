import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";

const AddComment = ({ article_id, setArticleComments }) => {
  const userValue = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState(userValue.user);
  const [addButton, setAddButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id, username)
      .then((newComment) => {
        setNewComment("");
        setArticleComments((currComments) => {
          const newCommentList = [...currComments];
          newCommentList.unshift(newComment);
          return newCommentList;
        });
        setAddButton(false);
        document.getElementById("add-button").innerHTML = "Add again!";
      })
      .catch(() => {
        document.getElementById("add-button").innerHTML = "Failed!";
      });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">
        <h2>Add a comment:</h2>
      </label>{" "}
      <br />
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
        rows={5}
        required
      ></textarea>
      <br />
      <br />
      <h2>User : {userValue.user}</h2>
      <br />
      <br />
      <button
        id="add"
        onClick={() => {
          setAddButton(true);
        }}
        disabled={addButton === true ? true : false}
      >
        <h3 id="add-button">Add</h3>
      </button>
    </form>
  );
};

export default AddComment;
