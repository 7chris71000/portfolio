import React, { useState } from "react";

// Components
import TerminalHeader from "./terminal_header";
import TerminalBody from "./terminal_body";

function Terminal() {
  const [sizeStatus, setSizeStatus] = useState("regular");
  const [commandHistory, setCommandHistory] = useState([
    {
      inputString: "ls1",
      results: [
        {
          string: "about",
          resultOnClick: () => {
            handleCommandSubmit("about");
          },
        },
        {
          string: "socials",
          resultOnClick: () => {
            handleCommandSubmit("socials");
          },
        },
      ],
    },
    {
      inputString: "ls2",
      results: [
        {
          string: "about",
          resultOnClick: () => {
            handleCommandSubmit("about");
          },
        },
        {
          string: "socials",
          resultOnClick: () => {
            handleCommandSubmit("socials");
          },
        },
      ],
    },
  ]);

  function handleSizeChange(e, status) {
    e.preventDefault();
    setSizeStatus(status);
  }

  function handleCommandSubmit(inputString) {
    setCommandHistory((commandHistory) => [
      ...commandHistory,
      {
        inputString,
        results: commandResult(inputString),
      },
    ]);
  }

  function commandResult(inputCommand) {
    // TODO: if the user can click on the result, then return a function, otherwise return null

    const result = [
      {
        string: "test",
        resultOnClick: () => {
          handleCommandSubmit("test");
        },
      },
    ];
    return result;
  }

  return (
    <div id="component-terminal" className={`${sizeStatus}`}>
      <TerminalHeader
        sizeStatus={sizeStatus}
        onSizeChangeClick={handleSizeChange}
      />

      <TerminalBody
        commandHistory={commandHistory}
        onCommandSubmit={handleCommandSubmit}
      />
    </div>
  );
}

export default Terminal;
