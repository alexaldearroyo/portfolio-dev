import React from "react";

const Battleship = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Battleship Game</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div class="preview">
          Play online the classic Battleship game. Carefully built with
          TypeScript and Webpack.
          <a
            href="https://alexaldearroyo.github.io/battleship/"
            target="_blank"
          >
            <img
              src="bs.png"
              alt="Battleship Game Screenshot"
              className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <img
              src="ts_b.svg"
              alt="TypeScript Logo"
              className="h-5 w-auto mr-2"
            />
            TypeScript
            <img
              src="webpack.svg"
              alt="Webpack Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Webpack
            <img
              src="jest_b.svg"
              alt="Jest Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Jest
          </p>
        </div>
        {expanded && (
          <div class="expandible">
            <div class="inner-text-dev">
              <p class="pt-4 pb-4">
                Battleship Game is a classic two-player strategy board game
                implemented as a web application. In this game, players take
                turns to guess the locations of their opponent&apos;s fleet of ships
                and attempt to sink them. The player who sinks all of their
                opponent&apos;s ships first wins the game.
              </p>
              <p class="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/battleship"
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
            onClick={() => toggleExpandibleSection("Battleship")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Battleship;
