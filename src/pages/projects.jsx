import React, { useState } from "react";
import "./projects.css";
import Priorities from "../components/Priorities";
import VisualGit from "../components/VisualGit";
import MarkdownViewer from "../components/MarkdownViewer";



const ProjectsPage = () => {

  const [expandedStates, setExpandedStates] = useState({
    priorities: false,
    visualGit: false,
    MarkdownViewer: false,
  });

  const toggleExpandibleSection = (element) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

  return (
    <div className="projects-page">
      <div className="total-wrapper">
        <div className="grid-wrapper">

        <Priorities
            expanded={expandedStates.priorities}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <VisualGit
            expanded={expandedStates.visualGit}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <MarkdownViewer
            expanded={expandedStates.MarkdownViewer}
            toggleExpandibleSection={toggleExpandibleSection}
          />
         
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
