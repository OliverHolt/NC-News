import "../CSS/SingleArticle.css";
import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../api";
import Loading from "./Loading";

const Comments = ({ singleArticle }) => {
  const id = singleArticle.article_id;
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
          <div id="comments-list">
            <p>
              {comment.author} | {comment.created_at.substring(0, 10)}:
            </p>
            <br />
            <p>{comment.body}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Comments;
