import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ul className="nav">
      <p id="topic">Select a topic:</p>
      <Link to={"/"} id="topic">
        ALL
      </Link>
      {topics.map((topic) => {
        return (
          <Link
            to={`/articles/topics/${topic.slug}`}
            id="topic"
            key={topic.slug}
          >
            {topic.slug.toUpperCase()}{" "}
          </Link>
        );
      })}
    </ul>
  );
};

export default Nav;
