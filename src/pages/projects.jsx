import React, { useState } from "react";
import "./projects.css";

const ProjectsPage = () => {

  const [expandedStates, setExpandedStates] = useState({
    priorities: false,
    visualGit: false,
    // Agrega más estados si tienes más elementos
  });

  const toggleExpandibleSection = (element) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <div className="projects-page">
      <div className="total-wrapper">
        <div className="grid-wrapper">

          {/* PRIORITIES */}
          <div className="centered-box-grid">
            <div className="box-header">Priorities</div>
            <div className={`box-content ${expandedStates.priorities ? "expanded" : ""}`}>
              <div className="preview">
                Keep track of your most important tasks at a glance!
                <p className="mt-5 flex justify-center">
                  <img
                    src="python.svg"
                    alt="Python Logo"
                    className="h-5 w-auto mr-2"
                  />
                  Python
                  <img
                    src="qt.svg"
                    alt="Qt Logo"
                    className="h-5 w-auto ml-2 mr-2"
                  />
                  PyQt5
                </p>
              </div>

              {expandedStates.priorities && (
                <div className="expandible">
                  <div className="inner-text-dev">
                    <img
                      src="priorities.png"
                      alt="Priorities Screenshot"
                      className="w-full h-auto mx-auto mb-4 block"
                    />
                    <p className="pt-4 pb-4">
                      "Priorities" is a task management application for macOS
                      with a color-changing interface based on task count: blue
                      for few tasks, yellow for some, and red for many. It
                      features a user-friendly interface supporting both mouse
                      and keyboard navigation, along with a text-editing
                      function for easy task modifications.
                    </p>

                    <p className="pt-3 text-center">
                      <a
                        href="https://github.com/alexaldearroyo/priorities"
                        target="_blank"
                      >
                        <span className="arrow no-hover">&gt;</span> More info
                        on GitHub
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={() => toggleExpandibleSection("priorities")}
                  className="toggle-content"
                >
                  {expandedStates.priorities ? "-" : "+"}
                </button>
              </div>
            </div>
          </div>

          {/* VISUAL GIT */}

          <div class="centered-box-grid">
            <div class="box-header">Visual Git</div>
            <div className={`box-content ${expandedStates.visualGit ? "expanded" : ""}`}>
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
              {expandedStates.visualGit && (
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
                  {expandedStates.visualGit ? "-" : "+"}
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
