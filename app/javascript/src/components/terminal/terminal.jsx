import React, { useState } from "react";

// Components
import TerminalHeader from "./terminal_header";
import TerminalBody from "./terminal_body";

// Utilities
import { helpText } from "../../../utils/command_text_helper";

function Terminal() {
  const [sizeStatus, setSizeStatus] = useState("regular");
  const [commandHistory, setCommandHistory] = useState([]);
  // valid commands structure { inputString: "", results: [{ string: "", resultOnClick: () => {} }], text: "" }
  const validCommands = [
    "ls",
    "help",
    "clear",
    "cd",
    "cat",
    "mkdir",
    "pwd",
    "exit",
    "about-terminal",
    "about-me",
    "projects",
    "socials",
    "terminal-repository",
    "resume",
    "tech-stack",
  ];

  function handleSizeChange(e, status) {
    e.preventDefault();
    setSizeStatus(status);
  }

  function handleCommandSubmit(inputString) {
    setCommandHistory((commandHistory) => [
      ...commandHistory,
      {
        inputString,
        results: commandResults(inputString),
        text: textResults(inputString),
      },
    ]);
  }

  function commandResults(inputCommand) {
    // TODO: if the user can click on the result, then return a function, otherwise return null
    const inputCommandList = inputCommand.split(" ");
    // go through the validCommands array and see if the inputCommand matches any of the commands
    let result = [];

    switch (inputCommandList[0]) {
      case "help":
        result = validCommands.map((command) => ({
          string: command,
          resultOnClick: () => {
            handleCommandSubmit(`${command} -h`);
          },
        }));
      default:
        "";
    }

    // if it does, return the results array

    return result;
  }

  function textResults(inputCommand) {
    switch (inputCommand) {
      case "help":
        return helpText;
      default:
        return "";
    }
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
