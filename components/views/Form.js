import html from "html-literal";

export default () => html`
  <main>
    <div class="container">
      <div class="animal-form">
        <h1>Add New Animal</h1>
        <form method="POST" id="animal-form">
          <div class="row">
            <div class="more">
              <label for="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Name" />
            </div>
            <div class="less">
              <label for="sex">Sex</label>
              <select id="sex" name="sex">
                <option value="" hidden>Select sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="color">Color</label>
              <input
                type="text"
                list="colors"
                name="color"
                id="color"
                placeholder="Select color"
              />
              <datalist id="colors">
                <option value="Black"></option>
                <option value="Grey"></option>
                <option value="Brown"></option>
                <option value="Caramel"></option>
                <option value="Albino"></option>
                <option value="Apricot"></option>
                <option value="Cinnacot"></option>
                <option value="Cinnamon"></option>
                <option value="Platinum"></option>
                <option value="Leusistic"></option>
                <option value="Piebald"></option>
              </datalist>
            </div>
            <div class="input-box">
              <label>Eye Color</label>
              <input
                type="text"
                list="eye-colors"
                name="eye-color"
                placeholder="Select eye color"
              />
              <datalist id="eye-colors">
                <option value="Black"></option>
                <option value="Odd Eyed (Black & Red)"></option>
                <option value="Odd Eyed (Red & Ruby)"></option>
                <option value="Red"></option>
                <option value="Ruby"></option>
              </datalist>
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label>Sire</label>
              <input type="text" name="sire" placeholder="Enter sire name" />
            </div>
            <div class="input-box">
              <label>Dam</label>
              <input type="text" name="dam" placeholder="Enter dam name" />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label>Date of Birth</label>
              <input type="date" name="dob" />
            </div>
            <div class="input-box">
              <label>Date of Death</label>
              <input type="date" name="dod" />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label>Breeder</label>
              <input
                type="text"
                name="breeder"
                placeholder="Enter name of breeder"
              />
            </div>
            <div class="input-box">
              <label>Owner</label>
              <input
                type="text"
                name="owner"
                placeholder="Enter name of current owner"
              />
            </div>
          </div>
          <div class="submit-button">
            <button class="clear-form">clear</button>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  </main>
`;
