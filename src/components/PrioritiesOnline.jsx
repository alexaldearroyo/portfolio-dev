import React from "react";
import Image from 'next/image';

const PrioritiesOnline = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Priorities Online</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div class="preview">
          Streamlining your task management with intuitive prioritization and
          organization tools.
          <a href="https://alexaldearroyo.github.io/priorities_online/" target="_blank">

          <img
                src="po.png"
                alt="Priorities Online Screenshot"
                className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
                style={{ cursor: "pointer" }}

              />
          </a>
              
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <img
              src="js_b.svg"
              alt="JavaScript Logo"
              className="h-5 w-auto mr-2"
            />
            JavaScript
            <img
              src="jquery_b.svg"
              alt="jQuery Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            jQuery
            <img
              src="tailwind_b.svg"
              alt="Tailwind Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Tailwind
            <img
              src="webpack.svg"
              alt="Webpack Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Webpack
          </p>

        </div>


              
        {expanded && (
          <div class="expandible">
            <div class="inner-text-dev">

              <p class="pt-4 pb-4">
                Priorities Online is a web-based task management application
                that helps you stay organized and focused. This app allows users
                to categorize tasks by priority, bundle them into projects, and
                keep track of deadlines with an integrated calendar feature.
                It&apos;s the perfect tool for anyone from students to professionals
                seeking to optimize their time and effort with a clear,
                priorities-driven approach.
              </p>
              <p class="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/priorities_online"
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
            onClick={() => toggleExpandibleSection("PrioritiesOnline")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default PrioritiesOnline;
