import html from "html-literal";

export default state => html`
  <main>
    <div class="card">
      <table class="animal-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Quill Color</th>
            <th>Eye Color</th>
            <th>Sire</th>
            <th>Dam</th>
            <th>Date of Birth</th>
            <th>Date of Death</th>
            <th>Breeder</th>
            <th>Owner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${state.hedgehogs
            .map(
              hedgehog =>
                `
            <tr key="${hedgehog._id}">
              <td>${hedgehog.name}</td>
              <td>${hedgehog.sex}</td>
              <td>${hedgehog.color}</td>
              <td>${hedgehog.eyeColor}</td>
              <td>${hedgehog.sire}</td>
              <td>${hedgehog.dam}</td>
              <td>${hedgehog.dob}</td>
              <td>${hedgehog.dod}</td>
              <td>${hedgehog.breeder}</td>
              <td>${hedgehog.owner}</td>
              <td><span class="material-icons-sharp">delete_forever</span></td>
            </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    <div>
  </main>
`;
