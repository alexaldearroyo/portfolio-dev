import React from "react";
import "../pages/projects";
import Image from 'next/image';

const MarkdownViewer = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Markdown Viewer</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          A MacOs app to quickly and simply visualize formatted markdown files.
          <a href="https://github.com/alexaldearroyo/MarkdownViewer" target="_blank">
            <Image
              src="/mdw.png"
              alt="MarkDown VieWer Screenshot"
              width={600}
              height={400}
              className="mx-auto block"
            />
          </a>
          <p className="mt-5 flex justify-center">
            <Image
              src="/python_b.svg"
              alt="Python Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Python
            <Image
              src="/qt_b.svg"
              alt="Qt Logo"
              width={20}
              height={20}
              className="ml-2 mr-2"
            />
            PyQt5
            <Image
              src="/css_b.svg"
              alt="CSS Logo"
              width={20}
              height={20}
              className="ml-2 mr-2"
            />
            CSS5
          </p>
        </div>

        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                A compact and intuitive viewer for markdown (.md) and text (.txt) files designed for MacOS, built with Python and PyQt5. Specifically designed to view text files in a clean and modern format through a fast and lightweight interface.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/MarkdownViewer#markdown-viewer"
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
