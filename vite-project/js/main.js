import "../styles/style.css";
/* import javascriptLogo from "/javascript.svg"; */
import { setupCounter } from "../counter.js";
import AOS from "aos";
import "./Crates";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { data } from "./Crates";
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
  seasonal: document.querySelector("#seasonal"),
  active: document.querySelector("#active"),
  retired: document.querySelector("#retired"),
  all: document.querySelector("#all"),
  display: document.getElementById("display "),
  card: document.querySelector("#cratecards"),
};

/* data.forEach((element) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<h2 class="cratetitle">${element.name}</h2> <img src="${element.url}" alt="">  <h4> Collection: ${element.collection}</h4> <h5>${element.dropped}</h5> <h5> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>`
  )
); */

/* const crates = {
  //  allcrates: null,
  seasonalcrates: function () {
    data
      .filter((seasonal) => seasonal.kind === "Seasonal")
      .forEach((seasonalcrate) => {
        console.log(seasonalcrate.name);
      });
  },
}; */

const crates = {
  allcrates: function () {
    DOMSelectors.card.innerHTML = "";
    data.forEach((element) =>
      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `
        <div class = "cratecard"><h2 class="cratetitle">${element.name}</h2> <img class="crateimage" src="${element.url}" alt="">  <h4 class = "cratecollection"> Collection: ${element.collection}</h4> <h5 class="cratedropped">${element.dropped}</h5> <h5 class = "crateseries"> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>
        </div>
        `
      )
    );
  },
  seasonalcrates: function () {
    let season = data.filter((element) => element.kind.includes(`Seasonal`));
    DOMSelectors.card.innerHTML = "";
    season.forEach((element) => {
      console.log(element.name);
      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `

        <div class = "cratecard"><h2 class="cratetitle">${element.name}</h2> <img class="crateimage" src="${element.url}" alt="">  <h4 class = "cratecollection"> Collection: ${element.collection}</h4> <h5 class="cratedropped">${element.dropped}</h5> <h5 class = "crateseries"> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>
        </div>
        `
      );
    });
  },
  yearroundcrates: function () {
    let yearround = data.filter((element) =>
      element.kind.includes(`Year-round`)
    );
    DOMSelectors.card.innerHTML = "";
    yearround.forEach((element) => {
      console.log(element.name);

      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `

        <div class = "cratecard"><h2 class="cratetitle">${element.name}</h2> <img class="crateimage" src="${element.url}" alt="">  <h4 class = "cratecollection"> Collection: ${element.collection}</h4> <h5 class="cratedropped">${element.dropped}</h5> <h5 class = "crateseries"> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>
        </div>
        `
      );
    });
  },
  activecrates: function () {
    let active = data.filter((element) => element.status.includes(`Active`));
    DOMSelectors.card.innerHTML = "";
    active.forEach((element) => {
      console.log(element.name);

      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `

        <div class = "cratecard"><h2 class="cratetitle">${element.name}</h2> <img class="crateimage" src="${element.url}" alt="">  <h4 class = "cratecollection"> Collection: ${element.collection}</h4> <h5 class="cratedropped">${element.dropped}</h5> <h5 class = "crateseries"> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>
        </div>
        `
      );
    });
  },
  retiredcrates: function () {
    let retired = data.filter((element) => element.status.includes(`Retired`));
    DOMSelectors.card.innerHTML = "";
    retired.forEach((element) => {
      console.log(element.name);
      DOMSelectors.card.insertAdjacentHTML(
        "beforeend",
        `
        <div class = "cratecard"><h2 class="cratetitle">${element.name}</h2> <img class="crateimage" src="${element.url}" alt="">  <h4 class = "cratecollection"> Collection: ${element.collection}</h4> <h5 class="cratedropped">${element.dropped}</h5> <h5 class = "crateseries"> Crate series: ${element.series}</h5> <p class="cratedesc">${element.description}</p>
        </div>
        `
      );
    });
  },
};

DOMSelectors.seasonal.addEventListener("click", function () {
  crates.seasonalcrates();
});

DOMSelectors.yearround.addEventListener("click", function () {
  crates.yearroundcrates();
});

DOMSelectors.active.addEventListener("click", function () {
  crates.activecrates();
});

DOMSelectors.retired.addEventListener("click", function () {
  crates.retiredcrates();
});

DOMSelectors.all.addEventListener("click", function () {
  crates.allcrates();
});
crates.allcrates();

document.querySelector("#redblu").addEventListener("click", function () {
  if (document.body.classList.contains("BLU")) {
    document.body.classList.add("RED");
    document.body.classList.remove("BLU");
    document.getElementById("redblu").innerHTML = `BLU`;
  } else {
    document.body.classList.add("BLU");
    document.body.classList.remove("RED");
    document.getElementById("redblu").innerHTML = `RED`;
  }
});
