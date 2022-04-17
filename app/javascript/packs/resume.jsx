import React from "react";
import ReactDOM from "react-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import useWindowDimensions from "../src/hooks/use_window_dimensions";

function Resume() {
  const { height, width } = useWindowDimensions();

  return (
    <div id="component-resume">
      <div className="resume-download-container">
        <a
          className="btn btn-primary"
          href="documents/Christopher_Francis_Resume.pdf"
        >
          Download
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
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const mountPoint = document.getElementById("resume-mount-point");
  if (mountPoint) {
    ReactDOM.render(<Resume />, mountPoint);
  }
});
