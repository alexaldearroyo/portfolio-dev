import React from "react";
import Image from 'next/image';

const PrioritiesOnline = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Priorities Online</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div className="preview">
          Streamlining your task management with intuitive prioritization and organization tools.
          <a href="https://alexaldearroyo.github.io/priorities_online/" target="_blank">
            <Image
              src="/po.png"
              alt="Priorities Online Screenshot"
              width={600}
              height={400}
              className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
              style={{ cursor: "pointer" }}
            />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <Image
              src="/js_b.svg"
              alt="JavaScript Logo"
              width={20}
              height={20}
              className="h-5 w-auto mr-2"
            />
            JavaScript
            <Image
              src="/jquery_b.svg"
              alt="jQuery Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            jQuery
            <Image
              src="/tailwind_b.svg"
              alt="Tailwind Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Tailwind
            <Image
              src="/webpack.svg"
              alt="Webpack Logo"
              width={20}
              height={20}
              className="h-5 w-auto ml-2 mr-2"
            />
            Webpack
          </p>
        </div>
        {expanded && (
          <div className="expandible">
            <div className="inner-text-dev">
              <p className="pt-4 pb-4">
                Priorities Online is a web-based task management application that helps you stay organized and focused. This app allows users to categorize tasks by priority, bundle them into projects, and keep track of deadlines with an integrated calendar feature. It's the perfect tool for anyone from students to professionals seeking to optimize their time and effort with a clear, priorities-driven approach.
              </p>
              <p className="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/priorities_online"
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
