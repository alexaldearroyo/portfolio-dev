import React from "react";
import Image from 'next/image';

const SystemDataInspector = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">System Data Inspector</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          A command-line tool for inspecting and displaying the sizes of specific system data directories on macOS.
          <a href="https://github.com/alexaldearroyo/systemdatainspector" target="_blank">
            <Image
              src="/sdi.png"
              alt="System Data Inspector Screenshot"
              width={600}
              height={400}
              className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
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
            />{" "}
            Bash
          </p>
        </div>
        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                The System Data Inspector for MacOS provides a quick and efficient way to view the approximate calculations of potentially modifiable space occupied by System Data on your Mac. With it, you can view various directories and their sizes.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/systemdatainspector"
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
