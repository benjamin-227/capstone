import html from "html-literal";
import myLogo from "../assets/magpie.logo.jpg";

export default () => html`
  <header>
    <div class="box">
      <div class="logo">
        <img src="${myLogo}" alt="Imperium Logo" />
        <p>imperium</p>
      </div>

      <div class="search">
        <span class="material-icons-sharp">search</span>
        <input type="search" placeholder="Search animals..." />
      </div>

      <div class="account-area">
        <div>
          <p>Type of animal:</p>
        </div>
        <div class="theme-btn">
          <span class="material-icons-sharp active">light_mode</span>
          <span class="material-icons-sharp">dark_mode</span>
        </div>
      </div>
    </div>
  </header>
`;
