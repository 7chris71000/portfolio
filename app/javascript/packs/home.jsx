import React, { useState } from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div id="component-home">
      <br />
      <br />
      <br />
      home
      <br />
      <br />
      <br />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const mountPoint = document.getElementById("home-mount-point");
  if (mountPoint) {
    ReactDOM.render(<Home />, mountPoint);
  }
});
