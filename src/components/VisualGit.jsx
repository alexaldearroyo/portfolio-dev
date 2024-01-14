import React from "react";

const VisualGit = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Visual Git</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
      <div class="preview">
                Git and GitHub made simpler through command line menus.
                <p className="mt-5 flex justify-center">
                  <img
                    src="python.svg"
                    alt="Python Logo"
                    className="h-5 w-auto mr-2"
                  />
                  Python
                  <img
                    src="bash.svg"
                    alt="Bash Logo"
                    className="h-5 w-auto ml-2 mr-2"
                  />{" "}
                  Bash
                </p>
              </div>
              {expanded && (
                <div class="expandible">
                  <div class="inner-text-dev">
                    <img
                      src="vigitsh.png"
                      alt="Visual Git Screenshot"
                      className="w-1/1.5 h-auto mx-auto mb-4 block"
                    />
                    <p class="pb-4">
                      A terminal-based script designed to simplify your version
                      control process with Git and GitHub. Leveraging textual
                      outputs, Visual Git provides an intuitive experience that
                      streamlines your workflow, making complex tasks easier to
                      manage and understand.
                    </p>
                    <p class="pt-3 text-center">
                      <a
                        href="https://github.com/alexaldearroyo/visualgit"
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
          onClick={() => toggleExpandibleSection("visualGit")}
          className="toggle-content"
        >
          {expanded ? "-" : "+"}
        </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default VisualGit;
