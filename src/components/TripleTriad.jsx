import React from "react";

const TripleTriad = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Triple Triad Memory</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div class="preview">
        A nostalgic memory card game inspired by Final Fantasy&apos;s Triple Triad.
        <a href="https://tripletriadmemory.netlify.app" target="_blank">

        <img
                src="ttm.png"
                alt="Triple Triad Memory Screenshot"
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
              src="vite_b.svg"
              alt="Vite Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Vite
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
              Triple Triad Memory is a card-matching memory game. The rules are simple:<br></br><br></br>
              1. Click on a card to reveal its image.<br></br>
              2. Click on another card to find a matching pair.<br></br>
              3. If the cards match, they will remain face-up.<br></br>
              4. If they don&apos;t match, they will be flipped face-down again.<br></br>
              5. Keep matching pairs until all cards are face-up to win the game.
              </p>
              <p class="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/triple_triad_memory"
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
            onClick={() => toggleExpandibleSection("TripleTriad")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TripleTriad;
