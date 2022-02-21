import React from "react";
import ReactDOM from "react-dom";
import Terminal from "../src/components/terminal/terminal";

function Home() {
  return (
    <div id="component-home">
      <div className="terminal-container">
        <Terminal />
      </div>
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices
      nulla quis sapien hendrerit tincidunt. Pellentesque non hendrerit ipsum.
      Integer quis arcu nunc. In commodo lacus ac justo rhoncus scelerisque.
      Suspendisse feugiat maximus egestas. Nulla facilisi. Suspendisse maximus
      tortor ut diam malesuada pharetra. Suspendisse accumsan quam eu elit
      bibendum, eget posuere nisi faucibus. Vestibulum ut lorem sed nulla
      volutpat condimentum vitae sit amet nunc. Morbi tincidunt libero a elit
      fermentum condimentum. Donec hendrerit sapien lorem, at facilisis mi
      rutrum malesuada.
      <br />
      <br />
      Sed egestas purus sed aliquam tempus. Vestibulum convallis dignissim
      posuere. Integer tortor turpis, pretium sed hendrerit eu, molestie ac
      tellus. Sed ut augue at nibh sagittis hendrerit. Proin volutpat dolor
      tellus, non blandit mi rhoncus quis. Duis augue ligula, accumsan non
      gravida in, tincidunt ut mi. Vivamus volutpat turpis in quam sodales
      accumsan. Nulla id convallis lorem. Sed volutpat fringilla lacus, vitae
      pharetra sem venenatis quis. Nam vel porta sem. Praesent id nisi blandit,
      sagittis dolor et, varius ligula. Integer sapien orci, accumsan quis
      faucibus sit amet, tristique ac felis. Quisque cursus hendrerit ligula in
      varius.
      <br />
      <br />
      Praesent feugiat hendrerit sem. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Integer convallis porttitor leo, ac semper est
      convallis nec. Ut molestie rhoncus dui non blandit. Aenean quis enim
      ornare mauris ultrices vehicula ut et odio.
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
