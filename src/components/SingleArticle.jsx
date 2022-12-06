import "../CSS/SingleArticle.css";
import { useEffect, useState } from "react";
import { getArticleByID } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";

const SingleArticle = ({ singleArticle }) => {
  const id = singleArticle.article_id;
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <br />
      <br />
      <a href="/" id="home-button">
        HOME
      </a>
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
        <div id="like-article">Liked this article? </div>
        <div id="article-comments">
          <h2>COMMENTS</h2>
          <br />
          <br />
          <Comments singleArticle={singleArticle} />
        </div>
        <div id="add-comment">Add comment:</div>
      </div>
    </div>
  );
};

export default SingleArticle;
