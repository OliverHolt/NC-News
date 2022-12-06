import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";

function App() {
  const [singleArticle, setSingleArticle] = useState({});
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Articles setSingleArticle={setSingleArticle} />}
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle singleArticle={singleArticle} />}
        />
      </Routes>
    </div>
  );
}

export default App;
