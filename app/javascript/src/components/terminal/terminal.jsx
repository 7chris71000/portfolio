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
    executeCommand(inputString);
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

  /**
   * @param {string} inputCommand - the command that the user entered
   * @returns {string} - the text to be displayed in the terminal. Formatted as a string or html element
   */
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
        textResult = (
          <div>
            <p>
              This command is used to help the user learn about valid commands
              in CF Terminal.
            </p>
            <p>Usage: [command] -h</p>
            <p>
              Available Commands:
              <br />
              Note: Click a command to view it's help text
            </p>
          </div>
        );
        break;

      case "ls":
        textResult = "";
        break;

      case "about-terminal":
        //TODO
        break;

      case "about-me":
        textResult = (
          <div>
            <p>Hi, I'm Chris Francis 👋.</p>
            <p>
              I am a software developer located in Ottawa, Canada. I'm currently
              coding in React and Ruby on Rails. My professional interests lie
              in web application development and software project management. 💻
            </p>

            {/* Outside of tech I love to lift, am an avid reader, and a huge Ravens fan. 🏋️📚🏈 */}
            <p>
              If you would like to hear more about me or you think I would be
              interested in a project of yours, let's setup a coffee chat! ☕
            </p>
          </div>
        );
        break;

      case "projects":
        textResult = "Here are more projects I have done:";
        break;

      case "socials":
        textResult = "Find me at:";
        break;

      case "terminal-repository":
      case "resume":
        textResult = "Resume opened in new tab.";
        break;

      case "tech-stack":
        textResult = (
          <div>
            <p>
              Professional (Current)
              <ul>
                <li>Ruby on Rails</li>
                <li>React</li>
                <li>Ruby (Gem Development)</li>
                <li>RSpec</li>
                <li>React Native</li>
                <li>SCSS</li>
                <li>PostgreSQL</li>
                <li>Python (Windows Services)</li>
                <li>Heroku</li>
                <li>Git</li>
              </ul>
            </p>
            <p>
              Professional (Past)
              <ul>
                <li>Grails</li>
                <li>Struts 2</li>
              </ul>
            </p>
            <p>
              Personal Projects
              <ul>
                <li>Python (Raspberry Pi Robotics)</li>
              </ul>
            </p>
          </div>
        );

        break;

      default:
        return "";
    }

    return textResult;
  }

  function executeCommand(inputString) {
    switch (inputString) {
      case "resume":
        window.open(`/${inputString}`, "_blank").focus();
        break;
      default:
        break;
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
