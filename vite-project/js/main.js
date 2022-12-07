import "../styles/style.css";
/* import javascriptLogo from "/javascript.svg"; */
import { setupCounter } from "../counter.js";
import AOS from "aos";
import "./Crates";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

/* document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`; */

/* setupCounter(document.querySelector("#counter")); */

const DOMSelectors = {
  yearround: document.querySelector("#year-round"),
  seasonal: documents.querySelector("#seasonal"),
  active: documents.querySelector("#active"),
  retired: documents.querySelector("#retired"),
  all: documents.querySelector("#all"),
  display: documents.querySelector("display"),
};

data.forEach((data) =>
  div.insertAdjacentHTML("afterend", `<p>${data.name}</p>`)
);

/* DOMSelectors.DOMSelectors.display.insertAdjacentHTML(
  "afterend",
  `
<div id="crate">
<h2 classs="cratename">${data.name}</h2>
<p class="cratestats">${data.stats.collection}
${data.stats.dropped}
${data.stats.series}</p>
</div>
`
);
 */
