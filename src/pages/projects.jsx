import React, { useState } from "react";
import Townwall from "../components/Townwall";
import Priorities from "../components/Priorities";
import VisualGit from "../components/VisualGit";
import MarkdownViewer from "../components/MarkdownViewer";
import SystemDataInspector from "../components/SystemDataInspector";
import PrioritiesOnline from "../components/PrioritiesOnline";
import Battleship from "../components/Battleship";
import OnlineCVMaker from "../components/OnlineCVMaker";
import TripleTriad from "../components/TripleTriad";
import ArtPortfolio from "@/components/ArtPortfolio";
import DigitalAmuletVault from "@/components/DigitalAmuletVault";

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

          <Townwall
            expanded={expandedStates.Townwall}
            toggleExpandibleSection={toggleExpandibleSection}
          />

          <Priorities
            expanded={expandedStates.Priorities}
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

          <SystemDataInspector
            expanded={expandedStates.SystemDataInspector}
            toggleExpandibleSection={toggleExpandibleSection}
          />

          <PrioritiesOnline
            expanded={expandedStates.PrioritiesOnline}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <Battleship
            expanded={expandedStates.Battleship}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <OnlineCVMaker
            expanded={expandedStates.OnlineCVMaker}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <TripleTriad
            expanded={expandedStates.TripleTriad}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        <ArtPortfolio
            expanded={expandedStates.ArtPortfolio}
            toggleExpandibleSection={toggleExpandibleSection}
          />

          <DigitalAmuletVault
            expanded={expandedStates.DigitalAmuletVault}
            toggleExpandibleSection={toggleExpandibleSection}
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
