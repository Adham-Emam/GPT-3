import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
