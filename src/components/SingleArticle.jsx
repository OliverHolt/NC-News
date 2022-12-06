import { useEffect, useState } from "react";
import { getArticleByID } from "../api";
import Loading from "./Loading";

const SingleArticle = ({ singleArticle }) => {
  const id = singleArticle.article_id;
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(id).then((article) => {
      setArticle(article);
      setLoading(false);
    });
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <a href="/" id="home">
        HOME
      </a>
      <div id="grid-container">
        <div id="article-display">
          <h2>{article.title}</h2>
          <h3>by: {article.author}</h3>

          <p>{article.body}</p>
        </div>
        <div id="like-article">Liked this article? </div>
        <div id="article-comments">Comments</div>
        <div id="add-comment">Add comment:</div>
      </div>
    </div>
  );
};

export default SingleArticle;
