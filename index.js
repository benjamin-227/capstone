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
        .post(`http://localhost:4040/hedgehogs`, hedgehogData)
        .then(res => {
          store.Animals.hedgehogs.push(res.data);
          router.navigate("/Animals");
        })
        .catch(error => {
          console.log("Something went wrong", error);
        });
    });
  }

  const themeButton = document.querySelector(".theme-btn");
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
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
          .get(`http://localhost:4040/hedgehogs`)
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
