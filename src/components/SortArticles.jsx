import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sortArticles } from "../api";

const SortArticles = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

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
    sortArticles(params.sort_by, params.order).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mySelect">Sort by:</label>
      <select id="mySelect">
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
      </select>
      <select id="mySelect">
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

//values for each option above might not match what the backend wants

export default SortArticles;
