import React, { useState, useEffect } from "react";

function TerminalHelperText() {
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString()
  );

  useEffect(() => {
    setTimeout(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
  }, [currentDateTime]);

  return (
    <div id="component-terminal-helper-text">
      <div>Welcome to CF Terminal! (v1.0.0)</div>
      <div>{currentDateTime}</div>
    </div>
  );
}

export default TerminalHelperText;
