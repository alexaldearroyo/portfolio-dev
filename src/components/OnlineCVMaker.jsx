import React from "react";

const OnlineCVMaker = ({ expanded, toggleExpandibleSection }) => {
  return (
    <div className="centered-box-grid">
      <div className="box-header">Online CV Maker</div>
      <div className={`box-content ${expanded ? "expanded" : ""}`}>
        <div class="preview">
        Create and customize your professional resume effortlessly with Online CV Maker.
        <a href="https://online-cv-maker.vercel.app" target="_blank">

        <img
                src="ocvm.png"
                alt="Online CV Maker Screenshot"
                className="w-1/1.5 h-auto mx-auto mt-4 mb-5 block"
                style={{ cursor: "pointer" }}
              />
          </a>
          <p className="mt-5 flex justify-center flex-wrap custom-line-height">
            <img
              src="react_b.svg"
              alt="React Logo"
              className="h-5 w-auto mr-2"
            />
            React
            <img
              src="tailwind_b.svg"
              alt="Tailwind Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Tailwind
            <img
              src="jest_b.svg"
              alt="Jest Logo"
              className="h-5 w-auto ml-2 mr-2"
            />
            Jest
          </p>
        </div>

        {expanded && (
          <div class="expandible">
            <div class="inner-text-dev">
              
              <p class="pt-4 pb-4">
              Online CV Maker is a web application designed to create professional and customizable resumes online. It provides a user-friendly interface where users can input their personal information, educational background, work experience, and other relevant details. The app offers a live preview feature, allowing users to see how their resume looks as they fill out the form.
              </p>
              <p class="pt-3 text-center">
                <a
                  href="https://github.com/alexaldearroyo/online_cv_maker"
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
            onClick={() => toggleExpandibleSection("OnlineCVMaker")}
            className="toggle-content"
          >
            {expanded ? "-" : "+"}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default OnlineCVMaker;
