import React from "react";
import '../pages/styles.css';

const SocialLinks = () => {
  return (
    <div className="container mx-auto text-center link-container social-icons-container">
      <a
        href="https://github.com/alexaldearroyo/"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/github.svg" alt="GitHub" />
      </a>

      <a
        href="https://twitter.com/alexaldearroyo"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter.svg" alt="Twitter / X" />
      </a>

      <a
        href="mailto:alexaldearroyo@gmail.com"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/email.svg" alt="Email" />
      </a>
    </div>
  );
};

export default SocialLinks;
