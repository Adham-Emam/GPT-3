import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <h2 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h2>
      <div className="gpt3__blog-container">
        <Article
          img={blog01}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          blogUrl="#"
        />
        <Article
          img={blog02}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          blogUrl="#"
        />
        <Article
          img={blog03}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          blogUrl="#"
        />
        <Article
          img={blog04}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          blogUrl="#"
        />
        <Article
          img={blog05}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          blogUrl="#"
        />
      </div>
    </div>
  );
};

export default Blog;
