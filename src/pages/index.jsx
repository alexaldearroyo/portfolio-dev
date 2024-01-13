import React from "react";
import SocialLinks from "@/components/SocialLinks";

const HomePage = () => {
  return (
    <div className="flex-wrapper">
      <div className="terminal">
        <p>
          Mediator between thoughts and machines.
          <span className="cursor">|</span>
        </p>
      </div>
      <div className="centered-box">
        <p>
          I work as a{" "}
          <a className="no-link-dec" href="dev.html">
            <span className="highlight">
              software engineer and full-stack web developer
            </span>
          </a>
          .
        </p>

        <p>I express ideas through code, design, and stories.</p>
        <p>
          I mainly work with <b>React</b> and <b>Next.js</b> in the frontend,
          and with <b>Node.js</b> and <b>MySQL</b> on the backend. I also like
          to code in <b>Python</b>.
        </p>
        <p>I am a creative type, so I make some art and music too.</p>
        <p>I have a background in translation and international studies.</p>
        <p>I speak English, Spanish, French, Korean, and Japanese.</p>
      </div>
        <SocialLinks />
    </div>
  );
};

export default HomePage;
