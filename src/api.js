import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://long-pink-goat-wear.cyclic.app/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticles = () => {
  return axios
    .get("https://long-pink-goat-wear.cyclic.app/api/articles/")
    .then(({ data }) => {
      return data.articles;
    });
};
