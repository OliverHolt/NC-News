import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../api";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { sortArticles } from "../api";
import NotFoundPage from "./Not-Found-Page";

const SingleTopic = () => {
  const { topic } = useParams();

  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message, "<<< error message 1");
      });
  }, [topic]);

  function serializeFormQuery(obj) {
    const newObj = {
      sort_by: obj.target[0].value,
      order: obj.target[1].value,
    };
    return newObj;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let params = serializeFormQuery(event);
    setSearchParams(params);
    sortArticles(params.sort_by, params.order)
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message, "<<< error message 2");
      });
  }

  if (error || !articles) {
    return <NotFoundPage error={error} />;
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <form className="nav" onSubmit={handleSubmit}>
          <label id="topic" htmlFor="mySelect">
            Sort by:
          </label>
          <select id="topic">
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
          </select>
          <select id="topic">
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
          <button id="topic" type="submit">
            Submit
          </button>
        </form>
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
      </div>
    );
  }
};

export default SingleTopic;
