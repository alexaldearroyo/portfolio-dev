import React from "react";
import "../pages/projects"

const MarkdownViewer = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Markdown Viewer</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          A MacOs app to quickly and simply visualize formatted markdown files.
          <p className="mt-5 flex justify-center">
            <img
              src="python.svg"
              alt="Python Logo"
              className="h-5 w-auto mr-2"
            />
            Python
            <img src="qt.svg" alt="Qt Logo" className="h-5 w-auto ml-2 mr-2" />
            PyQt5
            <img src="css.svg" alt="CSS Logo" className="h-5 w-auto ml-2 mr-2" />
            CSS5
          </p>
        </div>
        {expanded && (
                <div class="expandible">
                  <div class="inner-text-dev">
                    <img
                      src="https://github.com/alexaldearroyo/MarkdownViewer/raw/main/resources/screenshot.png"
                      alt="Visual Git Screenshot"
                      className="w-1/1.5 h-auto mx-auto mb-4 block"
                    />
                    <p class="pb-4">
                    A compact and intuitive viewer for markdown (.md) and text (.txt) files designed for MacOS, built with Python and PyQt5. Specifically designed to view text files in a clean and modern format through a fast and lightweight interface.
                    </p>
                    <p class="pt-3 text-center">
                      <a
                        href="https://github.com/alexaldearroyo/MarkdownViewer#markdown-viewer"
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
            onClick={() => toggleExpandibleSection("MarkdownViewer")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownViewer;
