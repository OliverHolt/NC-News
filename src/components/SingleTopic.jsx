import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const SingleTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic]);

  return loading ? (
    <Loading />
  ) : (
    <ul className="main">
      {articles.map((article) => {
        return (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            className="article-card"
          >
            <h2>{article.title}</h2>
            <br />
            <br />
            <h3>Author: {article.author}</h3>
            <h3>Topic: {article.topic}</h3>
            <h3>Date: {article.created_at.substring(0, 10)}</h3>
          </Link>
        );
      })}
    </ul>
  );
};

export default SingleTopic;
