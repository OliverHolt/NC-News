import "../CSS/SingleArticle.css";
import { useContext, useEffect, useState } from "react";
import { getArticleByID } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import Likes from "./Likes";
import AddComment from "./AddComment";
import { getCommentsByArticleID } from "../api";
import { UserContext } from "../contexts/User";
import DeleteComment from "./DeleteComment";

const SingleArticle = () => {
  const userValue = useContext(UserContext);
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [deleteCommentID, setDeleteCommentID] = useState(0);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
    });

    getCommentsByArticleID(article_id).then((article) => {
      setArticleComments(article);
      setLoading(false);
    });
  }, [article_id, userValue, deleteCommentID]);

  if (loading) {
    return <Loading />;
  } else if (!userValue.user) {
    return (
      <div>
        <br />
        <br />
        <div id="grid-container">
          <div id="article-display">
            <h2>{article.title}</h2>
            <br />
            <h3>{article.author}</h3>
            <br />
            <p>{article.body}</p>
          </div>
          <div id="like-article">
            <h2>Liked this article?</h2>

            <Likes article_id={article_id} />
          </div>
          <div id="article-comments">
            <h2>COMMENTS</h2>
            <br />
            <br />
            <Comments
              article_id={article_id}
              articleComments={articleComments}
            />
          </div>
          <div id="add-comment">
            <p> Please log-in to add a comment</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <div id="grid-container">
          <div id="article-display">
            <h2>{article.title}</h2>
            <br />
            <h3>{article.author}</h3>
            <br />
            <p>{article.body}</p>
          </div>
          <div id="like-article">
            <h2>Liked this article?</h2>

            <Likes article_id={article_id} />
          </div>
          <div id="article-comments">
            <h2>COMMENTS</h2>
            <br />
            <br />
            <Comments
              article_id={article_id}
              articleComments={articleComments}
            />
          </div>
          <div id="add-comment">
            <AddComment
              article_id={article_id}
              setArticleComments={setArticleComments}
            />
            <DeleteComment
              articleComments={articleComments}
              setArticleComments={setArticleComments}
              setDeleteCommentID={setDeleteCommentID}
              deleteCommentID={deleteCommentID}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SingleArticle;
