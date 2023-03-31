import React from "react";
import "./article.css";

const Article = ({ img, date, title, blogUrl }) => {
  return (
    <div className="gpt3__article">
      <img src={img} alt="Blog Image" />
      <div className="gpt3__article-content">
        <span>{date}</span>
        <h3>{title}</h3>
        <a href={blogUrl}>Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
