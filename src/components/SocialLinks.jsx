import React from "react";
import Image from 'next/image';

const SocialLinks = () => {
  return (
    <div className="container mx-auto text-center link-container social-icons-container">
      <a
        href="https://github.com/alexaldearroyo/"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/github.svg" alt="GitHub" width={40} height={40} />
      </a>

      <a
        href="https://twitter.com/alexaldearroyo"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/twitter.svg" alt="Twitter / X" width={40} height={40} />
      </a>

      <a
        href="mailto:alexaldearroyo@gmail.com"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/email.svg" alt="Email" width={40} height={40} />
      </a>
    </div>
  );
};

export default SocialLinks;
