import "../CSS/SingleArticle.css";
import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Comments = ({ singleArticle }) => {
  const { article_id } = useParams();
  const id = article_id;
  const [articleComments, setArticleComments] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleID(id).then((article) => {
      setArticleComments(article);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
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
