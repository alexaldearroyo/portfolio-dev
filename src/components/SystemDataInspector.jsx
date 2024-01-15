import React from "react";
import Image from 'next/image';

const SystemDataInspector = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">System Data Inspector</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
      <div class="preview">
      A command-line tool for inspecting and displaying the sizes of specific system data directories on macOS.
      <a href="https://github.com/alexaldearroyo/systemdatainspector" target="_blank">

      <img
                      src="sdi.png"
                      alt="System Data Inspector Screenshot"
                      className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
                      style={{ cursor: "pointer" }}

                    />
          </a>
                    
                <p className="mt-5 flex justify-center">
                  <img
                    src="python_b.svg"
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
            
                    <p class="pt-4 pb-4">
                    The System Data Inspector for MacOS provides a quick and efficient way to view the approximate calculations of potentially modifiable space occupied by System Data on your Mac. With it, you can view various directories and their sizes.
                    </p>
                    <p class="pt-3 text-center">
                      <a
                        href="https://github.com/alexaldearroyo/systemdatainspector"
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
          onClick={() => toggleExpandibleSection("SystemDataInspector")}
          className="toggle-content"
        >
          {expanded ? "-" : "+"}
        </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SystemDataInspector;
