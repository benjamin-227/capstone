import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

router.on("/", () => render(store.Dashboard)).resolve();
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
function render(state = store.Dashboard) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();

  const themeButton = document.querySelector(".theme-btn");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
  });
}
