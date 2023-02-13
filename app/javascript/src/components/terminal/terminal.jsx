import React, { useState, useEffect } from "react";

// Components
import TerminalHeader from "./terminal_header";
import TerminalBody from "./terminal_body";

// Utilities
import {
  commandHelpText,
  linkableCommands,
} from "../../../utils/command_text_helper";
import { getCookie } from "../../../utils/cookie_helper";
import useMobileDetector from "../../hooks/use_mobile_detector";

// TODO: allow all commands with results to be passed in as props. Change from imports
function Terminal() {
  const [sizeStatus, setSizeStatus] = useState("regular");
  const [commandHistory, setCommandHistory] = useState([]);
  const { isMobile } = useMobileDetector();

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

  function warnUserOfMobile() {
    const mobileConfirm = getCookie("mobileConfirm") === "true";

    if (!mobileConfirm) {
      alert(
        "Note: This terminal is not optimized for mobile. It will function as expected but the best experience is had on a desktop browser."
      );
      document.cookie = "mobileConfirm=true; SameSite=None; Secure";
    }
  }

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
        result = [
          {
            string: "terminal-repository",
            resultOnClick: () => {
              handleCommandSubmit("terminal-repository");
            },
          },
        ];
        break;

      case "about-me":
        result = [
          {
            string: "Contact",
            resultOnClick: () => {
              window
                .open(
                  "https://www.linkedin.com/in/christopher-francis-40227b127/",
                  "_blank"
                )
                .focus();
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
        textResult = (
          <div>
            <p>
              This is a personal project inspired by many other terminal based
              portfolios.
            </p>

            <p>
              This project was created from the ground up in React with custom
              components, styling, and text. It is not a fully functional
              terminal. Just a creative way to display my work and is hopefully
              fun for the user to play with.
            </p>

            <p>
              The styling is based off the theme I use in my terminal. Oh My Zsh
              theme, "refined".
            </p>
          </div>
        );
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
        textResult =
          "Interested in how I did this? Here is the repository for my portfolio:";
        break;

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
                <li>Ruby (Gem Development)</li>
                <li>RSpec</li>
                <li>React</li>
                <li>React Native</li>
                <li>Express.js</li>
                <li>SCSS</li>
                <li>PostgreSQL</li>
                <li>Python (Windows Services)</li>
                <li>Cadence (Flow Blockchain Smart Contracts)</li>
                <li>Heroku</li>
                <li>CircleCI</li>
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
                <li>Fly.io</li>
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

  useEffect(() => {
    if (isMobile) {
      warnUserOfMobile();
    }
  }, [isMobile]);

  return (
    <div id="component-terminal" className={`${sizeStatus}`}>
      <TerminalHeader
        sizeStatus={sizeStatus}
        onSizeChangeClick={handleSizeChange}
      />
      <TerminalBody
        commandHistory={commandHistory}
        onCommandSubmit={handleCommandSubmit}
        validCommandsList={validCommands}
      />
    </div>
  );
}

export default Terminal;
