import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Loading from "./Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((article) => {
      setArticles(article);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ul className="main">
      {articles.map((article) => {
        return (
          <li className="article-card">
            <h2>{article.title}</h2>
            <br />
            <br />
            <h3>Author: {article.author}</h3>
            <h3> Topic: {article.topic}</h3>
            <h3>Date: {article.created_at.substring(0, 10)}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
