import axios from "axios";

const NewsBaseApi = axios.create({
  baseURL: "https://nc-news-repo-project.onrender.com/api",
});

export const getArticles = (articleId) => {
    return NewsBaseApi.get("/articles", { params: {article_id: articleId}}).then((response) => {
      return response.data.articles;
    });
  };

  export const getArticleById = (articleId) => {
    return NewsBaseApi.get(`/articles/${articleId}`).then((response) => response.data.article);
  };