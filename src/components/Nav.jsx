import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <ul className="nav">
      <a id="topic">Select a topic:</a>
      {topics.map((topic) => {
        return <Link key={topic.slug}>{topic.slug.toUpperCase()} </Link>;
      })}
    </ul>
  );
};

export default Nav;
