import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ article_id, setArticleComments }) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [addButton, setAddButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id, username)
      .then((newComment) => {
        setNewComment("");
        setUsername("");
        setArticleComments((currComments) => {
          const newCommentList = [...currComments];
          newCommentList.unshift(newComment);
          return newCommentList;
        });
        alert("Comment added!");
      })
      .catch(() => {
        alert("ERROR: Comment not added!");
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
      <label htmlFor="username">
        <h2>Select a user:</h2>
      </label>
      <br />
      <select
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="tickle122">tickle122</option>
        <option value="grumpy19">grumpy19</option>
        <option value="happyamy2016">happyamy2016</option>
        <option value="cooljmessy">cooljmessy</option>
        <option value="weegembump">weegembump</option>
        <option value="jessjelly">jessjelly</option>
      </select>
      <br />
      <br />
      <button
        id="add"
        onClick={() => {
          setAddButton(true);
        }}
        disabled={addButton === true ? true : false}
      >
        <h3>Add</h3>
      </button>
    </form>
  );
};

export default AddComment;
