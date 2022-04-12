import React, { useState } from "react";

// Components
import TerminalHeader from "./terminal_header";
import TerminalBody from "./terminal_body";

// Utilities
import {
  commandHelpText,
  helpText,
  linkableCommands,
} from "../../../utils/command_text_helper";

// TODO: allow all commands with results to be passed in as props. Change from imports
function Terminal() {
  const [sizeStatus, setSizeStatus] = useState("regular");
  const [commandHistory, setCommandHistory] = useState([]);
  // valid commands structure { inputString: "", results: [{ string: "", resultOnClick: () => {} }], text: "" }
  const validCommands = [
    "ls",
    "help",
    "clear",
    "cd",
    "cat", // TODO: potentially take this out
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
        text: textResults(inputString),
        results: commandResults(inputString),
      },
    ]);
  }

  function commandResults(inputCommand) {
    // TODO: if the user can click on the result, then return a function, otherwise return null
    const inputCommandList = inputCommand.split(" ");
    // go through the validCommands array and see if the inputCommand matches any of the commands
    let result = [];

    // return help text and skip actual use of command
    if (inputCommandList.includes("-h")) {
      result = [
        {
          string: inputCommandList[0],
          resultOnClick: () => {
            handleCommandSubmit(inputCommandList[0]);
          },
        },
      ];
      return result;
    }

    switch (inputCommandList[0]) {
      case "ls":
        //TODO
        result = validCommands.map((command) => ({
          string: command,
          resultOnClick: () => {
            handleCommandSubmit(command);
          },
        }));
        break;

      case "help":
        result = validCommands.map((command) => ({
          string: command,
          resultOnClick: () => {
            handleCommandSubmit(`${command} -h`);
          },
        }));
        break;

      case "clear":
        setCommandHistory([]);
        break;

      case "cd":
        //TODO
        break;
      case "cat":
        //TODO
        break;
      case "mkdir":
        //TODO
        break;
      case "pwd":
        //TODO
        break;
      case "exit":
        setSizeStatus("closed");
        break;

      case "about-terminal":
        //TODO
        break;
      case "about-me":
        //TODO
        result = [
          {
            string: "Contact",
            resultOnClick: () => {
              // TODO: scroll to contact form on click
              window.scrollTo(0, 0);
            },
          },
        ];
        break;

      case "projects":
      case "socials":
      case "terminal-repository":
      case "resume":
        // using fallthough for above commands
        result = linkableCommands[inputCommandList[0]].map((project) => ({
          string: project.name,
          resultOnClick: () => {
            window.open(project.link, "_blank").focus();
          },
        }));
        break;

      default:
        "";
    }

    // if it does, return the results array

    return result;
  }

  function textResults(inputCommand) {
    let textResult = "";

    const inputCommandList = inputCommand.split(" ");
    // return help text and skip actual use of command
    if (inputCommandList.includes("-h")) {
      const textResult = `${commandHelpText[inputCommandList[0]]}`;

      return textResult;
    }

    switch (inputCommandList[0]) {
      case "help":
        textResult =
          "This command is used to help the user learn about valid commands in CF Terminal.\n" +
          "\n" +
          "Usage: [command] -h\n" +
          "\n" +
          "Available Commands:\n" +
          "\tNote: Click a command to view it's help text\n";
        break;

      case "ls":
        textResult = "";
        break;

      case "cd":
        //TODO
        break;
      case "cat":
        //TODO
        break;
      case "mkdir":
        //TODO
        break;

      case "pwd":
        //TODO
        break;

      case "about-terminal":
        //TODO
        break;

      case "about-me":
        //TODO
        textResult =
          "\n" +
          "Hi, I'm Chris Francis 👋." +
          "\n" +
          "\n" +
          "I am a software developer located in Ottawa, Canada. I'm currently coding in React and Ruby on Rails. " +
          "My professional interests lie in web application development and software project management. 💻" +
          "\n" +
          "\n" +
          // "Outside of tech I love to lift, am an avid reader, and a huge Ravens fan. 🏋️📚🏈" +
          // "\n" +
          // "\n" +
          "If you would like to hear more about me or you think I would be interested in a project of yours, let's setup a coffee chat! ☕";
        break;

      case "projects":
      case "socials":
      case "terminal-repository":
      case "resume":
        //TODO
        break;

      case "tech-stack":
        textResult =
          "\n" +
          "Professional (Current): \n  " +
          "Ruby on Rails \n  " +
          "React \n  " +
          "Ruby (Gem Development) \n  " +
          "RSpec \n  " +
          "React Native \n  " +
          "SCSS \n  " +
          "PostgreSQL \n  " +
          "Python (Windows Services) \n  " +
          "Heroku \n  " +
          "Git \n  " +
          "\n" +
          "Professional (Past): \n  " +
          "Grails \n  " +
          "Struts 2 \n  " +
          "\n" +
          "Personal Projects: \n  " +
          "Python (Raspberry Pi Robotics) \n  ";
        break;

      default:
        return "";
    }

    return textResult;
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
