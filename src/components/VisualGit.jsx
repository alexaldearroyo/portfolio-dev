import React from "react";
import Image from 'next/image';

const VisualGit = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Visual Git</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          Git and GitHub made simpler through command line menus.
          <a href="https://github.com/alexaldearroyo/visualgit" target="_blank">
            <Image
              src="/vigit.png"
              alt="Visual Git Screenshot"
              width={600}
              height={400}
              className="w-1/1.5 h-auto mx-auto block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center">
            <Image
              src="/python_b.svg"
              alt="Python Logo"
              width={20}
              height={20}
              className="h-5 w-auto mr-2"
            />
            Python
            <Image
              src="/bash.svg"
              alt="Bash Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Bash
          </p>
        </div>

        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                A terminal-based script designed to simplify your version
                control process with Git and GitHub. Leveraging textual
                outputs, Visual Git provides an intuitive experience that
                streamlines your workflow, making complex tasks easier to
                manage and understand.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/visualgit"
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
