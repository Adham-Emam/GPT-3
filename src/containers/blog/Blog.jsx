import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <h2 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="gpt3__blog-container">
        <Article />
      </div>
    </div>
  );
};

export default Blog;
