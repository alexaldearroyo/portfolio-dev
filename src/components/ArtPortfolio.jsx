import React from "react";
import Image from 'next/image';

const ArtPortfolio = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Art Portfolio</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div class="preview">
        Personal Art Portfolio site made with React and Next.js.
        <a href="https://alexarroyo-art.vercel.app" target="_blank">

        <img
                src="ap.png"
                alt="Art Portfolio Screenshot"
                className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
                style={{ cursor: "pointer" }}

              />
                        </a>
        <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <img
              src="react_b.svg"
              alt="React Logo"
              className="h-5 w-auto mr-2"
            />
            React
            <img
              src="next.svg"
              alt="Next.js Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Next.js
          </p>
        </div>

        {expanded && (
          <div class="expandible">
            <div class="inner-text-dev">
              
              <p class="pt-4 pb-4">
              This is a digital art portfolio website created by Alex Arroyo. It showcases a collection of digital artworks in a visually appealing manner.
              </p>
              <p class="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/art_portfolio"
                  target="_blank"
                >
                  <span class="arrow">&gt;</span> More info on GitHub
                </a>
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => toggleExpandibleSection("ArtPortfolio")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default ArtPortfolio;
