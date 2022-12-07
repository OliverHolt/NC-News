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

export const getCommentsByArticleID = (id) => {
  return myApi
    .get(`/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => console.log(err));
};

export const patchArticle = (id) => {
  const patchBody = {
    inc_votes: 1,
  };

  return myApi.patch(`/api/articles/${id}`, patchBody).then(({ data }) => {
    return data.article;
  });
};

export const getArticlesByTopic = (topic) => {
  return myApi
    .get("/api/articles/", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};
