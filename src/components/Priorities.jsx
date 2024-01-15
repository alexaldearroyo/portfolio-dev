import React from "react";

const Priorities = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Priorities</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          Keep track of your most important tasks at a glance!

          <a href="https://github.com/alexaldearroyo/priorities" target="_blank">
            <img
              src="p.png"
              alt="Priorities Screenshot"
              className="w-full h-auto mx-auto mb-4 block"
              style={{ cursor: "pointer" }}
            />
          </a>
              
          <p className="mt-5 flex justify-center">
            <img
              src="python_b.svg"
              alt="Python Logo"
              className="h-5 w-auto mr-2"
              fill="black"
            />
            Python
            <img
              src="qt_b.svg"
              alt="Qt Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            PyQt5
          </p>
        </div>

        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
         
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
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Priorities;
