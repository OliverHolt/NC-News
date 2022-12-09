import "../CSS/SingleArticle.css";
import DeleteComment2 from "./DeleteComment2";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Comments = ({ articleComments, setArticleComments }) => {
  const userValue = useContext(UserContext);
  return (
    <ul className="comments-list">
      {articleComments.map((comment) => {
        return (
          <div id="comments-list" key={comment.comment_id}>
            <p>
              {comment.author} | {comment.created_at.substring(0, 10)}:
            </p>
            <br />
            <p>{comment.body}</p>
            <br />
            <p>Likes: {comment.votes}</p>
            {userValue.user === comment.author ? (
              <DeleteComment2
                articleComments={articleComments}
                setArticleComments={setArticleComments}
                comment_id={comment.comment_id}
              />
            ) : null}
          </div>
        );
      })}
    </ul>
  );
};

export default Comments;
