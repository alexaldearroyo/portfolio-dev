import React from "react";
import Image from 'next/image';

const ArtPortfolio = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Art Portfolio</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          Personal digital art portfolio site made with React and Next.js.
          <a href="https://alexarroyo-art.vercel.app" target="_blank">
            <Image
              src="/ap.png"
              alt="Art Portfolio Screenshot"
              width={600}
              height={400}
              className="mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <Image
              src="/react_b.svg"
              alt="React Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            React
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={20}
              height={20}
              className="ml-2 mr-2"
            />
            Next.js
          </p>
        </div>

        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                This is a digital art portfolio website created by Alex Arroyo. It showcases a collection of digital artworks in a visually appealing manner.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/art_portfolio"
                  target="_blank"
                >
                  <span className="arrow">&gt;</span> More info on GitHub
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
        </div>
      </div>
    </div>
  );
};

export default ArtPortfolio;
