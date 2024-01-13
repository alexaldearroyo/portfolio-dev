import React from 'react';
import "../pages/styles.css";

const headerStyles = {
  container: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 400,
    fontFamily: 'Jost, sans-serif',
    color: '#2c3e50',
    cursor: 'default',
    transition: 'color 0.3s',
  },
  titleHover: {
    backgroundImage: 'linear-gradient(90deg, #f4d444, #f86ca7, #8dd0fc)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    cursor: 'default',
  },
};

const Header = () => {
  const handleTitleHover = (e) => {
    e.target.style.color = 'transparent';
  };

  const handleTitleLeave = (e) => {
    e.target.style.color = headerStyles.title.color;
  };

  return (
    <header style={headerStyles.container}>
      <h1
        className="title"
        style={headerStyles.title}
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleTitleLeave}
      >
        ALEX ARROYO
      </h1>
      <div className="custom-border"></div>
    </header>
  );
};

export default Header;
