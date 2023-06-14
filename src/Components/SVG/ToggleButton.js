import React, { useState } from 'react';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div style={appStyle}>
      <button onClick={handleToggle}>
        {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  );
};

export default ToggleButton;
