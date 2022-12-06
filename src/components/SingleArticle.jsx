import "../CSS/SingleArticle.css";
import { useEffect, useState } from "react";
import { getArticleByID } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import Likes from "./Likes";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, [article_id]);

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
        <div id="like-article">
          <h2>Liked this article?</h2>

          <Likes />
        </div>
        <div id="article-comments">
          <h2>COMMENTS</h2>
          <br />
          <br />
          <Comments />
        </div>
        <div id="add-comment">Add comment:</div>
      </div>
    </div>
  );
};

export default SingleArticle;
