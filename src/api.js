import axios from "axios";

const marketPlaceBaseApi = axios.create({
  baseURL: "https://nc-news-repo-project.onrender.com/api",
});

export const getArticles = () => {
    return marketPlaceBaseApi.get("/articles").then((response) => {
      return response.data.articles;
    });
  };