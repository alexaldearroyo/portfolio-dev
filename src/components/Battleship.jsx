import React from "react";
import Image from 'next/image';

const Battleship = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Battleship Game</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          Play online the classic Battleship game. Carefully built with
          TypeScript and Webpack.
          <a
            href="https://alexaldearroyo.github.io/battleship/"
            target="_blank"
          >
            <Image
              src="/bs.png"
              alt="Battleship Game Screenshot"
              width={600}
              height={400}
              className="mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <Image
              src="/ts_b.svg"
              alt="TypeScript Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            TypeScript
            <Image
              src="/webpack.svg"
              alt="Webpack Logo"
              width={20}
              height={20}
              className="ml-2 mr-2"
            />
            Webpack
            <Image
              src="/jest_b.svg"
              alt="Jest Logo"
              width={20}
              height={20}
              className="ml-2 mr-2"
            />
            Jest
          </p>
        </div>
        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                Battleship Game is a classic two-player strategy board game
                implemented as a web application. In this game, players take
                turns to guess the locations of their opponent&apos;s fleet of ships
                and attempt to sink them. The player who sinks all of their
                opponent&apos;s ships first wins the game.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/battleship"
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
            onClick={() => toggleExpandibleSection("Battleship")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Battleship;
