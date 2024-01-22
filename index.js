import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

let HEDGEHOG_API_URL;

if (process.env.HEDGEHOG_API_URL) {
  HEDGEHOG_API_URL = process.env.HEDGEHOG_API_URL || "http:localhost:4040";
} else {
  console.error("Missing .env file with HEDGEHOG_API_URL");
}
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
    document.getElementById("animal-form").addEventListener("submit", event => {
      event.preventDefault();
      const inputs = event.target.elements;
      const hedgehogData = {
        name: inputs.name.value.toLowerCase(),
        sex: inputs.sex.value.toLowerCase(),
        color: inputs.color.value.toLowerCase(),
        eyeColor: inputs.eyeColor.value.toLowerCase(),
        sire: inputs.sire.value.toLowerCase(),
        dam: inputs.dam.value.toLowerCase(),
        dob: inputs.dob.value.toLowerCase(),
        dod: inputs.dod.value || null,
        breeder: inputs.breeder.value.toLowerCase(),
        owner: inputs.owner.value.toLowerCase() || null
      };
      console.log(hedgehogData);
      axios
        .post(`${HEDGEHOG_API_URL}/hedgehogs`, hedgehogData)
        .then(res => {
          store.Animals.hedgehogs.push(res.data);
          router.navigate("/Animals");
        })
        .catch(error => {
          console.log("Something went wrong", error);
        });
    });
  }

  if (state.view === "Pairings") {
    const randomNameButton = document.getElementById("randomName");
    randomNameButton.removeEventListener("click", handleRandomNameClick);

    // eslint-disable-next-line no-inner-declarations
    function handleRandomNameClick() {
      axios
        .get(`${HEDGEHOG_API_URL}/api/random`)
        .then(res => {
          store.Pairings.randomName = "";
          store.Pairings.randomName = res.data[0];
          console.log(res.data[0]);
          render(store.Pairings);
        })
        .catch(error => {
          console.error("Error fetching random name:", error);
        });
    }
    randomNameButton.addEventListener("click", handleRandomNameClick);
  }

  const themeButton = document.querySelector(".theme-btn");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
  });

  document.querySelectorAll("nav li").forEach(li => {
    const link = li.querySelector("a");
    if (link && link.getAttribute("href") === `/${state.view}`) {
      li.classList.add("active-link");
    } else {
      li.classList.remove("active-link");
    }
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Dashboard";
    switch (view) {
      case "Animals":
        axios
          .get(`${HEDGEHOG_API_URL}/hedgehogs`)
          .then(res => {
            console.log("response", res);
            store.Animals.hedgehogs = res.data;
            done();
          })
          .catch(error => {
            console.log("We had an error", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Dashboard";
    render(store[view]);
  }
});

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
