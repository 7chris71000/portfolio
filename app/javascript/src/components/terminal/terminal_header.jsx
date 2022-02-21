import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function TerminalHeader({ sizeStatus, onSizeChangeClick }) {
  return (
    <div id="component-terminal-header">
      <div className="terminal-header-left">
        <a
          className="header-link"
          href="https://www.github.com/7chris71000/portfolio"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
      </div>
      <div className="terminal-header-right">
        <div
          className="terminal-header-minimize"
          onClick={(e) => {
            onSizeChangeClick(e, "minimized");
          }}
        >
          <FontAwesomeIcon icon={faWindowMinimize} />
        </div>
        {sizeStatus === "maximized" || sizeStatus === "minimized" ? (
          <div
            className="terminal-header-restore"
            onClick={(e) => {
              onSizeChangeClick(e, "regular");
            }}
          >
            <FontAwesomeIcon icon={faWindowRestore} />
          </div>
        ) : (
          <div
            className="terminal-header-maximize"
            onClick={(e) => {
              onSizeChangeClick(e, "maximized");
            }}
          >
            <FontAwesomeIcon icon={faWindowMaximize} />
          </div>
        )}

        <div
          className="terminal-header-close"
          onClick={(e) => {
            onSizeChangeClick(e, "closed");
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
    </div>
  );
}

export default TerminalHeader;

TerminalHeader.propTypes = {
  sizeStatus: PropTypes.string.isRequired,
  onSizeChangeClick: PropTypes.func.isRequired,
};
