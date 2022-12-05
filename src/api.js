import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://long-pink-goat-wear.cyclic.app/api/topics")
    .then(({ data }) => {
      console.log(data.topics);
      return data.topics;
    });
};
