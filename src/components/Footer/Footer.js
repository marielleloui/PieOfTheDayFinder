import React from "react";
import "./Footer.css";

const footer = () => (
  <article className="Footer">
    <p className="footerline">&copy; 2019 Marielle Louise Cruz</p>
    <div className="footer-social-icons">
      <ul className="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/marielle-louise-cruz/"
            className="social-icon"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/marielleloui" className="social-icon">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </div>
  </article>
);

export default footer;
