import "./CSS/App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import SingleTopic from "./components/SingleTopic";
import NotFoundPage from "./components/Not-Found-Page";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/topics/:topic" element={<SingleTopic />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
