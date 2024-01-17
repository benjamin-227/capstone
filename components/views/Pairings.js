import html from "html-literal";

export default state => html`
  <main class="pairings-page">
    <div class="card-mini">
      <h1>Potential Pairings</h1>
      <div class="center-card">
        <p>no pairings available</p>
      </div>
    </div>
    <div class="card-mini">
      <h1>Name Generator</h1>
      <div class="center-card">
        <button id="randomName" class="get-name">get name</button>
        <div class="name-container">
          <p>${state.randomName}</p>
        </div>
      </div>
    </div>
  </main>
`;
