import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useLocationClick from "../../hooks/use_location_click";
import useKeypressListener from "../../hooks/use_keypress_listener";
import TerminalLoadingText from "./terminal_loading_text";
import TerminalHelperText from "./terminal_helper_text";

// command history is an array of objects: { inputString: "ls", results: [{string: 'about', resultOnClick: func}] }

function TerminalBody({ commandHistory, onCommandSubmit }) {
  const [inputString, setInputString] = useState("help");
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [terminalFocused, setTerminalFocused] = useState(true);
  const [signingIn, setSigningIn] = useState(true);
  const [inHistory, setInHistory] = useState(false);

  const { ref: terminalBodyRef } = useLocationClick(
    handleInsideRefClick,
    handleOutsideRefClick
  );

  function handleInsideRefClick() {
    setTerminalFocused(true);
    currentInputRef.current.focus();
  }

  function handleOutsideRefClick() {
    setTerminalFocused(false);
  }

  function handleKeypress({ key, keyCode }) {
    // This is listening for the arrow keys values
    // TODO: change position of cursor with < and >

    if (keyCode === 13 || key === "Enter") {
      setInHistory(false);
      onCommandSubmit(inputString);
      setInputString("");
    } else if (keyCode === 38 || key === "ArrowUp") {
      setInHistory(true);
      // up arrow
      if (currentCommandIndex > 0) {
        setInputString(commandHistory[currentCommandIndex - 1].inputString);
        setCurrentCommandIndex(currentCommandIndex - 1);
      }
    } else if (keyCode === 40 || key === "ArrowDown") {
      setInHistory(true);
      // down arrow
      if (currentCommandIndex < commandHistory.length - 1) {
        setInputString(commandHistory[currentCommandIndex + 1].inputString);
        setCurrentCommandIndex(currentCommandIndex + 1);
      } else {
        setInputString("");
        setCurrentCommandIndex(commandHistory.length);
      }
    } else {
      if (inHistory) {
        setCurrentCommandIndex(commandHistory.length);
        setInputString("");
      }
      setInHistory(false);
    }
  }

  useKeypressListener(handleKeypress);

  const currentInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSigningIn(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setCurrentCommandIndex(commandHistory.length);
  }, [commandHistory]);

  return (
    <div id="component-terminal-body" ref={terminalBodyRef}>
      <div className="terminal-background-gradient" />

      {signingIn ? (
        <TerminalLoadingText text="Signing in, please wait" />
      ) : (
        <div>
          <TerminalHelperText />
          {commandHistory &&
            commandHistory.map((command, index) => {
              const { inputString, results, text: resultText } = command;
              return (
                <div key={`command-${index}`} className="command-container">
                  <div className="command-location-container">
                    <span className="command-location">portfolio</span>{" "}
                    <span className="command-git">git:main*</span>
                  </div>
                  <div className="command-input">
                    <span className="command-starter-carat">{">>>"}</span>{" "}
                    {inputString}
                  </div>
                  <div className="command-result-text">{resultText}</div>
                  {resultText && results && (
                    <div className="command-result-divider"></div>
                  )}
                  <div className="command-results">
                    {results &&
                      results.map((result, index) => {
                        if (result.resultOnClick) {
                          return (
                            <a
                              key={`result-${index}`}
                              className="command-result link"
                              onClick={result.resultOnClick}
                            >
                              {result.string}
                            </a>
                          );
                        } else {
                          return (
                            <div
                              key={`result-${index}`}
                              className="command-result text"
                            >
                              {result.string}
                            </div>
                          );
                        }
                      })}
                  </div>
                </div>
              );
            })}
          <div className="text-input-container">
            <div className="command-location-container">
              <span className="command-location">portfolio</span>{" "}
              <span className="command-git">git:main*</span>
            </div>
            <span className="command-starter-carat">{">>>"}</span> {inputString}
            <input
              ref={currentInputRef}
              type="text"
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
              className="hidden-input"
            />
            <span className={`${terminalFocused ? "blinking-cursor" : ""}`}>
              _
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TerminalBody;
