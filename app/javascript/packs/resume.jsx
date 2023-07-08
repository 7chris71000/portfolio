import React from "react";
import ReactDOM from "react-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import useWindowDimensions from "../src/hooks/use_window_dimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  const { height, width } = useWindowDimensions();

  return (
    <div id="component-resume">
      <div className="document-container">
        <div className="resume-download-container">
          <h1>
            Cover Letter
          </h1>
          <a
            className="btn btn-primary download-button"
            href="documents/Christopher_Francis_Cover_Letter.pdf"
            >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
        <div className="resume-container">
          <Document
            file="documents/Christopher_Francis_Cover_Letter.pdf"
            onLoadError={(error) => {
              console.log(error.message);
            }}
            >
            <Page pageNumber={1} width={width < 900 ? width : 900} />
          </Document>
        </div>
      </div>

      <div className="document-container">
      <div className="resume-download-container">
          <h1>
            Resume
          </h1>
          <a
            className="btn btn-primary download-button"
            href="documents/Christopher_Francis_Cover_Letter.pdf"
            >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
        <div className="resume-container">
          <Document
            file="documents/Christopher_Francis_Resume.pdf"
            onLoadError={(error) => {
              console.log(error.message);
            }}
            >
            <Page pageNumber={1} width={width < 900 ? width : 900} />
          </Document>
        </div>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const mountPoint = document.getElementById("resume-mount-point");
  if (mountPoint) {
    ReactDOM.render(<Resume />, mountPoint);
  }
});
