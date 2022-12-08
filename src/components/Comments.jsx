import "../CSS/SingleArticle.css";

const Comments = ({ articleComments }) => {
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
          </div>
        );
      })}
    </ul>
  );
};

export default Comments;
