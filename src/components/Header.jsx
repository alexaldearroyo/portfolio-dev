import React from 'react';
import "../pages/styles.css";

const headerStyles = {
  container: {
    marginTop: '1rem',
    textAlign: 'center',
  },
};

const Header = () => {


  return (
    <header style={headerStyles.container}>
      <h1 className="title">
        ALEX ARROYO
      </h1>
      <div className="custom-border"></div>
    </header>
  );
};

export default Header;
