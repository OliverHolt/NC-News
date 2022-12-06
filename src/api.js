import axios from "axios";

const myApi = axios.create({
  baseURL: "https://long-pink-goat-wear.cyclic.app",
});

export const getTopics = () => {
  return myApi.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return myApi.get("/api/articles/").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleByID = (id) => {
  return myApi
    .get(`/api/articles/${id}`)
    .then(({ data }) => {
      return data.article[0];
    })
    .catch((err) => console.log(err));
};
