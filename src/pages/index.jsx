import React from "react";
import Head from "next/head";
import { Link } from 'react-router-dom';
import CenteredBox from "@/components/CenteredBox";
import SocialLinks from "@/components/SocialLinks";


const Terminal = () => {
  return (
      <div className="terminal">
          <p>Mediator between thoughts and machines.<span className="cursor">|</span></p>
      </div>
  );
};

const HomePage = () => {
  return (
      <div className="flex-wrapper">
        <Terminal />
        <CenteredBox />
        <SocialLinks />
      </div>
  );
};

export default HomePage;
