import React, { useState } from "react";
import "./projects.css";

const ProjectsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandibleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="projects-page">
      <div className="total-wrapper">
        <div className="grid-wrapper">
          {/* Bloque de contenido */}
          <div className="centered-box-grid">
            <div className="box-header">Priorities</div>
            <div className={`box-content ${isExpanded ? "expanded" : ""}`}>
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

              {isExpanded && (
                <div className="expandible">
                  <div className="inner-text-dev">
                    <img
                        src="https://raw.githubusercontent.com/alexaldearroyo/priorities/main/screenshots_tr.png"
                        alt="Priorities Screenshot"
                        className="w-full h-auto mx-auto mb-4 block"
                    />
                    <p className="pt-0 pb-4">
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
                            <span className="arrow no-hover">&gt;</span> More info on GitHub
                        </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={toggleExpandibleSection}
                  className="toggle-content"
                >
                  {isExpanded ? "-" : "+"}
                </button>
              </div>
            </div>
          </div>

          {/* Repetir para otros bloques */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
