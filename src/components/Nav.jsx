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
      {topics.map((topic) => {
        return <Link key={topic.slug}>{topic.slug.toUpperCase()} </Link>;
      })}
    </ul>
  );
};

export default Nav;
