import "./CSS/App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
