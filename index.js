import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Dashboard) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();

  if (state.view === "Form") {
    const formElement = document.getElementById("animal-form");
    if (formElement) {
      formElement.onsubmit = store.Form.handleFormSubmit.bind(store.Form);
      const clearButton = document.querySelector(".clear-form");
      if (clearButton) {
        clearButton.onclick = store.Form.resetForm.bind(store.Form);
      }
    }
  }

  const themeButton = document.querySelector(".theme-btn");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
  });
}

// router.hooks({
//   before: (done, params) => {
//     const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Dashboard";
//     switch(view) {
//       case "Form":

//     }

//   },
//   already: (params) => {
//     const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Dashboard";
//     render(store[view]);
//   }
// })

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
