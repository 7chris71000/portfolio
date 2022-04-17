import React from "react";
import PropTypes from "prop-types";

function TerminalLoadingText({ text }) {
  return (
    <div id="component-terminal-loading-text">
      <p className="loading">{text}</p>
    </div>
  );
}

export default TerminalLoadingText;

TerminalLoadingText.propTypes = {
  text: PropTypes.string.isRequired,
};
