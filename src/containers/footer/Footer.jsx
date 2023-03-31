import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <a href="#">Request Early Access</a>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container__head">
          <img src={logo} alt="GPT-3" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <ul>
          <h4>
            <a href="#">Links</a>
          </h4>
          <li>
            <a href="#">Overons</a>
          </li>
          <li>
            <a href="#">Social Media</a>
          </li>
          <li>
            <a href="#">Counters</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <h4>
            <a href="#">Company</a>
          </h4>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <h4>Get in touch</h4>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </ul>
      </div>
      <div className="gpt3__footer-copyright">
        <p>
          © 2021 <span className="gradient__text">GPT-3</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
